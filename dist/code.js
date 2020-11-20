/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// figma.showUI(__html__);
// figma.ui.resize(304, 385);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
figma.ui.onmessage = (msg) => {
    // data from ui
    const { mode, separator, content, range, settings } = msg;
    // on page selected
    const selected = figma.currentPage.selection;
    const selectedLength = selected.length;
    const selectedFirst = selected[0];
    const selectedFirstType = selectedFirst && selectedFirst.type;
    const selectedSecond = selected[1];
    const selectedSecondType = selectedSecond && selectedSecond.type;
    const selectedFirstParent = selectedFirst && findSelectedFirstParent(selectedFirst);
    if (!content) {
        console.log("No content");
        return;
    }
    ;
    if (selectedLength > 2) {
        console.log("Too much selected");
        return;
    }
    ;
    if (selectedLength === 0) {
        console.log("No selected");
        return;
    }
    ;
    if (selectedLength === 1 && selectedFirstType === "TEXT") {
        console.log("1 selected");
        return;
    }
    ;
    if (selectedLength === 2 && selectedFirstType === "TEXT" && selectedSecondType === "FRAME") {
        console.log("2 selected");
        return;
    }
    ;
};
function prepareContent(separator, arr) {
    return arr
        .split(new RegExp(separator))
        .map((item) => item.trim())
        .filter((item) => item.length != 0);
}
;
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
    if (selectedSecond) {
        frame = selectedSecond;
        content.map((item) => __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync(selectedFirst.fontName);
            selectedFirst.characters = item;
            frame.appendChild(selectedFirstParent.clone());
            frame.x = figma.viewport.center.x;
            frame.y = figma.viewport.center.y;
            figma.notify("Done", { timeout: 1500 });
        }));
    }
    else {
        frame = createFrame();
        content.map((item) => __awaiter(this, void 0, void 0, function* () {
            const text = figma.createText();
            yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
            text.characters = item;
            text.layoutAlign = "MIN";
            frame.appendChild(text);
            frame.x = figma.viewport.center.x;
            frame.y = figma.viewport.center.y;
            figma.notify("Done", { timeout: 1500 });
        }));
    }
    setTimeout(() => (selectedFirst.characters = originalText));
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdCQUFnQjtBQUNyRCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxQ0FBcUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsWUFBWTtBQUNaLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxZQUFZO0FBQ1o7QUFDQSxVQUFVO0FBQ1Y7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFDQUFxQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRCxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0Esc0NBQXNDLHFDQUFxQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQTRDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxxQ0FBcUM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQkFBZ0I7QUFDbEQsU0FBUztBQUNUO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8vIGZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG4vLyBmaWdtYS51aS5yZXNpemUoMzA0LCAzODUpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBpbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XG4vLyBjb25zdCBwcmVwYXJlQ29udGVudCA9IChzZXBhcmF0b3IsIGFycikgPT4ge1xuLy8gICByZXR1cm4gYXJyXG4vLyAgICAgLnNwbGl0KG5ldyBSZWdFeHAoc2VwYXJhdG9yKSlcbi8vICAgICAubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSlcbi8vICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmxlbmd0aCAhPSAwKTtcbi8vIH07XG4vLyBjb25zdCBmaW5kU291cmNlUGFyZW50ID0gKG9iaikgPT5cbi8vICAgb2JqLnBhcmVudC50eXBlID09PSBcIlBBR0VcIiA/IG9iaiA6IGZpbmRTb3VyY2VQYXJlbnQob2JqLnBhcmVudCk7XG4vLyBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuLy8gICBjb25zdCB7IG1vZGUgfSA9IG1lc3NhZ2U7XG4vLyAgIC8vIHNvdXJjZSB0ZXh0IGZ1bmN0aW9uYWwgdW5pdFxuLy8gICBpZiAodHlwZSA9PT0gXCJzb3VyY2VcIikge1xuLy8gICAgIGNvbnN0IHsgc2VwYXJhdG9yLCBjb250ZW50IH0gPSBtZXNzYWdlO1xuLy8gICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuLy8gICAgIGlmIChcbi8vICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSAmJlxuLy8gICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLnR5cGUgIT09IFwiVEVYVFwiXG4vLyAgICAgKVxuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIGNvbnN0IHBhcmVudE5vZGUgPVxuLy8gICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCAhPT0gMFxuLy8gICAgICAgICA/IGZpbmRTb3VyY2VQYXJlbnQoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKVxuLy8gICAgICAgICA6IFtdO1xuLy8gICAgIGNvbnN0IHNlbGVjdGVkTm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbi8vICAgICBjb25zdCBjcmVhdGUgPSAoY29udGVudCwgc291cmNlUGFyZW50LCBzZWxlY3RlZCkgPT4ge1xuLy8gICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwgfHwgKHNlbGVjdGVkICYmIHNlbGVjdGVkLnR5cGUgIT09IFwiVEVYVFwiKSkgcmV0dXJuO1xuLy8gICAgICAgbGV0IGZyYW1lO1xuLy8gICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPD0gMSkge1xuLy8gICAgICAgICBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4vLyAgICAgICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4vLyAgICAgICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuLy8gICAgICAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyO1xuLy8gICAgICAgICBmcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbi8vICAgICAgICAgZnJhbWUuY29ybmVyUmFkaXVzID0gODtcbi8vICAgICAgICAgZnJhbWUuY2xpcHNDb250ZW50ID0gdHJ1ZTtcbi8vICAgICAgICAgZnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuLy8gICAgICAgICBmcmFtZS5leHBhbmRlZCA9IGZhbHNlO1xuLy8gICAgICAgICBmcmFtZS5uYW1lID0gXCLwn5GJIENPRlRcIjtcbi8vICAgICAgIH0gZWxzZSBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMikge1xuLy8gICAgICAgICBpZiAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzFdLnR5cGUgPT09IFwiVEVYVFwiKSByZXR1cm47XG4vLyAgICAgICAgIGZyYW1lID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzFdO1xuLy8gICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBzZWxlY3RlZC5jaGFyYWN0ZXJzO1xuLy8gICAgICAgICBjb250ZW50Lm1hcChhc3luYyAoaXRlbSkgPT4ge1xuLy8gICAgICAgICAgIGlmIChcbi8vICAgICAgICAgICAgIHNvdXJjZVBhcmVudC50eXBlID09PSBcIklOU1RBTkNFXCIgfHxcbi8vICAgICAgICAgICAgIHNvdXJjZVBhcmVudC50eXBlID09PSBcIkdST1VQXCIgfHxcbi8vICAgICAgICAgICAgIHNvdXJjZVBhcmVudC50eXBlID09PSBcIkZSQU1FXCJcbi8vICAgICAgICAgICApIHtcbi8vICAgICAgICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoc2VsZWN0ZWQuZm9udE5hbWUpO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQuY2hhcmFjdGVycyA9IGl0ZW07XG4vLyAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChzb3VyY2VQYXJlbnQuY2xvbmUoKSk7XG4vLyAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJEb25lXCIsIHsgdGltZW91dDogMTUwMCB9KTtcbi8vICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnR5cGUgPT09IFwiVEVYVFwiKSB7XG4vLyAgICAgICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHNlbGVjdGVkLmZvbnROYW1lKTtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLmNoYXJhY3RlcnMgPSBpdGVtO1xuLy8gICAgICAgICAgICAgc2VsZWN0ZWQubGF5b3V0QWxpZ24gPSBcIk1JTlwiO1xuLy8gICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2VsZWN0ZWQpO1xuLy8gICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiRG9uZVwiLCB7IHRpbWVvdXQ6IDE1MDAgfSk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHNlbGVjdGVkLmNoYXJhY3RlcnMgPSBvcmlnaW5hbFRleHQpKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cbi8vICAgICAgIGlmICghc2VsZWN0ZWQpIHtcbi8vICAgICAgICAgY29udGVudC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbi8vICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuLy8gICAgICAgICAgIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiUm9ib3RvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbi8vICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBpdGVtO1xuLy8gICAgICAgICAgIHRleHQubGF5b3V0QWxpZ24gPSBcIk1JTlwiO1xuLy8gICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuLy8gICAgICAgICAgIGZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbi8vICAgICAgICAgICBmcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4vLyAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiRG9uZVwiLCB7IHRpbWVvdXQ6IDE1MDAgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSBlbHNlIGlmIChcbi8vICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdICYmXG4vLyAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS50eXBlID09PSBcIlRFWFRcIiAmJlxuLy8gICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0ucGFyZW50LnR5cGUgPT09IFwiUEFHRVwiXG4vLyAgICAgICApIHtcbi8vICAgICAgICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gc2VsZWN0ZWQuY2hhcmFjdGVycztcbi8vICAgICAgICAgY29udGVudC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbi8vICAgICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHNlbGVjdGVkLmZvbnROYW1lKTtcbi8vICAgICAgICAgICBzZWxlY3RlZC5jaGFyYWN0ZXJzID0gaXRlbTtcbi8vICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChzZWxlY3RlZC5jbG9uZSgpKTtcbi8vICAgICAgICAgICBmcmFtZS54ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4vLyAgICAgICAgICAgZnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuLy8gICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkRvbmVcIiwgeyB0aW1lb3V0OiAxNTAwIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoc2VsZWN0ZWQuY2hhcmFjdGVycyA9IG9yaWdpbmFsVGV4dCkpO1xuLy8gICAgICAgfSBlbHNlIGlmIChzb3VyY2VQYXJlbnQudHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuLy8gICAgICAgICBmcmFtZS5yZW1vdmUoKTtcbi8vICAgICAgICAgZmlnbWEubm90aWZ5KFwiQ29taW5nIHNvb25cIiwgeyB0aW1lb3V0OiAxNTAwIH0pO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gc2VsZWN0ZWQuY2hhcmFjdGVycztcbi8vICAgICAgICAgY29udGVudC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbi8vICAgICAgICAgICBpZiAoXG4vLyAgICAgICAgICAgICBzb3VyY2VQYXJlbnQudHlwZSA9PT0gXCJJTlNUQU5DRVwiIHx8XG4vLyAgICAgICAgICAgICBzb3VyY2VQYXJlbnQudHlwZSA9PT0gXCJHUk9VUFwiIHx8XG4vLyAgICAgICAgICAgICBzb3VyY2VQYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiXG4vLyAgICAgICAgICAgKSB7XG4vLyAgICAgICAgICAgICBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHNlbGVjdGVkLmZvbnROYW1lKTtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLmNoYXJhY3RlcnMgPSBpdGVtO1xuLy8gICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc291cmNlUGFyZW50LmNsb25lKCkpO1xuLy8gICAgICAgICAgICAgZnJhbWUueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuLy8gICAgICAgICAgICAgZnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuLy8gICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiRG9uZVwiLCB7IHRpbWVvdXQ6IDE1MDAgfSk7XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZC50eXBlID09PSBcIlRFWFRcIikge1xuLy8gICAgICAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyhzZWxlY3RlZC5mb250TmFtZSk7XG4vLyAgICAgICAgICAgICBzZWxlY3RlZC5jaGFyYWN0ZXJzID0gaXRlbTtcbi8vICAgICAgICAgICAgIHNlbGVjdGVkLmxheW91dEFsaWduID0gXCJNSU5cIjtcbi8vICAgICAgICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcbi8vICAgICAgICAgICAgIGZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbi8vICAgICAgICAgICAgIGZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbi8vICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkRvbmVcIiwgeyB0aW1lb3V0OiAxNTAwIH0pO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChzZWxlY3RlZC5jaGFyYWN0ZXJzID0gb3JpZ2luYWxUZXh0KSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG4vLyAgICAgY3JlYXRlKHByZXBhcmVDb250ZW50KHNlcGFyYXRvciwgY29udGVudCksIHBhcmVudE5vZGUsIHNlbGVjdGVkTm9kZSk7XG4vLyAgIH1cbi8vICAgLy8gcmFuZG9tIGZ1bmN0aW9uYWwgdW5pdFxuLy8gICBjb25zdCB7IHJhbmdlLCBzZXR0aW5ncyA9IFwiY2l0eVwiIH0gPSBtZXNzYWdlO1xuLy8gICBjb25zdCBjcmVhdGVSYW5kb20gPSAodHlwZSkgPT4ge1xuLy8gICAgIGZha2VyLmxvY2FsZSA9IFwicnVcIjtcbi8vICAgICBjb25zdCByZXN1bHQgPSBbXTtcbi8vICAgICBzd2l0Y2ggKHNldHRpbmdzKSB7XG4vLyAgICAgICBjYXNlIFwiY2l0eVwiOlxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlOyBpKyspIHtcbi8vICAgICAgICAgICByZXN1bHQucHVzaChmYWtlci5hZGRyZXNzLmNpdHkoKSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgICBjYXNlIFwibmFtZVwiOlxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlOyBpKyspIHtcbi8vICAgICAgICAgICByZXN1bHQucHVzaChmYWtlci5uYW1lLmZpbmROYW1lKCkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgY2FzZSBcInBob25lXCI6XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2U7IGkrKykge1xuLy8gICAgICAgICAgIHJlc3VsdC5wdXNoKGZha2VyLnBob25lLnBob25lTnVtYmVyKCkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9O1xuLy8gICBpZiAodHlwZSA9PT0gXCJyYW5kb21SYW5nZUFjdGlvblwiKSB7XG4vLyAgICAgY29uc3QgcGFyZW50Tm9kZSA9XG4vLyAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoICE9PSAwXG4vLyAgICAgICAgID8gZmluZFNvdXJjZVBhcmVudChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pXG4vLyAgICAgICAgIDogW107XG4vLyAgICAgY29uc3Qgc2VsZWN0ZWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0gYXMgVGV4dE5vZGU7XG4vLyAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuLy8gICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4vLyAgICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4vLyAgICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMjtcbi8vICAgICBmcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbi8vICAgICBmcmFtZS5jb3JuZXJSYWRpdXMgPSA4O1xuLy8gICAgIGZyYW1lLmNsaXBzQ29udGVudCA9IHRydWU7XG4vLyAgICAgZnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuLy8gICAgIGZyYW1lLmV4cGFuZGVkID0gZmFsc2U7XG4vLyAgICAgZnJhbWUubmFtZSA9IFwi8J+RiSBDT0ZUXCI7XG4vLyAgICAgY29uc3QgcmVzdWx0ID0gY3JlYXRlUmFuZG9tKHNldHRpbmdzKTtcbi8vICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBzZWxlY3RlZC5jaGFyYWN0ZXJzO1xuLy8gICAgIGlmICghc2VsZWN0ZWQpIHtcbi8vICAgICAgIHJlc3VsdC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbi8vICAgICAgICAgY29uc3QgdGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbi8vICAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuLy8gICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSBpdGVtO1xuLy8gICAgICAgICB0ZXh0LmxheW91dEFsaWduID0gXCJNSU5cIjtcbi8vICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4vLyAgICAgICAgIGZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbi8vICAgICAgICAgZnJhbWUueSA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci55O1xuLy8gICAgICAgICBmaWdtYS5ub3RpZnkoXCJEb25lXCIsIHsgdGltZW91dDogMTUwMCB9KTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gXCJURVhUXCIpIHtcbi8vICAgICAgIHJlc3VsdC5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcbi8vICAgICAgICAgYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuLy8gICAgICAgICBzZWxlY3RlZC5jaGFyYWN0ZXJzID0gaXRlbTtcbi8vICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZS5jbG9uZSgpKTtcbi8vICAgICAgICAgZnJhbWUueCA9IGZpZ21hLnZpZXdwb3J0LmNlbnRlci54O1xuLy8gICAgICAgICBmcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4vLyAgICAgICAgIGZpZ21hLm5vdGlmeShcIkRvbmVcIiwgeyB0aW1lb3V0OiAxNTAwIH0pO1xuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChzZWxlY3RlZC5jaGFyYWN0ZXJzID0gb3JpZ2luYWxUZXh0KSk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfTtcbi8vL25ldyB2ZXJzaW9uXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkucmVzaXplKDMwNCwgMzg1KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAvLyBkYXRhIGZyb20gdWlcbiAgICBjb25zdCB7IG1vZGUsIHNlcGFyYXRvciwgY29udGVudCwgcmFuZ2UsIHNldHRpbmdzIH0gPSBtc2c7XG4gICAgLy8gb24gcGFnZSBzZWxlY3RlZFxuICAgIGNvbnN0IHNlbGVjdGVkID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGNvbnN0IHNlbGVjdGVkTGVuZ3RoID0gc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IHNlbGVjdGVkRmlyc3QgPSBzZWxlY3RlZFswXTtcbiAgICBjb25zdCBzZWxlY3RlZEZpcnN0VHlwZSA9IHNlbGVjdGVkRmlyc3QgJiYgc2VsZWN0ZWRGaXJzdC50eXBlO1xuICAgIGNvbnN0IHNlbGVjdGVkU2Vjb25kID0gc2VsZWN0ZWRbMV07XG4gICAgY29uc3Qgc2VsZWN0ZWRTZWNvbmRUeXBlID0gc2VsZWN0ZWRTZWNvbmQgJiYgc2VsZWN0ZWRTZWNvbmQudHlwZTtcbiAgICBjb25zdCBzZWxlY3RlZEZpcnN0UGFyZW50ID0gc2VsZWN0ZWRGaXJzdCAmJiBmaW5kU2VsZWN0ZWRGaXJzdFBhcmVudChzZWxlY3RlZEZpcnN0KTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBjb250ZW50XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIDtcbiAgICBpZiAoc2VsZWN0ZWRMZW5ndGggPiAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9vIG11Y2ggc2VsZWN0ZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgO1xuICAgIGlmIChzZWxlY3RlZExlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNlbGVjdGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIDtcbiAgICBpZiAoc2VsZWN0ZWRMZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRGaXJzdFR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMSBzZWxlY3RlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICA7XG4gICAgaWYgKHNlbGVjdGVkTGVuZ3RoID09PSAyICYmIHNlbGVjdGVkRmlyc3RUeXBlID09PSBcIlRFWFRcIiAmJiBzZWxlY3RlZFNlY29uZFR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIjIgc2VsZWN0ZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgO1xufTtcbmZ1bmN0aW9uIHByZXBhcmVDb250ZW50KHNlcGFyYXRvciwgYXJyKSB7XG4gICAgcmV0dXJuIGFyclxuICAgICAgICAuc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3IpKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5sZW5ndGggIT0gMCk7XG59XG47XG5mdW5jdGlvbiBjcmVhdGVGcmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyO1xuICAgIGZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgIGZyYW1lLmNvcm5lclJhZGl1cyA9IDg7XG4gICAgZnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGZyYW1lLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgZnJhbWUubmFtZSA9IFwi8J+RiSBDT0ZUXCI7XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuZnVuY3Rpb24gZmluZFNlbGVjdGVkRmlyc3RQYXJlbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iai5wYXJlbnQudHlwZSA9PT0gXCJQQUdFXCIgPyBvYmogOiBmaW5kU2VsZWN0ZWRGaXJzdFBhcmVudChvYmoucGFyZW50KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFuZFBhc3RlT25QYWdlKGNvbnRlbnQsIHNlbGVjdGVkRmlyc3RQYXJlbnQsIHNlbGVjdGVkRmlyc3QsIHNlbGVjdGVkU2Vjb25kKSB7XG4gICAgbGV0IGZyYW1lO1xuICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IHNlbGVjdGVkRmlyc3QuY2hhcmFjdGVycztcbiAgICBpZiAoc2VsZWN0ZWRTZWNvbmQpIHtcbiAgICAgICAgZnJhbWUgPSBzZWxlY3RlZFNlY29uZDtcbiAgICAgICAgY29udGVudC5tYXAoKGl0ZW0pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoc2VsZWN0ZWRGaXJzdC5mb250TmFtZSk7XG4gICAgICAgICAgICBzZWxlY3RlZEZpcnN0LmNoYXJhY3RlcnMgPSBpdGVtO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRGaXJzdFBhcmVudC5jbG9uZSgpKTtcbiAgICAgICAgICAgIGZyYW1lLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcbiAgICAgICAgICAgIGZyYW1lLnkgPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkRvbmVcIiwgeyB0aW1lb3V0OiAxNTAwIH0pO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmcmFtZSA9IGNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGNvbnRlbnQubWFwKChpdGVtKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJSb2JvdG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgdGV4dC5jaGFyYWN0ZXJzID0gaXRlbTtcbiAgICAgICAgICAgIHRleHQubGF5b3V0QWxpZ24gPSBcIk1JTlwiO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICBmcmFtZS54ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLng7XG4gICAgICAgICAgICBmcmFtZS55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJEb25lXCIsIHsgdGltZW91dDogMTUwMCB9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IChzZWxlY3RlZEZpcnN0LmNoYXJhY3RlcnMgPSBvcmlnaW5hbFRleHQpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=