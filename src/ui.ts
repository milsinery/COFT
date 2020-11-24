import { ClassificationTypeNames } from "typescript";
import "./ui.css";

// default init
const settings = { randomType: "name", eng: true };

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

const dictionary = {
  titleFirst: ["Your Content", "Ваш контент"],
  textArea: ["Source text for division by rule", "Исходный текст для нарезки по правилу"],
  paragraph: ["Divide the text into paragraphs", "Разделить текст после абзаца"],
  comma: ["After the comma", "Запятой"],
  dot: ["Dot", "Точки"],
  semicolon: ["Semicolon", "Точки с запятой"],
  titleSecond: ["Сreate fragments with random", "Создать фрагменты со случайными"],
  nameLabel: ["Names", "Именами"],
  phoneLabel: ["Phone Numbers", "Номерами телефонов"],
  langBtn: ["На русском", "in English"],
  howItWorks: ["How it Works", "Помощь"],
  howItWorksHref: ["https://www.figma.com/community/plugin/903936058293238810", "https://t.me/pluginsforfigma"],
  support: ["Support or share ideas", "Поддержка и обратная связь"],
}

function langSwitcher() {
  settings.eng = !settings.eng;

  parent.postMessage(
    {
      pluginMessage: {
        lang: settings.eng ? "en" : "ru",
      },
    },
    "*"
  );

  titleFirst.innerText = settings.eng ? dictionary.titleFirst[0] : dictionary.titleFirst[1];
  text.placeholder = settings.eng ? dictionary.textArea[0] : dictionary.textArea[1];
  paragraph.innerHTML = settings.eng ? dictionary.paragraph[0] : dictionary.paragraph[1];
  comma.innerHTML = settings.eng ? dictionary.comma[0] : dictionary.comma[1];
  dot.innerHTML = settings.eng ? dictionary.dot[0] : dictionary.dot[1];
  semicolon.innerHTML = settings.eng ? dictionary.semicolon[0] : dictionary.semicolon[1];
  titleSecond.innerText = settings.eng ? dictionary.titleSecond[0] : dictionary.titleSecond[1];
  nameLabel.innerText = settings.eng ? dictionary.nameLabel[0] : dictionary.nameLabel[1]; 
  phoneLabel.innerText = settings.eng ? dictionary.phoneLabel[0] : dictionary.phoneLabel[1];
  langBtn.innerText = settings.eng ? dictionary.langBtn[0] : dictionary.langBtn[1];
  howItWorks.innerText = settings.eng ? dictionary.howItWorks[0] : dictionary.howItWorks[1];
  howItWorks.href = settings.eng ? dictionary.howItWorksHref[0] : dictionary.howItWorksHref[1];
  support.innerText = settings.eng ? dictionary.support[0] : dictionary.support[1];
}