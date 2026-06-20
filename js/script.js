/* =============================================
   BATALLA DE TALENTOS 2026 — script.js
   ============================================= */

// ─── TRANSLATIONS ────────────────────────────────────────────
const translations = {
  es: {
    navInicio: "Inicio",
    navApertura: "Apertura",
    navDanza: "Danza",
    navLiteratura: "Literatura",
    navPintura: "Pintura",
    navMusica: "Música",
    navDibujo: "Dibujo",
    navPremiacion: "Premiación",
    navGaleria: "Galería",
    navGlosario: "Glosario",

    heroEyebrow: "Evento Artístico & Cultural · 2026",
    heroTitle: "Batalla de Talentos 2026",
    heroSubtitle: "Celebrando el talento, la creatividad y la pasión artística",
    heroText: "Bienvenidos a la Batalla de Talentos 2026, un espacio donde el arte, la creatividad y el esfuerzo de los estudiantes se convierten en protagonistas. Este evento reúne diversas expresiones artísticas que reflejan el talento y la dedicación de nuestra comunidad educativa.",
    heroBtn: "Explorar Evento",

    aperEyebrow: "Ceremonia",
    aperTitle: "Apertura",
    aperText: "La Batalla de Talentos 2026 inició con una emotiva ceremonia de apertura que reunió a estudiantes, docentes y asistentes en un ambiente lleno de entusiasmo y expectativa. Este momento marcó el comienzo de una jornada dedicada al arte, la cultura y la creatividad.",

    danzaEyebrow: "Categoría",
    danzaTitle: "Danza",
    danzaDesc: "Las presentaciones de danza destacaron por su energía, coordinación y expresión corporal. Cada actuación permitió apreciar el esfuerzo y la dedicación de los participantes, brindando un espectáculo lleno de ritmo y emoción.",
    danzaCard1: "Primera Presentación",
    danzaCard2: "Segunda Presentación",

    litEyebrow: "Categoría",
    litTitle: "Literatura",
    litText: "La sección de literatura permitió compartir poemas, relatos y reflexiones que demostraron la imaginación y sensibilidad artística de los estudiantes. Cada obra transmitió emociones y mensajes significativos al público.",
    litQuote: "\"Las palabras son el pincel con el que el alma pinta sus sueños.\"",

    pintEyebrow: "Categoría",
    pintTitle: "Pintura & Fotografía",
    pintDesc: "Las obras de pintura y fotografía exhibieron diferentes perspectivas del mundo a través del arte visual. Los trabajos reflejaron creatividad, observación y una gran capacidad para transmitir emociones mediante imágenes.",
    pintItem1: "Pintura",
    pintItem2: "Fotografía",

    musEyebrow: "Categoría",
    musTitle: "Música",
    musText: "La música ocupó un lugar especial durante el evento, ofreciendo interpretaciones llenas de emoción, talento y pasión. Cada presentación permitió disfrutar de diferentes expresiones musicales que cautivaron a los asistentes.",

    dibEyebrow: "Categoría",
    dibTitle: "Dibujo",
    dibText: "Los dibujos expuestos destacaron por su originalidad, creatividad y nivel de detalle. Cada obra representó el talento artístico y la capacidad de expresión de los estudiantes.",

    premEyebrow: "Reconocimientos",
    premTitle: "Ceremonia de Premiación",
    premDesc: "La ceremonia de premiación reconoció el esfuerzo, la dedicación y el compromiso demostrado por los participantes durante la Batalla de Talentos 2026. Este momento especial celebró el trabajo realizado en cada una de las categorías artísticas.",
    premWinner: "Ganador por anunciar",

    galEyebrow: "Memorias",
    galTitle: "Galería General",

    footerQuote: "\"El talento florece cuando encuentra un escenario para brillar.\"",
    footerInst: "Institución Educativa",
    footerRights: "© 2026 Todos los derechos reservados",
  },

  en: {
    navInicio: "Home",
    navApertura: "Opening",
    navDanza: "Dance",
    navLiteratura: "Literature",
    navPintura: "Painting",
    navMusica: "Music",
    navDibujo: "Drawing",
    navPremiacion: "Awards",
    navGaleria: "Gallery",
    navGlosario: "Glossary",

    heroEyebrow: "Artistic & Cultural Event · 2026",
    heroTitle: "Talent Battle 2026",
    heroSubtitle: "Celebrating talent, creativity and artistic passion",
    heroText: "Welcome to the Talent Battle 2026, a space where art, creativity and the effort of our students take centre stage. This event brings together diverse artistic expressions that reflect the talent and dedication of our educational community.",
    heroBtn: "Explore Event",

    aperEyebrow: "Ceremony",
    aperTitle: "Opening",
    aperText: "The Talent Battle 2026 began with an emotional opening ceremony that brought together students, teachers and guests in an atmosphere full of enthusiasm and anticipation. This moment marked the start of a day dedicated to art, culture and creativity.",

    danzaEyebrow: "Category",
    danzaTitle: "Dance",
    danzaDesc: "The dance performances stood out for their energy, coordination and physical expression. Each act allowed the audience to appreciate the effort and dedication of the participants, delivering a show full of rhythm and emotion.",
    danzaCard1: "First Performance",
    danzaCard2: "Second Performance",

    litEyebrow: "Category",
    litTitle: "Literature",
    litText: "The literature section allowed students to share poems, stories and reflections that demonstrated their imagination and artistic sensitivity. Each work conveyed emotions and meaningful messages to the audience.",
    litQuote: "\"Words are the brush with which the soul paints its dreams.\"",

    pintEyebrow: "Category",
    pintTitle: "Painting & Photography",
    pintDesc: "The painting and photography works exhibited different perspectives of the world through visual art. The pieces reflected creativity, observation and a great ability to convey emotions through images.",
    pintItem1: "Painting",
    pintItem2: "Photography",

    musEyebrow: "Category",
    musTitle: "Music",
    musText: "Music held a special place during the event, offering performances full of emotion, talent and passion. Each presentation allowed attendees to enjoy different musical expressions that captivated the audience.",

    dibEyebrow: "Category",
    dibTitle: "Drawing",
    dibText: "The drawings on display stood out for their originality, creativity and level of detail. Each piece represented the artistic talent and expressive ability of the students.",

    premEyebrow: "Recognition",
    premTitle: "Awards Ceremony",
    premDesc: "The awards ceremony recognised the effort, dedication and commitment demonstrated by participants throughout the Talent Battle 2026. This special moment celebrated the work done across all artistic categories.",
    premWinner: "Winner to be announced",

    galEyebrow: "Memories",
    galTitle: "General Gallery",

    footerQuote: "\"Talent flourishes when it finds a stage to shine on.\"",
    footerInst: "Educational Institution",
    footerRights: "© 2026 All rights reserved",
  }
};

let currentLang = 'es';

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  applyTranslations(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─── NAVBAR ─────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateProgress();
  updateActiveNav();
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── ACTIVE NAV ─────────────────────────────────────────────
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 100;
    if (window.scrollY >= top) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ─── PROGRESS BAR ───────────────────────────────────────────
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ─── LIGHTBOX ───────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, type = 'image') {
  lightboxContent.innerHTML = '';
  if (type === 'video') {
    const v = document.createElement('video');
    v.src = src; v.controls = true; v.autoplay = true;
    v.style.maxWidth = '90vw'; v.style.maxHeight = '85vh';
    lightboxContent.appendChild(v);
  } else {
    const img = document.createElement('img');
    img.src = src; img.alt = '';
    lightboxContent.appendChild(img);
  }
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxContent.innerHTML = '';
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Attach lightbox to gallery items
document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    const src  = el.dataset.lightbox;
    const type = el.dataset.type || 'image';
    openLightbox(src, type);
  });
});

// ─── LANGUAGE BUTTONS ────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLang('es');
  updateActiveNav();
});
