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
const helpText1 = document.getElementById("help-text-1") as HTMLParagraphElement;
const helpText2 = document.getElementById("help-text-2") as HTMLParagraphElement;
const helpText3 = document.getElementById("help-text-3") as HTMLParagraphElement;
const helpText4 = document.getElementById("help-text-4") as HTMLParagraphElement;
const helpText5 = document.getElementById("help-text-5") as HTMLParagraphElement;
const helpHead1 = document.getElementById("help-head-1") as HTMLHeadingElement;
const helpHead2 = document.getElementById("help-head-2") as HTMLHeadingElement;
const closer = document.getElementById("closer") as HTMLButtonElement;

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
    support.innerText = "Поддержать автора";
    support.href = "https://www.tinkoff.ru/sl/3sbfX45dVWj";
    helpHead1.innerText = "Создать копии объекта";
    helpHead2.innerText = "Вставить копии в выбранный фрейм";
    helpText1.innerText = "Окно плагина всего лишь формирует текст — вы можете разделить свой текст по одному из правил или использовать генерируемые данные.";
    helpText2.innerText = "Результат будет зависеть от того, что выбрано в макете.";
    helpText3.innerText = "Если вы хотите создать копии объекта — выберите текстовый слой внутри него и примените одну из функций плагина.";
    helpText4.innerText = "Если вы хотите вставить готовые копии объекта в определённый фрейм, то выберите также фрейм для вставки.";
    helpText5.innerText = "Вы можете не выбирать объект для копирования и фрейм для вставки — в первом случае текст будет вставлен в макет в виде разделённых текстовых слоёв. Во втором — текст или копии объекта будут упакованы в специальный фрейм.";
    closer.innerText = "Закрыть";
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
    support.innerText = "支持作者";
    support.href = "https://www.buymeacoffee.com/milsinery";
    helpHead1.innerText = "创建对象的副本";
    helpHead2.innerText = "将副本插入所选帧";
    helpText1.innerText = "插件窗口只生成文本—您可以根据其中一个规则拆分文本或使用生成的数据。";
    helpText2.innerText = "结果将取决于在布局中选择的内容。";
    helpText3.innerText = "如果要创建对象的副本，请选择其中的文本层并使用其中一个插件函数。";
    helpText4.innerText = "如果要在特定帧中插入对象的现成副本，请选择要插入的帧。";
    helpText5.innerText = "您可以选择不选择要复制和粘贴框架的对象-在第一种情况下，文本将以分隔文本图层的形式粘贴到布局中。 在第二种情况下，对象的文本或副本将被打包在一个特殊的框架中。";
    closer.innerText = "关闭";
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
    support.innerText = "Support the author";
    support.href = "https://www.buymeacoffee.com/milsinery";
    helpHead1.innerText = "Create copies of an object";
    helpHead2.innerText = "Insert copies into the selected frame";
    helpText1.innerText = "The plugin window only generates text — you can split your text according to one of the rules or use the generated data.";
    helpText2.innerText = "The result will depend on what is selected in the layout.";
    helpText3.innerText = "If you want to create copies of an object, select the text layer inside it and use one of the plugin functions.";
    helpText4.innerText = "If you want to insert ready-made copies of an object in a specific frame, select the frame to insert as well.";
    helpText5.innerText = "You can choose not to select the object you want to copy and frame for paste — in the first case the text will be pasted to the layout in the form of delimited text layers.";
    closer.innerText = "Close";
  }
}

// help functional
const help = document.getElementById("help") as HTMLDivElement;

howItWorks.onclick = () => {
  help.classList.add("plugin__help_active");
}

closer.onclick =() => {
  help.classList.remove("plugin__help_active");
};