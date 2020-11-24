import "./ui.css";

// default init
const settings = { randomType: "name", eng: true };
const plugin = document.getElementById("plugin");
plugin.classList.add("effect-in");
setTimeout(() => plugin.classList.remove("effect-in"), 300);

// default data for code
parent.postMessage(
  {
    pluginMessage: {
      range: 0,
      randomType: settings.randomType,
      lang: settings.eng ? "en" : "ru",
    },
  },
  "*"
);

// source text functional unit
const text = document.getElementById("text") as HTMLTextAreaElement;
const paragraph = document.getElementById("paragraph") as HTMLButtonElement;
const dot = document.getElementById("dot") as HTMLButtonElement ;
const comma = document.getElementById("comma") as HTMLButtonElement;
const semicolon = document.getElementById("semicolon") as HTMLButtonElement;

paragraph.onclick = () => action("s*\ns*")
dot.onclick = () => action("s*\\.s*");
comma.onclick = () => action("s*,s*");;
semicolon.onclick = () => action("s*;s*");

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
const name = document.getElementById("name") as HTMLInputElement;
const phone = document.getElementById("phone") as HTMLInputElement;
const nameLabel = document.getElementById("name-label") as HTMLHeadingElement;
const phoneLabel = document.getElementById("phone-label") as HTMLHeadingElement;
const range = document.getElementById("range") as HTMLInputElement;
const output = document.getElementById("range_output") as HTMLOutputElement;

name.onclick = () => randomTypeAction("name");
phone.onclick = () => randomTypeAction("phone");
range.onclick = () => randomRangeAction();

function randomRangeAction() {
  parent.postMessage(
    {
      pluginMessage: {
        range: range.value,
        randomType: settings.randomType,
        lang: settings.eng ? "en" : "ru",
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
        lang: settings.eng ? "en" : "ru",
      },
    },
    "*"
  );
}

// language switch functional
const titleFirst = document.getElementById("title-first") as HTMLHeadingElement;
const titleSecond = document.getElementById("title-second") as HTMLHeadingElement;
const langBtn = document.getElementById("lang") as HTMLLinkElement;
const howItWorks = document.getElementById("how-it-works") as HTMLLinkElement;
const support = document.getElementById("support") as HTMLLinkElement;

langBtn.onclick = () => langSwitcher();

function langSwitcher() {
  settings.eng = !settings.eng;
  plugin.classList.add("effect-lang-switch");
  setTimeout(() => plugin.classList.remove("effect-lang-switch"), 300);

  parent.postMessage(
    {
      pluginMessage: {
        lang: settings.eng ? "en" : "ru",
      },
    },
    "*"
  );

  titleFirst.innerText = settings.eng ? "Create from text" : "Создать из текста";
  text.placeholder = settings.eng ? "Source text for division by rule" : "Исходный текст для нарезки по правилу";
  paragraph.innerHTML = settings.eng ? "Divide the text into paragraphs" : "Разделить текст после абзаца";
  comma.innerHTML = settings.eng ? "After the comma" : "Запятой";
  dot.innerHTML = settings.eng ? "Dot": "Точки";
  semicolon.innerHTML = settings.eng ? "Semicolon" : "Точки с запятой";
  titleSecond.innerText = settings.eng ? "Сreate from random" : "Создать из случайных";
  nameLabel.innerText = settings.eng ? "Names" : "Имён";
  phoneLabel.innerText = settings.eng ? "Phone Numbers" : "Телефонных номеров";
  langBtn.innerText = settings.eng ? "На русском" : "in English";
  howItWorks.innerText = settings.eng ? "How it Works" : "Помощь";
  howItWorks.href = settings.eng ? "https://www.figma.com/community/plugin/903936058293238810" : "https://t.me/pluginsforfigma";
  support.innerText = settings.eng ? "Support or share ideas" : "Поддержка и обратная связь";
}