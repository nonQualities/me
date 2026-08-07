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

  const projects = PORTFOLIO_DATA.projects.map(p => {
    const tags = p.tags.map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('');
    return `
      <div class="project">
        <div class="project-header">
          <span class="project-name">${escapeHtml(p.name)}</span>
          <div class="project-tags">${tags}</div>
        </div>
        <div class="project-desc">${escapeHtml(p.desc)}</div>
        <a class="project-link" href="${escapeHtml(p.link.url)}" target="_blank">${escapeHtml(p.link.text)} &rarr;</a>
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
            <a href="${escapeHtml(r.html_url)}" target="_blank">${escapeHtml(r.name)}</a>
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
          <a href="https://github.com/${escapeHtml(username)}" target="_blank" style="color:var(--accent);">
            &rarr; override & visit profile manually
          </a>
        </div>
        ${PORTFOLIO_DATA.github.note ? `<div class="gh-note">${escapeHtml(PORTFOLIO_DATA.github.note)}</div>` : ''}
      </div>
    `;
  }
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
      <a href="${escapeHtml(w.url)}" target="_blank">${escapeHtml(w.title)}</a>
      <span class="writing-date">${escapeHtml(w.date)}</span>
    </div>
  `).join('');

  let html = `<div class="writing-list">${items}</div>`;

  if (PORTFOLIO_DATA.writing.moreLink) {
    html += `
      <div class="writing-more">
        <a href="${escapeHtml(PORTFOLIO_DATA.writing.moreLink.url)}" target="_blank">
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
      <a href="${escapeHtml(c.href)}" ${c.href.startsWith('http') ? 'target="_blank"' : ''}>
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

/* ---- NAV ACTIVE STATE ---- */
function initNav() {
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const onScroll = () => {
    let current = sections[0]?.id;
    sections.forEach(sec => {
      if (sec.getBoundingClientRect().top <= 100) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- BOOT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderManifesto();
  renderAbout();
  renderStack();
  renderProjects();
  renderGitHub();
  renderReading();
  renderWriting();
  renderContact();
  initNav();
  initLineNumbers();
});
