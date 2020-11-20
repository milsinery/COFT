import "./ui.css";
const text = document.getElementById("text");
const action = (message) => {
    parent.postMessage({
        pluginMessage: {
            separator: message,
            content: text.value,
        },
    }, "*");
};
document.getElementById("paragraph").onclick = () => action("paragraph");
document.getElementById("dot").onclick = () => action("dot");
document.getElementById("comma").onclick = () => action("comma");
document.getElementById("semicolon").onclick = () => action("semicolon");
