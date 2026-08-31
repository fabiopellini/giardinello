/* ============================================
   GIARDINELLO HOUSE - Main JavaScript
   ============================================ */

// --- Video Fallback ---
(function() {
  var video = document.querySelector('.hero-video');
  var fallback = document.querySelector('.hero-fallback');
  if (!video || !fallback) return;

  function showFallback() {
    document.querySelector('.hero-bg').classList.add('hero-video-hidden');
  }

  // If video plays successfully, hide fallback
  video.addEventListener('playing', function() {
    fallback.style.display = 'none';
  });

  // If video errors or doesn't play within 4s, show fallback
  video.addEventListener('error', showFallback);
  setTimeout(function() {
    if (video.paused && video.readyState < 2) showFallback();
  }, 4000);
})();

// --- Language System ---
let currentLang = 'it';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-it]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
  });

  // Swap language-specific images
  document.querySelectorAll('[data-' + lang + '-src]').forEach(img => {
    const src = img.getAttribute('data-' + lang + '-src');
    if (src) img.src = src;
  });

  // Swap video poster
  document.querySelectorAll('[data-' + lang + '-poster]').forEach(video => {
    const poster = video.getAttribute('data-' + lang + '-poster');
    if (poster) video.poster = poster;
  });

  // Update lang switch buttons
  document.querySelectorAll('.lang-switch button, .lang-switch-mobile button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Language switch event listeners
document.querySelectorAll('.lang-switch button, .lang-switch-mobile button').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// --- Header Scroll ---
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');

function handleScroll() {
  const scrolled = window.scrollY > 60;
  header.classList.toggle('scrolled', scrolled);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Mobile Menu ---
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// --- Fade-in Animations ---
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => fadeObserver.observe(el));

// --- Villa Data ---
const villaData = {
  smeraldo: {
    image: { it: 'assets/images/ita/2_villa_smeraldo.jpeg', en: 'assets/images/eng/2_villa_smeraldo.jpeg' },
    title: 'Villa Smeraldo',
    desc: {
      it: 'Una villa dal carattere mediterraneo contemporaneo, pensata per valorizzare materiali naturali, spazi aperti e momenti di autentico relax. Immersa in un contesto appartato e armonioso, questa splendida villa coniuga il fascino dell\'architettura mediterranea con gli standard abitativi moderni.',
      en: 'A villa with a contemporary Mediterranean character, designed to enhance natural materials, open spaces and moments of genuine relaxation. Set in a private and harmonious context, this splendid villa combines the charm of Mediterranean architecture with modern living standards.'
    },
    features: {
      it: ['Piscina privata con solarium', 'Patio coperto per pranzi e cene all\'aperto', 'Giardino paesaggistico', 'Ambienti luminosi e accoglienti', 'Materiali naturali di pregio', 'Design mediterraneo contemporaneo'],
      en: ['Private pool with sunbathing area', 'Covered patio for outdoor dining', 'Landscaped garden', 'Bright and welcoming rooms', 'Premium natural materials', 'Contemporary Mediterranean design']
    },
    color: '#899B68'
  },
  corallo: {
    image: { it: 'assets/images/ita/3_villa_corallo.jpeg', en: 'assets/images/eng/3_villa_corallo.jpeg' },
    title: 'Villa Corallo',
    desc: {
      it: 'Una residenza su due livelli che reinterpreta l\'eleganza delle ville siciliane attraverso pietra naturale, legno e un\'architettura calda e distintiva. Villa Corallo nasce dall\'incontro tra la tradizione architettonica mediterranea e il comfort contemporaneo.',
      en: 'A two-level residence that reinterprets the elegance of Sicilian villas through natural stone, wood and warm, distinctive architecture. Villa Corallo is born from the encounter between Mediterranean architectural tradition and contemporary comfort.'
    },
    features: {
      it: ['Architettura mediterranea', 'Elementi in pietra naturale', 'Ampi spazi abitativi', 'Piscina e zona outdoor', 'Tetto inclinato characteristic', 'Su due livelli'],
      en: ['Mediterranean architecture', 'Natural stone elements', 'Spacious living areas', 'Pool and outdoor area', 'Characteristic sloped roof', 'Two levels']
    },
    color: '#B96040'
  },
  perla: {
    image: { it: 'assets/images/ita/4_villa_perla.jpeg', en: 'assets/images/eng/4_villa_perla.jpeg' },
    title: 'Villa Perla',
    desc: {
      it: 'Linee pure, grandi vetrate e continuità tra interno ed esterno: una villa pensata per vivere la luce e il paesaggio tutto l\'anno. Circondata da 1.500 mq di giardino mediterraneo, Villa Perla rappresenta il perfetto equilibrio tra lusso, comfort e sostenibilità.',
      en: 'Pure lines, large windows and continuity between interior and exterior: a villa designed to experience light and landscape all year round. Surrounded by 1,500 sqm of Mediterranean garden, Villa Perla represents the perfect balance between luxury, comfort and sustainability.'
    },
    features: {
      it: ['Circa 1.500 mq di giardino mediterraneo', 'Vetrate a tutta altezza', 'Piscina privata', 'Equilibrio tra lusso, comfort e sostenibilità', 'Continuità interno-esterno', 'Luce naturale in ogni ambiente'],
      en: ['Approx. 1,500 sqm of Mediterranean garden', 'Floor-to-ceiling windows', 'Private pool', 'Balance between luxury, comfort and sustainability', 'Interior-exterior continuity', 'Natural light in every room']
    },
    color: '#E5D3BF'
  },
  azzurra: {
    image: { it: 'assets/images/ita/5_villa_azzurra.jpeg', en: 'assets/images/eng/5_villa_azzurra.jpeg' },
    title: 'Villa Azzurra',
    desc: {
      it: 'Una residenza su un unico livello, dove design essenziale, rivestimenti in legno naturale e viste aperte dialogano con il paesaggio. Sviluppata interamente su un unico piano, la villa si distingue per le ampie vetrate panoramiche e per gli eleganti rivestimenti in legno naturale.',
      en: 'A single-level residence where essential design, natural wood finishes and open views dialogue with the landscape. Developed entirely on a single level, the villa stands out for its wide panoramic windows and elegant natural wood finishes.'
    },
    features: {
      it: ['Sviluppo su un solo piano', 'Ampie aperture panoramiche', 'Pergolati e schermature in legno', 'Piscina privata e spazi esterni generosi', 'Rivestimenti in legno naturale', 'Design essenziale e contemporaneo'],
      en: ['Single-level layout', 'Wide panoramic openings', 'Pergolas and wooden screens', 'Private pool and generous outdoor spaces', 'Natural wood finishes', 'Essential contemporary design']
    },
    color: '#91BCD6'
  }
};

// --- Modal ---
function openModal(villa) {
  const data = villaData[villa];
  if (!data) return;

  document.getElementById('modalImage').src = data.image[currentLang];
  document.getElementById('modalImage').alt = data.title;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc[currentLang];

  const featuresEl = document.getElementById('modalFeatures');
  featuresEl.innerHTML = '';
  data.features[currentLang].forEach(f => {
    const div = document.createElement('div');
    div.className = 'modal-feature';
    div.style.setProperty('--accent', data.color);
    div.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:' + data.color + ';flex-shrink:0;"></span> ' + f;
    featuresEl.appendChild(div);
  });

  document.getElementById('villaModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('villaModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('villaModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// --- Lightbox ---
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// --- Depliant ---
function openDepliant() {
  document.getElementById('depliantOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDepliant() {
  document.getElementById('depliantOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function switchDepliantTab(tab) {
  document.querySelectorAll('.depliant-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.depliant-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.depliant-tab[data-tab="' + tab + '"]').classList.add('active');
  document.querySelector('.depliant-tab-btn[data-tab="' + tab + '"]').classList.add('active');
  // Scroll to top of body
  document.getElementById('depliantBody').scrollTop = 0;
}

function printDepliant() {
  var activeTab = document.querySelector('.depliant-tab.active');
  if (!activeTab) return;

  var tab = activeTab.dataset.tab;
  var img = activeTab.querySelector('.depliant-image img');
  var desc = activeTab.querySelector('.depliant-desc');
  var features = activeTab.querySelectorAll('.depliant-features li');
  var brand = activeTab.querySelector('.depliant-brand h3');
  var subtitle = activeTab.querySelector('.depliant-subtitle');
  var label = activeTab.querySelector('.depliant-label');

  var featuresHtml = '';
  features.forEach(function(li) {
    featuresHtml += '<li>' + li.textContent + '</li>';
  });

  var lang = currentLang;
  var titleText = lang === 'it' ? 'DEPLIANT CARTACEO DIGITALE \u2022 GIARDINELLO HOUSE' : 'DIGITAL BROCHURE \u2022 GIARDINELLO HOUSE';
  var propLabel = lang === 'it' ? 'LA PROPRIET\u00C0' : 'THE PROPERTY';
  var contactLabel = lang === 'it' ? 'CONTATTI' : 'CONTACTS';
  var phoneLabel = lang === 'it' ? 'Telefono:' : 'Phone:';
  var emailLabel = lang === 'it' ? 'Email:' : 'Email:';
  var projectLabel = label ? label.textContent : (lang === 'it' ? 'PROGETTO APPROVATO' : 'APPROVED PROJECT');

  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + (brand ? brand.textContent : 'Villa') + ' - Giardinello House</title><style>' +
    '@page{size:A4 landscape;margin:0;}' +
    '*{margin:0;padding:0;box-sizing:border-box;}' +
    'body{font-family:"Manrope",system-ui,sans-serif;color:#1B1B1B;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +
    '.page{width:297mm;height:210mm;display:flex;flex-direction:column;overflow:hidden;page-break-after:always;page-break-inside:avoid;}' +
    '.page:last-child{page-break-after:auto;}' +
    '.hero{width:100%;height:110mm;overflow:hidden;}' +
    '.hero img{width:100%;height:100%;object-fit:cover;object-fit:cover;object-position:center 30%;}' +
    '.content{display:flex;flex:1;}' +
    '.text-col{flex:1.2;padding:8mm 6mm;border-right:1px solid #e8e6dc;}' +
    '.contact-col{flex:0.8;padding:8mm 6mm;border-right:1px solid #e8e6dc;}' +
    '.brand-col{flex:0.8;padding:8mm 6mm;background:#152331;color:#fff;display:flex;flex-direction:column;justify-content:center;}' +
    '.label{font-size:7pt;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#B96040;margin-bottom:3mm;}' +
    '.desc{font-size:9pt;line-height:1.6;color:#444;margin-bottom:4mm;}' +
    '.features{list-style:none;}' +
    '.features li{padding:2mm 0;font-size:8pt;color:#555;border-bottom:1px solid #f0f0f0;}' +
    '.features li:before{content:"\\2713 ";color:#899B68;font-weight:700;}' +
    '.contact-title{font-size:8pt;font-weight:700;margin-bottom:2mm;}' +
    '.contact-info{font-size:8pt;line-height:1.8;color:#444;}' +
    '.brand-col h3{font-family:"Cormorant Garamond",Georgia,serif;font-size:18pt;margin-bottom:2mm;letter-spacing:0.04em;}' +
    '.brand-sub{font-size:7pt;letter-spacing:0.12em;text-transform:uppercase;opacity:0.7;margin-bottom:4mm;}' +
    '.brand-badge{display:inline-block;padding:2mm 4mm;border:1px solid rgba(255,255,255,0.3);font-size:7pt;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;align-self:flex-start;}' +
    '.footer-bar{background:#152331;color:rgba(255,255,255,0.6);padding:2mm 6mm;font-size:6pt;text-align:center;letter-spacing:0.1em;}' +
    '</style></head><body>';

  html += '<div class="page">';
  html += '<div class="hero"><img src="' + img.src + '"></div>';
  html += '<div class="content">';
  html += '<div class="text-col"><div class="label">' + propLabel + '</div><p class="desc">' + desc.textContent + '</p><ul class="features">' + featuresHtml + '</ul></div>';
  html += '<div class="contact-col"><div class="label">' + contactLabel + '</div><p class="contact-title">' + phoneLabel + '</p><div class="contact-info">+39 340 3907922 \u2014 Arch. Salvatore Triassi<br>+39 340 5796680 \u2014 Ing. Vincenzo Caruana<br>+39 366 1116521 \u2014 Dott. Gianni Riggi<br>+39 366 4353779 \u2014 Arch. Massimiliano Triassi</div><p class="contact-title" style="margin-top:3mm;">' + emailLabel + '</p><div class="contact-info">giardinellohouse@gmail.com<br>consorziogiardinellohouse@gmail.com</div></div>';
  html += '<div class="brand-col"><div class="label">' + projectLabel + '</div><h3>' + (brand ? brand.textContent : '') + '</h3><p class="brand-sub">' + (subtitle ? subtitle.textContent : '') + '</p><div class="brand-badge">GIARDINELLO HOUSE SRL</div></div>';
  html += '</div>';
  html += '<div class="footer-bar">GIARDINELLO HOUSE S.R.L. \u2022 SECCAGRANDE \u2022 RIBERA \u2022 AGRIGENTO \u2022 SICILIA</div>';
  html += '</div></body></html>';

  var printWindow = window.open('', '_blank', 'width=1200,height=800');
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function() {
    printWindow.print();
  }, 600);
}

document.getElementById('depliantOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeDepliant();
});

// --- Slideshow Territorio ---
(function() {
  var slides = document.querySelectorAll('.territorio-slideshow .slide');
  var dotsContainer = document.getElementById('slideshowDots');
  if (!slides.length || !dotsContainer) return;

  var current = 0;
  var timer = null;
  var interval = 4000;

  // Create dots
  slides.forEach(function(_, i) {
    var dot = document.createElement('button');
    dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.onclick = function() { goTo(i); };
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll('.slideshow-dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function prev() {
    goTo((current - 1 + slides.length) % slides.length);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, interval);
  }

  // Expose for buttons
  window.nextSlide = next;
  window.prevSlide = prev;

  // Start
  resetTimer();

  // Pause on hover
  var container = document.querySelector('.slideshow-container');
  container.addEventListener('mouseenter', function() { clearInterval(timer); });
  container.addEventListener('mouseleave', resetTimer);

  // Pause when not visible
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { resetTimer(); } else { clearInterval(timer); }
    });
  }, { threshold: 0.3 });
  observer.observe(container);
})();

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeLightbox();
    closeDepliant();
  }
});

// --- Form Handling ---
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('formSuccess');

  // Basic validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Collect form data
  const data = new FormData(form);
  const obj = {};
  data.forEach((val, key) => obj[key] = val);

  // In production, send to backend/CRM
  console.log('Form submission:', obj);

  // Show success
  form.style.display = 'none';
  success.classList.add('visible');

  // Reset after 5 seconds
  setTimeout(() => {
    form.reset();
    form.style.display = '';
    success.classList.remove('visible');
  }, 5000);
}

// --- Parallax subtle effect on hero ---
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const bg = document.querySelector('.hero-bg');
      const video = document.querySelector('.hero-video');
      const fallback = document.querySelector('.hero-fallback');
      const media = (video && video.style.display !== 'none') ? video : fallback;
      if (media && window.scrollY < window.innerHeight) {
        media.style.transform = 'translateY(' + (window.scrollY * 0.15) + 'px) scale(1.05)';
      }
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
