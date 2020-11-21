figma.showUI(__html__);
figma.ui.resize(304, 385);

import faker from "faker";

figma.ui.onmessage = (msg) => {
  // data from ui
  const { separator, content, range, randomType, lang } = msg;

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

  if (selectedLength > 2) {
    return;
  }

  if (range > 0) {
    if (selectedLength === 1 && selectedFirstType === "TEXT") {
      packInFrameObjects(
        createRandom(randomType, range),
        selectedFirst,
        selectedFirstParent
      );
    } else if (
      selectedLength === 2 &&
      selectedFirstType === "TEXT" &&
      selectedSecondType === "FRAME"
    ) {
      packInSelectedFrame(
        createRandom(randomType, range),
        selectedFirst,
        selectedFirstParent,
        selectedSecond
      );
    } else if (selectedLength === 0) {
      packInFrameText(createRandom(randomType, range));
    } else {
      return;
    }

    return;
  }

  if (!content) {
    return;
  }

  const text = prepareText(separator, content);

  if (selectedLength === 0) {
    packInFrameText(text);
    return;
  }

  if (selectedFirstParentType === "COMPONENT") {
    return;
  }

  if (selectedLength === 1 && selectedFirstType === "TEXT") {
    packInFrameObjects(text, selectedFirst, selectedFirstParent);
    return;
  }

  if (
    selectedLength === 2 &&
    selectedFirstType === "TEXT" &&
    selectedSecondType === "FRAME"
  ) {
    packInSelectedFrame(
      text,
      selectedFirst,
      selectedFirstParent,
      selectedSecond
    );
    return;
  }
};

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
  frame.layoutMode = "VERTICAL";
  frame.counterAxisSizingMode = "AUTO";
  frame.horizontalPadding = 24;
  frame.verticalPadding = 24;
  frame.cornerRadius = 8;
  frame.itemSpacing = 8;
  frame.expanded = false;
  frame.name = "👉 COFT";
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
  const originalText = selectedFirst.characters;

  content.map(async (item) => {
    await figma.loadFontAsync(selectedFirst.fontName);
    selectedFirst.characters = item;
    frame.appendChild(selectedFirstParent.clone());
  });

  setTimeout(() => (selectedFirst.characters = originalText));
  figma.notify("Done", { timeout: 1000 });
}

function createRandom(randomType, range) {
  const result = [];

  if (randomType === "city") {
    fillData(faker.address.city);
  } else if (randomType === "name") {
    fillData(faker.name.findName);
  } else if (randomType == "phone") {
    fillData(faker.phone.phoneNumber);
  } else {
    return;
  }

  function fillData(func) {
    for (let i = 0; i < range; i++) {
      result.push(func());
    }
  }

  return result;
}
