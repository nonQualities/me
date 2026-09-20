/* ==========================================================================
   PORTFOLIO ENGINE — Ronit Choudhury
   Architecture: Multi-Page with Floating HUD & Hotkeys
   Fonts: Cascadia Code (body) · Montserrat BOLD (headings & accents)
   Accents: Turkish Blue (Light) / Teal Blue (Dark)
   Data source: PORTFOLIO_DATA (data.js)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. THEME
   -------------------------------------------------------------------------- */
function initTheme() {
  const stored = localStorage.getItem('rfc-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('rfc-theme', next);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const label = theme === 'dark' ? '[Dark]' : '[Light]';
  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    btn.textContent = label;
  });
}

/* --------------------------------------------------------------------------
   2. FLOATING SIDEBAR HUD (inner pages only)
   -------------------------------------------------------------------------- */
function initSidebar(currentPage) {
  const mount = document.getElementById('sidebar-mount');
  if (!mount) return;

  const pages = [
    { key: 'index',      num: '00', label: 'Home' },
    { key: 'about',      num: '01', label: 'About' },
    { key: 'stack',      num: '02', label: 'Stack' },
    { key: 'projects',   num: '03', label: 'Projects' },
    { key: 'experience', num: '04', label: 'Experience' },
    { key: 'github',     num: '05', label: 'GitHub' },
    { key: 'reading',    num: '06', label: 'Reading' },
    { key: 'writing',    num: '07', label: 'Writing' },
    { key: 'contact',    num: '08', label: 'Contact' }
  ];

  const links = pages.map(p => {
    const isCurrent = p.key === currentPage;
    const active = isCurrent ? ' active' : '';
    const ariaCurrent = isCurrent ? ' aria-current="page"' : '';
    return `<a href="${p.key}.html" class="floating-link${active}"${ariaCurrent}>
      <span class="floating-link-num">${p.num}.</span> ${p.label}
    </a>`;
  }).join('');

  const currentIndex = pages.findIndex(p => p.key === currentPage);
  const nextPageIndex = (currentIndex >= 0 && currentIndex < pages.length - 1) ? currentIndex + 1 : 0;
  const nextPage = pages[nextPageIndex];

  mount.innerHTML = `
    <div class="floating-nav-container">
      <div class="floating-nav-btn-group" id="floating-btn-group">
        <button class="floating-trigger-btn" id="floating-trigger" aria-label="Toggle navigation menu" aria-haspopup="true" aria-expanded="false" aria-controls="floating-hud" type="button">
          <span class="menu-icon">≡</span>
          <span>Menu</span>
          <span class="menu-badge">0-8</span>
        </button>
        <a href="${nextPage.key}.html" class="floating-next-btn" id="floating-next-btn" title="Next: ${nextPage.label}" aria-label="Go to next page: ${nextPage.label}">
          <span class="floating-next-icon">→</span>
        </a>
      </div>
      <div class="floating-nav-hud is-hidden" id="floating-hud" role="region" aria-label="Navigation Menu">
        <div class="floating-hud-header">
          <span class="floating-hud-title">Navigation Index</span>
          <span style="cursor:pointer;" id="floating-close" title="Close menu" role="button" tabindex="0" aria-label="Close navigation menu">✕</span>
        </div>
        <nav class="floating-nav-links" aria-label="Site pages">${links}</nav>
        <div class="floating-hud-footer">
          <button class="rfc-btn" id="hud-search-btn" type="button" aria-label="Search Portfolio">[Search /]</button>
          <button class="rfc-btn theme-toggle-btn" type="button" aria-label="Toggle theme">[Theme]</button>
          <button class="rfc-btn" id="hotkeys-open-btn" type="button" aria-label="Keyboard Shortcuts">[?] Keys</button>
        </div>
      </div>
    </div>
  `;

  const btnGroup = document.getElementById('floating-btn-group');
  const trigger = document.getElementById('floating-trigger');
  const hud = document.getElementById('floating-hud');
  const closeBtn = document.getElementById('floating-close');

  function openHud() {
    if (hud) {
      hud.classList.remove('is-hidden');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHud() {
    if (hud) {
      hud.classList.add('is-hidden');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const willBeOpen = hud.classList.contains('is-hidden');
    if (willBeOpen) {
      openHud();
    } else {
      closeHud();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeHud);
    closeBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeHud();
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (!hud.contains(e.target) && !trigger.contains(e.target)) closeHud();
  });

  // Trigger glowing wiggle on the menu button group when the user tries to scroll past EOF
  let wiggleCooldown = false;
  function triggerWiggle() {
    const el = btnGroup || trigger;
    if (!el || wiggleCooldown) return;
    el.classList.remove('is-wiggling');
    // Force DOM reflow so animation can restart
    void el.offsetWidth;
    el.classList.add('is-wiggling');
    wiggleCooldown = true;
    setTimeout(() => {
      el.classList.remove('is-wiggling');
      wiggleCooldown = false;
    }, 900);
  }

  function isAtEndOfPage() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    return (scrollY + windowHeight >= docHeight - 25);
  }

  // Wheel listener: catch downward wheel attempts when at EOF
  window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && isAtEndOfPage()) {
      triggerWiggle();
    }
  }, { passive: true });

  // Touch listener: catch mobile pull-up attempts at EOF
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (deltaY > 8 && isAtEndOfPage()) {
        triggerWiggle();
      }
    }
  }, { passive: true });

  const hudThemeBtn = hud.querySelector('.theme-toggle-btn');
  if (hudThemeBtn) {
    hudThemeBtn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '[Dark]' : '[Light]';
    hudThemeBtn.addEventListener('click', toggleTheme);
  }

  const keysBtn = hud.querySelector('#hotkeys-open-btn');
  if (keysBtn) keysBtn.addEventListener('click', openHotkeysModal);

  const searchBtn = hud.querySelector('#hud-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      closeHud();
      if (typeof openCommandPalette === 'function') openCommandPalette();
    });
  }
}

/* --------------------------------------------------------------------------
   3. HOTKEYS & MODAL ACCESSIBILITY
   -------------------------------------------------------------------------- */
const SUBPAGES_MANIFEST = [
  { key: 'about',      num: '01', title: 'About & Principles', file: 'about.html' },
  { key: 'stack',      num: '02', title: 'Technical Stack', file: 'stack.html' },
  { key: 'projects',   num: '03', title: 'Projects & Systems', file: 'projects.html' },
  { key: 'experience', num: '04', title: 'Experience & Internships', file: 'experience.html' },
  { key: 'github',     num: '05', title: 'GitHub Telemetry', file: 'github.html' },
  { key: 'reading',    num: '06', title: 'Reading & Notes', file: 'reading.html' },
  { key: 'writing',    num: '07', title: 'Writing & Articles', file: 'writing.html' },
  { key: 'contact',    num: '08', title: 'Contact Endpoints', file: 'contact.html' }
];

let hotkeysPreviousFocus = null;

function initHotkeys() {
  const modal = document.createElement('div');
  modal.className = 'hotkeys-modal-backdrop';
  modal.id = 'hotkeys-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Keyboard Shortcuts');
  modal.innerHTML = `
    <div class="hotkeys-dialog">
      <div class="hotkeys-title">
        <span>Keyboard Shortcuts</span>
        <span style="cursor:pointer;" id="hotkeys-close" role="button" tabindex="0" aria-label="Close dialog">Esc</span>
      </div>
      <div style="margin-bottom:12px; font-size:12px; color:var(--dim);">
        Press a number key to navigate:
      </div>
      <div class="hotkey-row"><span>Home</span><span class="hotkey-key">0</span></div>
      <div class="hotkey-row"><span>About</span><span class="hotkey-key">1</span></div>
      <div class="hotkey-row"><span>Stack</span><span class="hotkey-key">2</span></div>
      <div class="hotkey-row"><span>Projects</span><span class="hotkey-key">3</span></div>
      <div class="hotkey-row"><span>Experience</span><span class="hotkey-key">4</span></div>
      <div class="hotkey-row"><span>GitHub</span><span class="hotkey-key">5</span></div>
      <div class="hotkey-row"><span>Reading</span><span class="hotkey-key">6</span></div>
      <div class="hotkey-row"><span>Writing</span><span class="hotkey-key">7</span></div>
      <div class="hotkey-row"><span>Contact</span><span class="hotkey-key">8</span></div>
      <div class="hotkey-row" style="margin-top:8px; border-top:1px solid var(--border-light); padding-top:6px;">
        <span>Quick Search</span><span class="hotkey-key">/ or ⌘K</span>
      </div>
      <div class="hotkey-row"><span>Previous Section</span><span class="hotkey-key">[</span></div>
      <div class="hotkey-row"><span>Next Section</span><span class="hotkey-key">]</span></div>
      <div class="hotkey-row"><span>Toggle Theme</span><span class="hotkey-key">t</span></div>
      <div class="hotkey-row"><span>Toggle Menu</span><span class="hotkey-key">m</span></div>
      <div class="hotkey-row"><span>Close Dialog</span><span class="hotkey-key">Esc</span></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = document.getElementById('hotkeys-close');
  closeBtn.addEventListener('click', closeHotkeysModal);
  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeHotkeysModal();
    }
  });

  modal.addEventListener('click', (e) => { if (e.target === modal) closeHotkeysModal(); });

  // Trap focus inside modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      closeBtn.focus();
    }
  });

  window.addEventListener('keydown', (e) => {
    // 1. If Command Palette is open, block all other page functions and hotkeys completely
    if (cmdPaletteModal && cmdPaletteModal.classList.contains('is-visible')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeCommandPalette();
      }
      return;
    }

    // 2. If the user is currently typing inside any input, textarea, or editable element, do NOT trigger any hotkeys
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable) {
      return;
    }

    // Command palette triggers: '/' or Cmd+K / Ctrl+K
    if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      e.stopPropagation();
      openCommandPalette();
      return;
    }

    // Hotkeys modal triggers: '?' or Shift+'/'
    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      toggleHotkeysModal();
      return;
    }

    // Close overlays: Esc
    if (e.key === 'Escape') {
      closeHotkeysModal();
      if (typeof closeCommandPalette === 'function') closeCommandPalette();
      const hud = document.getElementById('floating-hud');
      const trigger = document.getElementById('floating-trigger');
      if (hud) {
        hud.classList.add('is-hidden');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    // Theme toggle: 't'
    if (e.key.toLowerCase() === 't') {
      toggleTheme();
      return;
    }

    // Menu toggle: 'm'
    if (e.key.toLowerCase() === 'm') {
      const hud = document.getElementById('floating-hud');
      const trigger = document.getElementById('floating-trigger');
      if (hud) {
        const isHidden = hud.classList.toggle('is-hidden');
        if (trigger) trigger.setAttribute('aria-expanded', !isHidden);
      }
      return;
    }

    // Subpage pagination shortcuts: '[' (prev) and ']' (next)
    if (e.key === '[' || e.key === ']') {
      const path = window.location.pathname;
      const currentSub = SUBPAGES_MANIFEST.find(p => path.includes(p.key));
      if (currentSub) {
        e.preventDefault();
        const idx = SUBPAGES_MANIFEST.indexOf(currentSub);
        if (e.key === '[') {
          const target = idx === 0 ? 'index.html' : SUBPAGES_MANIFEST[idx - 1].file;
          window.location.href = target;
        } else {
          const target = idx === SUBPAGES_MANIFEST.length - 1 ? 'index.html' : SUBPAGES_MANIFEST[idx + 1].file;
          window.location.href = target;
        }
      }
      return;
    }

    // Number keys 0-8 for direct section jump
    if (e.key >= '0' && e.key <= '8') {
      const pages = ['index','about','stack','projects','experience','github','reading','writing','contact'];
      window.location.href = pages[parseInt(e.key)] + '.html';
    }
  });
}

function openHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m) {
    hotkeysPreviousFocus = document.activeElement;
    m.classList.add('is-visible');
    const closeBtn = document.getElementById('hotkeys-close');
    if (closeBtn) closeBtn.focus();
  }
}

function closeHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m) {
    m.classList.remove('is-visible');
    if (hotkeysPreviousFocus && typeof hotkeysPreviousFocus.focus === 'function') {
      hotkeysPreviousFocus.focus();
    }
  }
}

function toggleHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m && m.classList.contains('is-visible')) {
    closeHotkeysModal();
  } else {
    openHotkeysModal();
  }
}

/* --------------------------------------------------------------------------
   3B. COMMAND PALETTE / QUICK SEARCH ENGINE (HCI: Jakob's Law)
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildSearchCatalog() {
  const items = [
    { title: '00. Overview / Home', desc: 'Landing, summary, core focus, and contact endpoints', url: 'index.html', cat: 'Page' },
    { title: '01. About & Principles', desc: 'Academic training, theoretical CS interests, fine arts background, and manifesto', url: 'about.html', cat: 'Page' },
    { title: '02. Technical Stack', desc: 'Languages, Systems, Machine Learning, Tooling, Theory, and Web/HCI', url: 'stack.html', cat: 'Page' },
    { title: '03. Projects & Systems', desc: 'SimpOS, PneumoTrack, VeritasEngine, Turing-C, AetherOS', url: 'projects.html', cat: 'Page' },
    { title: '04. Experience & Work', desc: 'Engineering internships, roles, and academic appointments', url: 'experience.html', cat: 'Page' },
    { title: '05. GitHub Telemetry', desc: 'Repository metrics, language distributions, and commit telemetry', url: 'github.html', cat: 'Page' },
    { title: '06. Reading & Notes', desc: 'Literature, Philosophy, Essays, and 21 Foundational Textbooks', url: 'reading.html', cat: 'Page' },
    { title: '07. Writing & Articles', desc: 'Research essays, technical papers, and system reflections', url: 'writing.html', cat: 'Page' },
    { title: '08. Contact Endpoints', desc: 'GitHub, LinkedIn, Proton Mail, Gmail direct communication channels', url: 'contact.html', cat: 'Page' }
  ];

  if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA) {
    if (PORTFOLIO_DATA.projects) {
      PORTFOLIO_DATA.projects.forEach(p => {
        items.push({
          title: p.name,
          desc: `${p.tagline || p.desc || ''} [${p.domain || 'Systems'}]`,
          url: 'projects.html#' + encodeURIComponent(p.name.toLowerCase().replace(/\s+/g, '-')),
          cat: 'Project'
        });
      });
    }

    if (PORTFOLIO_DATA.stack) {
      PORTFOLIO_DATA.stack.forEach(s => {
        items.push({
          title: s.label,
          desc: s.items,
          url: 'stack.html',
          cat: 'Stack'
        });
      });
    }

    if (PORTFOLIO_DATA.reading) {
      PORTFOLIO_DATA.reading.forEach(r => {
        items.push({
          title: r.title,
          desc: `${r.author} · ${r.genre || 'Literature'}`,
          url: 'reading.html',
          cat: 'Book'
        });
      });
    }

    if (PORTFOLIO_DATA.textbooks) {
      PORTFOLIO_DATA.textbooks.forEach(t => {
        items.push({
          title: t.title,
          desc: `${t.author} · ${t.publisher || ''} [${t.discipline || 'Textbook'}]`,
          url: 'reading.html',
          cat: 'Textbook'
        });
      });
    }

    if (PORTFOLIO_DATA.experience) {
      PORTFOLIO_DATA.experience.forEach(e => {
        items.push({
          title: `${e.role} · ${e.org}`,
          desc: `${e.period || ''} · ${(e.tags || []).join(', ')}`,
          url: 'experience.html',
          cat: 'Experience'
        });
      });
    }

    if (PORTFOLIO_DATA.writing && PORTFOLIO_DATA.writing.items) {
      PORTFOLIO_DATA.writing.items.forEach(w => {
        items.push({
          title: w.title,
          desc: `Published ${w.date || ''} · Essay & Publication`,
          url: w.url || 'writing.html',
          cat: 'Article'
        });
      });
    }

    if (PORTFOLIO_DATA.contact) {
      const contacts = Array.isArray(PORTFOLIO_DATA.contact)
        ? PORTFOLIO_DATA.contact
        : (PORTFOLIO_DATA.contact.channels || []);
      contacts.forEach(c => {
        items.push({
          title: `${c.type}: ${c.value}`,
          desc: 'Direct Communication Endpoint',
          url: c.href || c.link || 'contact.html',
          cat: 'Contact'
        });
      });
    }
  }

  return items;
}

let cmdPaletteModal = null;
let cmdPaletteInput = null;
let cmdPaletteResults = null;
let cmdPaletteLive = null;
let cmdPaletteActiveIndex = 0;
let cmdPaletteFiltered = [];
let cmdPalettePreviousFocus = null;

function initCommandPalette() {
  const catalog = buildSearchCatalog();

  const modal = document.createElement('div');
  modal.className = 'cmd-palette-backdrop';
  modal.id = 'cmd-palette-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Command Palette and Quick Search');

  modal.innerHTML = `
    <div class="cmd-palette-dialog">
      <div class="cmd-palette-header">
        <span class="cmd-palette-prompt" aria-hidden="true">&gt;</span>
        <input class="cmd-palette-input" id="cmd-palette-input" type="text"
               placeholder="Search pages, projects, books, stack, contacts..."
               autocomplete="off" spellcheck="false"
               role="combobox" aria-expanded="true" aria-autocomplete="list"
               aria-controls="cmd-palette-results">
        <span class="cmd-palette-esc-hint" id="cmd-palette-close" role="button" tabindex="0" aria-label="Close dialog">ESC</span>
      </div>
      <div class="sr-only" role="status" aria-live="polite" id="cmd-palette-live"></div>
      <ul class="cmd-palette-results" id="cmd-palette-results" role="listbox"></ul>
      <div class="cmd-palette-footer">
        <div class="cmd-palette-shortcuts">
          <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
          <span><kbd>&crarr;</kbd> Select</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
        <div>[ &cmd;K / / ]</div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  cmdPaletteModal = modal;
  cmdPaletteInput = modal.querySelector('#cmd-palette-input');
  cmdPaletteResults = modal.querySelector('#cmd-palette-results');
  cmdPaletteLive = modal.querySelector('#cmd-palette-live');

  function renderList(items) {
    cmdPaletteFiltered = items;
    cmdPaletteActiveIndex = 0;

    if (items.length === 0) {
      cmdPaletteResults.innerHTML = `
        <div class="cmd-palette-empty">
          No matching items found. Try searching for a project, book, technology, or page.
        </div>
      `;
      cmdPaletteLive.textContent = 'No matching items found.';
      return;
    }

    cmdPaletteLive.textContent = `${items.length} items available.`;

    // Group items by category
    const groups = {};
    items.forEach((item, idx) => {
      if (!groups[item.cat]) groups[item.cat] = [];
      groups[item.cat].push(item);
    });

    let html = '';
    let globalIdx = 0;
    const catOrder = ['Page', 'Project', 'Experience', 'Article', 'Stack', 'Book', 'Textbook', 'Contact'];

    const sortedCats = Object.keys(groups).sort((a, b) => {
      let ia = catOrder.indexOf(a);
      let ib = catOrder.indexOf(b);
      if (ia === -1) ia = 99;
      if (ib === -1) ib = 99;
      return ia - ib;
    });

    sortedCats.forEach(cat => {
      html += `<div class="cmd-palette-group-title" aria-hidden="true">${escapeHtml(cat)}s</div>`;
      groups[cat].forEach(item => {
        const isSelected = globalIdx === cmdPaletteActiveIndex;
        html += `
          <li class="cmd-palette-item${isSelected ? ' is-selected' : ''}"
              id="cmd-item-${globalIdx}"
              data-idx="${globalIdx}"
              data-url="${escapeHtml(item.url)}"
              role="option"
              aria-selected="${isSelected}">
            <div class="cmd-palette-item-main">
              <span class="cmd-palette-item-title">${escapeHtml(item.title)}</span>
              <span class="cmd-palette-item-desc">${escapeHtml(item.desc)}</span>
            </div>
            <span class="cmd-palette-badge" data-cat="${escapeHtml(item.cat)}">${escapeHtml(item.cat)}</span>
          </li>
        `;
        globalIdx++;
      });
    });

    cmdPaletteResults.innerHTML = html;

    cmdPaletteResults.querySelectorAll('.cmd-palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const url = el.getAttribute('data-url');
        if (url) {
          closeCommandPalette();
          if (url.startsWith('http')) {
            window.open(url, '_blank', 'noopener,noreferrer');
          } else {
            window.location.href = url;
          }
        }
      });
      el.addEventListener('mouseenter', () => {
        const idx = parseInt(el.getAttribute('data-idx'), 10);
        updateActiveIndex(idx);
      });
    });
  }

  function updateActiveIndex(newIndex) {
    if (cmdPaletteFiltered.length === 0) return;
    cmdPaletteActiveIndex = (newIndex + cmdPaletteFiltered.length) % cmdPaletteFiltered.length;

    const allItems = cmdPaletteResults.querySelectorAll('.cmd-palette-item');
    allItems.forEach((el, idx) => {
      const isSelected = idx === cmdPaletteActiveIndex;
      el.classList.toggle('is-selected', isSelected);
      el.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected) {
        el.scrollIntoView({ block: 'nearest' });
        cmdPaletteInput.setAttribute('aria-activedescendant', el.id);
      }
    });
  }

  function filterItems(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      renderList(catalog.slice(0, 16));
      return;
    }

    const tokens = q.split(/\s+/).filter(Boolean);
    const matches = catalog.filter(item => {
      const text = `${item.title} ${item.desc} ${item.cat}`.toLowerCase();
      return tokens.every(tok => text.includes(tok));
    });

    renderList(matches.slice(0, 30));
  }

  cmdPaletteInput.addEventListener('input', (e) => {
    filterItems(e.target.value);
  });

  cmdPaletteInput.addEventListener('keydown', (e) => {
    // Completely isolate search input typing from document/window event listeners
    e.stopPropagation();

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      updateActiveIndex(cmdPaletteActiveIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      updateActiveIndex(cmdPaletteActiveIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (cmdPaletteFiltered[cmdPaletteActiveIndex]) {
        const url = cmdPaletteFiltered[cmdPaletteActiveIndex].url;
        closeCommandPalette();
        if (url.startsWith('http')) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = url;
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeCommandPalette();
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
  });

  cmdPaletteInput.addEventListener('keypress', (e) => e.stopPropagation());
  cmdPaletteInput.addEventListener('keyup', (e) => e.stopPropagation());

  const closeBtn = modal.querySelector('#cmd-palette-close');
  closeBtn.addEventListener('click', closeCommandPalette);
  closeBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeCommandPalette();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });
}

function openCommandPalette() {
  if (!cmdPaletteModal) return;
  cmdPalettePreviousFocus = document.activeElement;
  cmdPaletteModal.classList.add('is-visible');
  
  if (cmdPaletteInput) {
    cmdPaletteInput.value = '';
    cmdPaletteInput.dispatchEvent(new Event('input'));
    
    // Immediate autofocus
    cmdPaletteInput.focus();
    
    // Ensure focus is committed across all browser engines
    requestAnimationFrame(() => {
      if (cmdPaletteInput) {
        cmdPaletteInput.focus();
        cmdPaletteInput.select();
      }
    });
    setTimeout(() => {
      if (cmdPaletteInput && document.activeElement !== cmdPaletteInput) {
        cmdPaletteInput.focus();
      }
    }, 25);
    setTimeout(() => {
      if (cmdPaletteInput && document.activeElement !== cmdPaletteInput) {
        cmdPaletteInput.focus();
      }
    }, 75);
  }
}

function closeCommandPalette() {
  if (!cmdPaletteModal) return;
  cmdPaletteModal.classList.remove('is-visible');
  if (cmdPaletteInput) {
    cmdPaletteInput.blur();
  }
  if (cmdPalettePreviousFocus && typeof cmdPalettePreviousFocus.focus === 'function') {
    cmdPalettePreviousFocus.focus();
  }
}

function toggleCommandPalette() {
  if (cmdPaletteModal && cmdPaletteModal.classList.contains('is-visible')) {
    closeCommandPalette();
  } else {
    openCommandPalette();
  }
}

/* --------------------------------------------------------------------------
   3C. BIDIRECTIONAL SUBPAGE PAGER (HCI: Hick's Law & Reading Continuity)
   -------------------------------------------------------------------------- */
function renderPagePagination(currentPage) {
  const main = document.querySelector('.rfc-main-content');
  if (!main) return;
  const footer = main.querySelector('.page-footer');

  const currentIndex = SUBPAGES_MANIFEST.findIndex(p => p.key === currentPage);
  if (currentIndex === -1) return;

  const prevItem = currentIndex === 0
    ? { num: '00', title: 'Overview', file: 'index.html' }
    : SUBPAGES_MANIFEST[currentIndex - 1];

  const nextItem = currentIndex === SUBPAGES_MANIFEST.length - 1
    ? { num: '00', title: 'Overview', file: 'index.html' }
    : SUBPAGES_MANIFEST[currentIndex + 1];

  const pagerNav = document.createElement('nav');
  pagerNav.className = 'page-pagination';
  pagerNav.setAttribute('aria-label', 'Section pagination');
  pagerNav.innerHTML = `
    <a href="${prevItem.file}" class="pager-link pager-link-prev" rel="prev" title="Previous: ${prevItem.title} (Hotkey: [)">
      <span class="pager-arrow" aria-hidden="true">&larr;</span>
      <span class="pager-meta">
        <span class="pager-direction">Previous [</span>
        <span class="pager-name">${prevItem.num}. ${prevItem.title}</span>
      </span>
    </a>
    <a href="index.html" class="pager-link pager-link-home" aria-label="Return to Table of Contents" title="Table of Contents">
      <span class="pager-meta">
        <span class="pager-direction">Index</span>
        <span class="pager-name">00. Overview</span>
      </span>
    </a>
    <a href="${nextItem.file}" class="pager-link pager-link-next" rel="next" title="Next: ${nextItem.title} (Hotkey: ])">
      <span class="pager-meta">
        <span class="pager-direction">Next ]</span>
        <span class="pager-name">${nextItem.num}. ${nextItem.title}</span>
      </span>
      <span class="pager-arrow" aria-hidden="true">&rarr;</span>
    </a>
  `;

  if (footer) {
    main.insertBefore(pagerNav, footer);
  } else {
    main.appendChild(pagerNav);
  }
}


/* --------------------------------------------------------------------------
   4. LANDING PAGE (Unclipped Dual-Mode ASCII Snapshot Table)
   -------------------------------------------------------------------------- */
function buildSnapshotTables() {
  if (!Array.isArray(PORTFOLIO_DATA.snapshot)) return { desktop: '', mobile: '' };

  // Desktop (66 chars wide, completely unclipped)
  const dC1 = 14, dC2 = 45;
  const dSep = `+-${'-'.repeat(dC1)}-+-${'-'.repeat(dC2)}-+`;
  const dHeader = `| ${padEnd('PARAMETER', dC1)} | ${padEnd('VALUE', dC2)} |`;
  let dLines = [dSep, dHeader, dSep];

  PORTFOLIO_DATA.snapshot.forEach(item => {
    dLines.push(`| ${padEnd(item.label, dC1)} | ${padEnd(item.value, dC2)} |`);
  });
  dLines.push(dSep);

  // Mobile (46 chars wide, wrapped words cleanly without cutting off)
  const mC1 = 12, mC2 = 27;
  const mSep = `+-${'-'.repeat(mC1)}-+-${'-'.repeat(mC2)}-+`;
  const mHeader = `| ${padEnd('PARAMETER', mC1)} | ${padEnd('VALUE', mC2)} |`;
  let mLines = [mSep, mHeader, mSep];

  PORTFOLIO_DATA.snapshot.forEach(item => {
    const wrapped = wrapWords(item.value, mC2);
    wrapped.forEach((line, idx) => {
      const lbl = idx === 0 ? item.label : '';
      mLines.push(`| ${padEnd(lbl, mC1)} | ${padEnd(line, mC2)} |`);
    });
  });
  mLines.push(mSep);

  return {
    desktop: dLines.join('\n'),
    mobile: mLines.join('\n')
  };
}

function renderLanding() {
  const container = document.getElementById('landing-snapshot');
  if (!container || !Array.isArray(PORTFOLIO_DATA.snapshot)) return;

  const tables = buildSnapshotTables();
  container.innerHTML = `
    <pre class="ascii-box ascii-desktop" aria-label="System Snapshot Desktop">${esc(tables.desktop)}</pre>
    <pre class="ascii-box ascii-mobile" aria-label="System Snapshot Mobile">${esc(tables.mobile)}</pre>
  `;
}

/* --------------------------------------------------------------------------
   5. ABOUT PAGE
   -------------------------------------------------------------------------- */
function renderAboutPage() {
  const c = document.getElementById('about-page-content');
  if (!c || !PORTFOLIO_DATA.about) return;

  let html = '';

  // Background
  html += '<h2 class="section-heading">Background</h2>';
  PORTFOLIO_DATA.about.paragraphs.forEach(p => {
    html += `<p class="rfc-p">${esc(p)}</p>`;
  });

  // Quote
  if (PORTFOLIO_DATA.about.quote) {
    html += `
      <blockquote class="rfc-quote">
        "${esc(PORTFOLIO_DATA.about.quote.text)}"
        <cite>&mdash; ${esc(PORTFOLIO_DATA.about.quote.cite)}</cite>
      </blockquote>
    `;
  }

  // Principles
  if (Array.isArray(PORTFOLIO_DATA.manifesto) && PORTFOLIO_DATA.manifesto.length > 0) {
    html += '<h2 class="section-heading">Principles</h2>';
    html += '<ul class="newspaper-items">';
    PORTFOLIO_DATA.manifesto.forEach(item => {
      html += `<li>${esc(item)}</li>`;
    });
    html += '</ul>';
  }

  // System Snapshot ASCII Box
  if (Array.isArray(PORTFOLIO_DATA.snapshot) && PORTFOLIO_DATA.snapshot.length > 0) {
    html += '<h2 class="section-heading">System Snapshot</h2>';
    const tables = buildSnapshotTables();
    html += `
      <pre class="ascii-box ascii-desktop" aria-label="System Snapshot Desktop">${esc(tables.desktop)}</pre>
      <pre class="ascii-box ascii-mobile" aria-label="System Snapshot Mobile">${esc(tables.mobile)}</pre>
    `;
  }

  c.innerHTML = html;
}

/* --------------------------------------------------------------------------
   6. STACK PAGE (Dual-Column Newspaper Layout)
   -------------------------------------------------------------------------- */
function renderStackPage() {
  const c = document.getElementById('stack-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.stack)) return;

  const stack = PORTFOLIO_DATA.stack;
  
  // Distribute domains into 2 newspaper columns
  const col1Domains = [stack[0], stack[1]].filter(Boolean); // Languages, Frameworks & Tools
  const col2Domains = [stack[3], stack[2]].filter(Boolean); // Theory, Design & HCI

  function renderColumnDomains(domains, startIndex) {
    return domains.map((cat, idx) => {
      const num = String(startIndex + idx + 1).padStart(2, '0');
      const items = cat.items.split(',').map(s => s.trim()).filter(Boolean);
      return `
        <div class="newspaper-domain">
          <div class="newspaper-domain-title">
            <span>${esc(cat.label)}</span>
            <span class="newspaper-domain-num">[${num}]</span>
          </div>
          <ul class="newspaper-items">
            ${items.map((item, itemIdx) => {
              const itemNum = String(itemIdx + 1).padStart(2, '0');
              return `<li><span class="newspaper-item-idx">[${itemNum}]</span><span class="newspaper-item-val">${esc(item)}</span></li>`;
            }).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  // 72-char Desktop Telemetry Box using Datatype font
  const dTag = "+-- [CAPABILITY METRICS & PROFICIENCY PROFILE] ";
  const dTop = dTag + "-".repeat(72 - dTag.length - 1) + "+";
  const dHeader = "| DOMAIN             PROFICIENCY TELEMETRY (0% -> 100%)          LEVEL |";
  const dSep = "+" + "-".repeat(70) + "+";
  const dLines = [dTop, dHeader, dSep];

  stack.forEach(cat => {
    const barWidth = 41;
    const filled = Math.round((cat.level / 100) * barWidth);
    const bar = '█'.repeat(filled) + '░'.repeat(barWidth - filled);
    const label = padEnd(truncate(cat.label, 18), 18);
    const pct = padStart(String(cat.level) + '%', 5);
    dLines.push(`| ${label} [${bar}] ${pct} |`);
  });
  dLines.push(dSep);
  const desktopProfBox = dLines.join('\n');

  // 46-char Mobile Telemetry Box using Datatype font
  const mTag = "+-- [CAPABILITY PROFILE] ";
  const mTop = mTag + "-".repeat(46 - mTag.length - 1) + "+";
  const mHeader = "| DOMAIN                LEVEL [BAR]      PCT |";
  const mSep = "+" + "-".repeat(44) + "+";
  const mLines = [mTop, mHeader, mSep];

  stack.forEach(cat => {
    const barWidth = 18;
    const filled = Math.round((cat.level / 100) * barWidth);
    const bar = '█'.repeat(filled) + '░'.repeat(barWidth - filled);
    const label = padEnd(truncate(cat.label, 16), 16);
    const pct = padStart(String(cat.level) + '%', 4);
    mLines.push(`| ${label} [${bar}] ${pct} |`);
  });
  mLines.push(mSep);
  const mobileProfBox = mLines.join('\n');

  c.innerHTML = `
    <div class="newspaper-masthead">
      <span>Volume 02 · Capability Specification</span>
      <span>Guwahati, Assam</span>
      <span>September 2026</span>
    </div>

    <div class="newspaper-grid">
      <div class="newspaper-col">
        ${renderColumnDomains(col1Domains, 0)}
      </div>
      <div class="newspaper-col">
        ${renderColumnDomains(col2Domains, 2)}
      </div>
    </div>

    <div class="newspaper-proficiency-box">
      <pre class="ascii-box datatype-graphic ascii-desktop" aria-label="Competency Matrix Desktop">${esc(desktopProfBox)}</pre>
      <pre class="ascii-box datatype-graphic ascii-mobile" aria-label="Competency Matrix Mobile">${esc(mobileProfBox)}</pre>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   7. PROJECTS PAGE
   -------------------------------------------------------------------------- */
function getTagDomain(tag) {
  const t = String(tag).toLowerCase();
  if (['c++', 'rust', 'systems', 'ipc', 'simd', 'memory', 'linux', 'actors'].some(k => t.includes(k))) return 'systems';
  if (['compilers', 'formal languages', 'algorithms', 'dsl', 'theory', 'dsp', 'audio', 'sound'].some(k => t.includes(k))) return 'theory';
  if (['hci', 'ui', 'wcag', 'typography', 'accessibility', 'brand', 'vector'].some(k => t.includes(k))) return 'design';
  return 'general';
}

function renderProjectsPage() {
  const c = document.getElementById('projects-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.projects)) return;

  let html = '';
  PORTFOLIO_DATA.projects.forEach((proj, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const tags = (proj.tags || []).map(t => `<span class="project-tag" data-domain="${getTagDomain(t)}">${esc(t)}</span>`).join(' ');
    const link = proj.link
      ? `<div class="project-link">&rarr; <a href="${esc(proj.link.url)}" target="_blank" rel="noopener noreferrer">${esc(proj.link.text)}</a></div>`
      : '';

    html += `
      <article class="project-card">
        <div class="project-name-line">
          <span class="project-title"><span class="project-num">${num}.</span>${esc(proj.name)}</span>
          <div class="project-tags">${tags}</div>
        </div>
        <div class="project-desc">${esc(proj.desc)}</div>
        ${link}
      </article>
    `;
  });

  c.innerHTML = html;
}

/* --------------------------------------------------------------------------
   8. EXPERIENCE PAGE
   -------------------------------------------------------------------------- */
function renderExperiencePage() {
  const c = document.getElementById('experience-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.experience)) return;

  let html = '';
  PORTFOLIO_DATA.experience.forEach(exp => {
    const tags = (exp.tags || []).map(t => `<span class="project-tag" data-domain="${getTagDomain(t)}">${esc(t)}</span>`).join(' ');
    html += `
      <div class="item-card">
        <div class="item-title">${esc(exp.role)} &mdash; ${esc(exp.org)}</div>
        <div class="item-meta">
          <span>${esc(exp.period)}</span>
          <span>${tags}</span>
        </div>
        <div class="item-body">${esc(exp.summary)}</div>
      </div>
    `;
  });

  c.innerHTML = html;
}

/* --------------------------------------------------------------------------
   9. GITHUB PAGE (Dual-Column: Summary/Analytics on Left, Repos on Right)
   -------------------------------------------------------------------------- */
async function renderGitHubPage() {
  const c = document.getElementById('github-page-content');
  if (!c || !PORTFOLIO_DATA.github) return;

  const username = PORTFOLIO_DATA.github.username;

  c.innerHTML = `
    <pre class="ascii-box" aria-label="Polling GitHub">
+-- [GITHUB TELEMETRY QUERY] ------------------+
| Handshake : api.github.com/users             |
| Target    : @${padEnd(truncate(username, 31), 31)} |
| Status    : Connecting to remote endpoint... |
+----------------------------------------------+</pre>
  `;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/' + username),
      fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=15')
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error('HTTP ' + userRes.status);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const publicRepos = repos.filter(r => !r.fork);

    // Language counts
    const langCounts = {};
    let totalLangs = 0;
    publicRepos.forEach(r => {
      const l = r.language || 'Other';
      langCounts[l] = (langCounts[l] || 0) + 1;
      totalLangs++;
    });
    const sortedLangs = Object.entries(langCounts).sort((a,b) => b[1] - a[1]).slice(0, 5);

    // 48-char clean ASCII Language chart
    let langChart = `+-- [LANGUAGE DISTRIBUTION] -------------------+`;
    sortedLangs.forEach(([lang, count]) => {
      const pct = Math.round((count / totalLangs) * 100);
      const barWidth = 12;
      const filled = Math.round((pct / 100) * barWidth);
      const bar = '█'.repeat(filled) + '░'.repeat(barWidth - filled);
      
      const langLabel = padEnd(truncate(lang, 10), 10);
      const meter = `[${bar}] ${padEnd(String(pct) + '%', 4)}`;
      const countStr = `(${count} repo${count !== 1 ? 's' : ''})`;
      const inner = padEnd(`${langLabel} ${meter} ${countStr}`, 44);
      langChart += `\n| ${inner} |`;
    });
    langChart += `\n+----------------------------------------------+`;

    // Repo list for Column 2
    let repoCardsHtml = '';
    publicRepos.slice(0, 8).forEach(r => {
      const desc = r.description || 'Source repository and technical implementation.';
      repoCardsHtml += `
        <div class="gh-repo-card">
          <div class="gh-repo-header">
            <span class="gh-repo-name"><a href="${esc(r.html_url)}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a></span>
            <div class="gh-repo-meta">
              <span class="project-tag">${esc(r.language || 'Other')}</span>
              <span>★ ${r.stargazers_count}</span>
              <span>⑂ ${r.forks_count}</span>
            </div>
          </div>
          <div class="gh-repo-desc">${esc(desc)}</div>
        </div>
      `;
    });

    const telemetryCard = `+-- [TELEMETRY: @nonQualities] ----------------+
| Status   : api.github.com synchronized       |
| Identity : Systems & Theoretical CS          |
| Standard : Deterministic (ASD-STE100)        |
+----------------------------------------------+`;

    const ecosystemBox = `+-- [ECOSYSTEM AUDIT] -------------------------+
| Code Metric : Cache-aligned memory layouts   |
| Concurrency : Non-blocking async actors      |
| Verification: Formal state transition checks |
+----------------------------------------------+`;

    c.innerHTML = `
      <div class="github-dual-grid">
        <!-- Column 1: Summary & Analytics (Sized bigger) -->
        <div class="github-summary-col">
          <pre class="ascii-box" aria-label="Account Telemetry">${telemetryCard}</pre>

          <div class="gh-summary-grid">
            <div class="gh-metric">
              <span class="gh-metric-label">Repositories</span>
              <span class="gh-metric-val">${user.public_repos ?? publicRepos.length}</span>
            </div>
            <div class="gh-metric">
              <span class="gh-metric-label">Followers</span>
              <span class="gh-metric-val">${user.followers ?? 0}</span>
            </div>
            <div class="gh-metric">
              <span class="gh-metric-label">Following</span>
              <span class="gh-metric-val">${user.following ?? 0}</span>
            </div>
            <div class="gh-metric">
              <span class="gh-metric-label">Public Gists</span>
              <span class="gh-metric-val">${user.public_gists ?? 0}</span>
            </div>
          </div>

          <pre class="ascii-box" aria-label="Language Breakdown">${langChart}</pre>
          <pre class="ascii-box" aria-label="Ecosystem Audit">${ecosystemBox}</pre>

          <p class="rfc-p" style="margin-top: 8px;">
            &rarr; <a href="https://github.com/${esc(username)}" target="_blank" rel="noopener noreferrer">Visit github.com/${esc(username)}</a>
          </p>
        </div>

        <!-- Column 2: Active Repositories -->
        <div class="github-repos-col">
          <div class="github-section-title">Active Repositories</div>
          ${repoCardsHtml}
        </div>
      </div>
    `;

  } catch (err) {
    // Offline / rate limit fallback
    let fallbackBox = `+-- [GITHUB TELEMETRY: OFFLINE] ---------------+
| User   : @${padEnd(truncate(username, 34), 34)} |
| Status : API rate limit reached              |
| Action : Inspect codebases directly          |
+----------------------------------------------+`;

    c.innerHTML = `
      <div class="github-dual-grid">
        <div class="github-summary-col">
          <pre class="ascii-box" aria-label="Offline telemetry">${fallbackBox}</pre>
          <p class="rfc-p">&rarr; <a href="https://github.com/${esc(username)}" target="_blank" rel="noopener noreferrer">Visit github.com/${esc(username)} directly</a></p>
        </div>
        <div class="github-repos-col">
          <div class="github-section-title">Verified Implementations</div>
          <p class="rfc-p">Please visit the official repository index at <a href="https://github.com/${esc(username)}" target="_blank" rel="noopener noreferrer">github.com/${esc(username)}</a> to view active codebases and release packages.</p>
        </div>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   10. READING PAGE (Dual-Column Broadsheet: Literature vs Textbooks)
   -------------------------------------------------------------------------- */
function renderReadingPage() {
  const c = document.getElementById('reading-page-content');
  if (!c) return;

  const mastheadHtml = `
    <div class="newspaper-masthead">
      <span>Volume 06 · Reading &amp; Field Catalog</span>
      <span>Guwahati, Assam</span>
      <span>September 2026</span>
    </div>
  `;

  // Column 1: Literature, Philosophy & Essays
  let col1Html = `
    <div class="reading-col-header">
      <span class="reading-col-kicker">Division I</span>
      <h2 class="reading-col-heading">Literature, Philosophy &amp; Essays</h2>
    </div>
  `;

  if (Array.isArray(PORTFOLIO_DATA.reading) && PORTFOLIO_DATA.reading.length > 0) {
    const genreGroups = new Map();
    PORTFOLIO_DATA.reading.forEach(book => {
      const genre = book.genre || 'General';
      if (!genreGroups.has(genre)) {
        genreGroups.set(genre, []);
      }
      genreGroups.get(genre).push(book);
    });

    let globalIndex = 1;
    genreGroups.forEach((books, genreName) => {
      const countLabel = `${books.length} title${books.length !== 1 ? 's' : ''}`;
      col1Html += `
        <section class="reading-genre-section">
          <div class="reading-genre-header">
            <span class="reading-genre-title">${esc(genreName)}</span>
            <span class="reading-genre-count">[ ${countLabel} ]</span>
          </div>
          <div class="reading-books-list">
      `;

      books.forEach(book => {
        const idxStr = String(globalIndex).padStart(2, '0');
        col1Html += `
          <div class="reading-book-card">
            <span class="reading-book-index">[${idxStr}]</span>
            <div class="reading-book-content">
              <span class="reading-book-title">${esc(book.title)}</span>
              <span class="reading-book-sep">&mdash;</span>
              <span class="reading-book-author">${esc(book.author)}</span>
            </div>
          </div>
        `;
        globalIndex++;
      });

      col1Html += `
          </div>
        </section>
      `;
    });
  }

  // Column 2: Foundational Textbooks & Academic References
  let col2Html = `
    <div class="reading-col-header">
      <span class="reading-col-kicker">Division II</span>
      <h2 class="reading-col-heading">Foundational Textbooks</h2>
    </div>
  `;

  if (PORTFOLIO_DATA.textbooksNote) {
    col2Html += `<div class="reading-section-note">${esc(PORTFOLIO_DATA.textbooksNote)}</div>`;
  }

  if (Array.isArray(PORTFOLIO_DATA.textbooks) && PORTFOLIO_DATA.textbooks.length > 0) {
    const tbGroups = new Map();
    PORTFOLIO_DATA.textbooks.forEach(tb => {
      const genre = tb.genre || 'General';
      if (!tbGroups.has(genre)) {
        tbGroups.set(genre, []);
      }
      tbGroups.get(genre).push(tb);
    });

    let tbIndex = 1;
    tbGroups.forEach((books, genreName) => {
      const countLabel = `${books.length} volume${books.length !== 1 ? 's' : ''}`;
      col2Html += `
        <section class="reading-genre-section">
          <div class="reading-genre-header">
            <span class="reading-genre-title">${esc(genreName)}</span>
            <span class="reading-genre-count">[ ${countLabel} ]</span>
          </div>
          <div class="reading-books-list">
      `;

      books.forEach(tb => {
        const idxStr = String(tbIndex).padStart(2, '0');
        const pubHtml = tb.publisher ? `<span class="reading-book-pub">${esc(tb.publisher)}</span>` : '';
        col2Html += `
          <div class="reading-book-card">
            <span class="reading-book-index">[T${idxStr}]</span>
            <div class="reading-book-content">
              <span class="reading-book-title">${esc(tb.title)}</span>
              <span class="reading-book-sep">&mdash;</span>
              <span class="reading-book-author">${esc(tb.author)}</span>
              ${pubHtml}
            </div>
          </div>
        `;
        tbIndex++;
      });

      col2Html += `
          </div>
        </section>
      `;
    });
  }

  c.innerHTML = `
    ${mastheadHtml}
    <div class="newspaper-grid">
      <div class="newspaper-col">
        ${col1Html}
      </div>
      <div class="newspaper-col">
        ${col2Html}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   11. WRITING PAGE
   -------------------------------------------------------------------------- */
function renderWritingPage() {
  const c = document.getElementById('writing-page-content');
  if (!c || !PORTFOLIO_DATA.writing) return;

  let html = '';

  if (Array.isArray(PORTFOLIO_DATA.writing.items)) {
    PORTFOLIO_DATA.writing.items.forEach(item => {
      html += `
        <div class="item-card">
          <div class="item-title"><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a></div>
          <div class="item-meta">${esc(item.date)} · Medium</div>
        </div>
      `;
    });
  }

  if (PORTFOLIO_DATA.writing.moreLink) {
    html += `<p class="rfc-p" style="margin-top:24px;">&rarr; <a href="${esc(PORTFOLIO_DATA.writing.moreLink.url)}" target="_blank" rel="noopener noreferrer">${esc(PORTFOLIO_DATA.writing.moreLink.text)}</a></p>`;
  }

  c.innerHTML = html;
}

/* --------------------------------------------------------------------------
   12. CONTACT PAGE (with 46-char clean ASCII routing directory)
   -------------------------------------------------------------------------- */
function renderContactPage() {
  const c = document.getElementById('contact-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.contact)) return;

  let dirBox = `+------------+-------------------------------+
| PROTOCOL   | ADDRESS / IDENTIFIER          |
+------------+-------------------------------+`;

  PORTFOLIO_DATA.contact.forEach(contact => {
    const proto = padEnd(truncate(contact.type, 10), 10);
    const dest = padEnd(truncate(contact.value, 29), 29);
    dirBox += `\n| ${proto} | ${dest} |`;
  });
  dirBox += `\n+------------+-------------------------------+`;

  let html = `<pre class="ascii-box" aria-label="Contact Routing Table">${dirBox}</pre>`;

  html += '<ul class="contact-list">';
  PORTFOLIO_DATA.contact.forEach(contact => {
    html += `
      <li class="contact-item">
        <span class="contact-type">${esc(contact.type)}</span>
        <a href="${esc(contact.href)}" target="_blank" rel="noopener noreferrer">${esc(contact.value)}</a>
      </li>
    `;
  });
  html += '</ul>';

  c.innerHTML = html;
}

/* --------------------------------------------------------------------------
   13. UTILITIES
   -------------------------------------------------------------------------- */
function esc(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function padEnd(str, len, padChar = ' ') {
  const s = String(str ?? '');
  return s.length >= len ? s : s + padChar.repeat(len - s.length);
}

function padStart(str, len, padChar = ' ') {
  const s = String(str ?? '');
  return s.length >= len ? s : padChar.repeat(len - s.length) + s;
}

function truncate(str, maxLength) {
  const s = String(str ?? '');
  return s.length <= maxLength ? s : s.slice(0, maxLength - 1) + '…';
}

function wrapWords(str, maxLen) {
  const words = String(str ?? '').split(' ');
  const lines = [];
  let current = '';
  words.forEach(w => {
    if (!current) {
      current = w;
    } else if ((current + ' ' + w).length <= maxLen) {
      current += ' ' + w;
    } else {
      lines.push(current);
      current = w;
    }
  });
  if (current) lines.push(current);
  return lines;
}

/* --------------------------------------------------------------------------
   14. BOOTSTRAP
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHotkeys();
  initCommandPalette();

  const path = window.location.pathname;
  let page = 'index';
  if (path.includes('about'))      page = 'about';
  else if (path.includes('stack'))      page = 'stack';
  else if (path.includes('projects'))   page = 'projects';
  else if (path.includes('experience')) page = 'experience';
  else if (path.includes('github'))     page = 'github';
  else if (path.includes('reading'))    page = 'reading';
  else if (path.includes('writing'))    page = 'writing';
  else if (path.includes('contact'))    page = 'contact';

  if (page !== 'index') initSidebar(page);

  const renderers = {
    index: renderLanding,
    about: renderAboutPage,
    stack: renderStackPage,
    projects: renderProjectsPage,
    experience: renderExperiencePage,
    github: renderGitHubPage,
    reading: renderReadingPage,
    writing: renderWritingPage,
    contact: renderContactPage
  };

  if (renderers[page]) renderers[page]();

  if (page !== 'index') {
    renderPagePagination(page);
  }
});

