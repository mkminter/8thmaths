const CHAPTERS = [
  {part:1,n:1,title:"A Square and A Cube",paras:[
    "A square number is what you get when a whole number is multiplied by itself. 7 × 7 = 49, so 49 is a square.",
    "A cube number is a whole number multiplied by itself three times. 4 × 4 × 4 = 64, so 64 is a cube."
  ],points:[
    "The first squares are 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.",
    "The first cubes are 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.",
    "The first n odd numbers add up to n squared.",
    "A square root undoes a square. A cube root undoes a cube.",
    "64 is special: it is 8 squared and also 4 cubed.",
    "A square can end only in 0, 1, 4, 5, 6, or 9."
  ]},
  {part:1,n:2,title:"Power Play",paras:[
    "A power is a short way to write repeated multiplication. 2 to the power 5 means 2 × 2 × 2 × 2 × 2 = 32.",
    "The big number is the base. The small raised number is the exponent, or power."
  ],points:[
    "Same base, multiplication: add the exponents.",
    "Same base, division: subtract the exponents.",
    "A power of a power: multiply the exponents.",
    "Any non-zero number to the power 0 is 1.",
    "A negative exponent means a reciprocal: 2 to the power −3 is 1/8.",
    "Standard form writes a number as a value from 1 up to 10, times a power of 10."
  ]},
  {part:1,n:3,title:"A Story of Numbers",paras:[
    "People have written numbers in many ways. Our system is special because the place of a digit changes its value.",
    "Zero is not nothing in a number like 508. It keeps the tens place empty so the 5 stays in the hundreds."
  ],points:[
    "In 4703, the 7 means 700, not just 7.",
    "Expanded form shows every place: 4703 = 4×1000 + 7×100 + 0×10 + 3×1.",
    "Each place is worth 10 times the place on its right.",
    "Face value is the digit itself. Place value depends on where it sits.",
    "Roman numerals use I, V, X, L, C, D, and M. A smaller symbol before a larger one means subtract."
  ]},
  {part:1,n:4,title:"Quadrilaterals",paras:[
    "A quadrilateral is a closed shape with four sides. Whatever the sides look like, the inside angles add up to 360°.",
    "Special names come from parallel sides, equal sides, and right angles."
  ],points:[
    "Parallelogram: both pairs of opposite sides are parallel and equal.",
    "Rectangle: a parallelogram with four right angles.",
    "Rhombus: a parallelogram with four equal sides.",
    "Square: four equal sides and four right angles. It is both a rectangle and a rhombus.",
    "Trapezium: exactly one pair of parallel sides.",
    "Opposite angles of a parallelogram are equal. Consecutive angles add up to 180°."
  ]},
  {part:1,n:5,title:"Number Play",paras:[
    "Numbers follow rules. If you know the rule, you can test a number or predict the next one.",
    "Divisibility rules let you check a factor without doing the whole division."
  ],points:[
    "Even + even = even, odd + odd = even, even + odd = odd.",
    "Divisible by 3 or 9: look at the digit sum.",
    "Divisible by 4: last two digits. By 8: last three digits.",
    "Divisible by 5: ends in 0 or 5. By 10: ends in 0.",
    "HCF is the greatest shared factor. LCM is the smallest shared multiple.",
    "A palindrome, such as 3443, reads the same forwards and backwards."
  ]},
  {part:1,n:6,title:"We Distribute, Yet Things Multiply",paras:[
    "The distributive law says a × (b + c) = a×b + a×c. You multiply the outside number by each term, then add.",
    "That one idea gives the shortcuts for squares and for a difference of squares."
  ],points:[
    "(a + b) squared = a² + 2ab + b².",
    "(a − b) squared = a² − 2ab + b².",
    "a² − b² = (a − b)(a + b).",
    "(x + 5) squared is x² + 10x + 25, not x² + 25.",
    "These shortcuts are faster than multiplying every term the long way, and you can check them with numbers."
  ]},
  {part:1,n:7,title:"Proportional Reasoning-1",paras:[
    "A ratio compares two quantities in the same unit. 12 : 18 is the same comparison as 2 : 3.",
    "In direct proportion, if one quantity doubles, the other doubles too. The unitary method finds one, then finds many."
  ],points:[
    "Simplify a ratio by dividing both parts by their HCF.",
    "In a proportion, the cross products are equal.",
    "Share an amount by splitting it into equal parts of the ratio.",
    "If y is directly proportional to x, then y = kx for a fixed k.",
    "Find the cost of one item, then multiply by how many you need."
  ]},
  {part:2,n:1,title:"Fractions in Disguise",paras:[
    "A percent is a fraction out of 100. 25% means 25/100, which is 1/4.",
    "Percents are useful for increases, decreases, discounts, and profit, because they compare a part with a whole."
  ],points:[
    "p% of a number = (p/100) × the number.",
    "Increase by p%: multiply by (100 + p)/100.",
    "Decrease by p%: multiply by (100 − p)/100.",
    "Percent change = (change ÷ original) × 100.",
    "A discount is a decrease on the marked price.",
    "Simple interest = Principal × Rate × Time ÷ 100."
  ]},
  {part:2,n:2,title:"The Baudhayana-Pythagoras Theorem",paras:[
    "In a right-angled triangle, the square on the longest side equals the sum of the squares on the other two sides.",
    "The longest side is the hypotenuse. It sits opposite the right angle."
  ],points:[
    "a² + b² = c², where c is the hypotenuse.",
    "If the squares fit this rule, the triangle is right-angled.",
    "Useful sets: 3-4-5, 5-12-13, 6-8-10, 8-15-17, 7-24-25.",
    "To find a leg, subtract its square from the hypotenuse square, then take the square root."
  ]},
  {part:2,n:3,title:"Proportional Reasoning-2",paras:[
    "Inverse proportion: if one quantity grows, the other shrinks so that their product stays the same.",
    "A pie chart shows parts of a whole as slices of a circle. The angles add up to 360°."
  ],points:[
    "More painters, fewer days: workers × days stays constant.",
    "Faster speed, less time, for the same distance.",
    "Pie angle = (part ÷ total) × 360°.",
    "If y is inversely proportional to x, then x × y = k."
  ]},
  {part:2,n:4,title:"Exploring Some Geometric Themes",paras:[
    "Solids have faces, edges, and vertices. For the cube, prism, and pyramid, vertices − edges + faces = 2.",
    "A net is a flat pattern that folds into the solid. A fractal repeats a similar pattern at smaller sizes."
  ],points:[
    "Cube: 6 faces, 12 edges, 8 vertices.",
    "Triangular prism: 5 faces, 9 edges, 6 vertices.",
    "Square pyramid: 5 faces, 8 edges, 5 vertices.",
    "A cube's net is 6 equal squares.",
    "If each piece is replaced by 4 smaller copies, the count is multiplied by 4 at every step."
  ]},
  {part:2,n:5,title:"Tales by Dots and Lines",paras:[
    "The mean is the usual average: add the values, then divide by how many there are.",
    "A line graph shows how a quantity changes, often from one day to the next. A bar graph compares amounts."
  ],points:[
    "Mean = sum ÷ number of values.",
    "If you know the mean and how many numbers, the sum is mean × count.",
    "On a graph, read across to the label and up to the value.",
    "The highest point, or the tallest bar, is the greatest value."
  ]},
  {part:2,n:6,title:"Algebra Play",paras:[
    "A letter can stand for an unknown number. An equation says two expressions are equal.",
    "Solving means finding the value that makes the equation true. Do the same thing to both sides."
  ],points:[
    "From 3x + 5 = 26, subtract 5, then divide by 3.",
    "Always put your answer back to check.",
    "Turn a story into an equation before you calculate.",
    "A pattern that adds 3, starting at 4, has nth term 3n + 1.",
    "The next even number after 2n is 2n + 2."
  ]},
  {part:2,n:7,title:"Area",paras:[
    "Area is the amount of surface a shape covers. It is measured in square units, not just centimetres.",
    "Use the height that is perpendicular to the base, not a slanted side, unless that side really is the height."
  ],points:[
    "Rectangle: length × breadth. Square: side × side.",
    "Parallelogram: base × matching height.",
    "Triangle: half × base × height.",
    "Trapezium: half × (sum of the parallel sides) × height.",
    "Circle: πr². With π = 22/7, a radius of 7 cm gives area 154 cm².",
    "A cut-out shape: subtract the piece you remove."
  ]},
  {part:3,n:1,title:"Foundation practice",paras:[
    "This extra set practises the kinds of steps used in foundation tests: powers, ratios, angles, greatest integers, and assertion-reason.",
    "The questions are original. They are not copied from a paper. Choose Low, Medium, or Complex when you start a test. This set is not inside the mid-year or full-year presets unless you tick it."
  ],points:[
    "Low means one clear step. Medium means about two steps. Complex means a longer chain.",
    "Tan of an acute angle is the opposite side divided by the adjacent side.",
    "For an acute angle, sin squared plus cos squared is 1, and sine cannot be more than 1.",
    "The floor of a number is the greatest integer less than or equal to it. For a negative number that is not an integer, the floor is more negative.",
    "In a cyclic quadrilateral, opposite angles add up to 180 degrees.",
    "An assertion-reason item asks if each sentence is true, and whether the reason really explains the assertion."
  ]}
];

const state = {
  view: "home",
  setup: { mode: "one", chapterKey: "1-1", chosen: {"1-1": true, "1-2": true}, length: 30, level: "medium" },
  quiz: null
};

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function keyOf(ch) { return ch.part + "-" + ch.n; }
function chapterByKey(key) {
  return CHAPTERS.find(ch => keyOf(ch) === key);
}
function bank() {
  return (window.QUESTION_BANK || []);
}
function countFor(part, n) {
  return bank().filter(q => q.part === part && q.chapter === n).length;
}
function levelOf(q) { return q.level || "medium"; }
function levelName(lv) {
  return { low: "Low", medium: "Medium", complex: "Complex", all: "All levels" }[lv] || "Medium";
}
function chapterLabel(ch) {
  if (ch.part === 3) return "Extra · " + ch.title;
  return "Part " + ch.part + " · " + ch.n + ". " + ch.title;
}
function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function stemOf(q) {
  return q.question.replace(/<div class="fig">[\s\S]*$/, "");
}
function fresh(q) {
  const order = shuffle([0, 1, 2, 3]);
  const options = order.map(i => q.options[i]);
  const answer = order.indexOf(q.answer);
  return { id: q.id, part: q.part, chapter: q.chapter, chapterTitle: q.chapterTitle, question: q.question, options, answer, reason: q.reason, pick: null };
}

function poolForSetup() {
  const s = state.setup;
  let rows = bank();
  if (s.mode === "one") {
    const ch = chapterByKey(s.chapterKey);
    rows = rows.filter(q => q.part === ch.part && q.chapter === ch.n);
  } else if (s.mode === "many") {
    const chosen = new Set(Object.keys(s.chosen).filter(k => s.chosen[k]));
    rows = rows.filter(q => chosen.has(q.part + "-" + q.chapter));
  } else if (s.mode === "part1") {
    rows = rows.filter(q => q.part === 1);
  } else if (s.mode === "full") {
    rows = rows.filter(q => q.part === 1 || q.part === 2);
  }
  if (s.level !== "all") {
    const wantLevel = s.level || "medium";
    rows = rows.filter(q => levelOf(q) === wantLevel);
  }
  return rows;
}
function scopeLabel() {
  const s = state.setup;
  let base;
  if (s.mode === "one") {
    const ch = chapterByKey(s.chapterKey);
    base = (ch.part === 3 ? "Extra · " : "Part " + ch.part + " · ") + ch.title;
  } else if (s.mode === "many") {
    const n = Object.keys(s.chosen).filter(k => s.chosen[k]).length;
    base = n + " chosen chapter" + (n === 1 ? "" : "s");
  } else if (s.mode === "part1") {
    base = "Mid-year · all of Part 1";
  } else {
    base = "Full year · Part 1 and Part 2";
  }
  return base + " · " + levelName(s.level);
}

function startQuiz() {
  const rows = poolForSetup();
  const want = state.setup.length;
  if (!rows.length) {
    state.quiz = { items: [], index: 0, want, available: 0, label: scopeLabel(), done: false };
    state.view = "quiz";
    render();
    window.scrollTo(0, 0);
    return;
  }
  const shuffled = shuffle(rows);
  const picked = [];
  const usedStem = new Set();
  for (const q of shuffled) {
    const stem = stemOf(q);
    if (usedStem.has(stem)) continue;
    usedStem.add(stem);
    picked.push(fresh(q));
    if (picked.length === want) break;
  }
  state.quiz = { items: picked, index: 0, want, available: rows.length, label: scopeLabel(), done: false };
  state.view = "quiz";
  render();
  window.scrollTo(0, 0);
}

function header() {
  const views = [["home","Home"],["learn","Learn"],["test","Test"]];
  return `<header class="top">
    <div class="brand"><b>Class 8 Maths</b><span>Ganita Prakash practice</span></div>
    <nav class="nav">${views.map(([id,name]) =>
      `<button type="button" data-view="${id}" ${state.view===id||(state.view==="quiz"&&id==="test")?"aria-current=\"page\"":""}>${name}</button>`
    ).join("")}</nav>
  </header>`;
}

function homeView() {
  const n = bank().length;
  const figs = bank().filter(q => q.question.includes("<svg")).length;
  return `${header()}
  <section class="hero">
    <p class="kicker">CBSE · NCERT · 2026-27</p>
    <h1>Practise Class 8 mathematics, chapter by chapter.</h1>
    <p>The books are <b>Ganita Prakash</b>, Textbook of Mathematics, Grade 8, <b>Part I</b> and <b>Part II</b>. This page explains the ideas, then gives you a fresh MCQ test.</p>
    <p class="muted">The questions are original practice on these topics. They are not copied from the textbook. Names and numbers are our own. Each test is a new shuffle, not a fixed paper.</p>
    <p>When you start a test, choose Low, Medium, or Complex. If a question has no level marked, it counts as medium.</p>
    <div class="row">
      <button class="btn primary" type="button" data-view="learn">Read a chapter</button>
      <button class="btn" type="button" data-view="test">Start a test</button>
    </div>
  </section>
  <section class="card">
    <h2>${n} questions ready</h2>
    <p>${figs} of them include a diagram. A test is 30 questions by default. You can also choose 40 or 50. One mark each.</p>
    <p>Mid-year uses all of Part 1. The full-year test uses Part 1 and Part 2. You can also pick a single chapter, or a few chapters together.</p>
  </section>`;
}

function learnView() {
  const parts = [1, 2, 3];
  const body = parts.map(part => {
    const title = part === 1 ? "Part I · mid-year book" : part === 2 ? "Part II · rest of the year" : "Extra set · choose it in the test";
    const items = CHAPTERS.filter(ch => ch.part === part).map(ch => {
      const n = countFor(ch.part, ch.n);
      return `<details class="chap">
        <summary><span class="tag">${ch.part===3?"Extra":"Ch "+ch.n}</span> ${esc(ch.title)} <span class="muted" style="font-weight:500">${n} questions</span></summary>
        ${ch.paras.map(p => `<p>${esc(p)}</p>`).join("")}
        <ul class="points">${ch.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        <p><button class="btn" type="button" data-start-one="${keyOf(ch)}">Test this chapter</button></p>
      </details>`;
    }).join("");
    return `<h2 class="part-label">${title}</h2>${items}`;
  }).join("");
  return `${header()}<section class="hero"><h1>Learn</h1><p>Short notes for every chapter in Ganita Prakash. Open one, then test it when you are ready.</p></section>${body}`;
}

function testView() {
  const s = state.setup;
  const options = CHAPTERS.map(ch => `<option value="${keyOf(ch)}" ${s.chapterKey===keyOf(ch)?"selected":""}>${esc(chapterLabel(ch))}</option>`).join("");
  const checks = CHAPTERS.map(ch => {
    const k = keyOf(ch);
    return `<label><input type="checkbox" data-ch="${k}" ${s.chosen[k]?"checked":""}> ${esc(chapterLabel(ch))}</label>`;
  }).join("");
  const modes = [
    ["one","One chapter","A short test on a single chapter."],
    ["many","Chapters I choose","Tick a few chapters and mix them."],
    ["part1","Mid-year","Every chapter in Part 1."],
    ["full","Full year","Part 1 and Part 2 together."]
  ];
  const lens = [30,40,50].map(n => `<button type="button" class="len ${s.length===n?"selected":""}" data-len="${n}">${n}</button>`).join("");
  const levels = [["low","Low"],["medium","Medium"],["complex","Complex"],["all","All levels"]].map(([id,name]) =>
    `<button type="button" class="len lvl ${s.level===id?"selected":""}" data-level="${id}">${name}</button>`).join("");
  const many = Object.keys(s.chosen).filter(k => s.chosen[k]).length;
  const ready = s.mode !== "many" || many > 0;
  const poolN = poolForSetup().length;
  return `${header()}
  <section class="hero">
    <h1>Make a test</h1>
    <p>Default length is 30 MCQs. Each run picks a different set, so the next test will not be a copy of this one.</p>
  </section>
  <section class="card">
    <h2>What should the test cover?</h2>
    <div class="choices">
      ${modes.map(([id,name,blurb]) => `<button type="button" class="choice ${s.mode===id?"selected":""}" data-mode="${id}"><b>${name}</b><small>${blurb}</small></button>`).join("")}
    </div>
    ${s.mode==="one" ? `<p style="margin-top:12px"><select data-one>${options}</select></p>` : ""}
    ${s.mode==="many" ? `<div class="checks" style="margin-top:12px">${checks}</div>` : ""}
  </section>
  <section class="card">
    <h2>How hard?</h2>
    <div class="row">${levels}</div>
    <p class="muted" style="margin-top:10px">Low is one step. Medium is about two steps. Complex is a longer foundation-style chain. A question with no level counts as medium. All levels ignores that filter.</p>
  </section>
  <section class="card">
    <h2>How many questions?</h2>
    <div class="row">${lens}</div>
    <p class="muted" style="margin-top:10px">${esc(scopeLabel())}. ${poolN} question${poolN===1?"":"s"} available to draw from.</p>
    <button class="btn primary" type="button" data-start ${ready && poolN>0?"":"disabled"}>Start ${s.length} questions</button>
    ${poolN===0 ? `<p class="muted">No questions match this chapter and level. Try All levels, or tick Extra · Foundation practice.</p>` : ""}
    ${poolN>0 && poolN<s.length ? `<p class="muted">Only ${poolN} different questions are available, so the test will be shorter than ${s.length}. Nothing is repeated.</p>` : ""}
  </section>`;
}

function quizView() {
  const quiz = state.quiz;
  if (!quiz.items.length) {
    return `${header()}<section class="card"><h1>No questions for this choice</h1><p>Nothing in the bank matches ${esc(quiz.label)}.</p><button class="btn" type="button" data-view="test">Change the test</button></section>`;
  }
  if (quiz.done) return resultView();
  const q = quiz.items[quiz.index];
  const answered = quiz.items.filter(item => item.pick !== null).length;
  const opts = q.options.map((op, i) =>
    `<button type="button" class="opt ${q.pick===i?"selected":""}" data-pick="${i}">${esc(op)}</button>`
  ).join("");
  const last = quiz.index === quiz.items.length - 1;
  return `${header()}
  <section class="card">
    <p class="kicker">${esc(quiz.label)} · Question ${quiz.index+1} of ${quiz.items.length}</p>
    <div class="progress"><div style="width:${((quiz.index+1)/quiz.items.length)*100}%"></div></div>
    <p class="tag">${q.part===3?"Extra":"Part "+q.part} · ${esc(q.chapterTitle)} · ${levelName(levelOf(q))}</p>
    <div class="qtext">${q.question}</div>
    ${opts}
    <div class="row" style="margin-top:8px">
      <button class="btn" type="button" data-prev ${quiz.index===0?"disabled":""}>Back</button>
      ${last ? "" : `<button class="btn" type="button" data-next>Next</button>`}
      <button class="btn primary" type="button" data-submit>Submit test</button>
    </div>
    <p class="muted">${answered} of ${quiz.items.length} answered. A blank counts as wrong.</p>
    ${quiz.items.length < quiz.want ? `<p class="muted">Only ${quiz.items.length} different questions were available (${quiz.available} matched this chapter and level choice), so this test has ${quiz.items.length} instead of ${quiz.want}. No question was repeated.</p>` : ""}
  </section>`;
}

function resultView() {
  const quiz = state.quiz;
  let score = 0;
  const blocks = quiz.items.map((q, idx) => {
    const right = q.pick === q.answer;
    if (right) score++;
    const yours = q.pick === null ? "Not answered" : q.options[q.pick];
    return `<article class="card review ${right?"ok":"no"}">
      <p class="kicker">Question ${idx+1} · ${q.part===3?"Extra":"Part "+q.part} · ${esc(q.chapterTitle)} · ${levelName(levelOf(q))} · ${right?"Right":"Wrong"}</p>
      <div class="qtext">${q.question}</div>
      <p><b>Your answer:</b> ${esc(yours)}</p>
      <p><b>Correct answer:</b> ${esc(q.options[q.answer])}</p>
      <p class="reason"><b>Why:</b> ${esc(q.reason)}</p>
    </article>`;
  }).join("");
  return `${header()}
  <section class="hero">
    <p class="kicker">${esc(quiz.label)}</p>
    <p class="score">${score} / ${quiz.items.length}</p>
    <p>That is ${score} mark${score===1?"":"s"} out of ${quiz.items.length}. Each question is 1 mark.</p>
    <div class="row">
      <button class="btn primary" type="button" data-start>Try a new shuffle</button>
      <button class="btn" type="button" data-view="test">Change the test</button>
    </div>
  </section>
  ${blocks}`;
}

function render() {
  const app = document.getElementById("app");
  if (!window.QUESTION_BANK) {
    app.innerHTML = `<section class="card"><h1>Questions did not load</h1><p>Keep questions.js in the same folder as index.html, then open index.html again.</p></section>`;
    return;
  }
  let html = "";
  if (state.view === "home") html = homeView();
  else if (state.view === "learn") html = learnView();
  else if (state.view === "test") html = testView();
  else if (state.view === "quiz") html = quizView();
  app.innerHTML = html;
}

document.getElementById("app").addEventListener("click", (event) => {
  const t = event.target.closest("button, label");
  if (!t) return;
  if (t.dataset.view) {
    state.view = t.dataset.view;
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (t.dataset.mode) {
    state.setup.mode = t.dataset.mode;
    render();
    return;
  }
  if (t.dataset.len) {
    state.setup.length = Number(t.dataset.len);
    render();
    return;
  }
  if (t.dataset.level) {
    state.setup.level = t.dataset.level;
    render();
    return;
  }
  if (t.dataset.startOne) {
    state.setup.mode = "one";
    state.setup.chapterKey = t.dataset.startOne;
    state.setup.length = state.setup.length || 30;
    startQuiz();
    return;
  }
  if (t.dataset.start !== undefined) {
    startQuiz();
    return;
  }
  if (t.dataset.pick !== undefined && state.quiz && !state.quiz.done) {
    state.quiz.items[state.quiz.index].pick = Number(t.dataset.pick);
    render();
    return;
  }
  if (t.dataset.next !== undefined && state.quiz) {
    state.quiz.index = Math.min(state.quiz.items.length - 1, state.quiz.index + 1);
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (t.dataset.prev !== undefined && state.quiz) {
    state.quiz.index = Math.max(0, state.quiz.index - 1);
    render();
    return;
  }
  if (t.dataset.submit !== undefined && state.quiz) {
    state.quiz.done = true;
    render();
    window.scrollTo(0, 0);
  }
});

document.getElementById("app").addEventListener("change", (event) => {
  const t = event.target;
  if (t.dataset.one) {
    state.setup.chapterKey = t.value;
    render();
  }
  if (t.dataset.ch) {
    state.setup.chosen[t.dataset.ch] = t.checked;
    render();
  }
});

render();
