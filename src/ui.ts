import "./ui.css";

// default init
const settings = { lang: "en" };

// add ui in-effect
const plugin = document.getElementById("plugin");
plugin.classList.add("effect-in");
setTimeout(() => plugin.classList.remove("effect-in"), 600);

// default data for code
parent.postMessage(
  {
    pluginMessage: {
      range: 0,
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
const space = document.getElementById("space") as HTMLButtonElement;

setTimeout(() => text.focus(), 100);

paragraph.onclick = () => action("s*\ns*");
dot.onclick = () => action("s*\\.s*");
comma.onclick = () => action("s*,s*");
semicolon.onclick = () => action("s*;s*");
space.onclick = () => action("s* s*");

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
const names = document.getElementById("names") as HTMLInputElement;
const phones = document.getElementById("phones") as HTMLInputElement;
const addresses = document.getElementById("addresses") as HTMLInputElement;
const cities = document.getElementById("cities") as HTMLInputElement;
const emails = document.getElementById("emails") as HTMLInputElement;
const paragraphs = document.getElementById("paragraphs") as HTMLInputElement;

names.onclick = () => randomRangeAction("names", names);
phones.onclick = () => randomRangeAction("phones", phones);
addresses.onclick = () => randomRangeAction("addresses", addresses);
cities.onclick = () => randomRangeAction("cities", cities);
emails.onclick = () => randomRangeAction("emails", emails);
paragraphs.onclick = () => randomRangeAction("paragraphs", paragraphs);

function randomRangeAction(type, range) {
  parent.postMessage(
    {
      pluginMessage: {
        range: range.value,
        randomType: type,
        lang: settings.lang,
      },
    },
    "*"
  );

  range.value = "0";
}

// language switch functional
const titleSecond = document.getElementById(
  "title-second"
) as HTMLHeadingElement;
const btnNames = document.getElementById("btn-names") as HTMLButtonElement;
const btnPhones = document.getElementById("btn-phones") as HTMLButtonElement;
const btnAddresses = document.getElementById(
  "btn-addresses"
) as HTMLButtonElement;
const btnCities = document.getElementById("btn-cities") as HTMLButtonElement;
const btnEmails = document.getElementById("btn-emails") as HTMLButtonElement;
const btnParagraphs = document.getElementById(
  "btn-paragraphs"
) as HTMLButtonElement;
const langEN = document.getElementById("en") as HTMLInputElement;
const langRU = document.getElementById("ru") as HTMLInputElement;
const langZH = document.getElementById("zh") as HTMLInputElement;
const howItWorks = document.getElementById("how-it-works") as HTMLLinkElement;
const support = document.getElementById("support") as HTMLLinkElement;
const helpText1 = document.getElementById(
  "help-text-1"
) as HTMLParagraphElement;
const helpText2 = document.getElementById(
  "help-text-2"
) as HTMLParagraphElement;
const helpText3 = document.getElementById(
  "help-text-3"
) as HTMLParagraphElement;
const helpText4 = document.getElementById(
  "help-text-4"
) as HTMLParagraphElement;
const helpText5 = document.getElementById(
  "help-text-5"
) as HTMLParagraphElement;
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
    text.placeholder = "Ваш текст для создания слоёв";
    paragraph.innerHTML = "Разделить по абзацам";
    comma.innerHTML = "После запятых";
    dot.innerHTML = "Точек";
    semicolon.innerHTML = "Точек с запятой";
    space.innerHTML = "Пробелов";
    titleSecond.innerText = "или создать из случайных";
    btnNames.innerHTML = "Имён";
    btnPhones.innerHTML = "Телефонных номеров";
    btnCities.innerHTML = "Названий городов";
    btnAddresses.innerHTML = "Адресов";
    btnEmails.innerHTML = "Эмейлов";
    btnParagraphs.innerHTML = "Параграфов";
    howItWorks.innerHTML = "Помощь";
    support.innerText = "Поддержать автора";
    support.href = "https://www.tinkoff.ru/sl/3sbfX45dVWj";
    helpHead1.innerText = "Создать копии объекта";
    helpHead2.innerText = "Вставить копии в выбранный фрейм";
    helpText1.innerText =
      "Окно плагина всего лишь формирует текст — вы можете разделить свой текст по одному из правил или использовать генерируемые данные.";
    helpText2.innerText =
      "Результат будет зависеть от того, что выбрано в макете.";
    helpText3.innerText =
      "Если вы хотите создать копии объекта — выберите текстовый слой внутри него и примените одну из функций плагина.";
    helpText4.innerText =
      "Если вы хотите вставить готовые копии объекта в определённый фрейм, то выберите также фрейм для вставки.";
    helpText5.innerText =
      "Вы можете не выбирать объект для копирования и фрейм для вставки — в первом случае текст будет вставлен в макет в виде разделённых текстовых слоёв. Во втором — текст или копии объекта будут упакованы в специальный фрейм.";
    closer.innerText = "Закрыть";
  } else if (lang === "zh_CN") {
    text.placeholder = "您想要切分的文本";
    paragraph.innerHTML = "将文字分段";
    comma.innerHTML = "通过逗号分段";
    dot.innerHTML = "通过句号分段";
    semicolon.innerHTML = "通过分号分段";
    space.innerHTML = "通过空格分段";
    titleSecond.innerText = "创建文字";
    btnNames.innerHTML = "随机名字";
    btnPhones.innerHTML = "随机电话号";
    btnCities.innerHTML = "随机城市名称";
    btnAddresses.innerHTML = "随机地址";
    btnEmails.innerHTML = "随机电子邮箱";
    btnParagraphs.innerHTML = "随机片段";
    howItWorks.innerText = "帮助";
    support.innerText = "联系我们";
    support.href = "https://www.buymeacoffee.com/milsinery";
    helpHead1.innerText = "创建对象副本";
    helpHead2.innerText = "将副本插入所选框架";
    helpText1.innerText =
      "插件窗口仅生成文本，您可以按规定细则切分自己的文章或使用生成的数据。";
    helpText2.innerText = "在模版中的选择决定您的结果。";
    helpText3.innerText =
      "如果要创建对象副本，请选择所给文本层并使用一个相应插件功能。";
    helpText4.innerText = "如果要在特定框架中粘贴现成副本，请同时选择框架。";
    helpText5.innerText =
      "您可以不选择要复制粘贴的对象或不选择特定框架，第一种情况，文本将以分好的形式粘贴到模版中。 第二种情况，文本或副本将包装在特种框架中。";
    closer.innerText = "特写";
  } else {
    text.placeholder = "Your text for creating layers";
    paragraph.innerHTML = "Divide the text into paragraphs";
    comma.innerHTML = "After the comma";
    dot.innerHTML = "Dot";
    semicolon.innerHTML = "Semicolon";
    space.innerHTML = "Spaces";
    titleSecond.innerText = "or create from random";
    btnNames.innerHTML = "Names";
    btnPhones.innerHTML = "Phone numbers";
    btnCities.innerHTML = "City names";
    btnAddresses.innerHTML = "Addresses";
    btnEmails.innerHTML = "E-mail addresses";
    btnParagraphs.innerHTML = "Paragraphs";
    howItWorks.innerText = "How it works";
    support.innerText = "Support the author";
    support.href = "https://www.buymeacoffee.com/milsinery";
    helpHead1.innerText = "Create copies of an object";
    helpHead2.innerText = "Insert copies into the selected frame";
    helpText1.innerText =
      "The plugin window only generates text — you can split your text according to one of the rules or use the generated data.";
    helpText2.innerText =
      "The result will depend on what is selected in the layout.";
    helpText3.innerText =
      "If you want to create copies of an object, select the text layer inside it and use one of the plugin functions.";
    helpText4.innerText =
      "If you want to insert ready-made copies of an object in a specific frame, select the frame to insert as well.";
    helpText5.innerText =
      "You can choose not to select the object you want to copy and frame for paste — in the first case the text will be pasted to the layout in the form of delimited text layers.";
    closer.innerText = "Close";
  }
}

// help functional
const help = document.getElementById("help") as HTMLDivElement;

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") help.classList.remove("plugin__help_active");
});

howItWorks.onclick = () => {
  help.classList.add("plugin__help_active");
};

closer.onclick = () => {
  help.classList.remove("plugin__help_active");
};
