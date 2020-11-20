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
figma.ui.resize(304, 480);
// import faker from "faker";
// faker.locale = "ru";
figma.ui.onmessage = ({ separator, content }) => {
    if (!content)
        return;
    if (figma.currentPage.selection[0] &&
        figma.currentPage.selection[0].type !== "TEXT")
        return;
    const findSourceParent = (obj) => {
        if (obj.type === "DOCUMENT") {
            return obj;
        }
        else {
            return obj.parent.type === "PAGE" ? obj : findSourceParent(obj.parent);
        }
    };
    const prepareContent = (separator, arr) => {
        const spl = separator === "paragraph"
            ? arr.split(new RegExp("s*\ns*"))
            : separator === "comma"
                ? arr.split(new RegExp("s*,s*"))
                : separator === "dot"
                    ? arr.split(new RegExp("s*\\.s*"))
                    : separator === "semicolon"
                        ? arr.split(new RegExp("s*;s*"))
                        : [];
        const result = spl.map((item) => item.trim());
        return result.filter((item) => item.length != 0);
    };
    const parentNode = figma.currentPage.selection.length !== 0
        ? findSourceParent(figma.currentPage.selection[0])
        : [];
    const selectedNode = figma.currentPage.selection[0];
    const create = (content, sourceParent, selected) => {
        if (content === null || (selected && selected.type !== "TEXT"))
            return;
        const frame = figma.createFrame();
        frame.layoutMode = "VERTICAL";
        frame.counterAxisSizingMode = "AUTO";
        frame.horizontalPadding = 12;
        frame.verticalPadding = 16;
        frame.cornerRadius = 8;
        frame.clipsContent = true;
        frame.itemSpacing = 8;
        frame.expanded = false;
        frame.name = "👉 COFT";
        if (selected === undefined) {
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
        else if (figma.currentPage.selection[0] &&
            figma.currentPage.selection[0].type === "TEXT" &&
            figma.currentPage.selection[0].parent.type === "PAGE") {
            const originalText = selected.characters;
            content.map((item) => __awaiter(this, void 0, void 0, function* () {
                yield figma.loadFontAsync(selected.fontName);
                selected.characters = item;
                frame.appendChild(selected.clone());
                frame.x = figma.viewport.center.x;
                frame.y = figma.viewport.center.y;
                figma.notify("Done", { timeout: 1500 });
            }));
            setTimeout(() => (selected.characters = originalText));
        }
        else if (parentNode.type === "COMPONENT") {
            frame.remove();
            figma.notify("Coming soon", { timeout: 1500 });
        }
        else {
            const originalText = selected.characters;
            content.map((item) => __awaiter(this, void 0, void 0, function* () {
                if (sourceParent.type === "INSTANCE" ||
                    sourceParent.type === "GROUP" ||
                    sourceParent.type === "FRAME") {
                    yield figma.loadFontAsync(selected.fontName);
                    selected.characters = item;
                    frame.appendChild(sourceParent.clone());
                    frame.x = figma.viewport.center.x;
                    frame.y = figma.viewport.center.y;
                    figma.notify("Done", { timeout: 1500 });
                }
                else if (selected.type === "TEXT") {
                    content.map((item) => __awaiter(this, void 0, void 0, function* () {
                        yield figma.loadFontAsync(selected.fontName);
                        selected.characters = item;
                        selected.layoutAlign = "MIN";
                        frame.appendChild(selected);
                        frame.x = figma.viewport.center.x;
                        frame.y = figma.viewport.center.y;
                        figma.notify("Done", { timeout: 1500 });
                    }));
                }
                setTimeout(() => (selected.characters = originalText));
            }));
        }
    };
    create(prepareContent(separator, content), parentNode, selectedNode);
};
