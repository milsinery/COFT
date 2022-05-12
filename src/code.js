var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(304, 390);
import faker from "faker";
// language init
const settings = { lang: null };
figma.clientStorage.getAsync("lang").then(item => {
    figma.ui.postMessage(item ? item : "en");
    settings.lang = item ? item : "en";
});
figma.ui.onmessage = (msg) => {
    var _a, _b;
    figma.currentPage.setRelaunchData({ open: '' });
    // data from ui
    const { separator, content, range, randomType, type, lang } = msg;
    // laguage setup
    if (type === "langSwitch") {
        figma.clientStorage.setAsync("lang", lang);
        figma.clientStorage.getAsync("lang").then(item => {
            settings.lang = item;
        });
    }
    // on page selected
    const selected = figma.currentPage.selection;
    const selectedLength = selected.length;
    const selectedFirst = selected[0];
    const selectedFirstType = selectedFirst && selectedFirst.type;
    const selectedSecond = selected[1];
    const selectedSecondType = selectedSecond && selectedSecond.type;
    const selectedFirstParent = selectedFirst && findSelectedFirstParent(selectedFirst);
    const selectedFirstParentType = selectedFirst && selectedFirstParent.type;
    // check random data
    if (range > 0) {
        if (selectedLength === 1 && selectedFirstType === "FRAME") {
            packTextInSelectedFrame(createRandom(randomType, range, settings.lang), selectedFirst);
        }
        else if (selectedLength === 1 && selectedFirstType === "TEXT") {
            packInFrameObjects(createRandom(randomType, range, settings.lang), selectedFirst, selectedFirstParent);
        }
        else if (selectedLength === 2 &&
            selectedFirstType === "TEXT" &&
            selectedSecondType === "FRAME" && ((_a = selectedSecond === null || selectedSecond === void 0 ? void 0 : selectedSecond.children) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            packInSelectedFrame(createRandom(randomType, range, settings.lang), selectedFirst, selectedFirstParent, selectedSecond);
        }
        else if (selectedLength === 0) {
            packInFrameText(createRandom(randomType, range, settings.lang));
        }
        else if (selectedLength >= 2 && isTypeText(selected)) {
            for (let i = 0; i < selectedLength; i++) {
                changeText(selected[i], createRandom(randomType, range, settings.lang)[i]);
            }
        }
        else {
            return;
        }
    }
    // check text data
    if (content) {
        const text = prepareText(separator, content);
        if (selectedLength === 0) {
            packInFrameText(text);
        }
        else if (selectedFirstParentType === "COMPONENT") {
        }
        else if (selectedLength === 1 && selectedFirstType === "FRAME") {
            packTextInSelectedFrame(text, selectedFirst);
        }
        else if (selectedLength === 1 && selectedFirstType === "TEXT") {
            packInFrameObjects(text, selectedFirst, selectedFirstParent);
        }
        else if (selectedLength === 2 &&
            selectedFirstType === "TEXT" &&
            selectedSecondType === "FRAME" &&
            ((_b = selectedSecond === null || selectedSecond === void 0 ? void 0 : selectedSecond.children) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            packInSelectedFrame(text, selectedFirst, selectedFirstParent, selectedSecond);
        }
        else if (selectedLength >= 2 && isTypeText(selected)) {
            for (let i = 0; i < selectedLength; i++) {
                changeText(selected[i], text[i]);
            }
        }
        else {
            return;
        }
    }
};
function changeText(textLayer, text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (text === undefined)
            return;
        yield figma.loadFontAsync(textLayer.fontName);
        textLayer.characters = text;
    });
}
function isTypeText(obj) {
    let flag = true;
    for (const item of obj) {
        if (item.type === "TEXT") {
            continue;
        }
        else {
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
function packInFrameText(content) {
    const frame = createFrame();
    content.map((item) => __awaiter(this, void 0, void 0, function* () {
        const text = figma.createText();
        yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
        text.characters = item;
        text.layoutAlign = "MIN";
        frame.appendChild(text);
    }));
    figma.notify("Done", { timeout: 1000 });
}
function packInFrameObjects(content, selectedFirst, selectedFirstParent) {
    const frame = createFrame();
    const originalText = selectedFirst.characters;
    content.map((item) => __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(selectedFirst.fontName);
        selectedFirst.characters = item;
        frame.appendChild(selectedFirstParent.clone());
    }));
    setTimeout(() => (selectedFirst.characters = originalText));
    figma.notify("Done", { timeout: 1000 });
}
function packInSelectedFrame(content, selectedFirst, selectedFirstParent, selectedSecond) {
    const frame = selectedSecond;
    if (frame.layoutMode === "NONE") {
        frame.layoutMode = frame.width <= frame.height ? "VERTICAL" : "HORIZONTAL";
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
    }
    const originalText = selectedFirst.characters;
    content.map((item) => __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(selectedFirst.fontName);
        selectedFirst.characters = item;
        frame.appendChild(selectedFirstParent.clone());
    }));
    setTimeout(() => (selectedFirst.characters = originalText));
    figma.notify("Done", { timeout: 1000 });
}
function packTextInSelectedFrame(content, selectedFirst) {
    const frame = selectedFirst;
    if (frame.layoutMode === "NONE") {
        frame.layoutMode = frame.width <= frame.height ? "VERTICAL" : "HORIZONTAL";
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
    }
    content.map((item) => __awaiter(this, void 0, void 0, function* () {
        const text = figma.createText();
        yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
        text.characters = item;
        text.layoutAlign = "MIN";
        frame.appendChild(text);
    }));
    figma.notify("Done", { timeout: 1000 });
}
function createRandom(randomType, range, lang) {
    const result = [];
    faker.locale = lang;
    if (randomType === "names") {
        fillData(faker.name.findName);
    }
    else if (randomType == "phones") {
        fillData(faker.phone.phoneNumber);
    }
    else if (randomType == "addresses") {
        fillData(faker.address.streetAddress);
    }
    else if (randomType == "cities") {
        fillData(faker.address.city);
    }
    else if (randomType == "emails") {
        fillData(faker.internet.email);
    }
    else if (randomType == "paragraphs") {
        fillData(faker.lorem.paragraph);
    }
    function fillData(func) {
        for (let i = 0; i < range; i++) {
            result.push(func());
        }
    }
    return result;
}
