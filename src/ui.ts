import "./ui.css";

// default init
const settings = { randomType: "city", lang: "en" };

parent.postMessage(
  {
    pluginMessage: {
      range: 0,
      randomType: settings.randomType,
      lang: settings.lang,
    },
  },
  "*"
);

// source text functional unit
const text = document.getElementById("text") as HTMLTextAreaElement;

document.getElementById("paragraph").onclick = () => action("s*\ns*");
document.getElementById("dot").onclick = () => action("s*\\.s*");
document.getElementById("comma").onclick = () => action("s*,s*");
document.getElementById("semicolon").onclick = () => action("s*;s*");

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
}

// random functional unit
const range = document.getElementById("range") as HTMLInputElement;
const output = document.getElementById("range_output") as HTMLOutputElement;

range.onclick = () => randomRangeAction();
document.getElementById("city").onclick = () => randomTypeAction("city");
document.getElementById("name").onclick = () => randomTypeAction("name");
document.getElementById("phone").onclick = () => randomTypeAction("phone");

function randomRangeAction() {
  parent.postMessage(
    {
      pluginMessage: {
        range: range.value,
        randomType: settings.randomType,
      },
    },
    "*"
  );
  
  range.value = "0";
  output.value = "0";
}

function randomTypeAction(msg) {
  range.value = "0";
  settings.randomType = msg;

  parent.postMessage(
    {
      pluginMessage: {
        randomType: settings.randomType,
      },
    },
    "*"
  );
}
