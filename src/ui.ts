import "./ui.css";

// source text functional unit
const text = document.getElementById("text") as HTMLTextAreaElement;

function action(separator) {
  parent.postMessage(
    {
      pluginMessage: {
        mode: "source",
        separator: separator,
        content: text.value,
      },
    },
    "*"
  );
};

document.getElementById("paragraph").onclick = () => action("s*\ns*");
document.getElementById("dot").onclick = () => action("s*\\.s*");
document.getElementById("comma").onclick = () => action("s*,s*");
document.getElementById("semicolon").onclick = () => action("s*;s*");

// random functional unit
const range = document.getElementById("range") as HTMLInputElement;
const output = document.getElementById("range_output") as HTMLOutputElement;
const settings = { type: "city"}

function randomRangeAction() {
  parent.postMessage(
    {
      pluginMessage: {
        mode: "randomRangeAction",
        range: range.value,
        settings: settings.type
      },
    },
    "*"
  );

  setTimeout(() => range.value = "0", 1000);
  setTimeout(() => output.value = "0", 1000);
};

function randomAction(msg) {
  range.value = "0";
  settings.type = msg;

  parent.postMessage(
    {
      pluginMessage: {
        mode: "randomAction",
        settings: msg,
      },
    },
    "*"
  );
};

document.getElementById("city").onclick = () => randomAction("city");
document.getElementById("name").onclick = () => randomAction("name");
document.getElementById("phone").onclick = () => randomAction("phone");
range.onclick = () => randomRangeAction();

// default init
parent.postMessage(
  {
    pluginMessage: {
      mode: "randomAction",
      range: 0,
      settings: settings.type,
    },
  },
  "*"
);

// help unit
const helpPopup = document.getElementById("help-popup");

document.getElementById("help-btn").onclick = () => {
  helpPopup.classList.add("plugin__help-popup_active");
};

document.getElementById("help-close-btn").onclick = () => {
  helpPopup.classList.remove("plugin__help-popup_active");
};
