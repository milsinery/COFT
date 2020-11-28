import "./ui.css";

// default init
const settings = { randomType: "name", lang: "en" };

// add ui in-effect
const plugin = document.getElementById("plugin");
plugin.classList.add("effect-in");
setTimeout(() => plugin.classList.remove("effect-in"), 300);

// default data for code
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
const paragraph = document.getElementById("paragraph") as HTMLButtonElement;
const dot = document.getElementById("dot") as HTMLButtonElement;
const comma = document.getElementById("comma") as HTMLButtonElement;
const semicolon = document.getElementById("semicolon") as HTMLButtonElement;

paragraph.onclick = () => action("s*\ns*");
dot.onclick = () => action("s*\\.s*");
comma.onclick = () => action("s*,s*");
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
        lang: settings.lang,
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
        lang: settings.lang,
      },
    },
    "*"
  );
}

// language switch functional
const titleFirst = document.getElementById("title-first") as HTMLHeadingElement;
const titleSecond = document.getElementById(
  "title-second"
) as HTMLHeadingElement;
const langEN = document.getElementById("en") as HTMLInputElement;
const langRU = document.getElementById("ru") as HTMLInputElement;
const langZH = document.getElementById("zh") as HTMLInputElement;
const howItWorks = document.getElementById("how-it-works") as HTMLLinkElement;
const support = document.getElementById("support") as HTMLLinkElement;

langEN.onclick = () => langSwitcher("en");
langRU.onclick = () => langSwitcher("ru");
langZH.onclick = () => langSwitcher("zh_CN");

function langSwitcher(lang) {
  settings.lang = lang;
  plugin.classList.add("effect-lang-switch");
  setTimeout(() => plugin.classList.remove("effect-lang-switch"), 300);

  parent.postMessage(
    {
      pluginMessage: {
        lang: settings.lang,
      },
    },
    "*"
  );

  if (lang === "ru") {
    titleFirst.innerText = "Создать из текста";
    text.placeholder = "Исходный текст для нарезки по правилу";
    paragraph.innerHTML = "Разделить текст после абзаца";
    comma.innerHTML = "Запятой";
    dot.innerHTML = "Точки";
    semicolon.innerHTML = "Точки с запятой";
    titleSecond.innerText = "Создать из случайных";
    nameLabel.innerText = "Имён";
    phoneLabel.innerText = "Телефонных номеров";
    howItWorks.innerText = "Помощь";
    howItWorks.href = "https://t.me/pluginsforfigma";
    support.innerText = "Поддержать автора";
    support.href = "https://www.tinkoff.ru/sl/3sbfX45dVWj";
  } else if (lang === "zh_CN") {
    titleFirst.innerText = "从文本创建";
    text.placeholder = "按规则切片的源文本";
    paragraph.innerHTML = "拆分段落后的文本";
    comma.innerHTML = "逗号";
    dot.innerHTML = "点";
    semicolon.innerHTML = "分号";
    titleSecond.innerText = "从随机创建";
    nameLabel.innerText = "名字'";
    phoneLabel.innerText = "电话号码";
    howItWorks.innerText = "救命！";
    howItWorks.href = "https://t.me/pluginsforfigma";
    support.innerText = "支持作者";
    support.href = "https://www.buymeacoffee.com/milsinery";
  } else {
    titleFirst.innerText = "Create from text";
    text.placeholder = "Source text for division by rule";
    paragraph.innerHTML = "Divide the text into paragraphs";
    comma.innerHTML = "After the comma";
    dot.innerHTML = "Dot";
    semicolon.innerHTML = "Semicolon";
    titleSecond.innerText = "Сreate from random";
    nameLabel.innerText = "Names";
    phoneLabel.innerText = "Phone Numbers";
    howItWorks.innerText = "How it works";
    howItWorks.href =
      "https://www.figma.com/community/plugin/903936058293238810";
    support.innerText = "Support the author";
    support.href = "https://www.buymeacoffee.com/milsinery";
  }
}
