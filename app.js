/*
  CONTENT MODEL
  Replace the values in SITE and EXTENSIONS with your own details and asset paths.
  Add another object to EXTENSIONS to automatically get a new card and detail page.
  Keep screenshots local (for example: assets/my-extension/dashboard.png).
*/
const SITE = {
  brand: 'Extension Hub',
  developer: 'Independent browser extension developer',
  about: 'I’m an independent developer who enjoys building useful browser extensions that solve everyday problems and improve the browsing experience.',
  email: 'suryashukla2408@gmail.com',
  github: 'https://github.com/suryaKumar2408',
  linkedin: 'https://www.linkedin.com/in/surya2408/',
  x: 'https://x.com/surya_kumar2408',
  qrCode: 'assets/upi-qr.png',
};

const EXTENSIONS = [
  {
    id: 'codeforces-studio',
    name: 'Codeforces Studio',
    slug: 'codeforces-studio',
    shortDescription: 'Give Codeforces a modern look and a better problem-solving experience.',
    description: `Give Codeforces a modern look and a better problem-solving experience.

Codeforces Studio transforms the traditional Codeforces interface into a personalized coding workspace. Customize your environment, solve problems, test your code, and submit solutions without unnecessary page switching.

Works only on [Codeforces.com](https://codeforces.com).

Settings and code drafts are stored locally in your browser. No personal data is collected or sent to third parties.

Run and Submit functionality uses your logged-in Codeforces session and the website's own endpoints.

Codeforces Studio is an independent, unofficial browser extension. It is not affiliated with, endorsed by, or sponsored by Codeforces.

Your Codeforces account remains yours. All submissions are subject to Codeforces rules.`,
    icon: 'assets/codeforces-studio/icon.png',
    screenshots: [
      'assets/codeforces-studio/home-theme-studio.png',
      'assets/codeforces-studio/split-solve-mode.jpg',
      'assets/codeforces-studio/theme-studio-light.png',
      'assets/codeforces-studio/spider-web-theme.png',
    ],
    features: [
      { title: 'Modern UI', text: 'Clean, responsive interface with light, dark, and automatic themes for a better visual experience.' },
      { title: 'Theme Studio', text: 'Choose built-in themes, upload your own background image, and customize blur, transparency, and dimming.' },
      { title: 'Split Solve Mode', text: 'Keep the problem statement on the left and an integrated code editor on the right with syntax highlighting, templates, and local drafts.' },
      { title: 'Integrated Run & Submit', text: 'Run solutions with custom input, submit directly from the editor, and view submission verdicts inline.' },
      { title: 'Productivity', text: 'Use quick problemset filtering, keyboard shortcuts, and a smoother problem-solving workflow.' },
    ],
    firefoxUrl: 'https://addons.mozilla.org/en-US/firefox/addon/codeforces-studio/',
    chromeUrl: '',
    browsers: ['Firefox'],
    status: 'Available now',
    version: '',
    privacyUrl: '',
    privacyNote: 'Settings and code drafts are stored locally in your browser. No personal data is collected or sent to third parties. Run and Submit functionality uses your logged-in Codeforces session and the website’s own endpoints.',
    accent: 'lime',
  },
  {
    id: 'orbit',
    name: 'ORBIT – Your Personal Workspace',
    slug: 'orbit',
    shortDescription: 'A calm, customizable new tab: widgets, shortcuts, wallpapers, workspaces, and one-click save & restore for your open tabs.',
    description: `ORBIT turns your new tab page into a calm, personal workspace. Everything is yours to arrange, and everything stays on your device.

**SAVE & RESTORE YOUR TABS**
• Save all your open tabs as a named collection before you leave
• Reopen the whole collection in its original order with one click
• Rename or delete collections, and never end up with accidental duplicates
• Your previous browser session is recovered automatically, so a crash or shutdown never costs you your tabs

**BUILD YOUR OWN LAYOUT**
• Drag and resize every card and widget, or hide what you don't need
• Organize links into unlimited collections with list or grid view
• Clock, date and greeting, web search, daily thought, weather, focus timer and to-do list
• Separate workspaces for work, study, or personal life. Create, duplicate and switch instantly

**MAKE IT FEEL RIGHT**
• Dark, Light and AMOLED themes that restyle the entire interface
• Choose an accent color, card transparency, blur, and corner radius
• Built-in wallpaper gallery, plus your own images or videos
• Optional automatic wallpaper rotation

**YOURS, AND PRIVATE**
• No account, no sign-up, no tracking, no ads
• All settings, workspaces and saved tabs are stored locally in your browser
• Export and import a full JSON backup whenever you like

**QUICK START**
Open a new tab to begin. Click the ORBIT toolbar icon (or press Alt+Shift+S) any time to save your open tabs.

Optional features such as the weather widget and website icons use external services only when you enable or view them. See the privacy policy for details.`,
    icon: 'assets/orbit/icon.png',
    screenshots: [
      'assets/orbit/home-workspace.png',
      'assets/orbit/customize-theme.png',
      'assets/orbit/workspaces.png',
      'assets/orbit/widget-library.png',
    ],
    features: [
      { title: 'Save & Restore Tabs', text: 'Save all open tabs as a named collection and reopen them in their original order with one click. Your previous session is recovered automatically after a crash or shutdown.' },
      { title: 'Your Own Layout', text: 'Drag and resize every card and widget, organize links into unlimited collections, and add a clock, search bar, daily thought, weather, focus timer, and to-do list.' },
      { title: 'Workspaces', text: 'Keep separate workspaces for work, study, or personal life. Create, duplicate, and switch between them instantly.' },
      { title: 'Themes & Wallpapers', text: 'Choose Dark, Light, or AMOLED, set your accent color, transparency, blur, and corner radius, and use the built-in wallpaper gallery or your own images and videos.' },
      { title: 'Private by Design', text: 'No account, no tracking, no ads. Everything is stored locally, with full JSON export and import for backups.' },
    ],
    firefoxUrl: '',
    chromeUrl: '',
    browsers: ['Chrome', 'Firefox'],
    status: 'Coming soon',
    version: '',
    privacyUrl: '',
    privacyNote: 'No account, no sign-up, no tracking, and no ads. All settings, workspaces, and saved tabs are stored locally in your browser. Optional features such as the weather widget and website icons use external services only when you enable or view them.',
    accent: 'lime',
  },
];

const iconMarkup = (accent = 'lime') => {
  const color = accent === 'orange' ? '#e8784e' : accent === 'lavender' ? '#a59df0' : '#c5e74e';
  return `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M10 11.5A4.5 4.5 0 0 1 14.5 7H19v6a3.5 3.5 0 1 0 7 0V7h.5a4.5 4.5 0 0 1 4.5 4.5V16h-6a3.5 3.5 0 1 0 0 7h6v4.5a4.5 4.5 0 0 1-4.5 4.5H22v-6a3.5 3.5 0 1 0-7 0v6h-.5a4.5 4.5 0 0 1-4.5-4.5V23h6a3.5 3.5 0 1 0 0-7h-6v-4.5Z" fill="${color}"/><circle cx="20" cy="20" r="3" fill="#17221d"/></svg>`;
};

const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
const icon = ext => ext.icon ? `<img src="${esc(ext.icon)}" alt="" />` : iconMarkup(ext.accent);
const browserLabel = ext => ext.browsers?.length ? ext.browsers.join(' · ') : 'Add browsers';
const extIcon = (ext, extra = '') => `<span class="extension-icon ${ext.accent === 'orange' ? 'icon-orange' : ext.accent === 'lavender' ? 'icon-lavender' : ''} ${extra}">${icon(ext)}</span>`;
const richText = (value = '') => esc(value)
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1 <span>↗</span></a>')
  .split(/\n{2,}/)
  .map(block => `<p>${block.replace(/\n/g, '<br />')}</p>`)
  .join('');

function card(ext) {
  const soon = ext.status?.toLowerCase().includes('not') || ext.status?.toLowerCase().includes('soon');
  return `<a class="extension-card" href="/extension/${esc(ext.slug)}">
    <div class="card-top">${extIcon(ext)}<span class="status ${soon ? 'soon' : ''}">${esc(ext.status || 'Available')}</span></div>
    <h3>${esc(ext.name)}</h3><p>${esc(ext.shortDescription)}</p>
    <div class="card-meta"><span>${esc(browserLabel(ext))}</span>${ext.version ? `<span>v${esc(ext.version)}</span>` : ''}</div>
    <div class="card-link">View details <span>↗</span></div>
  </a>`;
}

function home() {
  return `<div class="page-wrap">
    <section class="hero"><div>
      <div class="hero-kicker"><span class="live-dot"></span><span class="eyebrow">Independent tools for the web</span></div>
      <h1>Useful extensions.<br /><em>Better browsing.</em></h1>
      <p class="hero-copy">Discover useful browser extensions designed to improve your everyday browsing experience.</p>
      <div class="hero-actions"><a class="button button-primary" href="#extensions">Explore Extensions <span class="button-arrow">↓</span></a><a class="button button-quiet" href="/support">Support the Work <span class="button-arrow">↗</span></a></div>
    </div><div class="hero-art" aria-hidden="true"><div class="hero-orbit"></div><div class="hero-logo"><img src="assets/extension-hub-mark.png" alt="" /></div></div></section>
    <section class="section-rule" id="extensions"><div class="section-heading"><div><span class="eyebrow">The collection</span><h2>All extensions</h2></div><span class="section-count">${EXTENSIONS.length.toString().padStart(2, '0')} extensions</span></div>
      <div class="extension-grid">${EXTENSIONS.map(card).join('')}</div>
    </section>
    <section class="support-banner"><div><span class="eyebrow" style="color:#abb9ae">Support independent development</span><h2>Help me build more useful extensions.</h2></div><div><p>If my extensions make your browsing experience better, consider supporting my work. Every contribution helps me continue building and improving free browser extensions.</p><a class="button button-quiet" href="/support">Support My Work <span class="button-arrow">↗</span></a></div></section>
    <section class="about-section" id="about"><div><span class="eyebrow">A little context</span><h2>Built independently,<br />for everyone.</h2></div><div><p>${esc(SITE.about)}</p><div class="about-links">${socialLinks()}</div></div></section>
  </div>`;
}

function socialLinks() {
  const links = [];
  if (SITE.github) links.push(`<a href="${esc(SITE.github)}" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>`);
  if (SITE.linkedin) links.push(`<a href="${esc(SITE.linkedin)}" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>`);
  if (SITE.x) links.push(`<a href="${esc(SITE.x)}" target="_blank" rel="noreferrer">X / Twitter <span>↗</span></a>`);
  if (SITE.email) links.push(`<a href="mailto:${esc(SITE.email)}">Email <span>↗</span></a>`);
  return links.length ? links.join('') : '<span class="eyebrow">Add your social links in app.js</span>';
}

function detail(ext) {
  const featureList = ext.features?.map(item => `<div class="feature"><b>${esc(item.title)}</b><p>${esc(item.text)}</p></div>`).join('') || '';
  const gallery = ext.screenshots?.length ? ext.screenshots.map((src, i) => `<button class="screenshot" data-image="${esc(src)}" type="button"><img src="${esc(src)}" alt="${esc(ext.name)} screenshot ${i + 1}" /></button>`).join('') : `<div class="screenshot-empty"><div><b>Your screenshots will live here.</b>Add image paths to this extension’s <code>screenshots</code> array in <code>app.js</code>.</div></div>`;
  const install = [ext.chromeUrl ? `<a class="button button-primary" href="${esc(ext.chromeUrl)}" target="_blank" rel="noreferrer">Add to Chrome <span class="button-arrow">↗</span></a>` : '', ext.firefoxUrl ? `<a class="button" href="${esc(ext.firefoxUrl)}" target="_blank" rel="noreferrer">Add to Firefox <span class="button-arrow">↗</span></a>` : ''].filter(Boolean).join('') || '<p class="empty-install">Add store URLs in app.js to show installation buttons.</p>';
  return `<div class="page-wrap"><section class="detail-hero"><a class="back-link" href="/">← All extensions</a><div class="detail-title">${extIcon(ext)}<div><h1>${esc(ext.name)}</h1><p>${esc(ext.shortDescription)}</p></div></div></section><section class="detail-body"><div class="detail-content"><span class="eyebrow">About the extension</span><div class="detail-copy">${richText(ext.description)}</div><h2>What it does</h2><div class="features">${featureList}</div>${ext.privacyNote ? `<h2>Privacy</h2><div class="detail-copy">${richText(ext.privacyNote)}</div>` : ''}<h2>Screenshots</h2><div class="gallery">${gallery}</div></div><aside class="detail-side"><div class="install-box"><h3>Get the extension</h3>${install}<div class="browser-row"><span>Browsers</span><strong>${esc(browserLabel(ext))}</strong></div>${ext.version ? `<div class="browser-row"><span>Version</span><strong>${esc(ext.version)}</strong></div>` : ''}${ext.privacyUrl ? `<a class="privacy-link" href="${esc(ext.privacyUrl)}">Read privacy policy ↗</a>` : ''}</div></aside></section></div>`;
}

function support() {
  const qr = SITE.qrCode ? `<img src="${esc(SITE.qrCode)}" alt="UPI QR code" data-image="${esc(SITE.qrCode)}" />` : '<div class="qr-placeholder"><span>⌁</span>YOUR QR IMAGE<br />GOES HERE</div>';
  return `<div class="page-wrap support-page"><div class="support-intro"><span class="eyebrow">Support</span><h1>Support Extension Hub</h1><p>All my browser extensions are free to use. If you find them useful, you can support my work through a voluntary contribution.</p></div><div class="support-layout"><section class="support-card"><span class="eyebrow">Optional contribution</span><h2>Scan &amp; Pay</h2><p>Scan the original QR code with Google Pay, PhonePe, Paytm, or another supported UPI application.</p><div class="qr-frame" data-qr>${qr}</div><p class="scan-note">Your contribution is completely optional<br />and genuinely appreciated.</p></section><section class="support-card support-points"><div class="support-point"><span class="point-number">01</span><div><b>Keep the tools free</b><p>Your support helps keep useful browser extensions accessible to everyone.</p></div></div><div class="support-point"><span class="point-number">02</span><div><b>Make room for better ideas</b><p>It creates time for maintenance, improvements, and the next small experiment.</p></div></div><div class="support-point"><span class="point-number">03</span><div><b>Thank you for being here</b><p>There is no subscription and no pressure. A kind word is support too.</p></div></div></section></div></div>`;
}

function setupMotion() {
  const heroParts = [
    ['.hero h1', '0ms'],
    ['.hero-copy', '90ms'],
    ['.hero-actions', '160ms'],
    ['.hero-art', '80ms'],
  ];
  heroParts.forEach(([selector, delay]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('hero-reveal');
      element.style.setProperty('--hero-delay', delay);
    }
  });

  const targets = [...document.querySelectorAll([
    '#app .section-heading',
    '#app .extension-card',
    '#app .support-banner',
    '#app .about-section',
    '#app .support-intro',
    '#app .support-card',
    '#app .detail-hero',
    '#app .detail-content',
    '#app .detail-side',
    '.site-footer .footer-top',
    '.site-footer .footer-bottom',
  ].join(','))];
  const cards = targets.filter(element => element.matches('.extension-card'));
  const reduced = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  targets.forEach(element => {
    element.classList.add('reveal');
    if (element.matches('.extension-card')) {
      element.style.setProperty('--reveal-delay', `${Math.min(cards.indexOf(element), 5) * 55}ms`);
    }
  });

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(element => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -36px' });
  targets.forEach(element => observer.observe(element));
}

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const match = path.match(/^\/extension\/(.+)$/);
  const ext = match && EXTENSIONS.find(item => item.slug === decodeURIComponent(match[1]));
  const app = document.querySelector('#app');
  app.classList.remove('page-enter');
  app.innerHTML = path === '/support' ? support() : ext ? detail(ext) : path === '/' ? home() : `<div class="page-wrap not-found"><h1>Page not found.</h1><p>That page has moved. <a class="back-link" href="/">Return home →</a></p></div>`;
  window.scrollTo(0, 0);
  bindPage();
  setupMotion();
  requestAnimationFrame(() => app.classList.add('page-enter'));
}

function go(e) { const link = e.target.closest('a'); if (!link || link.target === '_blank' || link.href.startsWith('mailto:') || link.hash === '#about' || link.hash === '#extensions') return; const url = new URL(link.href); if (url.origin !== location.origin) return; e.preventDefault(); history.pushState({}, '', url.pathname); render(); document.querySelector('.site-header')?.classList.remove('menu-open'); }
function bindPage() { document.querySelectorAll('[data-image]').forEach(item => item.addEventListener('click', () => openLightbox(item.dataset.image, item.querySelector('img')?.alt || item.alt || 'Screenshot'))); }
function openLightbox(src, alt) { if (!src) return; const box = document.querySelector('[data-lightbox]'); box.querySelector('img').src = src; box.querySelector('img').alt = alt; box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); }
function closeLightbox() { const box = document.querySelector('[data-lightbox]'); box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); }

document.querySelectorAll('[data-brand-name]').forEach(el => el.textContent = SITE.brand);
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelector('[data-social="github"]').href = SITE.github || '#about';
document.querySelector('[data-social="linkedin"]').href = SITE.linkedin || '#about';
document.querySelector('[data-social="x"]').href = SITE.x || '#about';
document.querySelector('[data-email]').href = SITE.email ? `mailto:${SITE.email}` : '#about';
document.addEventListener('click', go);
document.querySelector('[data-lightbox-close]').addEventListener('click', closeLightbox);
document.querySelector('[data-lightbox]').addEventListener('click', e => { if (e.target.matches('[data-lightbox]')) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
document.querySelector('[data-menu-toggle]').addEventListener('click', e => { const header = document.querySelector('[data-header]'); const open = header.classList.toggle('menu-open'); e.currentTarget.setAttribute('aria-expanded', String(open)); });
window.addEventListener('popstate', render);
render();
