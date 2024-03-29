figma.showUI(__html__, { themeColors: true });
figma.ui.resize(304, 390);

import faker from "faker";

// language init
const settings = { lang: null };

figma.clientStorage.getAsync("lang").then(item => {
  figma.ui.postMessage(item ? item : "en");
  settings.lang = item ? item : "en";
});

figma.ui.onmessage = (msg) => {
  figma.currentPage.setRelaunchData({ open: '' });

  // data from ui
  const { separator, content, range, randomType, type, lang } = msg;

  // laguage setup
  if(type === "langSwitch") {
    figma.clientStorage.setAsync("lang", lang);
    figma.clientStorage.getAsync("lang").then(item => {
      settings.lang = item;
    });
  }

  // on page selected
  const selected = figma.currentPage.selection;
  const selectedLength = selected.length;
  const selectedFirst: SceneNode = selected[0];
  const selectedFirstType = selectedFirst && selectedFirst.type;
  const selectedSecond: SceneNode = selected[1];
  const selectedSecondType = selectedSecond && selectedSecond.type;
  const selectedFirstParent =
    selectedFirst && findSelectedFirstParent(selectedFirst);
  const selectedFirstParentType = selectedFirst && selectedFirstParent.type;

  // check random data
  if (range > 0) {
    if (selectedLength === 1 && selectedFirstType === "FRAME") {
      packTextInSelectedFrame(
        createRandom(randomType, range, settings.lang),
        selectedFirst
      );
    } else if (selectedLength === 1 && selectedFirstType === "TEXT") {
      packInFrameObjects(
        createRandom(randomType, range, settings.lang),
        selectedFirst,
        selectedFirstParent
      );
    } else if (
      selectedLength === 2 &&
      selectedFirstType === "TEXT" &&
      selectedSecondType === "FRAME" && selectedSecond?.children?.length === 0
    ) {
      packInSelectedFrame(
        createRandom(randomType, range, settings.lang),
        selectedFirst,
        selectedFirstParent,
        selectedSecond
      );
    } else if (selectedLength === 0) {
      packInFrameText(createRandom(randomType, range, settings.lang));
    } else if (selectedLength >= 2 && isTypeText(selected)) {
      for (let i = 0; i < selectedLength; i++) {
        changeText(selected[i], createRandom(randomType, range, settings.lang)[i]);
      }
    } else {
      return;
    }
  }

  // check text data
  if (content) {
    const text = prepareText(separator, content);
    if (selectedLength === 0) {
      packInFrameText(text);
    } else if (selectedFirstParentType === "COMPONENT") {
    } else if (selectedLength === 1 && selectedFirstType === "FRAME") {
      packTextInSelectedFrame(text, selectedFirst);
    } else if (selectedLength === 1 && selectedFirstType === "TEXT") {
      packInFrameObjects(text, selectedFirst, selectedFirstParent);
    } else if (
      selectedLength === 2 &&
      selectedFirstType === "TEXT" &&
      selectedSecondType === "FRAME" && 
      selectedSecond?.children?.length === 0
    ) {
      packInSelectedFrame(
        text,
        selectedFirst,
        selectedFirstParent,
        selectedSecond
      );
    } else if (selectedLength >= 2 && isTypeText(selected)) {
      for (let i = 0; i < selectedLength; i++) {
        changeText(selected[i], text[i]);
      }
    } else {
      return;
    }
  }
};

async function changeText(textLayer, text) {
  if(text === undefined) return;
  await figma.loadFontAsync(textLayer.fontName);
  textLayer.characters = text;
}

function isTypeText(obj) {
  let flag = true;

  for (const item of obj) {
    if (item.type === "TEXT") {
      continue;
    } else {
      flag = false;
      return;
    }
  }
  return flag;
}

function findSelectedFirstParent(obj) {
  return obj.parent.type === "PAGE" ? obj : findSelectedFirstParent(obj.parent);
}

function prepareText(separator, arr) {
  return arr
    .split(new RegExp(separator))
    .map((item) => item.trim())
    .filter((item) => item.length != 0);
}

function createFrame() {
  const frame = figma.createFrame();
  frame.name = "👉 COFT";
  frame.layoutMode = "VERTICAL";
  frame.layoutAlign = "STRETCH";
  frame.counterAxisSizingMode = "AUTO";
  frame.counterAxisAlignItems = "MIN";
  frame.primaryAxisSizingMode = "AUTO";
  frame.primaryAxisAlignItems = "MIN";
  frame.paddingLeft = 24;
  frame.paddingRight = 24;
  frame.paddingTop = 24;
  frame.paddingBottom = 24;
  frame.cornerRadius = 8;
  frame.itemSpacing = 8;
  frame.expanded = false;
  frame.x = figma.viewport.center.x;
  frame.y = figma.viewport.center.y;

  return frame;
}

function packInFrameText(content: Array<string>) {
  const frame = createFrame();

  content.map(async (item) => {
    const text: TextNode = figma.createText();
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    text.characters = item;
    text.layoutAlign = "MIN";
    frame.appendChild(text);
  });

  figma.notify("Done", { timeout: 1000 });
}

function packInFrameObjects(
  content: Array<string>,
  selectedFirst,
  selectedFirstParent
) {
  const frame = createFrame();
  const originalText = selectedFirst.characters;

  content.map(async (item) => {
    await figma.loadFontAsync(selectedFirst.fontName);
    selectedFirst.characters = item;
    frame.appendChild(selectedFirstParent.clone());
  });

  setTimeout(() => (selectedFirst.characters = originalText));
  figma.notify("Done", { timeout: 1000 });
}

function packInSelectedFrame(
  content: Array<string>,
  selectedFirst,
  selectedFirstParent,
  selectedSecond
) {
  const frame = selectedSecond;

  if (frame.layoutMode === "NONE") {
    frame.layoutMode = frame.width <= frame.height ? "VERTICAL" : "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
  }

  const originalText = selectedFirst.characters;

  content.map(async (item) => {
    await figma.loadFontAsync(selectedFirst.fontName);
    selectedFirst.characters = item;
    frame.appendChild(selectedFirstParent.clone());
  });

  setTimeout(() => (selectedFirst.characters = originalText));
  figma.notify("Done", { timeout: 1000 });
}

function packTextInSelectedFrame(content: Array<string>, selectedFirst) {
  const frame = selectedFirst;

  if (frame.layoutMode === "NONE") {
    frame.layoutMode = frame.width <= frame.height ? "VERTICAL" : "HORIZONTAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
  }

  content.map(async (item) => {
    const text: TextNode = figma.createText();
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    text.characters = item;
    text.layoutAlign = "MIN";
    frame.appendChild(text);
  });

  figma.notify("Done", { timeout: 1000 });
}

function createRandom(randomType, range, lang) {
  const result = [];
  faker.locale = lang;

  if (randomType === "names") {
    fillData(faker.name.findName);
  } else if (randomType == "phones") {
    fillData(faker.phone.phoneNumber);
  } else if (randomType == "addresses") {
    fillData(faker.address.streetAddress);
  } else if (randomType == "cities") {
    fillData(faker.address.city);
  } else if (randomType == "emails") {
    fillData(faker.internet.email);
  } else if (randomType == "paragraphs") {
    fillData(faker.lorem.paragraph);
  }

  function fillData(func) {
    for (let i = 0; i < range; i++) {
      result.push(func());
    }
  }

  return result;
}
