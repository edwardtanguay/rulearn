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
  { id: 16, english: "to understand (perfective)", russian: "понять", pron: "[POHN-yet]" },
  { id: 17, english: "to sit", russian: "сидеть", pron: "[SEE-dyit]" },
  { id: 18, english: "to make/do", russian: "делать", pron: "[DYEH-lit]" },
  { id: 19, english: "to make/do and finish it", russian: "сделать", pron: "[ZDYEH-lit]" },
  { id: 20, english: "to take", russian: "взять", pron: "[VZYET]" },
  { id: 21, english: "to understand (imperfective)", russian: "понимать", pron: "[pohn-yah-MAHT]", example: "я понимаю [pohn-yah-MIGH-yoo]" },
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
  { id: 50, english: "to notice", russian: "заметить", pron: "[zahm-YEH-tit]" }
];

// App State
let currentTestIndex = 0;
let testOrder = [];

let currentNumTestIndex = 0;
let testNumOrder = [];

// DOM Elements - Main Pages
const navVerbs = document.getElementById("nav-verbs");
const navNumbers = document.getElementById("nav-numbers");
const navLearned = document.getElementById("nav-learned");
const pageVerbs = document.getElementById("page-verbs");
const pageNumbers = document.getElementById("page-numbers");
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

// DOM Elements - Learned Page View
const learnedVerbsList = document.getElementById("learned-verbs-list");
const learnedNumbersList = document.getElementById("learned-numbers-list");
const btnResetVerbs = document.getElementById("btn-reset-verbs");
const btnResetNumbers = document.getElementById("btn-reset-numbers");

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
  
  const verbPct = (learnedVerbsCount / 50) * 100;
  const numPct = (learnedNumsCount / 100) * 100;

  const verbHue = verbPct * 1.2;
  const numHue = numPct * 1.2;

  const verbEl = document.getElementById("progress-verbs");
  const numEl = document.getElementById("progress-numbers");
  const divider = document.querySelector(".progress-divider");

  verbEl.textContent = `${learnedVerbsCount} of 50 verbs learned`;
  verbEl.style.color = `hsl(${verbHue}, 85%, 60%)`;

  numEl.textContent = `${learnedNumsCount} of 100 numbers learned`;
  numEl.style.color = `hsl(${numHue}, 85%, 60%)`;

  // Show/Hide context-dependent items
  const activeNav = document.querySelector(".app-nav .nav-link.active");
  if (activeNav) {
    if (activeNav.id === "nav-verbs") {
      verbEl.style.display = "inline";
      numEl.style.display = "none";
      if (divider) divider.style.display = "none";
    } else if (activeNav.id === "nav-numbers") {
      verbEl.style.display = "none";
      numEl.style.display = "inline";
      if (divider) divider.style.display = "none";
    } else {
      // Learned Page
      verbEl.style.display = "inline";
      numEl.style.display = "inline";
      if (divider) divider.style.display = "inline";
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
  element.textContent = "✔";
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
  setActivePage(navVerbs, pageVerbs);
  initVerbsView();
});

navNumbers.addEventListener("click", () => {
  setActivePage(navNumbers, pageNumbers);
  initNumbersView();
});

navLearned.addEventListener("click", () => {
  setActivePage(navLearned, pageLearned);
  renderLearnedPage();
});

function setActivePage(navBtn, pageEl) {
  [navVerbs, navNumbers, navLearned].forEach(btn => btn.classList.remove("active"));
  [pageVerbs, pageNumbers, pageLearned].forEach(page => page.classList.remove("active"));
  navBtn.classList.add("active");
  pageEl.classList.add("active");
  updateProgressSummary();
}

// Verbs View Mode switching
btnModeLearn.addEventListener("click", () => {
  btnModeLearn.classList.add("active");
  btnModeTest.classList.remove("active");
  viewLearn.classList.add("active");
  viewTest.classList.remove("active");
  initVerbsView();
});

btnModeTest.addEventListener("click", () => {
  btnModeTest.classList.add("active");
  btnModeLearn.classList.remove("active");
  viewLearn.classList.remove("active");
  viewTest.classList.add("active");
  startNewTest();
});

// Numbers View Mode switching
btnNumModeLearn.addEventListener("click", () => {
  btnNumModeLearn.classList.add("active");
  btnNumModeTest.classList.remove("active");
  viewNumLearn.classList.add("active");
  viewNumTest.classList.remove("active");
  initNumbersView();
});

btnNumModeTest.addEventListener("click", () => {
  btnNumModeTest.classList.add("active");
  btnNumModeLearn.classList.remove("active");
  viewNumLearn.classList.remove("active");
  viewNumTest.classList.add("active");
  startNewNumTest();
});

// Card Flip Handlers
testCard.addEventListener("click", () => {
  testCard.classList.toggle("flipped");
});

numTestCard.addEventListener("click", () => {
  numTestCard.classList.toggle("flipped");
});

// Flashcard Toggle Event Handlers (prevent card flip click)
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

// Render lists with Toggle support
function initVerbsView() {
  verbsList.innerHTML = verbs.map(verb => {
    const isL = isLearned("verb", verb.id);
    return `
      <div class="verb-card">
        <div class="verb-header">
          <div class="verb-num-eng">
            <span class="verb-number">${verb.id}</span>
            <span class="verb-english">${verb.english}</span>
          </div>
          <button class="learned-toggle ${isL ? 'is-learned' : ''}" onclick="toggleListItemState(event, 'verb', ${verb.id})">
            ✔
          </button>
        </div>
        <div class="verb-details">
          <span class="verb-russian">${verb.russian}</span>
          <span class="verb-pron">${verb.pron}</span>
        </div>
        ${verb.example ? `<div class="verb-example-box">${verb.example}</div>` : ''}
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
      <div class="verb-card">
        <div class="verb-header">
          <div class="verb-num-eng">
            <span class="verb-number">${i}</span>
            <span class="verb-english">${ruSpelling}</span>
          </div>
          <div class="verb-actions">
            <a href="${translateUrl}" target="_blank" class="listen-link" style="color: var(--accent-color); text-decoration: none; font-size: 0.85rem; font-weight: 500;">
              🔊 Listen
            </a>
            <button class="learned-toggle ${isL ? 'is-learned' : ''}" onclick="toggleListItemState(event, 'number', ${i})">
              ✔
            </button>
          </div>
        </div>
      </div>
    `);
  }
  numbersList.innerHTML = numberCards.join('');
}

// Global toggle dispatcher for in-list star buttons
window.toggleListItemState = function(e, type, id) {
  e.stopPropagation();
  const nextState = !isLearned(type, id);
  setLearned(type, id, nextState);
  
  // Re-target button states
  const btn = e.currentTarget;
  updateToggleUI(btn, nextState);
  
  // If we are on the learned list page, re-render it directly
  if (pageLearned.classList.contains("active")) {
    renderLearnedPage();
  }
};

// Verbs Testing Logic
function startNewTest() {
  let testList = verbs.filter(v => !isLearned("verb", v.id));
  if (testList.length === 0) {
    alert("You've learned all 50 verbs! Testing on all verbs instead.");
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

// Render Learned Page Lists
function renderLearnedPage() {
  // Learned Verbs
  const learnedVerbs = verbs.filter(verb => isLearned("verb", verb.id));
  if (learnedVerbs.length === 0) {
    learnedVerbsList.innerHTML = `<div class="verb-card" style="text-align: center; color: var(--text-muted);">No verbs learned yet.</div>`;
  } else {
    learnedVerbsList.innerHTML = learnedVerbs.map(verb => `
      <div class="verb-card">
        <div class="verb-header">
          <div class="verb-num-eng">
            <span class="verb-number">${verb.id}</span>
            <span class="verb-english">${verb.english}</span>
          </div>
          <button class="learned-toggle is-learned" onclick="toggleListItemState(event, 'verb', ${verb.id})">
            ✔
          </button>
        </div>
        <div class="verb-details">
          <span class="verb-russian">${verb.russian}</span>
          <span class="verb-pron">${verb.pron}</span>
        </div>
      </div>
    `).join('');
  }

  // Learned Numbers
  const learnedNums = [];
  for (let i = 1; i <= 100; i++) {
    if (isLearned("number", i)) {
      learnedNums.push(i);
    }
  }

  if (learnedNums.length === 0) {
    learnedNumbersList.innerHTML = `<div class="verb-card" style="text-align: center; color: var(--text-muted);">No numbers learned yet.</div>`;
  } else {
    learnedNumbersList.innerHTML = learnedNums.map(i => {
      const ruSpelling = getRussianNumber(i);
      const translateUrl = getTranslateUrl(ruSpelling);
      return `
        <div class="verb-card">
          <div class="verb-header">
            <div class="verb-num-eng">
              <span class="verb-number">${i}</span>
              <span class="verb-english">${ruSpelling}</span>
            </div>
            <div class="verb-actions">
              <a href="${translateUrl}" target="_blank" class="listen-link" style="color: var(--accent-color); text-decoration: none; font-size: 0.85rem; font-weight: 500;">
                🔊 Listen
              </a>
              <button class="learned-toggle is-learned" onclick="toggleListItemState(event, 'number', ${i})">
                ✔
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Reset Handlers
btnResetVerbs.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset all learned verbs?")) {
    verbs.forEach(v => localStorage.removeItem(`verb-${v.id}`));
    updateProgressSummary();
    renderLearnedPage();
  }
});

btnResetNumbers.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to reset all learned numbers?")) {
    for (let i = 1; i <= 100; i++) {
      localStorage.removeItem(`number-${i}`);
    }
    updateProgressSummary();
    renderLearnedPage();
  }
});

// App Entry Point
updateProgressSummary();
initVerbsView();
