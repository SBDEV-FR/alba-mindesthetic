// ============================================================
//  ALBA MINDESTHETIC — script.js
//  Rendu dynamique depuis config.js + interactions UI
// ============================================================

// ── Injection des URLs depuis CONFIG ────────────────────────
function initLinks() {
  // Liens RDV Planity
  document.querySelectorAll('.btn-rdv').forEach(el => {
    el.href = CONFIG.planity_url;
  });

  // Liens Instagram
  document.querySelectorAll('.nav-instagram, .footer-instagram').forEach(el => {
    el.href = CONFIG.instagram_url;
  });

  // Téléphone contact
  const telLink = document.getElementById('contact-tel-link');
  if (telLink) {
    telLink.href = 'tel:' + CONFIG.telephone;
    telLink.textContent = CONFIG.telephone_affiche;
  }
  const telDisplay = document.getElementById('contact-tel-display');
  if (telDisplay) telDisplay.textContent = CONFIG.telephone_affiche;
}


// ── Render Services ──────────────────────────────────────────
function renderServices() {
  const grid = document.querySelector('.services-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.services.map(s => `
    <div class="service-card" data-category="${s.id}">
      <div class="service-icon">${s.icone}</div>
      <h3>${s.titre}</h3>
      <p>${s.description}</p>
      <div class="service-card-btns">
        <a href="#tarifs" class="btn-secondary" data-filter-target="${s.id}">Voir les tarifs</a>
        <a href="${CONFIG.planity_url}" class="btn-rdv-card" target="_blank" rel="noopener">Prendre RDV</a>
      </div>
    </div>
  `).join('');
}


// ── Render Galerie ───────────────────────────────────────────
function renderGalerie() {
  const grid = document.querySelector('.galerie-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.galerie.map(item => {
    if (item.fichier) {
      return `
        <figure>
          <img src="${item.fichier}" alt="${item.legende}" loading="lazy">
          <figcaption>${item.legende}</figcaption>
        </figure>`;
    } else {
      return `
        <figure class="galerie-placeholder">
          <div class="placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <span>Ajouter une photo</span>
          </div>
          <figcaption>${item.legende}</figcaption>
        </figure>`;
    }
  }).join('');
}


// ── Render Tarifs (accordion) ────────────────────────────────
function renderTarifs() {
  const filtersEl = document.querySelector('.tarif-filters');
  const listEl = document.querySelector('.tarif-list');
  if (!filtersEl || !listEl) return;

  // Filtres
  const filterButtons = [
    { label: 'Tous', value: 'all' },
    ...CONFIG.services.map(s => ({ label: s.titre, value: s.id })),
  ];

  filtersEl.innerHTML = filterButtons.map((f, i) => `
    <button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.value}">${f.label}</button>
  `).join('');

  // Catégories accordion
  listEl.innerHTML = CONFIG.services.map(s => {
    const tarifRows = s.tarifs.map(t => `
      <div class="tarif-item">
        <span class="prestation">${t.prestation}</span>
        <span class="duree">${t.duree}</span>
        <span class="prix">${t.prix}</span>
      </div>`).join('');

    const forfaitBlock = s.forfaits ? `
      <h4>Forfaits combinés</h4>
      <div class="tarif-table">
        ${s.forfaits.map(f => `
        <div class="tarif-item">
          <span class="prestation">${f.prestation}</span>
          <span class="duree">${f.duree}</span>
          <span class="prix">${f.prix}</span>
        </div>`).join('')}
      </div>` : '';

    const aSavoirBlock = (s.a_savoir || s.contre_indications) ? `
      <div class="a-savoir">
        <button class="a-savoir-toggle" type="button">
          <span>À savoir &amp; Contre-indications</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="a-savoir-body">
          ${s.a_savoir ? `<div class="a-savoir-section"><strong>À savoir :</strong><p>${s.a_savoir}</p></div>` : ''}
          ${s.contre_indications ? `<div class="a-savoir-section"><strong>Contre-indications :</strong><p>${s.contre_indications}</p></div>` : ''}
        </div>
      </div>` : '';

    return `
      <div class="tarif-category" data-category="${s.id}">
        <div class="tarif-category-header">
          <h3>${s.titre}</h3>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="tarif-category-body">
          <div class="tarif-table">${tarifRows}</div>
          ${forfaitBlock}
          ${aSavoirBlock}
          <div class="tarif-rdv">
            <a href="${CONFIG.planity_url}" class="btn-primary btn-rdv" target="_blank" rel="noopener">Prendre RDV</a>
          </div>
        </div>
      </div>`;
  }).join('');

  // Événements filtres
  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const categories = listEl.querySelectorAll('.tarif-category');

    categories.forEach(cat => {
      if (filter === 'all') {
        cat.classList.remove('hidden');
        cat.classList.remove('open'); // replier toutes
      } else if (cat.dataset.category === filter) {
        cat.classList.remove('hidden');
        cat.classList.add('open'); // déplier celle sélectionnée
      } else {
        cat.classList.add('hidden');
        cat.classList.remove('open');
      }
    });
  });

  // Accordion : clic sur le header
  listEl.addEventListener('click', e => {
    const header = e.target.closest('.tarif-category-header');
    if (!header) return;
    const category = header.closest('.tarif-category');
    category.classList.toggle('open');
  });

  // Accordion "À savoir"
  listEl.addEventListener('click', e => {
    const toggle = e.target.closest('.a-savoir-toggle');
    if (!toggle) return;
    e.stopPropagation(); // ne pas déclencher l'accordion parent
    const aSavoir = toggle.closest('.a-savoir');
    aSavoir.classList.toggle('open');
  });
}


// ── Render Horaires ──────────────────────────────────────────
function renderHoraires() {
  const grid = document.querySelector('.horaires-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.horaires.map(h => `
    <div class="horaire-item${h.jour === 'Dimanche' ? ' dimanche' : ''}">
      <span class="jour">${h.jour}</span>
      <span class="heures">${h.heures}</span>
    </div>`).join('');
}


// ── Navigation mobile toggle ─────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


// ── Navbar scroll effect ─────────────────────────────────────
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// ── Smooth scroll for anchor links ───────────────────────────
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  // Gérer le filtre tarif depuis les cartes service
  const filterTarget = anchor.dataset.filterTarget;
  if (filterTarget) {
    e.preventDefault();
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterTarget}"]`);
    if (filterBtn) filterBtn.click();
  }

  const href = anchor.getAttribute('href');
  if (href === '#') return;
  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  const navHeight = navbar.offsetHeight;
  window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
});


// ── Active navigation highlight on scroll ────────────────────
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollPos = window.scrollY + navbar.offsetHeight + 100;
  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (!navLink) return;
    const inView = scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight;
    navLink.style.color = inView ? '#b99d71' : '';
  });
}

window.addEventListener('scroll', highlightNavigation);


// ── Scroll animations ────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });


// ── Initialisation ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLinks();
  renderServices();
  renderGalerie();
  renderTarifs();
  renderHoraires();

  // Fade-in sur les éléments générés
  document.querySelectorAll('.service-card, .tarif-category, .contact-item, .horaires-grid, .galerie-grid figure').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
