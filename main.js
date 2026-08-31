/* ============================================================
   MAIN — Renders everything from data.js + static line gutter.
   ============================================================ */

const LINE_HEIGHT = 22;

/* ---- STATIC LINE NUMBERS ---- */
function initLineNumbers() {
  const gutter = document.createElement('div');
  gutter.className = 'line-gutter';
  gutter.setAttribute('aria-hidden', 'true');
  document.body.appendChild(gutter);

  // Wait for all content to render, then generate enough lines
  requestAnimationFrame(() => {
    const totalH = document.documentElement.scrollHeight;
    const count = Math.ceil(totalH / LINE_HEIGHT);
    let html = '';
    for (let i = 1; i <= count; i++) {
      html += `<div class="line-num">${i}</div>`;
    }
    gutter.innerHTML = html;
  });
}

/* ---- HEADER MANIFESTO ---- */
function renderManifesto() {
  const container = document.getElementById('header-manifesto');
  if (!container || !PORTFOLIO_DATA.manifesto) return;

  const items = PORTFOLIO_DATA.manifesto.map(m => `<li>${escapeHtml(m)}</li>`).join('');
  container.innerHTML = `<ul>${items}</ul>`;
}

/* ---- HEADER SNAPSHOT ---- */
function renderSnapshot() {
  const container = document.getElementById('header-snapshot');
  if (!container || !Array.isArray(PORTFOLIO_DATA.snapshot)) return;

  const items = PORTFOLIO_DATA.snapshot.map(item => `
    <div class="snapshot-item">
      <span class="snapshot-label">${escapeHtml(item.label)}</span>
      <span class="snapshot-value">${escapeHtml(item.value)}</span>
    </div>
  `).join('');

  container.innerHTML = items;
}

/* ---- ABOUT ---- */
function renderAbout() {
  const container = document.getElementById('about-body');
  if (!container || !PORTFOLIO_DATA.about) return;

  let html = '';
  PORTFOLIO_DATA.about.paragraphs.forEach(p => {
    html += `<p class="about-text">${escapeHtml(p)}</p>`;
  });

  if (PORTFOLIO_DATA.about.quote) {
    html += `
      <div class="about-quote">
        "${escapeHtml(PORTFOLIO_DATA.about.quote.text)}"
        <cite>${escapeHtml(PORTFOLIO_DATA.about.quote.cite)}</cite>
      </div>
    `;
  }

  container.innerHTML = html;
}

/* ---- STACK ---- */
function renderStack() {
  const container = document.getElementById('stack-body');
  if (!container || !PORTFOLIO_DATA.stack) return;

  const cards = PORTFOLIO_DATA.stack.map(cat => `
    <div class="stack-card">
      <div class="stack-label">${escapeHtml(cat.label)}</div>
      <div class="stack-items">${escapeHtml(cat.items)}</div>
    </div>
  `).join('');

  container.innerHTML = `<div class="stack-grid">${cards}</div>`;
}

/* ---- PROJECTS ---- */
function renderProjects() {
  const container = document.getElementById('projects-body');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const projects = shuffle([...PORTFOLIO_DATA.projects]).map(p => {
    const tags = (p.tags || []).map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('');
    const link = p.link
      ? `<a class="project-link" href="${escapeHtml(p.link.url)}" ${externalAttrs()}>${escapeHtml(p.link.text)} &rarr;</a>`
      : '';
    const initials = p.name
      .split(/[\s—-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();

    return `
      <div class="project">
        <div class="project-visual" data-initials="${escapeHtml(initials)}"></div>
        <div class="project-header">
          <span class="project-name">${escapeHtml(p.name)}</span>
          <div class="project-tags">${tags}</div>
        </div>
        <div class="project-desc">${escapeHtml(p.desc)}</div>
        ${link}
      </div>
    `;
  }).join('');

  container.innerHTML = projects;
}

/* ---- GITHUB ---- */
async function renderGitHub() {
  const container = document.getElementById('github-body');
  if (!container || !PORTFOLIO_DATA.github) return;

  const username = PORTFOLIO_DATA.github.username;
  container.innerHTML = `<div class="gh-block"><div class="gh-loading">pinging api.github.com...</div></div>`;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
    ]);

    if (!userRes.ok || !reposRes.ok) {
      if (userRes.status === 403) throw new Error('Rate limit exceeded');
      throw new Error('API connection failed');
    }

    const user = await userRes.json();
    const repos = await reposRes.json();
    const publicRepos = repos.filter(r => !r.fork).slice(0, 5);

    let html = `
      <div class="gh-block">
        <div class="gh-row">
          <span class="gh-key">Entity</span>
          <span class="gh-val">@${escapeHtml(user.login)}</span>
        </div>
        <div class="gh-row">
          <span class="gh-key">Public Repos</span>
          <span class="gh-val">${user.public_repos}</span>
        </div>
        <div class="gh-row">
          <span class="gh-key">Followers</span>
          <span class="gh-val">${user.followers}</span>
        </div>
    `;

    if (publicRepos.length > 0) {
      html += `<div class="gh-repos-label">Recent Transmissions</div>`;
      publicRepos.forEach(r => {
        html += `
          <div class="gh-repo">
            <a href="${escapeHtml(r.html_url)}" ${externalAttrs()}>${escapeHtml(r.name)}</a>
            <span class="gh-repo-meta">${escapeHtml(r.language || '—')} &middot; ★ ${r.stargazers_count}</span>
          </div>
        `;
      });
    }

    if (PORTFOLIO_DATA.github.note) {
      html += `<div class="gh-note">${escapeHtml(PORTFOLIO_DATA.github.note)}</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;

  } catch (err) {
    container.innerHTML = `
      <div class="gh-block">
        <div class="gh-error">Transmission interrupted: ${escapeHtml(err.message)}</div>
        <div style="margin-top:12px; font-size:13px;">
          <a href="https://github.com/${escapeHtml(username)}" ${externalAttrs()} style="color:var(--red);">
            &rarr; override & visit profile manually
          </a>
        </div>
        ${PORTFOLIO_DATA.github.note ? `<div class="gh-note">${escapeHtml(PORTFOLIO_DATA.github.note)}</div>` : ''}
      </div>
    `;
  }
}

/* ---- EXPERIENCE ---- */
function renderExperience() {
  const container = document.getElementById('experience-body');
  if (!container || !PORTFOLIO_DATA.experience) return;

  const items = PORTFOLIO_DATA.experience.map(item => {
    const tags = (item.tags || []).map(tag => `<span class="experience-tag">${escapeHtml(tag)}</span>`).join('');

    return `
      <div class="experience-item">
        <div class="experience-kicker">${escapeHtml(item.period)}</div>
        <div class="experience-header">
          <span class="experience-role">${escapeHtml(item.role)}</span>
          <span class="experience-org">${escapeHtml(item.org)}</span>
        </div>
        <div class="experience-summary">${escapeHtml(item.summary)}</div>
        ${tags ? `<div class="experience-tags">${tags}</div>` : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = `<div class="experience-list">${items}</div>`;
}

/* ---- READING ---- */
function renderReading() {
  const container = document.getElementById('reading-body');
  if (!container || !PORTFOLIO_DATA.reading) return;

  const items = PORTFOLIO_DATA.reading.map(book => `
    <div class="reading-item">
      <div class="reading-header">
        <span class="reading-title">${escapeHtml(book.title)}</span>
        <span class="reading-author">${escapeHtml(book.author)}</span>
      </div>
      <div class="reading-trivia">${escapeHtml(book.trivia)}</div>
    </div>
  `).join('');

  container.innerHTML = `<div class="reading-list">${items}</div>`;
}

/* ---- WRITING ---- */
function renderWriting() {
  const container = document.getElementById('writing-body');
  if (!container || !PORTFOLIO_DATA.writing) return;

  const items = PORTFOLIO_DATA.writing.items.map(w => `
    <div class="writing-item">
      <a href="${escapeHtml(w.url)}" ${externalAttrs()}>${escapeHtml(w.title)}</a>
      <span class="writing-date">${escapeHtml(w.date)}</span>
    </div>
  `).join('');

  let html = `<div class="writing-list">${items}</div>`;

  if (PORTFOLIO_DATA.writing.moreLink) {
    html += `
      <div class="writing-more">
        <a href="${escapeHtml(PORTFOLIO_DATA.writing.moreLink.url)}" ${externalAttrs()}>
          &rarr; ${escapeHtml(PORTFOLIO_DATA.writing.moreLink.text)}
        </a>
      </div>
    `;
  }

  container.innerHTML = html;
}

/* ---- CONTACT ---- */
function renderContact() {
  const container = document.getElementById('contact-body');
  if (!container || !PORTFOLIO_DATA.contact) return;

  const rows = PORTFOLIO_DATA.contact.map(c => `
    <div class="contact-row">
      <span class="contact-type">${escapeHtml(c.type)}</span>
      <a href="${escapeHtml(c.href)}" ${linkAttrs(c.href)}>
        ${escapeHtml(c.value)}
      </a>
    </div>
  `).join('');

  container.innerHTML = `<div class="contact-grid">${rows}</div>`;
}

/* ---- UTILS ---- */
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function externalAttrs() {
  return 'target="_blank" rel="noopener noreferrer"';
}

function linkAttrs(href) {
  return href?.startsWith('http') ? externalAttrs() : '';
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---- NAV ACTIVE STATE ---- */
function initNav() {
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const onScroll = () => {
    const visualSections = [...sections].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    let current = visualSections[0]?.id;
    visualSections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= 100) current = sec.id;
    });
    links.forEach(link => {
      const isCurrent = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- BOARD RANDOMIZATION ---- */
function initBoardRandomness() {
  const contentPalettes = [
    ['rgba(126, 182, 242, 0.58)', 'rgba(175, 238, 245, 0.42)', 'rgba(255, 255, 255, 0.86)'],
    ['rgba(255, 215, 147, 0.5)', 'rgba(255, 175, 189, 0.38)', 'rgba(214, 246, 250, 0.48)'],
    ['rgba(192, 228, 138, 0.5)', 'rgba(255, 255, 255, 0.88)', 'rgba(236, 224, 82, 0.28)'],
    ['rgba(115, 164, 221, 0.54)', 'rgba(255, 146, 98, 0.42)', 'rgba(255, 255, 255, 0.76)'],
    ['rgba(205, 154, 228, 0.44)', 'rgba(173, 220, 249, 0.46)', 'rgba(255, 255, 255, 0.82)'],
    ['rgba(255, 229, 164, 0.48)', 'rgba(255, 184, 202, 0.4)', 'rgba(186, 244, 247, 0.5)'],
    ['rgba(219, 245, 157, 0.46)', 'rgba(165, 213, 255, 0.44)', 'rgba(255, 255, 255, 0.86)'],
    ['rgba(255, 157, 126, 0.42)', 'rgba(87, 143, 203, 0.5)', 'rgba(252, 232, 176, 0.46)']
  ];
  const fillerColors = [
    '#f3d86f',
    '#f19ca7',
    '#8fc8ef',
    '#a6d7b0',
    '#f4ae79',
    '#e8afe8',
    '#9ddfe8',
    '#d5e58e'
  ];
  const sectionSpans = [7, 8, 8, 9, 10];
  const mobileSectionSpans = [6];
  const fillerSpans = [2, 3, 3, 4];
  const mobileFillerSpans = [2, 3, 3];
  const fillerTypes = ['is-grid', 'is-diagonal', 'is-strip', 'is-cross', '', '', '', ''];

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const between = (min, max) => Math.round(min + Math.random() * (max - min));
  const shuffleInPlace = items => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  };
  const applyContentGradientVars = (el, index = 0) => {
    const [a, b, c] = contentPalettes[index % contentPalettes.length];
    el.style.setProperty('--poster-a', a);
    el.style.setProperty('--poster-b', b);
    el.style.setProperty('--poster-c', c);
    el.style.setProperty('--poster-angle', `${118 + (index % 5) * 10}deg`);
    el.style.setProperty('--orb-x', `${8 + (index % 4) * 7}%`);
    el.style.setProperty('--orb-y', `${10 + (index % 3) * 9}%`);
    el.style.setProperty('--wash-x', `${92 - (index % 4) * 8}%`);
    el.style.setProperty('--wash-y', `${78 - (index % 3) * 10}%`);
    el.style.setProperty('--mist-x', `${36 + (index % 5) * 7}%`);
    el.style.setProperty('--mist-y', `${28 + (index % 4) * 8}%`);
    el.style.setProperty('--poster-tilt', `${between(-7, 7)}deg`);
  };
  const main = document.querySelector('.main');

  if (main) {
    main.querySelectorAll('.filler-pin').forEach(pin => pin.remove());
    const sections = [...main.querySelectorAll('.section')];
    const visualOrder = shuffleInPlace([...sections]);
    const emphasis = shuffleInPlace(['projects', 'about', 'experience', 'stack']).find(id => document.getElementById(id));

    visualOrder.forEach((section, index) => {
      section.style.order = index * 3;
      section.classList.toggle('is-emphasis', section.id === emphasis);
      const sectionNum = section.querySelector('.section-num');
      if (sectionNum) sectionNum.textContent = String(index + 1).padStart(2, '0');
    });

    for (let i = 0; i < 12; i++) {
      const pin = document.createElement('div');
      const type = pick(fillerTypes);
      pin.className = `filler-pin${type ? ` ${type}` : ''}`;
      pin.setAttribute('aria-hidden', 'true');
      pin.style.setProperty('--filler-span', pick(fillerSpans));
      pin.style.setProperty('--filler-span-mobile', pick(mobileFillerSpans));
      pin.style.order = between(1, Math.max(1, visualOrder.length * 3 - 1));
      pin.style.setProperty('--filler-h', `${between(98, 250)}px`);
      pin.style.setProperty('--mark-size', `${between(44, 128)}px`);
      pin.style.setProperty('--mark-x', `${between(-18, 42)}px`);
      pin.style.setProperty('--mark-y', `${between(-18, 42)}px`);
      pin.style.setProperty('--poster-a', pick(fillerColors));
      pin.style.setProperty('--poster-tilt', `${between(-8, 8)}deg`);
      pin.style.setProperty('--filler-tilt', `${between(-2, 2)}deg`);

      main.appendChild(pin);
    }
  }

  document.querySelectorAll('.section').forEach((section, index) => {
    let span = pick(sectionSpans);
    if (section.id === 'projects') span = pick([10, 12, 12]);
    if (section.id === 'about') span = pick([9, 10, 12]);
    if (section.id === 'experience') span = pick([8, 9, 10, 12]);
    if (section.classList.contains('is-emphasis')) span = 12;
    section.style.setProperty('--card-span', span);
    section.style.setProperty('--card-span-mobile', pick(mobileSectionSpans));
    section.style.setProperty('--header-h', `${section.id === 'projects' ? 220 : between(132, 206)}px`);
    applyContentGradientVars(section, index);
  });

  document.querySelectorAll('.project-visual').forEach((visual, index) => {
    visual.style.setProperty('--poster-h', `${between(144, 254)}px`);
    applyContentGradientVars(visual, index + 3);
  });

  const projects = [...document.querySelectorAll('.project')];
  const featuredProject = pick(projects);
  projects.forEach((project, index) => {
    project.style.order = index;
    project.classList.toggle('is-featured', project === featuredProject);
  });
}

function refreshMasonryRows() {
  const resizeGridItems = (grid, itemSelector) => {
    if (!grid) return;

    const styles = getComputedStyle(grid);
    const rowHeight = parseFloat(styles.gridAutoRows) || 8;
    const rowGap = parseFloat(styles.rowGap) || 0;

    grid.querySelectorAll(itemSelector).forEach(item => {
      item.style.gridRowEnd = 'auto';
      const height = item.getBoundingClientRect().height;
      const span = Math.max(1, Math.ceil((height + rowGap) / (rowHeight + rowGap)));
      item.style.gridRowEnd = `span ${span}`;
    });
  };

  requestAnimationFrame(() => {
    resizeGridItems(document.querySelector('.main'), ':scope > .section, :scope > .filler-pin');
  });
}

function initMasonryRefresh() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshMasonryRows, 120);
  });
  window.addEventListener('load', refreshMasonryRows);
  document.fonts?.ready.then(refreshMasonryRows);
}

/* ---- BOOT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderManifesto();
  renderSnapshot();
  renderAbout();
  renderStack();
  renderProjects();
  renderExperience();
  renderReading();
  renderWriting();
  renderContact();
  initBoardRandomness();
  refreshMasonryRows();
  initNav();
  initMasonryRefresh();
  renderGitHub().then(refreshMasonryRows);
});
