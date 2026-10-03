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
  return bank().filter(q => q.part === part && q.chapter === n && isMcqBank(q)).length;
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
  return { id: q.id, part: q.part, chapter: q.chapter, chapterTitle: q.chapterTitle, question: q.question, options, answer, reason: q.reason, level: q.level, pick: null };
}

function isMcqBank(q) {
  return Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.answer);
}

function poolForSetup() {
  const s = state.setup;
  let rows = bank().filter(isMcqBank);
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

function takeOnePerTopic(rows, slot) {
  const groups = new Map();
  rows.forEach(q => {
    if (q.paperSlot !== slot) return;
    const k = q.paperTopic || q.id;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  });
  const out = [];
  groups.forEach(arr => { out.push(shuffle(arr)[0]); });
  return out;
}

function takeMixed(rows, slot, total, orWant) {
  const pool = shuffle(rows.filter(q => q.paperSlot === slot));
  const withOr = pool.filter(q => q.orQuestion);
  const plain = pool.filter(q => !q.orQuestion);
  const picked = withOr.slice(0, orWant).concat(plain.slice(0, total - Math.min(orWant, withOr.length)));
  if (picked.length < total) {
    const used = new Set(picked.map(q => q.id));
    pool.forEach(q => {
      if (picked.length < total && !used.has(q.id)) picked.push(q);
    });
  }
  return shuffle(picked.slice(0, total));
}

function clonePaperItem(q, number) {
  return {
    id: q.id,
    number: number,
    marks: q.marks || 1,
    level: q.level || "medium",
    part: q.part,
    chapterTitle: q.chapterTitle,
    paperSlot: q.paperSlot,
    paperTopic: q.paperTopic || "",
    question: q.question,
    worked: q.worked || q.reason || "",
    orQuestion: q.orQuestion || "",
    orWorked: q.orWorked || "",
    options: q.options ? q.options.slice() : null,
    answer: Number.isInteger(q.answer) ? q.answer : null,
    pick: null,
    self: null,
    revealed: false,
    parts: (q.parts || []).map(p => ({
      label: p.label,
      marks: p.marks,
      question: p.question,
      worked: p.worked || "",
      orQuestion: p.orQuestion || "",
      orWorked: p.orWorked || "",
      self: null
    }))
  };
}

function paperRows(rows, kind) {
  if (kind === "year") return rows.filter(q => q.part === 1 || q.part === 2 || q.part === 3);
  return rows.filter(q => q.part === 1);
}

function topicReps(rows, slot) {
  const groups = new Map();
  rows.forEach(q => {
    if (q.paperSlot !== slot) return;
    const k = q.paperTopic || q.id;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  });
  const out = [];
  groups.forEach(arr => { out.push(shuffle(arr)[0]); });
  return out;
}

function takeSectionA(rows, minLater) {
  const pool = rows.filter(q => q.paperSlot === "A");
  const reps = topicReps(pool, "A");
  const later = shuffle(reps.filter(q => q.part !== 1));
  const early = shuffle(reps.filter(q => q.part === 1));
  const picked = [];
  const usedTopics = new Set();
  later.slice(0, minLater).forEach(q => {
    picked.push(q);
    usedTopics.add(q.paperTopic || q.id);
  });
  later.concat(early).forEach(q => {
    const key = q.paperTopic || q.id;
    if (picked.length >= 18 || usedTopics.has(key)) return;
    picked.push(q);
    usedTopics.add(key);
  });
  const used = new Set(picked.map(q => q.id));
  shuffle(pool).forEach(q => {
    if (picked.length < 18 && !used.has(q.id)) {
      picked.push(q);
      used.add(q.id);
    }
  });
  return shuffle(picked.slice(0, 18));
}

function takeAR(rows, minLater) {
  const reps = topicReps(rows, "AR");
  const later = shuffle(reps.filter(q => q.part !== 1));
  const early = shuffle(reps.filter(q => q.part === 1));
  const picked = later.slice(0, minLater);
  const used = new Set(picked.map(q => q.id));
  early.concat(later).forEach(q => {
    if (picked.length < 2 && !used.has(q.id)) {
      picked.push(q);
      used.add(q.id);
    }
  });
  return shuffle(picked.slice(0, 2));
}

function takeMixedQuota(rows, slot, total, orWant, minLater) {
  const pool = shuffle(rows.filter(q => q.paperSlot === slot));
  const later = pool.filter(q => q.part !== 1);
  const picked = [];
  const used = new Set();
  function push(q) {
    if (!q || used.has(q.id) || picked.length >= total) return false;
    picked.push(q);
    used.add(q.id);
    return true;
  }
  later.slice(0, minLater).forEach(push);
  let orCount = picked.filter(q => q.orQuestion).length;
  pool.forEach(q => {
    if (orCount >= orWant) return;
    if (q.orQuestion && push(q)) orCount++;
  });
  pool.forEach(push);
  return shuffle(picked.slice(0, total));
}

function takeCases(rows, kind) {
  const pool = rows.filter(q => q.paperSlot === "E");
  if (kind !== "year") {
    return ["odds", "powers", "proportion"].map(topic => {
      const group = shuffle(pool.filter(q => q.paperTopic === topic));
      return group[0] || null;
    });
  }
  const groups = new Map();
  pool.forEach(q => {
    const k = q.paperTopic || q.id;
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  });
  const topics = shuffle([...groups.keys()]);
  const later = topics.filter(t => groups.get(t).some(q => q.part !== 1));
  const early = topics.filter(t => later.indexOf(t) === -1);
  const chosen = [];
  if (later.length) chosen.push(later[0]);
  shuffle(later.slice(1).concat(early)).forEach(t => {
    if (chosen.length < 3 && chosen.indexOf(t) === -1) chosen.push(t);
  });
  return shuffle(chosen).slice(0, 3).map(t => shuffle(groups.get(t))[0]);
}

function examSections(secA, secB, secC, secD, secE) {
  return [
    { id: "A", title: "Section A", right: "(20 × 1 = 20)", blurb: "Questions 1 to 18 carry 1 mark each. Questions 19 and 20 are assertion-reason questions of 1 mark each.", items: secA },
    { id: "B", title: "Section B", right: "(5 × 2 = 10)", blurb: "Very short answer questions of 2 marks each.", items: secB },
    { id: "C", title: "Section C", right: "(6 × 3 = 18)", blurb: "Short answer questions of 3 marks each.", items: secC },
    { id: "D", title: "Section D", right: "(4 × 5 = 20)", blurb: "Long answer questions of 5 marks each.", items: secD },
    { id: "E", title: "Section E", right: "(3 × 4 = 12)", blurb: "Case-study questions of 4 marks each. The sub-parts carry 1, 1 and 2 marks.", items: secE }
  ];
}

function buildExamPaper(rows, kind) {
  const year = kind === "year";
  const pool = paperRows(rows, year ? "year" : "half");
  const minA = year ? 4 : 0;
  const minLater = year ? 1 : 0;
  const aPick = takeSectionA(pool, minA);
  const arFinal = takeAR(pool, minLater);
  const B = takeMixedQuota(pool, "B", 5, 2, year ? 2 : 0);
  const C = takeMixedQuota(pool, "C", 6, 2, year ? 2 : 0);
  const D = takeMixedQuota(pool, "D", 4, 2, year ? 1 : 0);
  const E = takeCases(pool, year ? "year" : "half");
  const groups = [["A", aPick, 18], ["AR", arFinal, 2], ["B", B, 5], ["C", C, 6], ["D", D, 4], ["E", E, 3]];
  for (const [name, arr, n] of groups) {
    if (!arr || arr.length < n || arr.some(q => !q)) {
      return { error: "Not enough questions to build section " + name + ".", sections: [], kind: year ? "year" : "half" };
    }
  }
  let n = 1;
  return {
    error: "",
    scored: false,
    kind: year ? "year" : "half",
    examName: year ? "Yearly Examination" : "Half Yearly Examination",
    sections: examSections(
      aPick.concat(arFinal).map(q => clonePaperItem(q, n++)),
      B.map(q => clonePaperItem(q, n++)),
      C.map(q => clonePaperItem(q, n++)),
      D.map(q => clonePaperItem(q, n++)),
      E.map(q => clonePaperItem(q, n++))
    )
  };
}

function buildHalfYearlyPaper(rows) {
  return buildExamPaper(rows, "half");
}

function startPaper(kind) {
  state.paper = buildExamPaper(bank(), kind === "year" ? "year" : "half");
  state.view = "paper";
  state.keepScroll = false;
  render();
  window.scrollTo(0, 0);
}

function paperItems() {
  const out = [];
  (state.paper.sections || []).forEach(sec => sec.items.forEach(item => out.push(item)));
  return out;
}
function findPaperItem(num) {
  return paperItems().find(item => item.number === Number(num)) || null;
}
function isPaperMcq(item) {
  return Array.isArray(item.options);
}
function itemScore(item) {
  if (isPaperMcq(item)) return item.pick === item.answer ? item.marks : 0;
  if (item.orQuestion || !item.parts.length) return item.self === true ? item.marks : 0;
  return item.parts.reduce((sum, part) => sum + (part.self === true ? part.marks : 0), 0);
}
function itemMarked(item) {
  if (isPaperMcq(item)) return item.pick !== null;
  if (item.orQuestion || !item.parts.length) return item.self !== null;
  return item.parts.every(part => part.self !== null);
}
function paperTotals() {
  const items = paperItems();
  let mcq = 0, mcqMax = 0, written = 0, writtenMax = 0, unmarked = 0;
  items.forEach(item => {
    if (isPaperMcq(item)) {
      mcqMax += item.marks;
      mcq += itemScore(item);
    } else {
      writtenMax += item.marks;
      written += itemScore(item);
      if (!itemMarked(item)) unmarked += 1;
    }
  });
  return { mcq, mcqMax, written, writtenMax, total: mcq + written, max: mcqMax + writtenMax, unmarked };
}

function header() {
  const views = [["home","Home"],["learn","Learn"],["test","Test"]];
  const onTest = state.view === "quiz" || state.view === "paper" || state.view === "test";
  return `<header class="top">
    <div class="brand"><b>Class 8 Maths</b><span>Ganita Prakash practice</span></div>
    <nav class="nav">${views.map(([id,name]) =>
      `<button type="button" data-view="${id}" ${state.view===id||(onTest&&id==="test")?"aria-current=\"page\"":""}>${name}</button>`
    ).join("")}</nav>
  </header>`;
}

function homeView() {
  const n = bank().filter(isMcqBank).length;
  const figs = bank().filter(q => String(q.question).includes("<svg")).length;
  return `${header()}
  <section class="hero">
    <p class="kicker">CBSE · NCERT · 2026-27</p>
    <h1>Practise Class 8 mathematics, chapter by chapter.</h1>
    <p>The books are <b>Ganita Prakash</b>, Textbook of Mathematics, Grade 8, <b>Part I</b> and <b>Part II</b>. This page explains the ideas, then gives you a fresh MCQ test, a half-yearly paper, or a yearly paper.</p>
    <p class="muted">The questions are original practice on these topics. They are not copied from the textbook or from a school paper. Names and numbers are our own.</p>
    <p>When you start a chapter test, choose Low, Medium, or Complex. If a question has no level marked, it counts as medium.</p>
    <div class="row">
      <button class="btn primary" type="button" data-view="learn">Read a chapter</button>
      <button class="btn" type="button" data-view="test">Chapter test</button>
      <button class="btn primary" type="button" data-start-paper>Half-yearly paper</button>
      <button class="btn primary" type="button" data-start-year>Yearly paper</button>
    </div>
  </section>
  <section class="card">
    <h2>${n} multiple-choice questions ready</h2>
    <p>${figs} questions include a diagram. A chapter test is 30 questions by default. You can also choose 40 or 50. One mark each.</p>
    <p>The half-yearly paper and the yearly paper are 80-mark sheets with the same sections. Half-yearly uses Part 1. Yearly uses Part 1 and Part 2. Each run is a new shuffle.</p>
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
  return `${header()}<section class="hero"><h1>Learn</h1><p>Short notes for every chapter in Ganita Prakash. Open one, then test it when you are ready. The full papers are on the Test page.</p></section>${body}`;
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
  <section class="card paper-launch">
    <h2>Full papers</h2>
    <p>Both papers are Class 8 Mathematics, 80 marks, 3 hours, with the same sections. Multiple choice is marked for you. For written parts, press Check and mark your own work.</p>
    <div class="row">
      <button class="btn primary" type="button" data-start-paper>Half-yearly paper</button>
      <button class="btn primary" type="button" data-start-year>Yearly paper</button>
    </div>
    <p class="muted">Half-yearly draws Part 1 only. Yearly draws Part 1 and Part 2, including foundation-style questions. Two runs use different questions. The level buttons below do not change these papers.</p>
  </section>
  <section class="hero">
    <h1>Chapter test</h1>
    <p>Default length is 30 MCQs. Each run picks a different set. Low, Medium, and Complex still apply here.</p>
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
    <p class="muted" style="margin-top:10px">Low is one step. Medium is about two steps. Complex is a longer chain. A question with no level counts as medium. All levels ignores that filter. This choice does not change the half-yearly or yearly paper. Those papers mix levels the way a full paper does.</p>
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

function modelBox(text) {
  return `<div class="model">${esc(text)}</div>`;
}
function selfButtons(item, partIndex) {
  const current = partIndex === null ? item.self : item.parts[partIndex].self;
  const partAttr = partIndex === null ? -1 : partIndex;
  return `<div class="row sans">
    <button type="button" class="btn tiny ${current===true?"goodbtn":""}" data-self="1" data-q="${item.number}" data-part="${partAttr}">Mark right</button>
    <button type="button" class="btn tiny ${current===false?"badbtn":""}" data-self="0" data-q="${item.number}" data-part="${partAttr}">Mark wrong</button>
  </div>`;
}
function renderParts(item, allowSelf) {
  if (!item.parts.length) return "";
  return item.parts.map((part, pi) => `
    <div class="part">
      <div class="qtop">
        <span class="qno">${esc(part.label)}</span>
        <div class="qbody">${part.question}</div>
        <span class="qmarks">[${part.marks}]</span>
      </div>
      ${part.orQuestion ? `<p class="orline">OR</p><div class="qbody orbody">${esc(part.orQuestion)}</div>` : ""}
      ${item.revealed ? modelBox(part.worked) : ""}
      ${item.revealed && part.orWorked ? modelBox("OR: " + part.orWorked) : ""}
      ${item.revealed && allowSelf ? selfButtons(item, pi) : ""}
    </div>`).join("");
}
function renderMcq(item) {
  const letters = ["A", "B", "C", "D"];
  const opts = item.options.map((op, i) => {
    let cls = "opt";
    if (item.pick === i) cls += " selected";
    if (item.revealed && i === item.answer) cls += " correct";
    else if (item.revealed && item.pick === i) cls += " wrong";
    return `<button type="button" class="${cls}" data-paper-pick="${i}" data-q="${item.number}" ${state.paper&&state.paper.scored?"disabled":""}>${letters[i]}. ${esc(op)}</button>`;
  }).join("");
  const why = item.revealed ? modelBox("Answer: " + item.options[item.answer] + ". " + item.worked) : "";
  return opts + why;
}
function renderWritten(item) {
  const whole = !!(item.orQuestion || !item.parts.length);
  let html = renderParts(item, !item.orQuestion && item.parts.length > 0);
  if (item.orQuestion) {
    html += `<p class="orline">OR</p><div class="qbody orbody">${esc(item.orQuestion)}</div>`;
  }
  if (item.revealed && whole && item.worked) html += modelBox(item.worked);
  if (item.revealed && item.orWorked) html += modelBox("OR: " + item.orWorked);
  if (item.revealed && whole) html += selfButtons(item, null);
  if (!item.revealed) {
    html += `<div class="row sans"><button type="button" class="btn tiny" data-reveal="${item.number}">Check</button></div>`;
  }
  return html;
}
function renderPaperItem(item) {
  const mcq = isPaperMcq(item);
  return `<article class="qitem" id="q-${item.number}">
    <div class="qtop">
      <span class="qno">Q${item.number}.</span>
      <div class="qbody">${item.question}</div>
      <span class="qmarks">[${item.marks}]</span>
    </div>
    ${mcq ? renderMcq(item) : renderWritten(item)}
  </article>`;
}

function paperView() {
  const paper = state.paper;
  if (!paper || paper.error) {
    return `${header()}<section class="card"><h1>Paper could not be built</h1><p>${esc(paper && paper.error ? paper.error : "Try again.")}</p>
      <button class="btn" type="button" data-view="test">Back</button></section>`;
  }
  const totals = paperTotals();
  const scoreBar = paper.scored
    ? `<p class="score">${totals.total} / ${totals.max}</p>
       <p>Multiple choice ${totals.mcq} / ${totals.mcqMax}. Written work you marked right: ${totals.written} / ${totals.writtenMax}.</p>
       ${totals.unmarked ? `<p class="muted">${totals.unmarked} written question${totals.unmarked===1?"":"s"} still unmarked. Unmarked work scores 0 until you choose right or wrong.</p>` : ""}`
    : `<p>Tap an option for each multiple-choice question. For the other questions, do the working on paper, then press Check. Score the paper when you want every model answer.</p>
       <p class="muted">Do either the question or the OR choice, not both.</p>`;
  const sections = paper.sections.map(sec => {
    const body = sec.items.map(item => {
      const dir = (sec.id === "A" && item.number === 19)
        ? `<div class="directions"><p><b>Questions 19 and 20.</b> Each has an Assertion (A) and a Reason (R).</p>
           <p>(A) Both A and R are true, and R explains A.<br>
           (B) Both A and R are true, but R does not explain A.<br>
           (C) A is true and R is false.<br>
           (D) A is false and R is true.</p></div>`
        : "";
      return dir + renderPaperItem(item);
    }).join("");
    return `<h2 class="secbar"><span>${esc(sec.title)}</span><span>${esc(sec.right)}</span></h2><p class="secblurb">${esc(sec.blurb)}</p>${body}`;
  }).join("");
  const actions = `<div class="row">
      ${paper.scored ? "" : `<button class="btn primary" type="button" data-score-paper>Score the paper</button>`}
      <button class="btn" type="button" data-new-paper>New paper</button>
      <button class="btn" type="button" data-view="test">Chapter test</button>
    </div>`;
  return `${header()}
  <div class="paper-actions sans">
    <p class="muted">Practice paper for Class 8 Mathematics. The questions are original. They are not a school paper.</p>
    ${paper.scored ? `<p class="score" style="font-size:1.4rem">${totals.total} / ${totals.max}</p>` : ""}
    ${actions}
  </div>
  <div class="sheet">
    <header class="exam-kicker">
      <p class="exam-class">Class VIII</p>
      <h1>Mathematics</h1>
      <p class="exam-sub">${esc(paper.examName || "Half Yearly Examination")}</p>
      <p class="exam-meta"><span>Maximum marks: 80</span><span>Time: 3 hours</span></p>
    </header>
    <div class="exam-lines">
      <div><span>Name</span><i></i></div>
      <div><span>Roll no.</span><i></i></div>
      <div><span>Date</span><i></i></div>
    </div>
    <h2 class="instr-title">General instructions</h2>
    <ol class="instr">
      <li>This question paper has 38 questions. All questions are compulsory.</li>
      <li>The paper is divided into five sections: A, B, C, D and E.</li>
      <li>In Section A, questions 1 to 18 are multiple choice questions of 1 mark each.</li>
      <li>In Section A, questions 19 and 20 are assertion-reason questions of 1 mark each.</li>
      <li>In Section B, questions 21 to 25 are very short answer questions of 2 marks each.</li>
      <li>In Section C, questions 26 to 31 are short answer questions of 3 marks each.</li>
      <li>In Section D, questions 32 to 35 are long answer questions of 5 marks each.</li>
      <li>In Section E, questions 36 to 38 are case-study questions of 4 marks each, with sub-parts of 1, 1 and 2 marks.</li>
      <li>There is no overall choice. An internal choice is given in 2 questions of Section B, 2 questions of Section C and 2 questions of Section D. An internal choice is also given in the 2-mark part of each question in Section E.</li>
      <li>Draw neat figures where they are needed. Take π = 22/7 where it is needed and not stated.</li>
      <li>Calculators are not allowed.</li>
    </ol>
    ${sections}
  </div>
  <section class="card sans">
    ${scoreBar}
    ${actions}
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
    <button class="btn primary submit-top" type="button" data-submit>Submit test</button>
    <div class="qtext">${q.question}</div>
    ${opts}
    <div class="row" style="margin-top:8px">
      <button class="btn" type="button" data-prev ${quiz.index===0?"disabled":""}>Back</button>
      ${last ? "" : `<button class="btn" type="button" data-next>Next</button>`}
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
  const y = state.keepScroll ? window.scrollY : 0;
  if (!window.QUESTION_BANK) {
    app.innerHTML = `<section class="card"><h1>Questions did not load</h1><p>Keep questions.js in the same folder as index.html, then open index.html again.</p></section>`;
    return;
  }
  let html = "";
  if (state.view === "home") html = homeView();
  else if (state.view === "learn") html = learnView();
  else if (state.view === "test") html = testView();
  else if (state.view === "quiz") html = quizView();
  else if (state.view === "paper") html = paperView();
  app.innerHTML = html;
  if (state.keepScroll) window.scrollTo(0, y);
  state.keepScroll = false;
}

document.getElementById("app").addEventListener("click", (event) => {
  const t = event.target.closest("button, label");
  if (!t) return;
  if (t.dataset.view) {
    state.view = t.dataset.view;
    state.keepScroll = false;
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
  if (t.dataset.startYear !== undefined) {
    startPaper("year");
    return;
  }
  if (t.dataset.startPaper !== undefined) {
    startPaper("half");
    return;
  }
  if (t.dataset.newPaper !== undefined) {
    startPaper(state.paper && state.paper.kind === "year" ? "year" : "half");
    return;
  }
  if (t.dataset.start !== undefined) {
    startQuiz();
    return;
  }
  if (t.dataset.paperPick !== undefined && state.paper && !state.paper.scored) {
    const item = findPaperItem(t.dataset.q);
    if (item && isPaperMcq(item)) {
      item.pick = Number(t.dataset.paperPick);
      state.keepScroll = true;
      render();
    }
    return;
  }
  if (t.dataset.reveal !== undefined && state.paper) {
    const item = findPaperItem(t.dataset.reveal);
    if (item) {
      item.revealed = true;
      state.keepScroll = true;
      render();
    }
    return;
  }
  if (t.dataset.self !== undefined && state.paper) {
    const item = findPaperItem(t.dataset.q);
    if (item) {
      const part = Number(t.dataset.part);
      const value = t.dataset.self === "1";
      if (part >= 0 && item.parts[part]) item.parts[part].self = value;
      else item.self = value;
      state.keepScroll = true;
      render();
    }
    return;
  }
  if (t.dataset.scorePaper !== undefined && state.paper) {
    state.paper.scored = true;
    paperItems().forEach(item => { item.revealed = true; });
    state.keepScroll = false;
    render();
    window.scrollTo(0, 0);
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
