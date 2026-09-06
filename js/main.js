const copy = {
  uk: {
    brand: "Odesskaya Banda",
    nav: { about: "Про викладача", services: "Послуги", prices: "Ціни", book: "Запис" },
    hero: {
      kicker: "Одеса · Таїрова",
      title: "Вокал • Фортепіано • Сольфеджіо",
      subtitle: "Уроки музики онлайн та в студії на Таїрова (Одеса)",
      cta: "Записатися на урок",
      first: "Перший урок — 450 грн",
    },
    pianoHint: "Натисніть клавіші — почуєте живе фортепіано",
    about: {
      eyebrow: "Про викладача",
      name: "Юліанна Олегівна",
      role: "Вокал · фортепіано · сольфеджіо",
      p1: "Професійний викладач вокалу, фортепіано та сольфеджіо. Легкі уроки з гумором. Результат видно вже після перших занять.",
      p2: "Без зайвої напруги і з увагою до кожного: голос стає впевненішим, руки — вільнішими, а музика — зрозумілішою.",
    },
    interlude: "Музика починається з тиші — і з першого акорду.",
    services: {
      eyebrow: "Послуги",
      title: "Три дисципліни. Один шлях.",
      vocal: "Вокал",
      vocalText: "Дихання, опора, діапазон і репертуар. Від перших нот до впевненого виступу.",
      piano: "Фортепіано",
      pianoText: "Техніка, слух і улюблені твори. З нуля або з досвідом — у своєму темпі.",
      solfege: "Сольфеджіо",
      solfegeText: "Ритм, слух і нотна грамота. Фундамент, на якому тримається все інше.",
      format: "Онлайн та офлайн · Студія на Таїрова, Одеса",
    },
    prices: {
      eyebrow: "Ціни",
      title: "Прозоро і без сюрпризів",
      regular: "Урок 60 хвилин",
      regularNote: "Вокал, фортепіано або сольфеджіо",
      first: "Перший урок",
      badge: "Спеціальна ціна",
      firstNote: "Щоб познайомитися і відчути формат",
      cta: "Записатися",
    },
    book: {
      eyebrow: "Як записатися",
      title: "Напишіть — і підберемо час",
      text: "Записатися можна через Instagram або Telegram",
    },
    footer: { place: "Одеса, Таїрова", line: "Уроки вокалу, фортепіано та сольфеджіо" },
    music: { on: "Увімкнути музику", off: "Вимкнути музику" },
  },
  ru: {
    brand: "Odesskaya Banda",
    nav: { about: "О преподавателе", services: "Услуги", prices: "Цены", book: "Запись" },
    hero: {
      kicker: "Одесса · Таирова",
      title: "Вокал • Фортепиано • Сольфеджио",
      subtitle: "Уроки музыки онлайн и в студии на Таирова (Одесса)",
      cta: "Записаться на урок",
      first: "Первый урок — 450 грн",
    },
    pianoHint: "Нажмите клавиши — услышите живое фортепиано",
    about: {
      eyebrow: "О преподавателе",
      name: "Юлианна Олеговна",
      role: "Вокал · фортепиано · сольфеджио",
      p1: "Профессиональный преподаватель вокала, фортепиано и сольфеджио. Лёгкие уроки с юмором. Результат виден уже после первых занятий.",
      p2: "Без лишнего напряжения и с вниманием к каждому: голос становится увереннее, руки — свободнее, а музыка — понятнее.",
    },
    interlude: "Музыка начинается с тишины — и с первого аккорда.",
    services: {
      eyebrow: "Услуги",
      title: "Три дисциплины. Один путь.",
      vocal: "Вокал",
      vocalText: "Дыхание, опора, диапазон и репертуар. От первых нот до уверенного выступления.",
      piano: "Фортепиано",
      pianoText: "Техника, слух и любимые произведения. С нуля или с опытом — в своём темпе.",
      solfege: "Сольфеджио",
      solfegeText: "Ритм, слух и нотная грамота. Фундамент, на котором держится всё остальное.",
      format: "Онлайн и офлайн · Студия на Таирова, Одесса",
    },
    prices: {
      eyebrow: "Цены",
      title: "Прозрачно и без сюрпризов",
      regular: "Урок 60 минут",
      regularNote: "Вокал, фортепиано или сольфеджио",
      first: "Первый урок",
      badge: "Специальная цена",
      firstNote: "Чтобы познакомиться и почувствовать формат",
      cta: "Записаться",
    },
    book: {
      eyebrow: "Как записаться",
      title: "Напишите — и подберём время",
      text: "Записаться можно через Instagram или Telegram",
    },
    footer: { place: "Одесса, Таирова", line: "Уроки вокала, фортепиано и сольфеджио" },
    music: { on: "Включить музыку", off: "Выключить музыку" },
  },
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const lang = { value: localStorage.getItem("ob-lang") === "ru" ? "ru" : "uk" };

function applyLang() {
  const t = copy[lang.value];
  document.documentElement.lang = lang.value === "ru" ? "ru" : "uk";
  $$("[data-i]").forEach((el) => {
    const path = el.getAttribute("data-i").split(".");
    let v = t;
    for (const key of path) v = v?.[key];
    if (typeof v === "string") el.textContent = v;
  });
  $$("[data-i-aria]").forEach((el) => {
    const path = el.getAttribute("data-i-aria").split(".");
    let v = t;
    for (const key of path) v = v?.[key];
    if (typeof v === "string") el.setAttribute("aria-label", v);
  });
  $("#lang-uk").classList.toggle("is-on", lang.value === "uk");
  $("#lang-ru").classList.toggle("is-on", lang.value === "ru");
  const musicOn = !$("#ambient").paused;
  $("#music-btn").setAttribute("aria-label", musicOn ? t.music.off : t.music.on);
  localStorage.setItem("ob-lang", lang.value);
  paintQuote($("#quote")?.classList.contains("is-on"));
}

function paintQuote(play) {
  const el = $("#quote");
  if (!el) return;
  const text = copy[lang.value].interlude;
  let delay = 0;
  el.innerHTML = text.split(/(\s+)/).map((part) => {
    if (/^\s+$/.test(part)) return part;
    const html = `<span class="qw" style="--d:${delay}s">${part}</span>`;
    delay += 0.09;
    return html;
  }).join("");
  el.classList.toggle("is-on", Boolean(play));
}

const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add("is-on");
    if (entry.target.id === "quote") paintQuote(true);
    io.unobserve(entry.target);
  }
}, { threshold: 0.16, rootMargin: "0px 0px -10% 0px" });

$$(".reveal").forEach((el) => io.observe(el));
paintQuote(false);
io.observe($("#quote"));

$("#lang-uk").addEventListener("click", () => { lang.value = "uk"; applyLang(); });
$("#lang-ru").addEventListener("click", () => { lang.value = "ru"; applyLang(); });

/* Floating notes */
const glyphs = ["♪", "♫", "♩", "♬", "𝄞"];
const layer = $("#notes");
for (let i = 0; i < 14; i += 1) {
  const el = document.createElement("span");
  el.className = "note";
  el.textContent = glyphs[i % glyphs.length];
  el.style.left = `${6 + (i * 7) % 90}%`;
  el.style.fontSize = `${2.2 + (i % 5) * 1.1}rem`;
  el.style.setProperty("--dur", `${16 + (i % 7) * 3}s`);
  el.style.setProperty("--delay", `${-i * 1.4}s`);
  el.style.setProperty("--dx", `${(i % 2 === 0 ? 1 : -1) * (20 + i * 4)}px`);
  layer.appendChild(el);
}

/* Music */
const track = $("#ambient");
track.volume = 0;
const musicBtn = $("#music-btn");
const MUSIC_LEVEL = 0.4;
function fadeMusic(to, ms = 2200) {
  const from = track.volume;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / ms);
    const eased = 1 - (1 - t) * (1 - t);
    track.volume = from + (to - from) * eased;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function setMusicUi() {
  const on = !track.paused;
  musicBtn.setAttribute("aria-pressed", String(on));
  musicBtn.classList.toggle("is-off", !on);
  const t = copy[lang.value];
  musicBtn.setAttribute("aria-label", on ? t.music.off : t.music.on);
  musicBtn.title = on ? t.music.off : t.music.on;
}
function tryPlay() {
  if (!track.paused) {
    setMusicUi();
    return;
  }
  track.volume = 0;
  track.play().then(() => {
    fadeMusic(MUSIC_LEVEL, 2400);
    setMusicUi();
  }).catch(() => setMusicUi());
}
tryPlay();
["pointerdown", "keydown", "touchstart"].forEach((name) => {
  window.addEventListener(name, tryPlay, { once: true, capture: true });
});
musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (track.paused) tryPlay();
  else {
    track.pause();
    track.volume = 0;
    setMusicUi();
  }
});

/* Piano */
const WHITE = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84];
const BLACK = [
  [61, 0], [63, 1], [66, 3], [68, 4], [70, 5],
  [73, 7], [75, 8], [78, 10], [80, 11], [82, 12],
];
const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const whitesEl = $("#piano-whites");
const blacksEl = $("#piano-blacks");

WHITE.forEach((midi) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "piano-white";
  b.dataset.midi = midi;
  b.setAttribute("aria-label", `${names[midi % 12]}${Math.floor(midi / 12) - 1}`);
  whitesEl.appendChild(b);
});
BLACK.forEach(([midi, after]) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "piano-black";
  b.dataset.midi = midi;
  b.style.left = `calc((100% / ${WHITE.length}) * ${after + 1} - (100% / ${WHITE.length} * 0.31))`;
  b.setAttribute("aria-label", `${names[midi % 12]}${Math.floor(midi / 12) - 1}`);
  blacksEl.appendChild(b);
});

let ctx;
function ensureAudio() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}
function playNote(midi) {
  const ac = ensureAudio();
  const freq = 440 * 2 ** ((midi - 69) / 12);
  const now = ac.currentTime;
  const out = ac.createGain();
  out.gain.value = 0.78;
  out.connect(ac.destination);
  const filter = ac.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(Math.min(freq * 10, 6200), now);
  filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 2.2, 420), now + 0.55);
  filter.connect(out);
  [
    [1, 0.52, "sine"],
    [2, 0.2, "sine"],
    [3, 0.1, "triangle"],
    [4, 0.06, "sine"],
  ].forEach(([r, g, type]) => {
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type;
    osc.frequency.value = freq * r;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(g * 0.86, 0.0002), now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    osc.connect(gain);
    gain.connect(filter);
    osc.start(now);
    osc.stop(now + 2.3);
  });
}

const piano = $("#piano");
let active = null;
function pressFromEvent(e) {
  const node = document.elementFromPoint(e.clientX, e.clientY);
  const key = node?.closest("[data-midi]");
  if (!key) return;
  const midi = Number(key.dataset.midi);
  if (midi === active) return;
  piano.querySelectorAll(".is-on").forEach((el) => el.classList.remove("is-on"));
  key.classList.add("is-on");
  active = midi;
  playNote(midi);
}
function release() {
  piano.querySelectorAll(".is-on").forEach((el) => el.classList.remove("is-on"));
  active = null;
}
piano.addEventListener("pointerdown", (e) => {
  piano.setPointerCapture(e.pointerId);
  pressFromEvent(e);
});
piano.addEventListener("pointermove", (e) => {
  if (e.buttons) pressFromEvent(e);
});
piano.addEventListener("pointerup", release);
piano.addEventListener("pointercancel", release);

applyLang();
