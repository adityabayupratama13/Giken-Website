/**
 * GIKEN SAKATA (S) LIMITED - MODERN CORPORATE CONTROLLER
 * Benchmark: Pegatron Corp (https://www.pegatroncorp.com/)
 * Official Management Dossier (Aug 2026) & Y2026-8.2 Integration
 * Light Mode Default with Dark Mode Toggle & Multi-Language Support
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initFullPageScroll();
  initMatrixTabs();
  initCounters();
  initLanguageEngine();
  initMobileMenu();
});

/* ==========================================================================
   1. THEME ENGINE (LIGHT MODE DEFAULT & DARK MODE TOGGLE)
   ========================================================================== */
function initThemeEngine() {
  const savedTheme = localStorage.getItem('giken_theme') || 'light';
  applyTheme(savedTheme);
}

window.toggleTheme = function() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('giken_theme', newTheme);
};

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const iconEl = document.getElementById('themeIcon');
  const labelEl = document.getElementById('themeLabel');

  if (iconEl && labelEl) {
    if (theme === 'dark') {
      iconEl.className = 'fa-solid fa-sun';
      labelEl.innerText = 'Light';
    } else {
      iconEl.className = 'fa-solid fa-moon';
      labelEl.innerText = 'Dark';
    }
  }
}

/* ==========================================================================
   2. FULL-PAGE SCROLL SNAP ENGINE
   One scroll = jump to next/previous section with smooth transition + easing
   ========================================================================== */
function initFullPageScroll() {
  const sectionIds = ['hero','about','capabilities','expansion','industries','quality','facilities','contact','careers'];
  const sectionLabels = ['Intro','About Us','Capabilities','Batam Expansion','Industries','Quality & ESG','Facilities','Contact','Careers'];
  const header = document.getElementById('corpHeader');
  const backToTopBtn = document.getElementById('btnBackToTop');
  const navLabel = document.getElementById('sideNavLabel');
  const progress = document.getElementById('sideNavProgress');
  const dots = [...document.querySelectorAll('.side-nav-dot')];

  window.smoothScrollTo = function(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  dots.forEach(dot => dot.addEventListener('click', () => {
    window.smoothScrollTo('#' + dot.getAttribute('data-section'));
  }));

  function setActive(idx) {
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    if (navLabel) navLabel.textContent = sectionLabels[idx] || '';
  }

  // Active section = the one covering the top third of the viewport.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const idx = sectionIds.indexOf(e.target.id);
      if (idx !== -1) setActive(idx);
    });
  }, { rootMargin: '-33% 0px -60% 0px' });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (backToTopBtn) backToTopBtn.style.display = y > 400 ? 'flex' : 'none';
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.height = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
  }, { passive: true });

  setActive(0);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('corpMobileToggle');
  const nav = document.getElementById('corpNav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }
}

/* ==========================================================================
   4. MACHINERY & TECHNICAL PARAMETERS MATRIX
   ========================================================================== */
const matrixData = {
  pcba: `
    <table class="specs-table">
      <thead>
        <tr>
          <th>Capability / Process</th>
          <th>Equipment & Technology</th>
          <th>Capacity & Specification</th>
          <th>Inspection & Standards</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mounting Capacity</strong></td>
          <td>23 SMT Lines (Panasonic NPM Series)</td>
          <td>Chip: 720M pts/mo &bull; Radial: 10M pts/mo &bull; Axial: 5M pts/mo</td>
          <td>High-speed placement down to 0315 chip components and above</td>
        </tr>
        <tr>
          <td><strong>Fine Pitch & Package Support</strong></td>
          <td>SOP, PLCC, QFP, BGA, CSP, SMT/THT Connectors</td>
          <td>Fine-pitch assembly down to 0.25 mm</td>
          <td>Up to 8-layer multi-layer PCB assemblies</td>
        </tr>
        <tr>
          <td><strong>Reflow & Wave Soldering</strong></td>
          <td>12-Zone Nitrogen Reflow Oven (Lead-Free RoHS)</td>
          <td>Automatic spray fluxing & Wave Soldering for THT</td>
          <td>Multi-profile thermal monitoring & N2 atmosphere</td>
        </tr>
        <tr>
          <td><strong>Back-end Quality Inspection</strong></td>
          <td>3D Solder Paste Inspection (SPI), Saki/Jutze 3D AOI</td>
          <td>Dage Real-time X-Ray & In-Circuit Test (ICT/FCT)</td>
          <td>Bluetooth & Wi-Fi RF IoT testing, Class 100 Cleanroom</td>
        </tr>
        <tr>
          <td><strong>Reliability Validation</strong></td>
          <td>Burn-In Chambers, Thermal Shock Ovens</td>
          <td>IPX4 Water Resistance Chamber & Delta-P Air Leakage</td>
          <td>Software: LabView, Python, C++, Chroma, Machine Vision</td>
        </tr>
      </tbody>
    </table>
  `,
  moulding: `
    <table class="specs-table">
      <thead>
        <tr>
          <th>Machine Category</th>
          <th>Tonnage Range</th>
          <th>Material Processing</th>
          <th>Cleanroom & Tooling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Plastic Injection Moulding</strong></td>
          <td>18 to 650 Tonnes (100+ Units)</td>
          <td>ABS, PC, PA, POM, PVC, PSU, LCP, PPSU, PBT, PPS</td>
          <td>Cleanroom injection moulding, NPI & high-volume</td>
        </tr>
        <tr>
          <td><strong>Specialized Thermoplastics</strong></td>
          <td>Sumitomo, Nissei & Sodick Electric Machines</td>
          <td>PP + Gamma Resistance, Glass-filled High-Temp Nylon</td>
          <td>Class 100K Cleanroom (ISO Class 8) Medical Moulding</td>
        </tr>
        <tr>
          <td><strong>In-House Tooling & Maintenance</strong></td>
          <td>CNC Milling, EDM, Wire-Cut, Laser Welding</td>
          <td>30T to over 650T mould fabrication & DFM analysis</td>
          <td>Copper drilling, tool modification, jigs & fixtures</td>
        </tr>
        <tr>
          <td><strong>Low Pressure Moulding (LPIM)</strong></td>
          <td>Polyamide Low-Pressure Encapsulation</td>
          <td>Custom aluminum mould design, PCB over-moulding</td>
          <td>IC underfill, conformal coating, sensor encapsulation</td>
        </tr>
      </tbody>
    </table>
  `,
  machining: `
    <table class="specs-table">
      <thead>
        <tr>
          <th>Process & Equipment</th>
          <th>Machining Parameters</th>
          <th>Tolerance & Surface Finish</th>
          <th>Plant Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Swiss-type Lathes & CNC Turning</strong></td>
          <td>Outer Diameter (OD): 0.5 mm to 500 mm<br>Length: 0.8 mm to 1000 mm</td>
          <td>Diameter Tolerance: &plusmn;0.002 mm (2 microns)<br>Roundness: 0.0003 mm (0.3 microns)</td>
          <td>GPE Singapore & CGP Changzhou</td>
        </tr>
        <tr>
          <td><strong>Induction Quenching Heat Treatment</strong></td>
          <td>In-house high-frequency induction quenching</td>
          <td>Controlled case depth and core ductility (HRC 55–62)</td>
          <td>GPE Singapore</td>
        </tr>
        <tr>
          <td><strong>Centreless & Cylindrical Grinding</strong></td>
          <td>Step grinding, end-face & radius grinding</td>
          <td>Surface Finish: Ry 0.4 (Ra 0.025)<br>Run-out: 0.01 mm, Concentricity: 0.001 mm</td>
          <td>GPE Singapore & CGP China</td>
        </tr>
        <tr>
          <td><strong>Secondary Machining & Finishing</strong></td>
          <td>Barrel polishing, knurling, straightening</td>
          <td>Ultrasonic cleaning, degreasing, oven annealing</td>
          <td>GPE Singapore & CGP China</td>
        </tr>
      </tbody>
    </table>
  `,
  testing: `
    <table class="specs-table">
      <thead>
        <tr>
          <th>Inspection / Testing Domain</th>
          <th>Testing Technology</th>
          <th>Industry Standards</th>
          <th>Target Applications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Non-Destructive X-Ray</strong></td>
          <td>Dage Real-Time Micro X-Ray</td>
          <td>Sub-micron voiding detection</td>
          <td>BGA, QFN, CSP, semiconductor solder joints</td>
        </tr>
        <tr>
          <td><strong>Environmental & Reliability</strong></td>
          <td>Thermal shock, burn-in chambers, humidity</td>
          <td>Mil-Std, IEC, automotive cyclic aging</td>
          <td>Automotive electronics, ESS battery packs, medical</td>
        </tr>
        <tr>
          <td><strong>Water & Air Ingress Testing</strong></td>
          <td>IPX4 Spray Chamber & Air Leakage testers</td>
          <td>IPX4 / IPX5 waterproof standards</td>
          <td>Outdoor electronics, smart home, wearables</td>
        </tr>
        <tr>
          <td><strong>RF & Wireless Validation</strong></td>
          <td>Bluetooth & Wi-Fi RF analyzers</td>
          <td>BLE, Wi-Fi 6, Zigbee, LoRa RF testing</td>
          <td>Smart IoT devices, AFC fare systems, medical telemetry</td>
        </tr>
        <tr>
          <td><strong>Electrical Safety & EMC</strong></td>
          <td>Hipot, insulation resistance, Chroma testers</td>
          <td>UL, CE, CCC, IEC safety compliance</td>
          <td>Portable Energy Storage (PESS), power supplies</td>
        </tr>
      </tbody>
    </table>
  `
};

window.switchMatrixTab = function(tabKey) {
  const contentBox = document.getElementById('matrixContent');
  const buttons = document.querySelectorAll('.matrix-tab-btn');
  if (!contentBox) return;

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  contentBox.innerHTML = matrixData[tabKey] || matrixData['pcba'];
};

function initMatrixTabs() {
  const contentBox = document.getElementById('matrixContent');
  if (contentBox) {
    contentBox.innerHTML = matrixData['pcba'];
  }
}

/* ==========================================================================
   5. METRIC COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  function countUp() {
    counters.forEach(c => {
      const target = +c.getAttribute('data-target');
      let count = 0;
      const speed = target / 50;
      const update = () => {
        count += speed;
        if (count < target) {
          c.innerText = Math.ceil(count).toLocaleString();
          requestAnimationFrame(update);
        } else {
          c.innerText = target.toLocaleString();
        }
      };
      update();
    });
  }

  window.addEventListener('scroll', () => {
    const metricsSec = document.getElementById('metrics');
    if (!metricsSec || animated) return;
    const top = metricsSec.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      animated = true;
      countUp();
    }
  });
}

/* ==========================================================================
   6. CINEMA VIDEO STREAM MODAL
   ========================================================================== */
const cinemaStreams = {
  cad: {
    tag: 'PRODUCT DESIGN & TOOLING FABRICATION',
    title: 'Panasonic ODM Co-Development & 3D DFM Simulation',
    desc: 'Co-developing high-precision ODM products with Panasonic Global Product Development Centre. Comprehensive mechanical ID/CAD, Moldflow simulation, FMEA, and rapid functional prototyping for tooling ranging from 30T to over 650 tonnes.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-automated-assembly-line-in-a-modern-factory-42998-large.mp4'
  },
  smt: {
    tag: '23 HIGH-SPEED SMT LINES & PCBA',
    title: '720 Million Points/Month Automated Surface Mount Assembly',
    desc: 'High-speed Panasonic NPM mounters handling fine-pitch down to 0.25mm and 0315 chip components with real-time 3D Jutze SPI, Heller 12-Zone Reflow, and Dage X-Ray micro-voiding analysis.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-microchip-in-close-up-view-41221-large.mp4'
  },
  cnc: {
    tag: 'PRECISION SHAFTS & SUB-MICRON TURNING',
    title: 'Precision Motor Shafts OD 0.5–500mm & In-House Heat Treatment',
    desc: 'GPE Singapore and CGP China manufacture precision motor shafts with in-house induction quenching heat treatment (HRC 55-62), centerless grinding, and Ry 0.4 (Ra 0.025) mirror barrel polishing.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-metal-part-being-cut-by-a-laser-in-a-factory-42997-large.mp4'
  },
  cleanroom: {
    tag: 'CLASS 100K & CLASS 100 CLEANROOM FACILITIES',
    title: '100+ Injection Machines (18T to 650T) & Medical Moulding',
    desc: 'Sumitomo, Nissei, and Sodick electric injection machines in certified Class 100,000 (ISO Class 8) cleanroom environments dedicated to ISO 13485 medical devices.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-automated-assembly-line-in-a-modern-factory-42998-large.mp4'
  },
  battery: {
    tag: 'ENERGY STORAGE & BATTERY PACK INTEGRATION',
    title: 'Lithium-Ion Battery Packs & Portable Energy Storage Stations (PESS)',
    desc: 'Automated battery module welding, cell balancing, thermal BMS management, and complete electric 2-wheelers assembly with Giken Mobility & Edison Motors.',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-cube-loop-42867-large.mp4'
  }
};

/* Open/close any modal and keep the page behind it from scrolling. */
function setModalOpen(id, on) {
  const m = document.getElementById(id);
  if (m) m.classList.toggle('open', on);
  document.body.classList.toggle('modal-open', !!document.querySelector('.corp-modal-backdrop.open'));
  return m;
}

window.openCinemaStream = function(type) {
  const data = cinemaStreams[type] || cinemaStreams['cad'];
  const modal = document.getElementById('cinemaModal');
  const tagEl = document.getElementById('cinemaTag');
  const titleEl = document.getElementById('cinemaTitle');
  const descEl = document.getElementById('cinemaDesc');
  const videoEl = document.getElementById('modalCinemaVideo');

  if (modal && tagEl && titleEl && descEl && videoEl) {
    tagEl.innerText = data.tag;
    titleEl.innerText = data.title;
    descEl.innerText = data.desc;
    videoEl.src = data.video;
    setModalOpen('cinemaModal', true);
    videoEl.currentTime = 0;
    videoEl.play().catch(() => {});
  }
};

window.closeCinemaStream = function() {
  const modal = document.getElementById('cinemaModal');
  const videoEl = document.getElementById('modalCinemaVideo');
  if (modal) {
    setModalOpen('cinemaModal', false);
    if (videoEl) videoEl.pause();
  }
};

/* ==========================================================================
   7. CORPORATE DETAIL DOSSIER MODALS (OFFICIAL MANAGEMENT DOSSIER)
   ========================================================================= */
const detailContents = {
  // ABOUT GIKEN
  'about-giken': {
    tag: 'ABOUT US / ABOUT GIKEN',
    title: 'A Trusted Manufacturing Partner Built on Engineering Excellence',
    body: `
      <p style="font-size:0.95rem; line-height:1.7; margin-bottom:14px;">
        Since its establishment in Singapore in 1979, Giken has grown into an integrated manufacturing group providing precision engineering and advanced manufacturing solutions to customers worldwide. From its origins as a precision machining specialist, the Group has expanded its capabilities to include Electronics Manufacturing Services (EMS), PCB assembly, tooling, plastic injection moulding, battery pack assembly and complete product integration.
      </p>
      <p style="font-size:0.92rem; line-height:1.65; color:var(--text-secondary); margin-bottom:14px;">
        Today, with manufacturing operations in Singapore, China and Indonesia, Giken supports customers throughout the entire product lifecycle—from product development and New Product Introduction (NPI) to prototype builds, volume production, testing and supply chain management.
      </p>
      <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); border-radius:6px; padding:16px; margin-bottom:16px;">
        <strong style="color:var(--brand-primary); font-size:0.92rem; display:block; margin-bottom:6px;">Core Values:</strong>
        <p style="margin:0; font-size:0.88rem; color:var(--text-primary); font-weight:600;">
          Continuous Improvement &bull; Quality First &bull; Customer Satisfaction &bull; Continuous Innovation
        </p>
      </div>
    `
  },

  // COMPANY POLICIES
  'company-policies': {
    tag: 'ABOUT US / COMPANY POLICIES',
    title: 'Giken Quality Systems & Customer Commitment',
    body: `
      <p style="font-size:0.95rem; line-height:1.7; margin-bottom:14px;">
        At Giken, we strive to meet the diverse needs of our customers by delivering high-quality, cost-effective products and services, supported by timely delivery and responsive after-sales support.
      </p>
      <div style="background:var(--bg-page-subtle); border-left:3px solid var(--brand-primary); padding:12px 16px; border-radius:0 6px 6px 0;">
        <strong style="font-size:0.9rem; color:var(--text-primary);">We Are Committed To:</strong>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px; margin-bottom:0;">
          Providing top-notch-quality, cost-effective products and services, complemented by timely delivery and good after-sales services to satisfy the diverse needs of our customers.
        </p>
      </div>
    `
  },

  // GROUP MILESTONES
  'group-milestones': {
    tag: 'ABOUT US / GROUP MILESTONES',
    title: 'Group Chronology (1979 – 2026+)',
    body: `
      <div style="display:flex; flex-direction:column; gap:10px; font-size:0.86rem;">
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">1979</strong><span>Founded in Singapore manufacturing precision cassette mechanisms.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">1991</strong><span>Establishment of PT. Giken Precision Indonesia (GPI) in Batam.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">1992</strong><span>Relocated headquarters from Japan to Singapore.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">1993</strong><span>Listed on Singapore Stock Exchange (SESDAQ / SGX: GSS Energy Limited).</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">1994</strong><span>Establishment of Changzhou Giken Precision Co., Ltd (CGP) in China.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">2016</strong><span>Establishment of GPE Precision Engineering Pte. Ltd. in Singapore.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">2017</strong><span>Establishment of Changzhou Giken Technology Co., Ltd (CGT) in China.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">2018</strong><span>Establishment of PT Giken Technology Indonesia (GTI) in Batam.</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">2020</strong><span>Audited & compliant with Amfori BSCI; embarked on UN Global Compact (UNGC).</span></div>
        <div style="display:flex; gap:12px;"><strong style="color:var(--brand-primary); min-width:65px;">2023</strong><span>Entered into Energy Storage Business & Panasonic battery pack production.</span></div>
        <div style="display:flex; gap:12px; background:var(--brand-accent-bg); padding:8px 12px; border-radius:4px;"><strong style="color:var(--brand-primary); min-width:65px;">2025–26</strong><span style="font-weight:600;">78,000 m² Mega Industrial Campus Expansion across Buildings E1, A7, A10, and G3/G3A in Batam.</span></div>
      </div>
    `
  },

  // GROUP STRUCTURE
  'group-structure': {
    tag: 'ABOUT US / GROUP STRUCTURE',
    title: 'Group Operating Divisions & Regional Footprint',
    body: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; font-size:0.86rem;">
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:6px;">
          <strong style="color:var(--brand-primary); display:block; margin-bottom:2px;">Giken Sakata (S) Ltd (GSS)</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">Singapore HQ (4K+ sq. ft)</span>
          <p style="margin-top:4px; color:var(--text-secondary);">Corporate Governance, R&D, DFM, Customer Service, and Global Supply Chain Management.</p>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:6px;">
          <strong style="color:var(--brand-primary); display:block; margin-bottom:2px;">GPE Precision Engineering Pte. Ltd.</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">Singapore (14K sq. ft)</span>
          <p style="margin-top:4px; color:var(--text-secondary);">Precision motor shafts (OD 0.5–500mm), induction quenching heat treatment, and centerless grinding.</p>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:6px;">
          <strong style="color:var(--brand-primary); display:block; margin-bottom:2px;">PT Giken Precision & Tech Indonesia</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">Batam, Indonesia (393K sq. ft)</span>
          <p style="margin-top:4px; color:var(--text-secondary);">Plastic injection (18T–650T), Class 100K medical cleanroom, 23 SMT lines, box-build, and battery packs.</p>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:6px;">
          <strong style="color:var(--brand-primary); display:block; margin-bottom:2px;">Changzhou Giken Precision & Tech</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">Changzhou, China (151K sq. ft)</span>
          <p style="margin-top:4px; color:var(--text-secondary);">5-axis CNC milling, precision shafts, injection moulding, and East Asia turnkey export assembly.</p>
        </div>
      </div>
    `
  },

  // GOVERNANCE
  'governance': {
    tag: 'ABOUT US / GOVERNANCE',
    title: 'Board of Directors & Corporate Governance',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; color:var(--text-secondary);">
        Giken Sakata (S) Limited adheres to rigorous corporate governance practices as mandated by the Singapore Exchange (SGX: GSS Energy Limited).
      </p>
    `
  },

  // SERVICES
  'srv-design': {
    tag: 'SERVICES / DESIGN & DEVELOPMENT',
    title: 'Comprehensive Product Design & Rapid Prototyping',
    body: `
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Complete product design solutions & Industrial design (ID) 3D modeling</li>
        <li>Mechanical design, electronic design & software firmware</li>
        <li>Functional prototyping & validation</li>
        <li>Product testing & regulatory compliance support</li>
      </ul>
    `
  },
  'srv-tooling': {
    tag: 'SERVICES / TOOLING DESIGN & FABRICATION',
    title: 'Precision Tooling Fabrication (30T to over 650 Tonnes)',
    body: `
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Injection mould design and fabrication (30T to 650T+)</li>
        <li>DFM analysis & Mold Flow simulation</li>
        <li>Prototype and high-volume production tooling</li>
        <li>Jigs, fixtures and custom production tooling</li>
      </ul>
    `
  },
  'srv-injection': {
    tag: 'SERVICES / INJECTION MOULDING',
    title: 'Precision Plastic Injection Moulding (18T to 650 Tonnes)',
    body: `
      <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:10px;">
        <strong>Engineering Thermoplastics:</strong> ABS, PC, PA, POM, PVC, PSU, LCP, PPSU, PBT, PPS, PP + Gamma Resistance, and glass-filled Nylon.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>18 to 650 Tonnes (100+ injection units)</li>
        <li>Class 100K Cleanroom (ISO Class 8) medical moulding</li>
        <li>In-house CNC, EDM, wire cut, and laser welding</li>
      </ul>
    `
  },
  'srv-lpm': {
    tag: 'SERVICES / LOW PRESSURE MOULDING (LPIM)',
    title: 'Low Pressure Polyamide Over-Moulding & Encapsulation',
    body: `
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Custom aluminium mould design and fabrication</li>
        <li>PCB over-moulding & sensor encapsulation</li>
        <li>IC underfill application & Conformal coating</li>
      </ul>
    `
  },
  'srv-pcba': {
    tag: 'SERVICES / PCB ASSEMBLY',
    title: 'High-Speed SMT & Through-Hole Electronics Assembly',
    body: `
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>720M Chip points/mo + 10M Radial + 5M Axial (23 SMT lines)</li>
        <li>0315 chip components and above; fine pitch down to 0.25 mm</li>
        <li>12-Zone Nitrogen Reflow, Wave Solder, 3D SPI, 3D AOI & Dage Real-Time X-Ray</li>
        <li>Bluetooth & Wi-Fi RF testing; Class 100 Cleanroom facility</li>
      </ul>
    `
  },
  'srv-assembly': {
    tag: 'SERVICES / PRODUCT ASSEMBLY',
    title: 'Turnkey Box-Build & Complete Product Integration',
    body: `
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Mechanical & electromechanical assembly</li>
        <li>Box build & system integration</li>
        <li>Battery pack & Portable Energy Storage (PESS) assembly</li>
        <li>Testing, packaging, labelling and global distribution</li>
      </ul>
    `
  },
  'srv-machining': {
    tag: 'SERVICES / PRECISION MACHINING',
    title: 'Sub-Micron Turning & Precision Motor Shafts',
    body: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; font-size:0.82rem;">
        <div style="background:var(--bg-page-subtle); padding:8px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>OD:</strong> 0.5 mm to 500 mm
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Length:</strong> 0.8 mm to 1000 mm
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Tolerance:</strong> &plusmn;0.002 mm
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Surface Finish:</strong> Ry 0.4 (Ra 0.025)
        </div>
      </div>
    `
  },
  'srv-printing': {
    tag: 'SERVICES / PRINTING',
    title: 'Pad Printing & Silk Screen Services',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Pad printing for complex curved surfaces and high-durability silk screen printing for front panels and enclosures.
      </p>
    `
  },
  'srv-testing': {
    tag: 'SERVICES / TESTING',
    title: 'Product Validation & Metrology',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        EMC, wireless RF, cyclic temperature/humidity burn-in aging, vibration, drop impact, IPX4 water spray, and air leakage sealing testing.
      </p>
    `
  },
  'srv-cleanroom': {
    tag: 'SERVICES / CLEANROOM',
    title: 'Class 100 & Class 100K Cleanrooms',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Class 100 cleanroom dedicated to high-precision PCBA/optical components, and Class 100K (ISO Class 8) cleanroom for ISO 13485 medical moulding.
      </p>
    `
  },

  // 7 INDUSTRIES
  'ind-automotive': {
    tag: 'MARKETS / AUTOMOTIVE',
    title: 'Safety-Critical Automotive Components & Assemblies',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Airbag capsules (Takata/Joyson 1M/mo), headlamps, camshafts, and EV/ICE motorcycle assembly under IATF 16949.
      </p>
    `
  },
  'ind-medical': {
    tag: 'MARKETS / MEDICAL',
    title: 'ISO 13485 Medical Devices & Cleanroom Manufacturing',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Olympus surgical light guide cables, JMS medical blood bag accessories, and Class 100K cleanroom medical moulding.
      </p>
    `
  },
  'ind-consumer': {
    tag: 'MARKETS / CONSUMER ELECTRONICS',
    title: 'Cosmetic Plastics, SMT & Smart IoT Devices',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Personal care grooming, smart home wearables, and wireless IoT devices with LPIM encapsulation.
      </p>
    `
  },
  'ind-home': {
    tag: 'MARKETS / HOME APPLIANCES',
    title: 'Intelligent Connected Home Appliance Solutions',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Ice makers, smart control panels, and durable appliance assemblies.
      </p>
    `
  },
  'ind-industrial': {
    tag: 'MARKETS / INDUSTRIAL',
    title: 'Continuous-Duty Industrial Controls & Sub-Micron Shafts',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Precision DC motor shafts, IoT tilt sensors, and automated fare collection (AFC) systems.
      </p>
    `
  },
  'ind-gaming': {
    tag: 'MARKETS / GAMING & TOYS',
    title: 'Game Consoles, Entertainment & Safety-Compliant Toys',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        SEGA, Nintendo, Microsoft console integration, optical drive mechanisms, and cash recognition units.
      </p>
    `
  },
  'ind-energy': {
    tag: 'MARKETS / ENERGY STORAGE SOLUTIONS',
    title: 'Lithium Battery Packs & Portable Energy Storage (PESS)',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Portable Energy Storage Stations (PESS), automated laser cell welding, and battery management system (BMS) integration.
      </p>
    `
  },

  // FACILITIES
  'fac-sg-hq': {
    tag: 'FACILITIES / SINGAPORE (HQ)',
    title: 'Giken Sakata (Singapore) Ltd – 4K+ sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        4012 Ang Mo Kio Ave 10, #05-01 Techplace 1, Singapore 569628.<br>
        Governance, R&D Product Development, DFM, Customer Service, Testing, and Global Supply Chain.
      </p>
    `
  },
  'fac-sg-gpe': {
    tag: 'FACILITIES / SINGAPORE (GPE)',
    title: 'Giken Precision Engineering (S) Pte. Ltd. – 14K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Ang Mo Kio Industrial Park, Singapore. Precision shafts, induction quenching heat treatment, centreless grinding. Certified ISO 9001, ISO 14001, IATF 16949.
      </p>
    `
  },
  'fac-batam': {
    tag: 'FACILITIES / BATAM, INDONESIA',
    title: 'PT Giken Precision & PT Giken Technology Indonesia – 393K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Batamindo Industrial Park, Mukakuning & Citra Buana / Horizon Industrial Parks, Batam.<br>
        Plastic injection (18T–650T), 100K medical cleanroom, 23 SMT lines, Class 100 cleanroom PCBA, box-build, battery packs, PESS. Certified ISO 9001, ISO 13485, ISO 14001, IATF 16949.
      </p>
    `
  },
  'fac-china': {
    tag: 'FACILITIES / CHANGZHOU, CHINA',
    title: 'Changzhou Giken Precision & Tech Co., Ltd – 151K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Changzhou City, Jiangsu Province, China. 5-axis CNC milling, precision motor shafts, injection moulding, and product assembly. Certified ISO 9001, ISO 14001, IATF 16949.
      </p>
    `
  },

  // EXPANSION BUILDINGS
  'expansion-e1': {
    tag: 'BATAM EXPANSION / BUILDING E1',
    title: 'Building E1: 10,940 m² Solar Panel Production Line',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Level 1 (6,480 m²) + Level 2 (4,460 m²). Fully automated solar module tabber stringing, lamination, and flash simulator testing.
      </p>
    `
  },
  'expansion-a7': {
    tag: 'BATAM EXPANSION / BUILDING A7',
    title: 'Building A7: 7,736 m² Portable Power Station Production',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Level 1 (3,868 m²) + Level 2 (3,868 m²). Lithium battery pack laser welding, BMS integration, inverter testing, and packaging.
      </p>
    `
  },
  'expansion-a10': {
    tag: 'BATAM EXPANSION / BUILDING A10',
    title: 'Building A10: 4,338 m² Material Warehouse & Logistics',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        Central bonded material warehouse and smart fulfillment center for Batam campus with humidity-controlled dry storage.
      </p>
    `
  },
  'expansion-g3': {
    tag: 'BATAM EXPANSION / BUILDINGS G3 & G3A',
    title: 'Buildings G3 & G3A: 5,832 m² Next-Gen Production Lines',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        5,832 m² of flexible, high-spec clean manufacturing floor area reserved for strategic tier-1 client launches.
      </p>
    `
  },

  // QUALITY
  'quality-cert': {
    tag: 'QUALITY & ESG DOSSIER',
    title: 'Certified Quality Management & ESG Framework',
    body: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; font-size:0.84rem;">
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong>ISO 9001 : 2015</strong><br><span style="color:var(--text-muted);">Quality Management</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong>ISO 13485 : 2016</strong><br><span style="color:var(--text-muted);">Medical Devices</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong>ISO 14001 : 2015</strong><br><span style="color:var(--text-muted);">Environmental</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong>IATF 16949 : 2016</strong><br><span style="color:var(--text-muted);">Automotive</span>
        </div>
      </div>
      <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6;">
        Audited and compliant with Amfori BSCI; active participant in the United Nations Global Compact (UNGC). Strict adherence to RoHS and REACH.
      </p>
    `
  },

  // CAREERS
  'careers-info': {
    tag: 'CAREERS AT GIKEN',
    title: 'People-Oriented Human Resources & Talent Development',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        We create a consultation-and-sharing based team environment with established career progression frameworks and incentive packages.
      </p>
      <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:4px; font-size:0.84rem; color:var(--text-muted);">
        <em>Note: There is currently no job vacancy or job opening available. For future inquiries: hr@giken.com.sg.</em>
      </div>
    `
  },

  'privacy': {
    tag: 'LEGAL',
    title: 'Privacy Policy',
    body: `<p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">Giken Sakata (S) Ltd respects the privacy of all visitors and clients under the Singapore Personal Data Protection Act (PDPA).</p>`
  },
  'disclaimer': {
    tag: 'LEGAL',
    title: 'Corporate Disclaimer',
    body: `<p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">All technical specifications reflect the official engineering profile of Giken Sakata (S) Ltd (SGX: GSS Energy Limited).</p>`
  }
};

window.openDetailModal = function(key) {
  const modal = document.getElementById('detailModal');
  const tagEl = document.getElementById('detailModalTag');
  const titleEl = document.getElementById('detailModalTitle');
  const bodyEl = document.getElementById('detailModalBody');

  const content = detailContents[key] || detailContents['about-giken'];

  if (modal && tagEl && titleEl && bodyEl) {
    tagEl.innerText = content.tag;
    titleEl.innerText = content.title;
    bodyEl.innerHTML = content.body;
    setModalOpen('detailModal', true);
  }
};

window.closeDetailModal = function() {
  setModalOpen('detailModal', false);
};

/* ==========================================================================
   8. RFQ MODAL & SUBMISSION
   ========================================================================= */
window.openRfqModal = function() {
  setModalOpen('rfqModal', true);
};

window.closeRfqModal = function() {
  setModalOpen('rfqModal', false);
};

window.handleRfqSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('rfqName').value;
  const company = document.getElementById('rfqCompany').value;
  const service = document.getElementById('rfqService').value;

  closeRfqModal();
  showToast(`Thank you, ${name}. Your inquiry for "${service}" from "${company}" has been forwarded to Giken Engineering Directorate (mcenquiry@giken.com.sg).`);
  document.getElementById('pegaRfqForm').reset();
};

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Close modals when clicking backdrop
document.addEventListener('click', (e) => {
  const cinemaModal = document.getElementById('cinemaModal');
  if (e.target === cinemaModal) closeCinemaStream();

  const detailModal = document.getElementById('detailModal');
  if (e.target === detailModal) closeDetailModal();

  const rfqModal = document.getElementById('rfqModal');
  if (e.target === rfqModal) closeRfqModal();
});

/* ==========================================================================
   9. MULTI-LANGUAGE TRANSLATION (EN / CN / ID / JP)
   ========================================================================= */
const translations = {
  EN: {
    nav_about: 'About Us',
    nav_capabilities: 'Services & Capabilities',
    nav_markets: 'Industries',
    nav_facilities: 'Facilities',
    nav_quality: 'Quality & ESG',
    nav_careers: 'Careers',
    hero_headline_sub: 'INNOVATIVE MINDSET,',
    hero_headline_main: 'STRIVING FOR EXCELLENCE.',
    hero_subtitle: 'A Trusted Manufacturing Partner Built on Engineering Excellence since 1979. Providing integrated precision engineering, Electronics Manufacturing Services (EMS), tooling, plastic injection moulding, battery pack assembly, and turnkey product integration across Singapore, Indonesia, and China.',
    hero_btn_capabilities: 'Our Capabilities',
    hero_btn_rfq: 'Request a Quote'
  },
  CN: {
    nav_about: '关于我们',
    nav_capabilities: '制造服务与能力',
    nav_markets: '应用市场',
    nav_facilities: '全球制造基地',
    nav_quality: '质量与ESG',
    nav_careers: '人才发展',
    hero_headline_sub: '创新思维，',
    hero_headline_main: '追求卓越制造。',
    hero_subtitle: '自1979年在新加坡成立以来，技研坂田为全球客户提供精密工程、电子制造服务（EMS）、模具开发、注塑成型、电池包组装及整机系统集成的一站式制造解决方案。',
    hero_btn_capabilities: '探索制造能力',
    hero_btn_rfq: '获取工程报价'
  },
  ID: {
    nav_about: 'Tentang Kami',
    nav_capabilities: 'Layanan & Kapabilitas',
    nav_markets: 'Industri',
    nav_facilities: 'Fasilitas Global',
    nav_quality: 'Kualitas & ESG',
    nav_careers: 'Karir',
    hero_headline_sub: 'POLA PIKIR INOVATIF,',
    hero_headline_main: 'MENGEJAR KEUNGGULAN.',
    hero_subtitle: 'Mitra Manufaktur Tepercaya Berlandaskan Keunggulan Rekayasa sejak 1979. Menghadirkan solusi manufaktur terintegrasi yang menggabungkan rekayasa presisi, Electronics Manufacturing Services (EMS), perkakas cetakan, injeksi plastik, perakitan baterai, dan integrasi produk lengkap di Singapura, Indonesia, dan Tiongkok.',
    hero_btn_capabilities: 'Kapabilitas Kami',
    hero_btn_rfq: 'Minta Penawaran'
  },
  JP: {
    nav_about: '企業情報',
    nav_capabilities: '製造サービスと能力',
    nav_markets: '主要市場',
    nav_facilities: '生産拠点',
    nav_quality: '品質とESG',
    nav_careers: '採用情報',
    hero_headline_sub: '革新的なマインドセット、',
    hero_headline_main: '卓越性の追求。',
    hero_subtitle: '1979年のシンガポール設立以来、精密エンジニアリング、EMS、金型製作、プラスチック射出成形、バッテリー組立、および完成品組立を統合したワンストップ製造ソリューションをシンガポール、インドネシア、中国から提供しています。',
    hero_btn_capabilities: '製造能力を見る',
    hero_btn_rfq: 'お見積り依頼'
  }
};

window.switchLanguage = function(lang) {
  const data = translations[lang] || translations['EN'];
  const labelEl = document.getElementById('navLangLabel');
  if (labelEl) labelEl.innerText = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.innerHTML = data[key];
    }
  });
};

function initLanguageEngine() {
  const defaultLang = 'EN';
  switchLanguage(defaultLang);
}
