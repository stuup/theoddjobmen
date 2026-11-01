const PHONE_WA = '447709674761';

const ICONS = {
  exterior: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/><path d="M18 3c0 1.5 1.5 2 1.5 3.3a1.5 1.5 0 0 1-3 0C16.5 5 18 4.5 18 3Z"/>',
  cleaning: '<path d="M9 3h4l1 4H8z"/><path d="M8 7h6l1 3v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10z"/><path d="M14 4h3l2 2"/><path d="M19 13l1-1M20 16h1.5M19 19l1 1"/>',
  handyman: '<path d="m14 7 3-3 3 3-3 3"/><path d="M17 7 6 18a2 2 0 0 1-3-3L14 4"/><path d="m5 5 4 4M3 7l4-4 3 3-4 4z"/>',
  kitchbath: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 20l-1 2M17 20l1 2"/>',
  doors: '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><path d="M3 21h18"/><circle cx="15" cy="12" r="1"/>',
  garden: '<path d="M12 21v-8"/><path d="M12 13c-4 0-7-3-7-8 4 0 7 3 7 8Z"/><path d="M12 15c3 0 6-2 6-6-3 0-6 2-6 6Z"/><path d="M5 21h14"/>',
};

const CATEGORIES = [
  { id: 'exterior', title: 'Exterior cleaning', blurb: 'Fixed prices on windows, gutters, fascias and soffits. A cleaner exterior protects your home and adds kerb appeal.', items: [
    'Window cleaning (pure water or traditional)', 'Gutter clearance (full gutters & downpipes)', 'Fascia & soffit cleaning', 'Conservatory cleaning', 'Roof cleaning & moss removal', 'Driveway & patio jet washing', 'Decking & path cleaning', 'Bin cleaning', 'Solar panel cleaning',
  ] },
  { id: 'cleaning', title: 'Home & commercial cleaning', blurb: 'Family-run cleaning that treats every home like our own. Regular, monthly or one-off.', items: [
    'Regular home cleaning', 'Monthly clean', 'One-off clean', 'Deep clean', 'End-of-tenancy clean', 'Carpet & upholstery cleaning', 'Oven cleaning', 'After-builders clean', 'Commercial clean (small business)',
  ] },
  { id: 'handyman', title: 'Handyman & carpentry', blurb: 'The little jobs you keep putting off, plus custom woodwork. No job too small.', items: [
    'General handyman jobs', 'Shelving & storage', 'Custom woodwork', 'Media wall / TV wall build', 'TV mounting', 'Flat-pack assembly', 'Skirting & architrave', 'Painting & decorating', 'Plastering & repairs', 'Flooring (laminate, vinyl, LVT, wood)', 'Gutter, fascia & soffit repairs', 'Loft boarding', 'Grab rails & handrails', 'Tip run / rubbish removal',
  ] },
  { id: 'kitchbath', title: 'Kitchens & bathrooms', blurb: 'Supply, fit, transform. Full refits or partial upgrades, with certified plumbing and electrics.', items: [
    'Full kitchen supply & fit', 'Worktops & units', 'Appliance, hob & oven fitting', 'Washing machine / dishwasher hook-up', 'Tiling & splashbacks', 'Full bathroom renovation', 'Shower enclosures & walk-in showers', 'Wet room', 'Toilets & basins', 'Plumbing repairs & upgrades', 'Old kitchen / bathroom removal',
  ] },
  { id: 'doors', title: 'Doors, windows & conversions', blurb: 'Quality doors and windows, expertly fitted, plus garage conversions that add space and value.', items: [
    'Internal doors supply & fit', 'Fire doors (FD30)', 'Composite front door', 'uPVC / aluminium / timber windows', 'Bi-fold doors', 'Locks & handles', 'Seals & draught-proofing', 'Garage conversion',
  ] },
  { id: 'garden', title: 'Gardens & outdoors', blurb: 'From overgrown gardens to new fences, including last-minute tidy-ups before guests arrive.', items: [
    'Garden tidy-up', 'Weeding & clearing', 'Last-minute garden tidy', 'Fencing & gates', 'Patio & decking', 'Exterior painting', 'Garden waste removal',
  ] },
];

const BANDS = {
  windows: [[6, 25], [10, 35], [15, 45], [20, 55], [Infinity, 65]],
  metres: [['Up to 10m', 45], ['11–20m', 65], ['21–30m', 85], ['31–40m', 105], ['41m+', 125]],
};

const GUIDES = [
  { id: 'doors', tab: 'Internal doors', intro: '<strong>Supply &amp; fit from £100 per door.</strong> If you\'re having several doors done, ask about our multi-door rate.',
    head: ['Door type', 'Supply only', 'Labour to fit', 'Supply &amp; fit (per door)'],
    rows: [['Hollow-core / primed white', '£30–£70', '£80–£150', '£100–£220'], ['Solid-core / oak veneer', '£80–£150', '£80–£150', '£180–£350'], ['Solid hardwood / glazed', '£150–£350+', '£120–£200+', '£300–£550+'], ['Fire door (FD30)', '£50–£300+', '£150–£250', '£200–£550+']],
    extra: 'Optional extras: handles, latches &amp; hinges £10–£40 per door · taking away old doors £30–£70 · new frame or lining £200 materials + £80 labour · painting or varnishing £50–£120 per door.' },
  { id: 'kitchens', tab: 'Kitchens', intro: '<strong>Full kitchen supply &amp; fit from £6,000.</strong> The cost depends on the size of your space, your materials, and whether the plumbing needs to move.',
    head: ['Kitchen tier', 'Supply', 'Fitting labour', 'Total estimate'],
    rows: [['Budget / small (flat-pack, laminate worktops)', '£3,000–£6,000', '£2,000–£4,000', '£5,000–£10,000'], ['Mid-range (rigid units, integrated appliances)', '£6,000–£12,000', '£3,000–£6,000', '£10,000–£18,000'], ['Premium / large (solid wood, quartz)', '£12,000–£25,000+', '£5,000–£10,000+', '£18,000–£35,000+']],
    extra: 'Kitchen plumbing: sink &amp; tap connection £150–£300 · washing machine or dishwasher hook-up £50–£150 per appliance · moving pipework £300–£800 · Gas Safe hob or oven install £150–£300.' },
  { id: 'bathrooms', tab: 'Bathrooms', intro: '<strong>A full mid-range bathroom typically costs £5,500–£8,500.</strong> A basic refresh can start around £2,500, and luxury wet rooms can be £15,000+.',
    head: ['Project', 'Typical cost'],
    rows: [['Basic refresh / cloakroom', '£3,500–£4,500'], ['Standard family bathroom', '£5,000–£12,000'], ['Luxury / wet room', '£10,000–£15,000+'], ['Bath', '£350–£850'], ['Shower enclosure / walk-in', '£350–£1,100'], ['Toilet &amp; basin', '£500–£700'], ['Tiling (per m²)', '£25–£70 materials + £40–£70 fitting'], ['Strip-out, removal &amp; skip', '£600–£1,000']],
    extra: 'Prices vary with size, materials and finish.' },
  { id: 'windows', tab: 'Windows &amp; ext. doors', intro: '<strong>For a typical 3-bed house (8–10 windows and 2 external doors), expect around £6,000–£12,000 for full supply and fit.</strong>',
    head: ['Product', 'Supply only', 'Supplied &amp; installed'],
    rows: [['uPVC casement window', '£65–£450', '£500–£900'], ['uPVC sliding sash window', '£350–£650', '£700–£1,500'], ['Aluminium window', '£350–£1,000', '£800–£1,600'], ['Standard uPVC external door', '£419–£600', '£700–£1,000'], ['Composite front door', '£580–£1,000', '£900–£1,500'], ['Aluminium bi-fold (per panel)', '£600–£1,200', '£1,000–£1,800']],
    extra: 'Aluminium usually costs 25–30% more than uPVC, and triple glazing adds 30–40% to the supply cost. Installation by a FENSA or CERTASS registered installer includes compliance certification.' },
  { id: 'garage', tab: 'Garage conversions', intro: '<strong>Most UK garage conversions cost £10,000–£25,000</strong>, depending on what you\'re creating and whether the garage is integral, attached or detached.',
    head: ['Project type', 'Typical cost'],
    rows: [['Home gym / playroom', '£5,000–£10,000'], ['Home office / simple living room', '£8,000–£15,000'], ['Standard bedroom', '£10,000–£22,000'], ['Bedroom with en-suite', '£18,000–£35,000'], ['Granny annexe / self-contained studio', '£30,000–£55,000+']],
    extra: 'Common extras: insulation and damp-proofing £2,000–£4,000 · replacing the garage door with a brick wall and window £1,500–£4,000 · electrics, heating and plumbing £1,500–£4,000 · Building Control fees around £300–£700.' },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const svg = id => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id]}</svg>`;

$('#yr').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = $('.menu-btn');
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  $('#menu').classList.toggle('open', !open);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => {
  menuBtn.setAttribute('aria-expanded', 'false');
  $('#menu').classList.remove('open');
}));

// Tabs helper
function tabs(container, items, onSelect) {
  container.innerHTML = items.map((t, i) => `<button class="chip${i ? '' : ' on'}" role="tab" aria-selected="${!i}" data-id="${t.id}">${t.label}</button>`).join('');
  container.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    $$('.chip', container).forEach(c => { c.classList.toggle('on', c === b); c.setAttribute('aria-selected', String(c === b)); });
    onSelect(b.dataset.id);
  });
}

// Job list
const jobs = new Set();
function renderJobs() {
  const list = $('#jl');
  list.innerHTML = jobs.size
    ? [...jobs].map(j => `<li>${esc(j)}<button type="button" aria-label="Remove ${esc(j)}" data-rm="${esc(j)}">×</button></li>`).join('')
    : '<li class="empty">No jobs added yet. Tap jobs in the <a href="#services">services</a> list, or just describe them below.</li>';
  $('#selected-jobs').value = [...jobs].join('\n');
  $('#jl-count').textContent = `${jobs.size} job${jobs.size === 1 ? '' : 's'}`;
  $('#mb-count').textContent = jobs.size ? `(${jobs.size})` : '';
  $$('.job').forEach(b => {
    const on = jobs.has(b.dataset.job);
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
  });
}
const addJob = j => { jobs.add(j); renderJobs(); };
$('#jl').addEventListener('click', e => {
  if (e.target.dataset.rm) { jobs.delete(e.target.dataset.rm); renderJobs(); }
});

// Services
$('#cats').innerHTML = CATEGORIES.map(c => `
  <article class="cat" data-cat="${c.id}">
    <div class="cat-head"><span class="cat-ic">${svg(c.id)}</span><h3>${c.title}</h3></div>
    <p>${c.blurb}</p>
    <div class="jobs">${c.items.map(i => `<button type="button" class="job" aria-pressed="false" data-job="${esc(i)}">${esc(i)}</button>`).join('')}</div>
  </article>`).join('');
tabs($('#filters'), [{ id: 'all', label: 'All services' }, ...CATEGORIES.map(c => ({ id: c.id, label: c.title }))], id => {
  $$('.cat').forEach(c => { c.hidden = id !== 'all' && c.dataset.cat !== id; });
});
$('#cats').addEventListener('click', e => {
  const b = e.target.closest('.job');
  if (!b) return;
  const j = b.dataset.job;
  if (jobs.has(j)) jobs.delete(j); else jobs.add(j);
  renderJobs();
});

// Exterior cleaning calculator
const winPrice = n => n <= 0 ? 0 : BANDS.windows.find(([max]) => n <= max)[1];
const opts = '<option value="-1">Not needed</option>' + BANDS.metres.map(([l, p], i) => `<option value="${i}">${l} (£${p}${i === 4 ? '+' : ''})</option>`).join('');
$('#c-gut').innerHTML = opts;
$('#c-fas').innerHTML = opts;
$('#price-tables').innerHTML = [
  ['Window cleaning', BANDS.windows.map(([max, p], i) => [i === 0 ? 'Up to 6 windows' : i === 4 ? '21+ windows' : `${BANDS.windows[i - 1][0] + 1}–${max} windows`, `£${p}${i === 4 ? '+' : ''}`]), 'Prices may vary with size and condition'],
  ['Fascia &amp; soffit cleaning', BANDS.metres.map(([l, p], i) => [l, `£${p}${i === 4 ? '+' : ''}`]), 'Based on total length of fascia and soffit'],
  ['Gutter cleaning', BANDS.metres.map(([l, p], i) => [l, `£${p}${i === 4 ? '+' : ''}`]), 'Based on total length of gutters'],
].map(([t, rows, note]) => `<div class="ptable"><h4>${t}</h4><table>${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</table><p>${note}</p></div>`).join('');

function calc() {
  const n = Math.max(0, Math.min(60, parseInt($('#c-win').value, 10) || 0));
  const g = +$('#c-gut').value, f = +$('#c-fas').value;
  const w = winPrice(n), gp = g < 0 ? 0 : BANDS.metres[g][1], fp = f < 0 ? 0 : BANDS.metres[f][1];
  const plus = n > 20 || g === 4 || f === 4;
  $('#o-win').textContent = w ? `£${w}${n > 20 ? '+' : ''}` : '-';
  $('#o-gut').textContent = gp ? `£${gp}${g === 4 ? '+' : ''}` : '-';
  $('#o-fas').textContent = fp ? `£${fp}${f === 4 ? '+' : ''}` : '-';
  $('#o-total').textContent = `£${w + gp + fp}${plus ? '+' : ''}`;
  const parts = [];
  if (w) parts.push(`Window cleaning: ${n} windows`);
  if (gp) parts.push(`Gutter cleaning: ${BANDS.metres[g][0]}`);
  if (fp) parts.push(`Fascia & soffit cleaning: ${BANDS.metres[f][0]}`);
  return { parts, total: $('#o-total').textContent };
}
$$('.stepper button').forEach(b => b.addEventListener('click', () => {
  const i = $('#c-win');
  i.value = Math.max(0, Math.min(60, (parseInt(i.value, 10) || 0) + +b.dataset.step));
  calc();
}));
['#c-win', '#c-gut', '#c-fas'].forEach(s => $(s).addEventListener('input', calc));
$('#calc-add').addEventListener('click', () => {
  const { parts, total } = calc();
  if (!parts.length) { $('#c-win').focus(); return; }
  parts.forEach(p => jobs.add(`${p} (estimate)`));
  renderJobs();
  $('#q-details').value ||= `Exterior cleaning estimate from the website: ${total}`;
  $('#quote').scrollIntoView({ behavior: 'smooth' });
});
$('#calc-wa').addEventListener('click', e => {
  const { parts, total } = calc();
  const msg = parts.length
    ? `Hi Sam, I used the calculator on your website:\n${parts.map(p => `- ${p}`).join('\n')}\nEstimated total: ${total}\nCan you confirm a price and date please?`
    : 'Hi Sam, could I get a price for exterior cleaning please?';
  e.currentTarget.href = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(msg)}`;
});
calc();

// Price guides
function showGuide(id) {
  const g = GUIDES.find(x => x.id === id);
  $('#guide').innerHTML = `<p class="guide-intro">${g.intro}</p>
    <div class="tbl-wrap"><table><thead><tr>${g.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${g.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <p class="guide-extra">${g.extra}</p>`;
}
tabs($('#guide-tabs'), GUIDES.map(g => ({ id: g.id, label: g.tab })), showGuide);
showGuide(GUIDES[0].id);

// Buttons that add a job / set customer type
$$('[data-add]').forEach(a => a.addEventListener('click', () => {
  addJob(a.dataset.add);
  if (a.dataset.type) $('#q-type').value = a.dataset.type;
}));

// Seasonal jobs
const SEASONS = {
  spring: ['Driveway & patio jet washing', 'Window cleaning', 'Fencing & gates', 'Garden tidy-up'],
  summer: ['Conservatory cleaning', 'Patio & decking', 'Exterior painting', 'Last-minute garden tidy'],
  autumn: ['Gutter clearance (full gutters & downpipes)', 'Fascia & soffit cleaning', 'Roof cleaning & moss removal', 'Seals & draught-proofing'],
  winter: ['Deep clean', 'Painting & decorating', 'Media wall / TV wall build', 'Internal doors supply & fit'],
};
const m = new Date().getMonth();
const season = m < 2 || m === 11 ? 'winter' : m < 5 ? 'spring' : m < 8 ? 'summer' : 'autumn';
$('#season-title').textContent = `Popular this ${season}`;
$('#season-list').innerHTML = SEASONS[season].map(s => `<li>${esc(s)}</li>`).join('');
$('#season-cta').addEventListener('click', () => {
  SEASONS[season].forEach(s => jobs.add(s));
  renderJobs();
  $('#quote').scrollIntoView({ behavior: 'smooth' });
});

// Postcode checker
const AREAS = {
  core: /^WV([1-9]|1[0-1])$/,
  near: /^(WV(1[2-6])|WS(1|2|3|10|11)|DY(1|3|4)|ST19)$/,
};
$('#pc-form').addEventListener('submit', e => {
  e.preventDefault();
  const raw = $('#pc').value.toUpperCase().replace(/\s+/g, '');
  const out = $('#pc-result');
  const match = raw.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)(\d[A-Z]{2})?$/);
  if (!match) { out.className = 'pc-result warn'; out.textContent = 'That doesn\'t look like a UK postcode. Try something like WV6 8QJ.'; return; }
  const district = match[1];
  $('#q-postcode').value = $('#pc').value.toUpperCase();
  if (AREAS.core.test(district)) {
    out.className = 'pc-result ok'; out.innerHTML = `Good news, we cover ${district}. <a href="#quote">Get your free quote →</a>`;
  } else if (AREAS.near.test(district)) {
    out.className = 'pc-result ok'; out.innerHTML = `We cover ${district} for most jobs. <a href="#quote">Send us your list →</a>`;
  } else {
    out.className = 'pc-result warn'; out.innerHTML = `${district} is outside our usual area, but it's worth asking, especially for bigger jobs. <a href="https://wa.me/${PHONE_WA}" target="_blank" rel="noopener">WhatsApp us →</a>`;
  }
});

// Send job list via WhatsApp
$('#send-wa').addEventListener('click', () => {
  const f = $('.qform');
  const lines = ['Hi Sam, I\'d like a free quote please.'];
  if (jobs.size) lines.push('', 'Jobs:', ...[...jobs].map(j => `- ${j}`));
  if (f.details.value.trim()) lines.push('', f.details.value.trim());
  if (f.postcode.value.trim()) lines.push('', `Postcode: ${f.postcode.value.trim()}`);
  if (f.name.value.trim()) lines.push(`Name: ${f.name.value.trim()}`);
  window.open(`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

// Share
$('#share-btn').addEventListener('click', async () => {
  const data = { title: 'The Odd Job Men & Cleaning Services', text: 'Handyman, cleaning and exterior cleaning in Wolverhampton. Free quotes from Sam on 07709 674761.', url: location.origin + '/' };
  const msg = $('#share-msg');
  try {
    if (navigator.share) { await navigator.share(data); msg.textContent = 'Thank you for sharing!'; }
    else { await navigator.clipboard.writeText(data.url); msg.textContent = 'Link copied. Paste it to a friend. Thank you!'; }
  } catch { /* share cancelled */ }
});

renderJobs();
