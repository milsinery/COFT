// figma.showUI(__html__);
// figma.ui.resize(304, 385);

// import faker from "faker";

// const prepareContent = (separator, arr) => {
//   return arr
//     .split(new RegExp(separator))
//     .map((item) => item.trim())
//     .filter((item) => item.length != 0);
// };

// const findSourceParent = (obj) =>
//   obj.parent.type === "PAGE" ? obj : findSourceParent(obj.parent);

// figma.ui.onmessage = (message) => {
//   const { mode } = message;

//   // source text functional unit
//   if (type === "source") {
//     const { separator, content } = message;

//     if (!content) return;

//     if (
//       figma.currentPage.selection[0] &&
//       figma.currentPage.selection[0].type !== "TEXT"
//     )
//       return;

//     const parentNode =
//       figma.currentPage.selection.length !== 0
//         ? findSourceParent(figma.currentPage.selection[0])
//         : [];
//     const selectedNode = figma.currentPage.selection[0];

//     const create = (content, sourceParent, selected) => {
//       if (content === null || (selected && selected.type !== "TEXT")) return;

//       let frame;

//       if (figma.currentPage.selection.length <= 1) {
//         frame = figma.createFrame();
//         frame.layoutMode = "VERTICAL";
//         frame.counterAxisSizingMode = "AUTO";
//         frame.horizontalPadding = 12;
//         frame.verticalPadding = 16;
//         frame.cornerRadius = 8;
//         frame.clipsContent = true;
//         frame.itemSpacing = 8;
//         frame.expanded = false;
//         frame.name = "👉 COFT";
//       } else if (figma.currentPage.selection.length === 2) {
//         if (figma.currentPage.selection[1].type === "TEXT") return;

//         frame = figma.currentPage.selection[1];
//         const originalText = selected.characters;
//         content.map(async (item) => {
//           if (
//             sourceParent.type === "INSTANCE" ||
//             sourceParent.type === "GROUP" ||
//             sourceParent.type === "FRAME"
//           ) {
//             await figma.loadFontAsync(selected.fontName);
//             selected.characters = item;
//             frame.appendChild(sourceParent.clone());
//             figma.notify("Done", { timeout: 1500 });
//           } else if (selected.type === "TEXT") {
//             await figma.loadFontAsync(selected.fontName);
//             selected.characters = item;
//             selected.layoutAlign = "MIN";
//             frame.appendChild(selected);
//             figma.notify("Done", { timeout: 1500 });
//           }
//           setTimeout(() => (selected.characters = originalText));
//         });
//         return;
//       } else {
//         return;
//       }

//       if (!selected) {
//         content.map(async (item) => {
//           const text = figma.createText();
//           await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
//           text.characters = item;
//           text.layoutAlign = "MIN";
//           frame.appendChild(text);
//           frame.x = figma.viewport.center.x;
//           frame.y = figma.viewport.center.y;
//           figma.notify("Done", { timeout: 1500 });
//         });
//       } else if (
//         figma.currentPage.selection[0] &&
//         figma.currentPage.selection[0].type === "TEXT" &&
//         figma.currentPage.selection[0].parent.type === "PAGE"
//       ) {
//         const originalText = selected.characters;

//         content.map(async (item) => {
//           await figma.loadFontAsync(selected.fontName);
//           selected.characters = item;
//           frame.appendChild(selected.clone());
//           frame.x = figma.viewport.center.x;
//           frame.y = figma.viewport.center.y;
//           figma.notify("Done", { timeout: 1500 });
//         });
//         setTimeout(() => (selected.characters = originalText));
//       } else if (sourceParent.type === "COMPONENT") {
//         frame.remove();
//         figma.notify("Coming soon", { timeout: 1500 });
//       } else {
//         const originalText = selected.characters;
//         content.map(async (item) => {
//           if (
//             sourceParent.type === "INSTANCE" ||
//             sourceParent.type === "GROUP" ||
//             sourceParent.type === "FRAME"
//           ) {
//             await figma.loadFontAsync(selected.fontName);
//             selected.characters = item;
//             frame.appendChild(sourceParent.clone());
//             frame.x = figma.viewport.center.x;
//             frame.y = figma.viewport.center.y;
//             figma.notify("Done", { timeout: 1500 });
//           } else if (selected.type === "TEXT") {
//             await figma.loadFontAsync(selected.fontName);
//             selected.characters = item;
//             selected.layoutAlign = "MIN";
//             frame.appendChild(selected);
//             frame.x = figma.viewport.center.x;
//             frame.y = figma.viewport.center.y;
//             figma.notify("Done", { timeout: 1500 });
//           }
//           setTimeout(() => (selected.characters = originalText));
//         });
//       }
//     };

//     create(prepareContent(separator, content), parentNode, selectedNode);
//   }

//   // random functional unit
//   const { range, settings = "city" } = message;

//   const createRandom = (type) => {
//     faker.locale = "ru";

//     const result = [];

//     switch (settings) {
//       case "city":
//         for (let i = 0; i < range; i++) {
//           result.push(faker.address.city());
//         }
//         break;
//       case "name":
//         for (let i = 0; i < range; i++) {
//           result.push(faker.name.findName());
//         }
//         break;
//       case "phone":
//         for (let i = 0; i < range; i++) {
//           result.push(faker.phone.phoneNumber());
//         }
//         break;
//     }

//     return result;
//   };

//   if (type === "randomRangeAction") {
//     const parentNode =
//       figma.currentPage.selection.length !== 0
//         ? findSourceParent(figma.currentPage.selection[0])
//         : [];
//     const selected = figma.currentPage.selection[0] as TextNode;

//     const frame = figma.createFrame();
//     frame.layoutMode = "VERTICAL";
//     frame.counterAxisSizingMode = "AUTO";
//     frame.horizontalPadding = 12;
//     frame.verticalPadding = 16;
//     frame.cornerRadius = 8;
//     frame.clipsContent = true;
//     frame.itemSpacing = 8;
//     frame.expanded = false;
//     frame.name = "👉 COFT";

//     const result = createRandom(settings);
//     const originalText = selected.characters;

//     if (!selected) {
//       result.map(async (item) => {
//         const text = figma.createText();
//         await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
//         text.characters = item;
//         text.layoutAlign = "MIN";
//         frame.appendChild(text);
//         frame.x = figma.viewport.center.x;
//         frame.y = figma.viewport.center.y;
//         figma.notify("Done", { timeout: 1500 });
//       });
//     } else if (selected.type === "TEXT") {
//       result.map(async (item) => {
//         await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
//         selected.characters = item;
//         frame.appendChild(parentNode.clone());
//         frame.x = figma.viewport.center.x;
//         frame.y = figma.viewport.center.y;
//         figma.notify("Done", { timeout: 1500 });
//         setTimeout(() => (selected.characters = originalText));
//       });
//     } else {
//       return;
//     }
//   }
// };

///new version

figma.showUI(__html__);
figma.ui.resize(304, 385);

import faker from "faker";

figma.ui.onmessage = (msg) => {
  // data from ui
  const { mode, separator, content, range, settings } = msg;

  // on page selected
  const selected = figma.currentPage.selection;
  const selectedLength = selected.length;
  const selectedFirst: SceneNode = selected[0];
  const selectedFirstType = selectedFirst && selectedFirst.type;
  const selectedSecond: SceneNode = selected[1];
  const selectedSecondType = selectedSecond && selectedSecond.type;
  const selectedFirstParent = selectedFirst && findSelectedFirstParent(selectedFirst);

  if(!content) {
    console.log("No content");
    return;
  };

  if(selectedLength > 2) {
    console.log("Too much selected");
    return;
  };

  if(selectedLength === 0) {
    console.log("No selected");
    return;
  };
  
  if(selectedLength === 1 && selectedFirstType === "TEXT") {
    console.log("1 selected");
    return;
  };
  if(selectedLength === 2 && selectedFirstType === "TEXT" && selectedSecondType === "FRAME") {
    console.log("2 selected");
    return;
  };

  
};

function prepareContent (separator, arr) {
  return arr
    .split(new RegExp(separator))
    .map((item) => item.trim())
    .filter((item) => item.length != 0);
};

function createFrame() {
  const frame = figma.createFrame();
  frame.layoutMode = "VERTICAL";
  frame.counterAxisSizingMode = "AUTO";
  frame.horizontalPadding = 12;
  frame.verticalPadding = 16;
  frame.cornerRadius = 8;
  frame.itemSpacing = 8;
  frame.expanded = false;
  frame.name = "👉 COFT";

  return frame;
}

function findSelectedFirstParent(obj) {
  return obj.parent.type === "PAGE" ? obj : findSelectedFirstParent(obj.parent);
}

function createAndPasteOnPage(content, selectedFirstParent, selectedFirst, selectedSecond) {
  let frame;
  const originalText = selectedFirst.characters;

  if(selectedSecond) {
    frame = selectedSecond as FrameNode;

    
    content.map(async (item) => {
      await figma.loadFontAsync(selectedFirst.fontName);
      selectedFirst.characters = item;
      frame.appendChild(selectedFirstParent.clone());
      frame.x = figma.viewport.center.x;
      frame.y = figma.viewport.center.y;
      figma.notify("Done", { timeout: 1500 });
    })
  } else {
    frame = createFrame();

    content.map(async (item) => {
      const text = figma.createText();
      await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
      text.characters = item;
      text.layoutAlign = "MIN";
      frame.appendChild(text);
      frame.x = figma.viewport.center.x;
      frame.y = figma.viewport.center.y;
      figma.notify("Done", { timeout: 1500 });
      });
  }
  
  setTimeout(() => (selectedFirst.characters = originalText));
}
