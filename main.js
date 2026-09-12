/* ==========================================================================
   PORTFOLIO ENGINE — Ronit Choudhury
   Architecture: Multi-Page with Floating HUD & Hotkeys
   Fonts: Courier Prime (body) · Inconsolata (headings & accents)
   Accents: Turkish Blue (Light) / Teal Blue (Dark)
   Data source: PORTFOLIO_DATA (data.js)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. THEME
   -------------------------------------------------------------------------- */
function initTheme() {
  const stored = localStorage.getItem('rfc-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'paper'));

  document.querySelectorAll('.theme-toggle-btn, #theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'paper' : 'dark';
  applyTheme(next);
  localStorage.setItem('rfc-theme', next);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const label = theme === 'dark' ? '[Dark]' : '[Paper]';
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
    const active = p.key === currentPage ? ' active' : '';
    return `<a href="${p.key}.html" class="floating-link${active}">
      <span class="floating-link-num">${p.num}.</span> ${p.label}
    </a>`;
  }).join('');

  const currentIndex = pages.findIndex(p => p.key === currentPage);
  const nextPageIndex = (currentIndex >= 0 && currentIndex < pages.length - 1) ? currentIndex + 1 : 0;
  const nextPage = pages[nextPageIndex];

  mount.innerHTML = `
    <div class="floating-nav-container">
      <div class="floating-nav-btn-group" id="floating-btn-group">
        <button class="floating-trigger-btn" id="floating-trigger" aria-label="Toggle navigation menu" type="button">
          <span class="menu-icon">≡</span>
          <span>Menu</span>
          <span class="menu-badge">0-8</span>
        </button>
        <a href="${nextPage.key}.html" class="floating-next-btn" id="floating-next-btn" title="Next: ${nextPage.label}" aria-label="Go to next page: ${nextPage.label}">
          <span class="floating-next-icon">→</span>
        </a>
      </div>
      <div class="floating-nav-hud is-hidden" id="floating-hud">
        <div class="floating-hud-header">
          <span class="floating-hud-title">Navigation Index</span>
          <span style="cursor:pointer;" id="floating-close" title="Close">✕</span>
        </div>
        <nav class="floating-nav-links">${links}</nav>
        <div class="floating-hud-footer">
          <button class="rfc-btn theme-toggle-btn" type="button">[Theme]</button>
          <button class="rfc-btn" id="hotkeys-open-btn" type="button">[?] Keys</button>
        </div>
      </div>
    </div>
  `;

  const btnGroup = document.getElementById('floating-btn-group');
  const trigger = document.getElementById('floating-trigger');
  const hud = document.getElementById('floating-hud');
  const closeBtn = document.getElementById('floating-close');

  function openHud() {
    if (hud) hud.classList.remove('is-hidden');
  }

  function closeHud() {
    if (hud) hud.classList.add('is-hidden');
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    hud.classList.toggle('is-hidden');
  });

  if (closeBtn) closeBtn.addEventListener('click', closeHud);
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
    hudThemeBtn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '[Dark]' : '[Paper]';
    hudThemeBtn.addEventListener('click', toggleTheme);
  }

  const keysBtn = hud.querySelector('#hotkeys-open-btn');
  if (keysBtn) keysBtn.addEventListener('click', openHotkeysModal);
}

/* --------------------------------------------------------------------------
   3. HOTKEYS
   -------------------------------------------------------------------------- */
function initHotkeys() {
  const modal = document.createElement('div');
  modal.className = 'hotkeys-modal-backdrop';
  modal.id = 'hotkeys-modal';
  modal.innerHTML = `
    <div class="hotkeys-dialog" role="dialog" aria-label="Keyboard Shortcuts">
      <div class="hotkeys-title">
        <span>Keyboard Shortcuts</span>
        <span style="cursor:pointer;" id="hotkeys-close">Esc</span>
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
        <span>Toggle Theme</span><span class="hotkey-key">t</span>
      </div>
      <div class="hotkey-row"><span>Toggle Menu</span><span class="hotkey-key">m</span></div>
      <div class="hotkey-row"><span>Close Dialog</span><span class="hotkey-key">Esc</span></div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('hotkeys-close').addEventListener('click', closeHotkeysModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeHotkeysModal(); });

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      toggleHotkeysModal();
    } else if (e.key === 'Escape') {
      closeHotkeysModal();
      const hud = document.getElementById('floating-hud');
      if (hud) hud.classList.add('is-hidden');
    } else if (e.key.toLowerCase() === 't') {
      toggleTheme();
    } else if (e.key.toLowerCase() === 'm') {
      const hud = document.getElementById('floating-hud');
      if (hud) hud.classList.toggle('is-hidden');
    } else if (e.key >= '0' && e.key <= '8') {
      const pages = ['index','about','stack','projects','experience','github','reading','writing','contact'];
      window.location.href = pages[parseInt(e.key)] + '.html';
    }
  });
}

function openHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m) m.classList.add('is-visible');
}

function closeHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m) m.classList.remove('is-visible');
}

function toggleHotkeysModal() {
  const m = document.getElementById('hotkeys-modal');
  if (m) m.classList.toggle('is-visible');
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
function renderProjectsPage() {
  const c = document.getElementById('projects-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.projects)) return;

  let html = '';
  PORTFOLIO_DATA.projects.forEach((proj, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const tags = (proj.tags || []).map(t => `<span class="project-tag">${esc(t)}</span>`).join(' ');
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
    const tags = (exp.tags || []).map(t => `<span class="project-tag">${esc(t)}</span>`).join(' ');
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
   10. READING PAGE
   -------------------------------------------------------------------------- */
function renderReadingPage() {
  const c = document.getElementById('reading-page-content');
  if (!c || !Array.isArray(PORTFOLIO_DATA.reading)) return;

  let html = '';
  PORTFOLIO_DATA.reading.forEach(book => {
    html += `
      <div class="item-card">
        <div class="item-title">${esc(book.title)} &mdash; <span class="dim">${esc(book.author)}</span></div>
        <div class="item-body">${esc(book.trivia)}</div>
      </div>
    `;
  });

  c.innerHTML = html;
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
});
