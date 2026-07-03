// Russian Verbs Data
const verbs = [
  { id: 1, english: "to be", russian: "быть", pron: "[bweet]" },
  { id: 2, english: "to say", russian: "сказать", pron: "[skah-ZAHT]" },
  { id: 3, english: "to be able to", russian: "мочь", pron: "[much]" },
  { id: 4, english: "to know", russian: "знать", pron: "[iz-NAHT]" },
  { id: 5, english: "to speak", russian: "говорить", pron: "[goh-vah-REET]", example: "я хочу говорить по-русски" },
  { id: 6, english: "to become", russian: "стать", pron: "[staht]" },
  { id: 7, english: "to want", russian: "хотеть", pron: "[*OH-tyet]" },
  { id: 8, english: "to see", russian: "видеть", pron: "[VEE-dyet]" },
  { id: 9, english: "to go", russian: "идти", pron: "[ee-TYEE]" },
  { id: 10, english: "to stand", russian: "стоять", pron: "[STAH-yet]", example: "Почему ты там стоишь?" },
  { id: 11, english: "to think", russian: "думать", pron: "[DOO-mut]" },
  { id: 12, english: "to ask", russian: "спросить", pron: "[sprah-SEET]" },
  { id: 13, english: "to live", russian: "жить", pron: "[*EET]" },
  { id: 14, english: "to watch", russian: "смотреть", pron: "[smoht-RAYT]" },
  { id: 15, english: "to have", russian: "иметь", pron: "[EE-myit]" },
  { id: 16, english: "to understand (perf.)", russian: "понять", pron: "[POHN-yet]" },
  { id: 17, english: "to sit", russian: "сидеть", pron: "[SEE-dyit]" },
  { id: 18, english: "to make/do", russian: "делать", pron: "[DYEH-lit]" },
  { id: 19, english: "to make/do & finish", russian: "сделать", pron: "[ZDYEH-lit]" },
  { id: 20, english: "to take", russian: "взять", pron: "[VZYET]" },
  { id: 21, english: "to understand (imp.)", russian: "понимать", pron: "[pohn-yah-MAHT]", example: "я понимаю [pohn-yah-MIGH-yoo]" },
  { id: 22, english: "to seem/appear", russian: "казаться", pron: "[koh-ZAHT-tsyah]" },
  { id: 23, english: "to start", russian: "начать", pron: "[nah-CHAHT]" },
  { id: 24, english: "to see", russian: "увидеть", pron: "[oo-VEE-dyit]" },
  { id: 25, english: "to give", russian: "давать", pron: "[da-VAHT]" },
  { id: 26, english: "to set off (go)", russian: "пойти", pron: "[poy-EE-tyah]" },
  { id: 27, english: "to stay", russian: "остаться", pron: "[oh-STAT-tsah]" },
  { id: 28, english: "to exit", russian: "выйти", pron: "[VYEE-tyeh]" },
  { id: 29, english: "to give", russian: "дать", pron: "[dat]" },
  { id: 30, english: "to work", russian: "работать", pron: "[rah-BOH-tyet]" },
  { id: 31, english: "to turn out to be", russian: "оказаться", pron: "[ah-kah-ZAHT-seh]" },
  { id: 32, english: "to answer", russian: "ответить", pron: "[ot-VYE-teet]" },
  { id: 33, english: "to think for awhile", russian: "подумать", pron: "[poh-DOO-met]" },
  { id: 34, english: "to love", russian: "любить", pron: "[LYOO-beet]" },
  { id: 35, english: "to mean", russian: "значить", pron: "[ZNAH-chit]" },
  { id: 36, english: "to wait", russian: "ждать", pron: "[ZHDYAHT]" },
  { id: 37, english: "to look/watch", russian: "посмотреть", pron: "[pohs-mah-TREHT]" },
  { id: 38, english: "to find", russian: "найти", pron: "[NIGH-ee-tyah]" },
  { id: 39, english: "to lie (be situated)", russian: "лежать", pron: "[lyeh-ZHAT]" },
  { id: 40, english: "to decide", russian: "решить", pron: "[ree-SHEET]" },
  { id: 41, english: "to receive", russian: "получить", pron: "[poh-loo-CHEET]" },
  { id: 42, english: "to write", russian: "писать", pron: "[pee-SAHT]" },
  { id: 43, english: "to listen", russian: "слушать", pron: "[SLOO-shit]" },
  { id: 44, english: "to return", russian: "вернуться", pron: "[vehr-NOOT-sah]" },
  { id: 45, english: "to count/consider", russian: "считать", pron: "[shih-TAT]" },
  { id: 46, english: "to remember", russian: "помнить", pron: "[POHM-neet]" },
  { id: 47, english: "to find out", russian: "узнать", pron: "[ooz-NAHT]" },
  { id: 48, english: "to arrive", russian: "прийти", pron: "[PREE-ee-tee]" },
  { id: 49, english: "to walk", russian: "ходить", pron: "[*AH-deet]" },
  { id: 50, english: "to notice", russian: "заметить", pron: "[zahm-YEH-tit]" },
  { id: 51, english: "to read", russian: "читать", pron: "[chee-TAHT]" },
  { id: 52, english: "to eat", russian: "есть", pron: "[yehst]" },
  { id: 53, english: "to drink", russian: "пить", pron: "[peet]" }
];

// Russian Days of the Week Data
const daysItems = [
  { id: 1, english: "Monday", russian: "понедельник", pron: "[ponedel'nik]" },
  { id: 2, english: "Tuesday", russian: "вторник", pron: "[vtornik]" },
  { id: 3, english: "Wednesday", russian: "среда", pron: "[sreda]" },
  { id: 4, english: "Thursday", russian: "четверг", pron: "[chetverg]" },
  { id: 5, english: "Friday", russian: "пятница", pron: "[pyatnitsa]" },
  { id: 6, english: "Saturday", russian: "суббота", pron: "[subota]" },
  { id: 7, english: "Sunday", russian: "воскресенье", pron: "[voskresen'ye]" }
];

// Russian Months of the Year Data
const monthsItems = [
  { id: 1, english: "January", russian: "январь", pron: "[yanvar']" },
  { id: 2, english: "February", russian: "февраль", pron: "[fevral']" },
  { id: 3, english: "March", russian: "март", pron: "[mart]" },
  { id: 4, english: "April", russian: "апрель", pron: "[aprel']" },
  { id: 5, english: "May", russian: "май", pron: "[may]" },
  { id: 6, english: "June", russian: "июнь", pron: "[iyun']" },
  { id: 7, english: "July", russian: "июль", pron: "[iyul']" },
  { id: 8, english: "August", russian: "август", pron: "[avgust]" },
  { id: 9, english: "September", russian: "сентябрь", pron: "[sentyabr']" },
  { id: 10, english: "October", russian: "октябрь", pron: "[oktyabr']" },
  { id: 11, english: "November", russian: "ноябрь", pron: "[noyabr']" },
  { id: 12, english: "December", russian: "декабрь", pron: "[dekabr']" }
];

// Exciting sharp SVG checkmark template
const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="square" stroke-linejoin="miter" style="width: 1.1rem; height: 1.1rem; display: inline-block; vertical-align: middle;"><path d="M4 12l5 5L20 6" /></svg>`;

// App State
let currentTestIndex = 0;
let testOrder = [];

let currentNumTestIndex = 0;
let testNumOrder = [];

let currentDaysTestIndex = 0;
let testDaysOrder = [];

let currentMonthsTestIndex = 0;
let testMonthsOrder = [];

// DOM Elements - Main Pages
const navVerbs = document.getElementById("nav-verbs");
const navNumbers = document.getElementById("nav-numbers");
const navDays = document.getElementById("nav-days");
const navMonths = document.getElementById("nav-months");
const navLearned = document.getElementById("nav-learned");
const pageVerbs = document.getElementById("page-verbs");
const pageNumbers = document.getElementById("page-numbers");
const pageDays = document.getElementById("page-days");
const pageMonths = document.getElementById("page-months");
const pageLearned = document.getElementById("page-learned");

// DOM Elements - Verbs View
const btnModeLearn = document.getElementById("btn-mode-learn");
const btnModeTest = document.getElementById("btn-mode-test");
const viewLearn = document.getElementById("view-learn");
const viewTest = document.getElementById("view-test");
const verbsList = document.getElementById("verbs-list");
const testCard = document.getElementById("test-card");
const testEnglish = document.getElementById("test-english");
const testRussian = document.getElementById("test-russian");
const testCardLabel = document.getElementById("test-card-label");
const testPronunciation = document.getElementById("test-pronunciation");
const testExampleContainer = document.getElementById("test-example-container");
const testExample = document.getElementById("test-example");
const btnNextTest = document.getElementById("btn-next-test");
const testVerbToggleFront = document.getElementById("test-verb-toggle-front");
const testVerbToggleBack = document.getElementById("test-verb-toggle-back");
const testVerbListenLink = document.getElementById("test-verb-listen-link");

// DOM Elements - Numbers View
const btnNumModeLearn = document.getElementById("btn-num-mode-learn");
const btnNumModeTest = document.getElementById("btn-num-mode-test");
const viewNumLearn = document.getElementById("view-num-learn");
const viewNumTest = document.getElementById("view-num-test");
const numbersList = document.getElementById("numbers-list");
const numTestCard = document.getElementById("num-test-card");
const testNumDigit = document.getElementById("test-num-digit");
const testNumCardLabel = document.getElementById("test-num-card-label");
const testNumSpelled = document.getElementById("test-num-spelled");
const testNumListenLink = document.getElementById("test-num-listen-link");
const btnNextNumTest = document.getElementById("btn-next-num-test");
const testNumToggleFront = document.getElementById("test-num-toggle-front");
const testNumToggleBack = document.getElementById("test-num-toggle-back");

// DOM Elements - Days View
const btnDaysModeLearn = document.getElementById("btn-days-mode-learn");
const btnDaysModeTest = document.getElementById("btn-days-mode-test");
const viewDaysLearn = document.getElementById("view-days-learn");
const viewDaysTest = document.getElementById("view-days-test");
const daysList = document.getElementById("days-list");
const daysTestCard = document.getElementById("days-test-card");
const testDaysEnglish = document.getElementById("test-days-english");
const testDaysRussian = document.getElementById("test-days-russian");
const testDaysCardLabel = document.getElementById("test-days-card-label");
const testDaysPronunciation = document.getElementById("test-days-pronunciation");
const testDaysListenLink = document.getElementById("test-days-listen-link");
const btnNextDaysTest = document.getElementById("btn-next-days-test");
const testDaysToggleFront = document.getElementById("test-days-toggle-front");
const testDaysToggleBack = document.getElementById("test-days-toggle-back");

// DOM Elements - Months View
const btnMonthsModeLearn = document.getElementById("btn-months-mode-learn");
const btnMonthsModeTest = document.getElementById("btn-months-mode-test");
const viewMonthsLearn = document.getElementById("view-months-learn");
const viewMonthsTest = document.getElementById("view-months-test");
const monthsList = document.getElementById("months-list");
const monthsTestCard = document.getElementById("months-test-card");
const testMonthsEnglish = document.getElementById("test-months-english");
const testMonthsRussian = document.getElementById("test-months-russian");
const testMonthsCardLabel = document.getElementById("test-months-card-label");
const testMonthsPronunciation = document.getElementById("test-months-pronunciation");
const testMonthsListenLink = document.getElementById("test-months-listen-link");
const btnNextMonthsTest = document.getElementById("btn-next-months-test");
const testMonthsToggleFront = document.getElementById("test-months-toggle-front");
const testMonthsToggleBack = document.getElementById("test-months-toggle-back");

// DOM Elements - Learned Page View
const learnedVerbsTitle = document.getElementById("learned-verbs-title");
const learnedVerbsListCsv = document.getElementById("learned-verbs-list-csv");
const learnedNumbersTitle = document.getElementById("learned-numbers-title");
const learnedNumbersListCsv = document.getElementById("learned-numbers-list-csv");
const learnedDaysTitle = document.getElementById("learned-days-title");
const learnedDaysListCsv = document.getElementById("learned-days-list-csv");
const learnedMonthsTitle = document.getElementById("learned-months-title");
const learnedMonthsListCsv = document.getElementById("learned-months-list-csv");
const btnResetVerbs = document.getElementById("btn-reset-verbs");
const btnResetNumbers = document.getElementById("btn-reset-numbers");
const btnResetDays = document.getElementById("btn-reset-days");
const btnResetMonths = document.getElementById("btn-reset-months");
const btnResetAll = document.getElementById("btn-reset-all");

// DOM Elements - Global Search
const globalSearch = document.getElementById("global-search");
const clearSearch = document.getElementById("clear-search");
const pageSearchResults = document.getElementById("page-search-results");
const searchResultsTitle = document.getElementById("search-results-title");
const searchResultsList = document.getElementById("search-results-list");

// Storage Helpers
function isLearned(type, id) {
  return localStorage.getItem(`${type}-${id}`) === "true";
}

function setLearned(type, id, value) {
  if (value) {
    localStorage.setItem(`${type}-${id}`, "true");
  } else {
    localStorage.removeItem(`${type}-${id}`);
  }
  updateProgressSummary();
}

// Progress summary manager
function updateProgressSummary() {
  const learnedVerbsCount = verbs.filter(v => isLearned("verb", v.id)).length;
  
  let learnedNumsCount = 0;
  for (let i = 1; i <= 100; i++) {
    if (isLearned("number", i)) learnedNumsCount++;
  }

  const learnedDaysCount = daysItems.filter(d => isLearned("days", d.id)).length;
  const learnedMonthsCount = monthsItems.filter(m => isLearned("months", m.id)).length;
  
  const verbPct = (learnedVerbsCount / verbs.length) * 100;
  const numPct = (learnedNumsCount / 100) * 100;
  const daysPct = (learnedDaysCount / daysItems.length) * 100;
  const monthsPct = (learnedMonthsCount / monthsItems.length) * 100;

  const verbHue = verbPct * 1.2;
  const numHue = numPct * 1.2;
  const daysHue = daysPct * 1.2;
  const monthsHue = monthsPct * 1.2;

  const verbEl = document.getElementById("progress-verbs");
  const numEl = document.getElementById("progress-numbers");
  const daysEl = document.getElementById("progress-days");
  const monthsEl = document.getElementById("progress-months");
  const summaryContainer = document.querySelector(".app-progress-summary");

  verbEl.textContent = `${learnedVerbsCount} of ${verbs.length} verbs learned`;
  verbEl.style.color = `hsl(${verbHue}, 85%, 60%)`;

  numEl.textContent = `${learnedNumsCount} of 100 numbers learned`;
  numEl.style.color = `hsl(${numHue}, 85%, 60%)`;

  daysEl.textContent = `${learnedDaysCount} of ${daysItems.length} days learned`;
  daysEl.style.color = `hsl(${daysHue}, 85%, 60%)`;

  monthsEl.textContent = `${learnedMonthsCount} of ${monthsItems.length} months learned`;
  monthsEl.style.color = `hsl(${monthsHue}, 85%, 60%)`;

  // Show/Hide context-dependent items
  const activeNav = document.querySelector(".app-nav .nav-link.active");
  if (activeNav && summaryContainer) {
    if (activeNav.id === "nav-verbs") {
      summaryContainer.style.display = "flex";
      verbEl.style.display = "inline-block";
      numEl.style.display = "none";
      daysEl.style.display = "none";
      monthsEl.style.display = "none";
    } else if (activeNav.id === "nav-numbers") {
      summaryContainer.style.display = "flex";
      verbEl.style.display = "none";
      numEl.style.display = "inline-block";
      daysEl.style.display = "none";
      monthsEl.style.display = "none";
    } else if (activeNav.id === "nav-days") {
      summaryContainer.style.display = "flex";
      verbEl.style.display = "none";
      numEl.style.display = "none";
      daysEl.style.display = "inline-block";
      monthsEl.style.display = "none";
    } else if (activeNav.id === "nav-months") {
      summaryContainer.style.display = "flex";
      verbEl.style.display = "none";
      numEl.style.display = "none";
      daysEl.style.display = "none";
      monthsEl.style.display = "inline-block";
    } else {
      // Learned Page - hide progress header entirely
      summaryContainer.style.display = "none";
    }
  }
}

// Toggle Helper UI
function updateToggleUI(element, state) {
  if (state) {
    element.classList.add("is-learned");
  } else {
    element.classList.remove("is-learned");
  }
  element.innerHTML = CHECK_SVG;
}

// Russian Number spelling translator
function getRussianNumber(n) {
  const ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
  const teens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
  const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
  
  if (n === 100) return "сто";
  if (n >= 10 && n < 20) return teens[n - 10];
  if (n < 10) return ones[n];
  
  const tenDigit = Math.floor(n / 10);
  const oneDigit = n % 10;
  return ones[oneDigit] ? `${tens[tenDigit]} ${ones[oneDigit]}` : tens[tenDigit];
}

// Google Translate URL builder
function getTranslateUrl(text) {
  return `https://translate.google.com/?sl=ru&tl=en&text=${encodeURIComponent(text)}&op=translate`;
}

// Fisher-Yates Shuffle
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Page Navigation
navVerbs.addEventListener("click", () => {
  globalSearch.value = "";
  pageSearchResults.classList.remove("active");
  setActivePage(navVerbs, pageVerbs);
  initVerbsView();
});

navNumbers.addEventListener("click", () => {
  globalSearch.value = "";
  pageSearchResults.classList.remove("active");
  setActivePage(navNumbers, pageNumbers);
  initNumbersView();
});

navDays.addEventListener("click", () => {
  globalSearch.value = "";
  pageSearchResults.classList.remove("active");
  setActivePage(navDays, pageDays);
  initDaysView();
});

navMonths.addEventListener("click", () => {
  globalSearch.value = "";
  pageSearchResults.classList.remove("active");
  setActivePage(navMonths, pageMonths);
  initMonthsView();
});

navLearned.addEventListener("click", () => {
  globalSearch.value = "";
  pageSearchResults.classList.remove("active");
  setActivePage(navLearned, pageLearned);
  renderLearnedPage();
});

function setActivePage(navBtn, pageEl) {
  globalSearch.value = "";
  if (clearSearch) clearSearch.style.display = "none";
  [navVerbs, navNumbers, navDays, navMonths, navLearned].forEach(btn => btn.classList.remove("active"));
  [pageVerbs, pageNumbers, pageDays, pageMonths, pageLearned].forEach(page => page.classList.remove("active"));
  navBtn.classList.add("active");
  pageEl.classList.add("active");
  updateProgressSummary();
  localStorage.setItem("rulearn-active-tab", navBtn.id);
}

// Verbs View Mode switching
btnModeLearn.addEventListener("click", () => {
  btnModeLearn.classList.add("active");
  btnModeTest.classList.remove("active");
  viewLearn.classList.add("active");
  viewTest.classList.remove("active");
  initVerbsView();
  localStorage.setItem("rulearn-verbs-mode", "learn");
});

btnModeTest.addEventListener("click", () => {
  btnModeTest.classList.add("active");
  btnModeLearn.classList.remove("active");
  viewLearn.classList.remove("active");
  viewTest.classList.add("active");
  startNewTest();
  localStorage.setItem("rulearn-verbs-mode", "test");
});

// Numbers View Mode switching
btnNumModeLearn.addEventListener("click", () => {
  btnNumModeLearn.classList.add("active");
  btnNumModeTest.classList.remove("active");
  viewNumLearn.classList.add("active");
  viewNumTest.classList.remove("active");
  initNumbersView();
  localStorage.setItem("rulearn-numbers-mode", "learn");
});

btnNumModeTest.addEventListener("click", () => {
  btnNumModeTest.classList.add("active");
  btnNumModeLearn.classList.remove("active");
  viewNumLearn.classList.remove("active");
  viewNumTest.classList.add("active");
  startNewNumTest();
  localStorage.setItem("rulearn-numbers-mode", "test");
});

// Days View Mode switching
btnDaysModeLearn.addEventListener("click", () => {
  btnDaysModeLearn.classList.add("active");
  btnDaysModeTest.classList.remove("active");
  viewDaysLearn.classList.add("active");
  viewDaysTest.classList.remove("active");
  initDaysView();
  localStorage.setItem("rulearn-days-mode", "learn");
});

btnDaysModeTest.addEventListener("click", () => {
  btnDaysModeTest.classList.add("active");
  btnDaysModeLearn.classList.remove("active");
  viewDaysLearn.classList.remove("active");
  viewDaysTest.classList.add("active");
  startNewDaysTest();
  localStorage.setItem("rulearn-days-mode", "test");
});

// Months View Mode switching
btnMonthsModeLearn.addEventListener("click", () => {
  btnMonthsModeLearn.classList.add("active");
  btnMonthsModeTest.classList.remove("active");
  viewMonthsLearn.classList.add("active");
  viewMonthsTest.classList.remove("active");
  initMonthsView();
  localStorage.setItem("rulearn-months-mode", "learn");
});

btnMonthsModeTest.addEventListener("click", () => {
  btnMonthsModeTest.classList.add("active");
  btnMonthsModeLearn.classList.remove("active");
  viewMonthsLearn.classList.remove("active");
  viewMonthsTest.classList.add("active");
  startNewMonthsTest();
  localStorage.setItem("rulearn-months-mode", "test");
});

// Card Flip Handlers
testCard.addEventListener("click", () => {
  testCard.classList.toggle("flipped");
});

numTestCard.addEventListener("click", () => {
  numTestCard.classList.toggle("flipped");
});

daysTestCard.addEventListener("click", () => {
  daysTestCard.classList.toggle("flipped");
});

monthsTestCard.addEventListener("click", () => {
  monthsTestCard.classList.toggle("flipped");
});

[testVerbToggleFront, testVerbToggleBack].forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const verbIndex = testOrder[currentTestIndex];
    const verb = verbs[verbIndex];
    const nextState = !isLearned("verb", verb.id);
    setLearned("verb", verb.id, nextState);
    updateToggleUI(testVerbToggleFront, nextState);
    updateToggleUI(testVerbToggleBack, nextState);
  });
});

[testNumToggleFront, testNumToggleBack].forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const numValue = testNumOrder[currentNumTestIndex];
    const nextState = !isLearned("number", numValue);
    setLearned("number", numValue, nextState);
    updateToggleUI(testNumToggleFront, nextState);
    updateToggleUI(testNumToggleBack, nextState);
  });
});

[testDaysToggleFront, testDaysToggleBack].forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const dayIndex = testDaysOrder[currentDaysTestIndex];
    const day = daysItems[dayIndex];
    const nextState = !isLearned("days", day.id);
    setLearned("days", day.id, nextState);
    updateToggleUI(testDaysToggleFront, nextState);
    updateToggleUI(testDaysToggleBack, nextState);
  });
});

[testMonthsToggleFront, testMonthsToggleBack].forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const monthIndex = testMonthsOrder[currentMonthsTestIndex];
    const month = monthsItems[monthIndex];
    const nextState = !isLearned("months", month.id);
    setLearned("months", month.id, nextState);
    updateToggleUI(testMonthsToggleFront, nextState);
    updateToggleUI(testMonthsToggleBack, nextState);
  });
});

// Next Button Handlers
btnNextTest.addEventListener("click", (e) => {
  e.stopPropagation();
  testCard.classList.remove("flipped");
  setTimeout(() => {
    nextTestVerb();
  }, 200);
});

btnNextNumTest.addEventListener("click", (e) => {
  e.stopPropagation();
  numTestCard.classList.remove("flipped");
  setTimeout(() => {
    nextTestNum();
  }, 200);
});

btnNextDaysTest.addEventListener("click", (e) => {
  e.stopPropagation();
  daysTestCard.classList.remove("flipped");
  setTimeout(() => {
    nextTestDays();
  }, 200);
});

btnNextMonthsTest.addEventListener("click", (e) => {
  e.stopPropagation();
  monthsTestCard.classList.remove("flipped");
  setTimeout(() => {
    nextTestMonths();
  }, 200);
});

function initVerbsView() {
  verbsList.innerHTML = verbs.map(verb => {
    const isL = isLearned("verb", verb.id);
    const translateUrl = getTranslateUrl(verb.russian);
    return `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleRowState(event, 'verb', ${verb.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">${verb.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${verb.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${verb.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function initNumbersView() {
  const numberCards = [];
  for (let i = 1; i <= 100; i++) {
    const ruSpelling = getRussianNumber(i);
    const translateUrl = getTranslateUrl(ruSpelling);
    const isL = isLearned("number", i);
    numberCards.push(`
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleRowState(event, 'number', ${i})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary); min-width: 24px; flex-shrink: 0;">${i}</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${ruSpelling}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `);
  }
  numbersList.innerHTML = numberCards.join('');
}

function initDaysView() {
  daysList.innerHTML = daysItems.map(day => {
    const isL = isLearned("days", day.id);
    const translateUrl = getTranslateUrl(day.russian);
    return `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleRowState(event, 'days', ${day.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">${day.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${day.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${day.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function initMonthsView() {
  monthsList.innerHTML = monthsItems.map(month => {
    const isL = isLearned("months", month.id);
    const translateUrl = getTranslateUrl(month.russian);
    return `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleRowState(event, 'months', ${month.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">${month.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${month.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${month.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Row toggling helper (whole card click target)
window.toggleRowState = function(e, type, id) {
  const nextState = !isLearned(type, id);
  setLearned(type, id, nextState);
  
  const card = e.currentTarget;
  card.classList.toggle("row-learned", nextState);
  
  const btn = card.querySelector(".learned-toggle");
  if (btn) {
    updateToggleUI(btn, nextState);
  }
  
  if (pageLearned.classList.contains("active")) {
    renderLearnedPage();
  }
};

// Global toggle dispatcher for in-list star buttons & click-to-unlearn triggers
window.toggleListItemState = function(e, type, id) {
  e.stopPropagation();
  const nextState = !isLearned(type, id);
  setLearned(type, id, nextState);
  
  const btn = e.currentTarget;
  updateToggleUI(btn, nextState);
  
  // Highlight row if it exists in a list
  const card = btn.closest(".verb-card");
  if (card) {
    card.classList.toggle("row-learned", nextState);
  }
  
  // If we are on the learned list page, re-render it directly
  if (pageLearned.classList.contains("active")) {
    renderLearnedPage();
  }
};

// Verbs Testing Logic
function startNewTest() {
  let testList = verbs.filter(v => !isLearned("verb", v.id));
  if (testList.length === 0) {
    alert(`You've learned all ${verbs.length} verbs! Testing on all verbs instead.`);
    testList = verbs;
  }
  testOrder = shuffle(testList.map(v => verbs.indexOf(v)));
  currentTestIndex = 0;
  loadTestVerb();
}

function loadTestVerb() {
  testCard.classList.remove("flipped");
  const verbIndex = testOrder[currentTestIndex];
  const verb = verbs[verbIndex];

  testEnglish.textContent = verb.english;
  testCardLabel.textContent = `verb #${verb.id}`;
  testRussian.textContent = verb.russian;
  testPronunciation.textContent = verb.pron;
  
  if (testVerbListenLink) {
    testVerbListenLink.href = getTranslateUrl(verb.russian);
  }

  const isL = isLearned("verb", verb.id);
  updateToggleUI(testVerbToggleFront, isL);
  updateToggleUI(testVerbToggleBack, isL);

  if (verb.example) {
    testExampleContainer.style.display = "block";
    testExample.textContent = verb.example;
  } else {
    testExampleContainer.style.display = "none";
  }
}

function nextTestVerb() {
  currentTestIndex++;
  if (currentTestIndex >= testOrder.length) {
    alert("You completed the active verbs list! Starting another randomized run.");
    startNewTest();
  } else {
    loadTestVerb();
  }
}

// Numbers Testing Logic
function startNewNumTest() {
  const numRange = Array.from({ length: 100 }, (_, i) => i + 1);
  let testList = numRange.filter(n => !isLearned("number", n));
  if (testList.length === 0) {
    alert("You've learned all 100 numbers! Testing on all numbers instead.");
    testList = numRange;
  }
  testNumOrder = shuffle(testList);
  currentNumTestIndex = 0;
  loadTestNum();
}

function loadTestNum() {
  numTestCard.classList.remove("flipped");
  const numValue = testNumOrder[currentNumTestIndex];
  const ruSpelling = getRussianNumber(numValue);

  testNumDigit.textContent = numValue;
  testNumCardLabel.textContent = `Number #${numValue}`;
  testNumSpelled.textContent = ruSpelling;
  testNumListenLink.href = getTranslateUrl(ruSpelling);

  const isL = isLearned("number", numValue);
  updateToggleUI(testNumToggleFront, isL);
  updateToggleUI(testNumToggleBack, isL);
}

function nextTestNum() {
  currentNumTestIndex++;
  if (currentNumTestIndex >= testNumOrder.length) {
    alert("You completed the active numbers list! Starting another randomized run.");
    startNewNumTest();
  } else {
    loadTestNum();
  }
}

// Days Testing Logic
function startNewDaysTest() {
  let testList = daysItems.filter(d => !isLearned("days", d.id));
  if (testList.length === 0) {
    alert(`You've learned all ${daysItems.length} days! Testing on all days instead.`);
    testList = daysItems;
  }
  testDaysOrder = shuffle(testList.map(d => daysItems.indexOf(d)));
  currentDaysTestIndex = 0;
  loadTestDay();
}

function loadTestDay() {
  daysTestCard.classList.remove("flipped");
  const dayIndex = testDaysOrder[currentDaysTestIndex];
  const day = daysItems[dayIndex];

  testDaysEnglish.textContent = day.english;
  testDaysCardLabel.textContent = `day #${day.id}`;
  testDaysRussian.textContent = day.russian;
  testDaysPronunciation.textContent = day.pron;
  
  if (testDaysListenLink) {
    testDaysListenLink.href = getTranslateUrl(day.russian);
  }

  const isL = isLearned("days", day.id);
  updateToggleUI(testDaysToggleFront, isL);
  updateToggleUI(testDaysToggleBack, isL);
}

function nextTestDays() {
  currentDaysTestIndex++;
  if (currentDaysTestIndex >= testDaysOrder.length) {
    alert("You completed the active days list! Starting another randomized run.");
    startNewDaysTest();
  } else {
    loadTestDay();
  }
}

// Months Testing Logic
function startNewMonthsTest() {
  let testList = monthsItems.filter(m => !isLearned("months", m.id));
  if (testList.length === 0) {
    alert(`You've learned all ${monthsItems.length} months! Testing on all months instead.`);
    testList = monthsItems;
  }
  testMonthsOrder = shuffle(testList.map(m => monthsItems.indexOf(m)));
  currentMonthsTestIndex = 0;
  loadTestMonth();
}

function loadTestMonth() {
  monthsTestCard.classList.remove("flipped");
  const monthIndex = testMonthsOrder[currentMonthsTestIndex];
  const month = monthsItems[monthIndex];

  testMonthsEnglish.textContent = month.english;
  testMonthsCardLabel.textContent = `month #${month.id}`;
  testMonthsRussian.textContent = month.russian;
  testMonthsPronunciation.textContent = month.pron;
  
  if (testMonthsListenLink) {
    testMonthsListenLink.href = getTranslateUrl(month.russian);
  }

  const isL = isLearned("months", month.id);
  updateToggleUI(testMonthsToggleFront, isL);
  updateToggleUI(testMonthsToggleBack, isL);
}

function nextTestMonths() {
  currentMonthsTestIndex++;
  if (currentMonthsTestIndex >= testMonthsOrder.length) {
    alert("You completed the active months list! Starting another randomized run.");
    startNewMonthsTest();
  } else {
    loadTestMonth();
  }
}

// Click to reveal answer logic inside learned tags
window.toggleRevealLearned = function(el) {
  el.classList.toggle("is-revealed");
  const val = el.querySelector(".learned-val");
  const ans = el.querySelector(".learned-ans");
  const x = el.querySelector(".unlearn-x");
  if (el.classList.contains("is-revealed")) {
    val.style.display = "none";
    ans.style.display = "inline";
    x.style.display = "inline-block";
  } else {
    val.style.display = "inline";
    ans.style.display = "none";
    x.style.display = "none";
  }
};

// Render Learned Page Lists
function renderLearnedPage() {
  // Learned Verbs
  const learnedVerbs = verbs.filter(verb => isLearned("verb", verb.id));
  const verbPct = (learnedVerbs.length / verbs.length) * 100;
  const verbHue = verbPct * 1.2;
  
  learnedVerbsTitle.textContent = `${learnedVerbs.length} of ${verbs.length} verbs learned`;
  learnedVerbsTitle.style.color = `hsl(${verbHue}, 85%, 60%)`;
  
  if (learnedVerbs.length === 0) {
    learnedVerbsListCsv.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">No verbs learned yet.</span>`;
  } else {
    // Generate inline elements without comma separators
    learnedVerbsListCsv.innerHTML = learnedVerbs.map(verb => `
      <span class="learned-csv-item" onclick="toggleRevealLearned(this)">
        <span class="learned-val">${verb.russian}</span>
        <span class="learned-ans" style="display: none; color: #10b981; margin-left: 6px; font-weight: 600;"><span style="color: var(--text-muted); font-weight: normal; margin-right: 4px; font-size: 0.72rem;">${verb.id}:</span>${verb.english}</span>
        <span class="unlearn-x" onclick="event.stopPropagation(); toggleListItemState(event, 'verb', ${verb.id});" title="unlearn" style="display: none; color: #ef4444; margin-left: 10px; cursor: pointer; font-weight: bold; font-size: 1rem; padding: 0 4px;">✖</span>
      </span>
    `).join('');
  }

  // Learned Numbers
  const learnedNums = [];
  for (let i = 1; i <= 100; i++) {
    if (isLearned("number", i)) {
      learnedNums.push(i);
    }
  }
  
  const numPct = (learnedNums.length / 100) * 100;
  const numHue = numPct * 1.2;
  
  learnedNumbersTitle.textContent = `${learnedNums.length} of 100 numbers learned`;
  learnedNumbersTitle.style.color = `hsl(${numHue}, 85%, 60%)`;

  if (learnedNums.length === 0) {
    learnedNumbersListCsv.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">No numbers learned yet.</span>`;
  } else {
    // Generate inline elements without comma separators
    learnedNumbersListCsv.innerHTML = learnedNums.map(i => {
      const ruSpelling = getRussianNumber(i);
      return `
        <span class="learned-csv-item" onclick="toggleRevealLearned(this)">
          <span class="learned-val">${i}</span>
          <span class="learned-ans" style="display: none; color: #10b981; margin-left: 6px; font-weight: 600;">${ruSpelling}</span>
          <span class="unlearn-x" onclick="event.stopPropagation(); toggleListItemState(event, 'number', ${i});" title="unlearn" style="display: none; color: #ef4444; margin-left: 10px; cursor: pointer; font-weight: bold; font-size: 1rem; padding: 0 4px;">✖</span>
        </span>
      `;
    }).join('');
  }

  // Learned Days
  const learnedDays = daysItems.filter(day => isLearned("days", day.id));
  const daysPct = (learnedDays.length / daysItems.length) * 100;
  const daysHue = daysPct * 1.2;
  
  learnedDaysTitle.textContent = `${learnedDays.length} of ${daysItems.length} days learned`;
  learnedDaysTitle.style.color = `hsl(${daysHue}, 85%, 60%)`;

  if (learnedDays.length === 0) {
    learnedDaysListCsv.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">No days learned yet.</span>`;
  } else {
    learnedDaysListCsv.innerHTML = learnedDays.map(day => `
      <span class="learned-csv-item" onclick="toggleRevealLearned(this)">
        <span class="learned-val">${day.russian}</span>
        <span class="learned-ans" style="display: none; color: #10b981; margin-left: 6px; font-weight: 600;"><span style="color: var(--text-muted); font-weight: normal; margin-right: 4px; font-size: 0.72rem;">${day.id}:</span>${day.english}</span>
        <span class="unlearn-x" onclick="event.stopPropagation(); toggleListItemState(event, 'days', ${day.id});" title="unlearn" style="display: none; color: #ef4444; margin-left: 10px; cursor: pointer; font-weight: bold; font-size: 1rem; padding: 0 4px;">✖</span>
      </span>
    `).join('');
  }

  // Learned Months
  const learnedMonths = monthsItems.filter(month => isLearned("months", month.id));
  const monthsPct = (learnedMonths.length / monthsItems.length) * 100;
  const monthsHue = monthsPct * 1.2;

  learnedMonthsTitle.textContent = `${learnedMonths.length} of ${monthsItems.length} months learned`;
  learnedMonthsTitle.style.color = `hsl(${monthsHue}, 85%, 60%)`;

  if (learnedMonths.length === 0) {
    learnedMonthsListCsv.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">No months learned yet.</span>`;
  } else {
    learnedMonthsListCsv.innerHTML = learnedMonths.map(month => `
      <span class="learned-csv-item" onclick="toggleRevealLearned(this)">
        <span class="learned-val">${month.russian}</span>
        <span class="learned-ans" style="display: none; color: #10b981; margin-left: 6px; font-weight: 600;"><span style="color: var(--text-muted); font-weight: normal; margin-right: 4px; font-size: 0.72rem;">${month.id}:</span>${month.english}</span>
        <span class="unlearn-x" onclick="event.stopPropagation(); toggleListItemState(event, 'months', ${month.id});" title="unlearn" style="display: none; color: #ef4444; margin-left: 10px; cursor: pointer; font-weight: bold; font-size: 1rem; padding: 0 4px;">✖</span>
      </span>
    `).join('');
  }
}

// Reset Handlers
btnResetAll.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset all learned verbs, numbers, days, and months?")) {
    // Clear verbs
    verbs.forEach(v => localStorage.removeItem(`verb-${v.id}`));
    // Clear numbers
    for (let i = 1; i <= 100; i++) {
      localStorage.removeItem(`number-${i}`);
    }
    // Clear days
    daysItems.forEach(d => localStorage.removeItem(`days-${d.id}`));
    // Clear months
    monthsItems.forEach(m => localStorage.removeItem(`months-${m.id}`));
    updateProgressSummary();
    renderLearnedPage();
  }
});

btnResetVerbs.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset only learned verbs?")) {
    verbs.forEach(v => localStorage.removeItem(`verb-${v.id}`));
    updateProgressSummary();
    renderLearnedPage();
  }
});

btnResetNumbers.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset only learned numbers?")) {
    for (let i = 1; i <= 100; i++) {
      localStorage.removeItem(`number-${i}`);
    }
    updateProgressSummary();
    renderLearnedPage();
  }
});

btnResetDays.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset only learned days?")) {
    daysItems.forEach(d => localStorage.removeItem(`days-${d.id}`));
    updateProgressSummary();
    renderLearnedPage();
  }
});

btnResetMonths.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset only learned months?")) {
    monthsItems.forEach(m => localStorage.removeItem(`months-${m.id}`));
    updateProgressSummary();
    renderLearnedPage();
  }
});

// Search Row Click Event Helper
window.toggleSearchRowState = function(e, type, id) {
  const nextState = !isLearned(type, id);
  setLearned(type, id, nextState);
  
  const card = e.currentTarget;
  card.classList.toggle("row-learned", nextState);
  
  const btn = card.querySelector(".learned-toggle");
  if (btn) {
    btn.classList.toggle("is-learned", nextState);
  }
  updateProgressSummary();
};

// Global Search Event Handler & Renderer
globalSearch.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();
  if (query === "") {
    clearSearch.style.display = "none";
    pageSearchResults.classList.remove("active");
    const activeNav = document.querySelector(".app-nav .nav-link.active");
    if (activeNav) {
      if (activeNav.id === "nav-verbs") {
        pageVerbs.classList.add("active");
      } else if (activeNav.id === "nav-numbers") {
        pageNumbers.classList.add("active");
      } else if (activeNav.id === "nav-days") {
        pageDays.classList.add("active");
      } else if (activeNav.id === "nav-months") {
        pageMonths.classList.add("active");
      } else if (activeNav.id === "nav-learned") {
        pageLearned.classList.add("active");
      }
    }
    updateProgressSummary();
  } else {
    clearSearch.style.display = "inline-flex";
    [pageVerbs, pageNumbers, pageDays, pageMonths, pageLearned].forEach(page => page.classList.remove("active"));
    pageSearchResults.classList.add("active");
    const summaryContainer = document.querySelector(".app-progress-summary");
    if (summaryContainer) summaryContainer.style.display = "none";
    performGlobalSearch(query);
  }
});

clearSearch.addEventListener("click", () => {
  globalSearch.value = "";
  clearSearch.style.display = "none";
  pageSearchResults.classList.remove("active");
  const activeNav = document.querySelector(".app-nav .nav-link.active");
  if (activeNav) {
    if (activeNav.id === "nav-verbs") {
      pageVerbs.classList.add("active");
    } else if (activeNav.id === "nav-numbers") {
      pageNumbers.classList.add("active");
    } else if (activeNav.id === "nav-days") {
      pageDays.classList.add("active");
    } else if (activeNav.id === "nav-months") {
      pageMonths.classList.add("active");
    } else if (activeNav.id === "nav-learned") {
      pageLearned.classList.add("active");
    }
  }
  updateProgressSummary();
});

function performGlobalSearch(query) {
  const matchVerbs = verbs.filter(v => 
    v.russian.toLowerCase().includes(query) || 
    v.english.toLowerCase().includes(query)
  );

  const matchNums = [];
  for (let i = 1; i <= 100; i++) {
    const ruSpelling = getRussianNumber(i);
    if (i.toString().includes(query) || ruSpelling.toLowerCase().includes(query)) {
      matchNums.push({ val: i, ru: ruSpelling });
    }
  }

  const matchDays = daysItems.filter(d =>
    d.russian.toLowerCase().includes(query) ||
    d.english.toLowerCase().includes(query)
  );

  const matchMonths = monthsItems.filter(m =>
    m.russian.toLowerCase().includes(query) ||
    m.english.toLowerCase().includes(query)
  );

  const totalMatches = matchVerbs.length + matchNums.length + matchDays.length + matchMonths.length;
  searchResultsTitle.textContent = `${totalMatches} matches found`;

  let html = "";
  
  // Verbs results
  matchVerbs.forEach(verb => {
    const isL = isLearned("verb", verb.id);
    const translateUrl = getTranslateUrl(verb.russian);
    html += `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleSearchRowState(event, 'verb', ${verb.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">${verb.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${verb.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${verb.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  });

  // Numbers results
  matchNums.forEach(num => {
    const isL = isLearned("number", num.val);
    const translateUrl = getTranslateUrl(num.ru);
    html += `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleSearchRowState(event, 'number', ${num.val})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary); min-width: 24px; flex-shrink: 0;">${num.val}</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${num.ru}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  });

  // Days results
  matchDays.forEach(day => {
    const isL = isLearned("days", day.id);
    const translateUrl = getTranslateUrl(day.russian);
    html += `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleSearchRowState(event, 'days', ${day.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">D${day.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${day.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${day.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  });

  // Months results
  matchMonths.forEach(month => {
    const isL = isLearned("months", month.id);
    const translateUrl = getTranslateUrl(month.russian);
    html += `
      <div class="verb-card ${isL ? 'row-learned' : ''}" onclick="toggleSearchRowState(event, 'months', ${month.id})">
        <div class="verb-row-left" style="display: flex; align-items: baseline; gap: 8px; flex-grow: 1; min-width: 0;">
          <span class="verb-number" style="background: none; padding: 0; font-size: 0.85rem; font-weight: 500; min-width: 24px; flex-shrink: 0;">M${month.id}.</span>
          <div style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px; min-width: 0;">
            <strong style="color: var(--text-primary); font-size: 1rem; font-weight: 600; white-space: nowrap;">${month.russian}</strong>
            <span style="color: var(--text-secondary); font-size: 0.85rem;">${month.english}</span>
          </div>
        </div>
        <div class="verb-actions" style="gap: 16px; flex-shrink: 0;">
          <a href="${translateUrl}" target="_blank" class="listen-link" onclick="event.stopPropagation();" style="color: var(--accent-color); text-decoration: none; font-size: 1.1rem; padding: 8px;">
            🔊
          </a>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" style="padding: 8px 12px; pointer-events: none;">
            ${CHECK_SVG}
          </button>
        </div>
      </div>
    `;
  });

  if (html === "") {
    searchResultsList.innerHTML = `<span style="color: var(--text-muted); font-style: italic; padding: 16px; display: block; text-align: center;">No matches found. Try another query!</span>`;
  } else {
    searchResultsList.innerHTML = html;
  }
}

// App Entry Point
updateProgressSummary();

// Restore view states from localStorage
const savedTab = localStorage.getItem("rulearn-active-tab");
const savedVerbsMode = localStorage.getItem("rulearn-verbs-mode") || "learn";
const savedNumbersMode = localStorage.getItem("rulearn-numbers-mode") || "learn";
const savedDaysMode = localStorage.getItem("rulearn-days-mode") || "learn";
const savedMonthsMode = localStorage.getItem("rulearn-months-mode") || "learn";

// Restore modes
if (savedVerbsMode === "test") {
  btnModeTest.click();
} else {
  btnModeLearn.click();
}

if (savedNumbersMode === "test") {
  btnNumModeTest.click();
} else {
  btnNumModeLearn.click();
}

if (savedDaysMode === "test") {
  btnDaysModeTest.click();
} else {
  btnDaysModeLearn.click();
}

if (savedMonthsMode === "test") {
  btnMonthsModeTest.click();
} else {
  btnMonthsModeLearn.click();
}

// Restore tab
if (savedTab === "nav-numbers") {
  navNumbers.click();
} else if (savedTab === "nav-days") {
  navDays.click();
} else if (savedTab === "nav-months") {
  navMonths.click();
} else if (savedTab === "nav-learned") {
  navLearned.click();
} else {
  navVerbs.click();
}

// Fade in page after state restoration is complete
document.body.classList.add("loaded");
