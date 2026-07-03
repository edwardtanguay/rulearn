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

// DOM Elements
const navVerbs = document.getElementById("nav-verbs");
const navAbout = document.getElementById("nav-about");
const pageVerbs = document.getElementById("page-verbs");
const pageAbout = document.getElementById("page-about");

const btnModeLearn = document.getElementById("btn-mode-learn");
const btnModeTest = document.getElementById("btn-mode-test");
const viewLearn = document.getElementById("view-learn");
const viewTest = document.getElementById("view-test");

const verbsList = document.getElementById("verbs-list");
const testCard = document.getElementById("test-card");
const testEnglish = document.getElementById("test-english");
const testRussian = document.getElementById("test-russian");
const testPronunciation = document.getElementById("test-pronunciation");
const testExampleContainer = document.getElementById("test-example-container");
const testExample = document.getElementById("test-example");
const btnNextTest = document.getElementById("btn-next-test");

// Page Navigation
navVerbs.addEventListener("click", () => {
  navVerbs.classList.add("active");
  navAbout.classList.remove("active");
  pageVerbs.classList.add("active");
  pageAbout.classList.remove("active");
});

navAbout.addEventListener("click", () => {
  navAbout.classList.add("active");
  navVerbs.classList.remove("active");
  pageAbout.classList.add("active");
  pageVerbs.classList.remove("active");
});

// Mode Switching (Learn vs Test)
btnModeLearn.addEventListener("click", () => {
  btnModeLearn.classList.add("active");
  btnModeTest.classList.remove("active");
  viewLearn.classList.add("active");
  viewTest.classList.remove("active");
});

btnModeTest.addEventListener("click", () => {
  btnModeTest.classList.add("active");
  btnModeLearn.classList.remove("active");
  viewLearn.classList.remove("active");
  viewTest.classList.add("active");
  startNewTest();
});

// Card Interaction (Flip)
testCard.addEventListener("click", () => {
  testCard.classList.toggle("flipped");
});

// Next Verb Button
btnNextTest.addEventListener("click", (e) => {
  e.stopPropagation(); // Avoid triggering card flip on container
  testCard.classList.remove("flipped");
  // Brief delay to allow rotation transition back to front before changing contents
  setTimeout(() => {
    nextTestVerb();
  }, 200);
});

// Initialize Learn View
function initLearnView() {
  verbsList.innerHTML = verbs.map(verb => `
    <div class="verb-card">
      <div class="verb-header">
        <div class="verb-num-eng">
          <span class="verb-number">${verb.id}</span>
          <span class="verb-english">${verb.english}</span>
        </div>
      </div>
      <div class="verb-details">
        <span class="verb-russian">${verb.russian}</span>
        <span class="verb-pron">${verb.pron}</span>
      </div>
      ${verb.example ? `<div class="verb-example-box">${verb.example}</div>` : ''}
    </div>
  `).join('');
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

// Start / Reset Test Mode
function startNewTest() {
  // Generate random order of indices
  testOrder = shuffle(verbs.map((_, index) => index));
  currentTestIndex = 0;
  loadTestVerb();
}

// Load a specific verb into the card view
function loadTestVerb() {
  testCard.classList.remove("flipped");
  const verbIndex = testOrder[currentTestIndex];
  const verb = verbs[verbIndex];

  testEnglish.textContent = verb.english;
  testRussian.textContent = verb.russian;
  testPronunciation.textContent = verb.pron;

  if (verb.example) {
    testExampleContainer.style.display = "block";
    testExample.textContent = verb.example;
  } else {
    testExampleContainer.style.display = "none";
  }
}

// Advance to next verb in test mode
function nextTestVerb() {
  currentTestIndex++;
  if (currentTestIndex >= verbs.length) {
    // If all completed, reshuffle and start over
    alert("You completed all 50 verbs! Starting another randomized test run.");
    startNewTest();
  } else {
    loadTestVerb();
  }
}

// App Entry Point
initLearnView();
