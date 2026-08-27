/**
 * GIKEN SAKATA (S) LIMITED - MODERN CORPORATE CONTROLLER
 * Benchmark: Pegatron Corp (https://www.pegatroncorp.com/)
 * Official Management Dossier (Aug 2026) & Y2026-8.2 Integration
 * Light Mode Default with Dark Mode Toggle & Multi-Language Support
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initThemeEngine();
  initFullPageScroll();
  initMatrixTabs();
  initCounters();
  initLanguageEngine();
  initMobileMenu();
});

/* ==========================================================================
   0. BOOT SEQUENCE
   Runs the plate for a short beat, then clears it. It never outstays its
   welcome: the hard timeout dismisses it even if an asset hangs.
   ========================================================================== */
function initPreloader() {
  const plate = document.getElementById('preloader');
  if (!plate) return;

  const fill = document.getElementById('preloaderBarFill');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MIN_MS = reduced ? 400 : 2400;   // let the wordmark settle and the sweep pass
  const MAX_MS = 4200;                   // never hold the page longer than this
  const start = Date.now();
  let cleared = false;

  const progress = setInterval(() => {
    if (!fill) return;
    const pct = Math.min(96, ((Date.now() - start) / MIN_MS) * 100);
    fill.style.width = pct + '%';
  }, 60);

  function clear() {
    if (cleared) return;
    cleared = true;
    clearInterval(progress);
    if (fill) fill.style.width = '100%';
    plate.classList.add('done');
    document.body.classList.remove('preloading');
    setTimeout(() => plate.remove(), 600);
  }

  function clearWhenReady() {
    setTimeout(clear, Math.max(0, MIN_MS - (Date.now() - start)));
  }

  if (document.readyState === 'complete') {
    clearWhenReady();
  } else {
    window.addEventListener('load', clearWhenReady, { once: true });
  }
  setTimeout(clear, MAX_MS);
}

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
  if (iconEl) {
    iconEl.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
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
    // Header stays transparent over the hero, then takes on its background.
    const hero = document.getElementById('hero');
    const threshold = hero ? hero.offsetHeight - 80 : 40;
    if (header) header.classList.toggle('scrolled', y > threshold);
    if (backToTopBtn) backToTopBtn.style.display = y > 400 ? 'flex' : 'none';
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.height = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
  }, { passive: true });

  setActive(0);
  window.dispatchEvent(new Event('scroll'));   // set header state on load / deep link
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
    title: 'Company Policies',
    body: `
      <img class="dossier-img" src="assets/site/policies.jpg" alt="Company policies">
      <p class="dossier-lead">At Giken, we strive to meet the diverse needs of our customers by delivering high-quality, cost-effective products and services, supported by timely delivery and responsive after-sales support. Through continuous improvement, operational excellence, and a customer-focused approach, we aim to create lasting value and exceed expectations.</p>
      <p class="dossier-lead">We foster strong, long-term relationships with our customers, suppliers, and business associates, built on trust, collaboration, and mutual respect. By working together and leveraging our collective strengths, we create sustainable value, enhance competitiveness, and drive shared growth in an evolving global marketplace.</p>
      <h4 class="dossier-h4">We Are Committed To</h4>
      <ul class="dossier-list"><li>Providing top-notch-quality, cost-effective products and services, complemented by timely delivery and good after-sales services to satisfy the diverse needs of our customers.</li></ul>
      <img class="dossier-img" src="assets/site/core-values.jpg" alt="Core values">
    `
  },

  // GROUP MILESTONES
  'group-milestones': {
    tag: 'ABOUT US / GROUP MILESTONES',
    title: 'Group Milestones &mdash; 1979 to Today',
    body: `
      <img class="dossier-img" src="assets/site/journey-banner.jpg" alt="Giken journey 1979 to the future">
      <p class="dossier-lead">From a precision engineering company established in Singapore to a regional manufacturing solutions provider with operations across Singapore, Indonesia and China, Giken's growth journey reflects its commitment to quality, innovation and long-term customer partnerships. Building on more than four decades of manufacturing excellence, the Group continues to strengthen its capabilities through operational excellence, technological advancement, regional integration and sustainable growth.</p>
      <img class="dossier-img" src="assets/site/milestones-1.jpg" alt="Milestones 1979 to 1994">
      <img class="dossier-img" src="assets/site/milestones-2.jpg" alt="Milestones 2000 to 2024">
      <img class="dossier-img" src="assets/site/milestones-3.jpg" alt="Milestones 2025 to today">
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
    tag: 'SERVICES / DESIGN',
    title: 'Product Design &amp; Development',
    body: `
      <img class="dossier-img" src="assets/site/proc-design.jpg" alt="Product Design &amp; Development">
      <p class="dossier-lead">In today's competitive marketplace, bringing innovative products to market quickly and efficiently is essential for success. At Giken, we provide comprehensive product design and development services that integrate industrial design, engineering expertise and manufacturing knowledge to optimise product performance, enhance manufacturability and accelerate time-to-market.</p><p class="dossier-lead">Our experienced multidisciplinary engineering team works closely with customers throughout every stage of the product development process&mdash;from concept creation and engineering design to functional prototyping, validation and production readiness.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Complete product design solutions</li><li>Industrial design &amp; 3D modeling</li><li>Mechanical design</li><li>Electronic design</li><li>Software design</li><li>Functional prototyping</li><li>Product development &amp; testing</li><li>Regulatory compliance application</li></ul>
    `
  },
  'srv-tooling': {
    tag: 'SERVICES / TOOLING',
    title: 'Tooling Design &amp; Fabrication',
    body: `
      <img class="dossier-img" src="assets/site/proc-tooling.jpg" alt="Tooling Design &amp; Fabrication">
      <p class="dossier-lead">Successful products begin with precision tooling. At Giken, our experienced team of tooling engineers, designers, and mould makers delivers high-quality injection moulds ranging from 30 to over 650 tonnes, supporting both prototype development and high-volume production.</p><p class="dossier-lead">Every tooling project is supported by comprehensive Design for Manufacturing (DFM) analysis and Mould Flow Simulation to validate the design before fabrication. This engineering-driven approach helps identify potential manufacturing issues early, optimize product performance, reduce development lead time, and ensure stable, reliable production during mass manufacturing.</p><p class="dossier-lead">With a comprehensive range of grinding and machining equipment and extensive in-house manufacturing capabilities, Giken maintains stringent quality control, protects design integrity, and ensures reliable delivery schedules.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Injection mould design and fabrication</li><li>DFM analysis</li><li>Prototype and production tooling</li><li>Jigs, fixtures and custom production tooling</li><li>Tool maintenance, modification and engineering support</li></ul>
    `
  },
  'srv-injection': {
    tag: 'SERVICES / INJECTION MOULDING',
    title: 'Precision Plastic Injection Moulding',
    body: `
      <img class="dossier-img" src="assets/site/proc-injection.jpg" alt="Precision Plastic Injection Moulding">
      <p class="dossier-lead">Since 1992, precision plastic injection moulding has been one of Giken's core manufacturing capabilities. With more than three decades of industry experience, we have established a strong reputation for delivering high-quality, precision-moulded plastic components to customers across a wide range of industries. Our comprehensive fleet of injection moulding machines, ranging from 18 to 650 tonnes, enables us to support projects from small, high-precision components to large and complex plastic parts.</p><p class="dossier-lead">Giken has extensive experience processing a broad range of engineering-grade thermoplastics, including ABS, PC, PA, POM, PVC, PSU, LCP, PPSU, PBT, PPS, PP + Gamma Resistance, and glass-filled high-temperature Nylon.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Precision plastic injection moulding (18 &ndash; 650 tonnes)</li><li>NPI and production support</li><li>In-house mould maintenance, repair and modification</li><li>Cleanroom injection moulding</li><li>Equipment including CNC, EDM, wire cut, copper drilling and laser welding</li><li>Manufacturing for medical, automotive, consumer electronics, gaming, industrial and other products</li></ul>
    `
  },
  'srv-lpm': {
    tag: 'SERVICES / LOW PRESSURE MOULDING',
    title: 'Low Pressure Injection Moulding (LPIM)',
    body: `
      <img class="dossier-img" src="assets/site/proc-lpim.jpg" alt="Low Pressure Injection Moulding (LPIM)">
      <p class="dossier-lead">Low Pressure Injection Moulding (LPIM) is an advanced over-moulding technology designed to protect sensitive electronic components and assemblies from harsh operating environments. Using specialised polyamide materials, the process encapsulates printed circuit board assemblies (PCBAs), sensors, connectors and cable assemblies within a durable protective housing while applying significantly lower injection pressure than conventional plastic moulding.</p><p class="dossier-lead">This minimises mechanical stress on delicate components and provides excellent protection against moisture, dust, chemicals, vibration and mechanical impact.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Custom aluminium mould design and fabrication</li><li>PCB over-moulding solutions</li><li>Encapsulation of sensors, connectors, cable assemblies and other critical electronic components</li><li>Low-pressure polyamide injection moulding</li><li>IC underfill application</li><li>Conformal coating services</li><li>Prototype development and engineering validation</li><li>Scalable manufacturing</li><li>Integrated assembly, testing and quality inspection</li></ul>
    `
  },
  'srv-pcba': {
    tag: 'SERVICES / PCB ASSEMBLY',
    title: 'PCB Assembly (PCBA) &amp; Electronics Manufacturing',
    body: `
      <img class="dossier-img" src="assets/site/proc-pcba.jpg" alt="PCB Assembly (PCBA) &amp; Electronics Manufacturing">
      <p class="dossier-lead">Since 1994, Giken has been providing high-quality, flexible-volume PCB Assembly (PCBA) services to customers across various industries. With extensive electronics manufacturing experience, we deliver comprehensive end-to-end solutions covering component sourcing, PCB assembly, testing, inspection, and production support.</p><p class="dossier-lead">Quality is at the core of our manufacturing philosophy. Giken implements robust quality management systems, systematic workforce training, and continuous process improvement initiatives to ensure consistent product reliability and strive towards zero-defect manufacturing.</p>
      
      <div class="dossier-spec">
        <div><strong>Mount Capacity</strong><span>Chip 720M pts/month &bull; Radial 10M pts/month &bull; Axial 5M pts/month</span></div>
        <div><strong>SMD Components</strong><span>0315 chip and above; SOP, PLCC, QFP, BGA, CSP, SMT/THT connectors</span></div>
        <div><strong>PCB Types</strong><span>Single-sided, double-sided, multi-layer up to 8 layers</span></div>
        <div><strong>Fine Pitch</strong><span>Down to 0.25 mm</span></div>
        <div><strong>Reflow Soldering</strong><span>Lead-free (RoHS) &amp; conventional, 12-Zone Nitrogen Reflow Oven</span></div>
        <div><strong>Wave Soldering</strong><span>Automatic spray fluxing and wave soldering for THT assemblies</span></div>
      </div>
      <h4 class="dossier-h4">Inspection, Test &amp; Engineering Support</h4>
      <ul class="dossier-list"><li>Solder Paste Inspection (SPI), Automated Optical Inspection (AOI), X-Ray Inspection</li><li>In-Circuit Test (ICT) and Functional Test (FCT)</li><li>Bluetooth &amp; Wi-Fi RF testing (IoT integrated testing)</li><li>A Class 100 cleanroom facility built for unique, high-precision products</li><li>Reliability testing: burn-in, thermal shock, water resistance (IPX4), air leakage</li><li>Customer software development using LabView, Python, Visual Basic, C++, Chroma and Machine Vision</li><li>DFM, NPI, prototype build, process validation, low- and high-volume production</li></ul>
    `
  },
  'srv-assembly': {
    tag: 'SERVICES / PRODUCT ASSEMBLY',
    title: 'Box Build &amp; Complete Product Integration',
    body: `
      <img class="dossier-img" src="assets/site/proc-assembly.jpg" alt="Box Build &amp; Complete Product Integration">
      <p class="dossier-lead">Giken provides comprehensive box build and product assembly services that transform individual components into fully assembled, tested and market-ready products. Leveraging our integrated design, engineering and manufacturing capabilities, we support every stage of the assembly process&mdash;from incoming material verification and quality control to final assembly, testing, packaging, labelling and global distribution.</p><p class="dossier-lead">By combining precision engineering, Electronics Manufacturing Services (EMS), plastic injection moulding and system integration under one roof, we help customers simplify their supply chains, improve manufacturing efficiency and accelerate time-to-market.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Mechanical and electromechanical assembly</li><li>Box build and complete product integration</li><li>Battery pack assembly and integration</li><li>Portable energy storage solution (ESS) assembly</li><li>Prototype, low to high volume production</li><li>Integrated assembly, testing and quality inspection</li></ul>
    `
  },
  'srv-machining': {
    tag: 'SERVICES / PRECISION MACHINING',
    title: 'Sub-Micron Turning &amp; Precision Motor Shafts',
    body: `
      <img class="dossier-img" src="assets/site/proc-machining.jpg" alt="Sub-Micron Turning &amp; Precision Motor Shafts">
      <p class="dossier-lead">Precision machining is the foundation of high-performance manufacturing, where every micron matters. At Giken, we specialise in producing complex precision-machined components with exceptionally tight tolerances, superior surface finishes and outstanding dimensional accuracy for applications where quality, consistency and reliability are essential.</p><p class="dossier-lead">With more than 40 years of precision engineering experience, Giken has established a strong reputation as a trusted manufacturing partner for customers across medical technology, automotive, semiconductor equipment, industrial automation, home appliances, aerospace, oil &amp; gas, pumps, motors and consumer products.</p>
      
      <div class="dossier-spec">
        <div><strong>Material Outer Diameter</strong><span>0.5 mm to 500 mm</span></div>
        <div><strong>Length</strong><span>0.8 mm to 1000 mm</span></div>
        <div><strong>Diameter Tolerance</strong><span>&plusmn;0.002 mm (2 microns)</span></div>
        <div><strong>Roundness</strong><span>0.0003 mm (0.3 microns)</span></div>
        <div><strong>Surface Finish</strong><span>Ry 0.4 (Ra 0.025)</span></div>
        <div><strong>Run-out / Concentricity</strong><span>0.01 mm / 0.001 mm</span></div>
      </div>
      <h4 class="dossier-h4">Primary &amp; Secondary Processes</h4>
      <ul class="dossier-list"><li>Swiss-type automatic lathes (Escomatic)</li><li>Ultra-precision CNC turning</li><li>Multi-axis CNC machining</li><li>High-speed cut-off machining</li><li>Precision milling and secondary machining</li><li>Centreless, cylindrical, step, end-face and radius grinding</li><li>Barrel polishing, knurling, drilling and tapping</li><li>Straightening, heat treatment, ultrasonic cleaning and degreasing, oven annealing and tempering</li></ul>
    `
  },
  'srv-printing': {
    tag: 'SERVICES / TEMPO PRINTING',
    title: 'Pad Printing &amp; Silk Screen Printing',
    body: `
      <img class="dossier-img" src="assets/site/proc-printing.jpg" alt="Pad Printing &amp; Silk Screen Printing">
      <p class="dossier-lead">At Giken, we offer a range of value-added printing services that enhance both the appearance and functionality of finished products. Whether for branding, product identification, traceability or decorative purposes, our in-house printing capabilities provide high-quality, durable markings that complement your product while streamlining the manufacturing process.</p><p class="dossier-lead"><strong>Pad printing</strong> is a versatile and cost-effective method for transferring high-resolution images, logos, symbols and text onto flat, curved or irregular surfaces. <strong>Silk screen printing</strong> suits larger production volumes and applications requiring durable, long-lasting graphics with strong adhesion on plastic, metal and coated surfaces.</p>
      
      <h4 class="dossier-h4">Typical Applications</h4>
      <ul class="dossier-list"><li>Corporate logos and branding</li><li>Product identification</li><li>Control panel markings</li><li>Icons and symbols</li><li>Serial numbers and part identifications</li><li>Decorative graphics, operating instructions and safety labels</li><li>Front panels and equipment enclosures</li></ul>
    `
  },
  'srv-testing': {
    tag: 'SERVICES / PRODUCT TESTING',
    title: 'Testing, Validation &amp; Metrology',
    body: `
      <img class="dossier-img" src="assets/site/proc-metrology.jpg" alt="Testing, Validation &amp; Metrology">
      <p class="dossier-lead">At Giken, quality extends beyond manufacturing. As a one-stop manufacturing partner, we provide comprehensive testing and validation services to verify product performance, reliability and compliance with customer and industry requirements. Our testing capabilities enable early identification of potential issues, reduce development risks and support a smooth transition from prototype to volume production.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Electromagnetic compatibility (EMC) testing</li><li>Wireless testing</li><li>Reliability testing</li><li>Temperature &amp; humidity testing</li><li>Vibration testing</li><li>Drop &amp; impact testing</li></ul>
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
    title: 'Automotive Systems',
    body: `
      <img class="dossier-img" src="assets/site/ind-automotive.jpg" alt="Automotive Systems">
      <p class="dossier-lead">Automotive components must perform consistently under demanding operating conditions while meeting stringent safety, quality and regulatory requirements. Giken combines precision engineering, advanced manufacturing technologies and disciplined process control to produce high-quality components that meet the exacting standards of global automotive manufacturers.</p><p class="dossier-lead">As the industry transitions towards electrification, connectivity and intelligent mobility, our expertise in precision engineering, electronics integration and battery-pack assembly supports next-generation automotive applications.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Precision tool design and manufacturing</li><li>Plastic injection moulding and secondary finishing processes</li><li>Precision shaft machining and high-precision metal components</li><li>Safety-critical components including airbag capsules, headlamp assemblies and other precision parts</li><li>Assembly of electric motorcycles and internal combustion engine (ICE) motorcycles</li><li>Prototype, New Product Introduction (NPI) and high-volume production</li><li>Stringent quality assurance, testing, inspection and process control</li><li>ISO 9001, ISO 14001 and IATF 16949 &ndash; certified sites</li></ul>
    `
  },
  'ind-medical': {
    tag: 'MARKETS / HEALTHCARE &amp; MEDICAL',
    title: 'Healthcare &amp; Medical Equipment',
    body: `
      <img class="dossier-img" src="assets/site/ind-medical.jpg" alt="Healthcare &amp; Medical Equipment">
      <p class="dossier-lead">The medical and healthcare industry is one of the world's most advanced and highly regulated sectors. Medical devices and healthcare equipment demand the highest standards of precision, quality, reliability and regulatory compliance, where even the smallest component plays a critical role in patient safety and product performance.</p><p class="dossier-lead">Giken supports these requirements through tightly controlled manufacturing processes, cleanroom production, precision tooling and integrated assembly capabilities.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Product engineering and Design for Manufacturing (DFM) support</li><li>Precision tool and mould design and fabrication</li><li>Plastic injection moulding for medical components and disposable devices</li><li>Cleanroom manufacturing and assembly (Class 100,000 / ISO Class 8)</li><li>Precision machining of medical components</li><li>ISO 9001, ISO 14001 and ISO 13485 &ndash; certified sites</li></ul>
    `
  },
  'ind-consumer': {
    tag: 'MARKETS / CONSUMER ELECTRONICS',
    title: 'Consumer Electronics',
    body: `
      <img class="dossier-img" src="assets/site/ind-consumer.jpg" alt="Consumer Electronics">
      <p class="dossier-lead">The consumer electronics industry is one of the world's most dynamic and fast-evolving sectors, driven by continuous innovation, changing consumer lifestyles and rapid technological advancement. From smart home devices and personal care products to connected IoT devices and portable electronics, manufacturers must deliver innovative design, exceptional quality, reliability and competitive cost within increasingly shorter development cycles.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Product design and engineering support</li><li>Design and manufacture of cosmetic plastic parts, mechanical parts and electronic assemblies</li><li>Plastic injection moulding and value-added secondary processes</li><li>Low Pressure Injection Moulding (LPIM) protecting assemblies against moisture, dust, vibration and shock</li><li>PCB Assembly (PCBA) using advanced SMT and through-hole technologies</li><li>Box build assembly and complete product integration including cable and wire harness installation, battery integration, firmware loading, functional testing and final system verification</li><li>Comprehensive testing, inspection and quality assurance</li><li>Prototype development, New Product Introduction (NPI), scalable manufacturing</li><li>Packaging, labelling and logistics support</li><li>ISO 9001, ISO 14001 &ndash; certified sites</li></ul>
    `
  },
  'ind-home': {
    tag: 'MARKETS / HOME APPLIANCES',
    title: 'Home Appliances',
    body: `
      <img class="dossier-img" src="assets/site/ind-home.jpg" alt="Home Appliances">
      <p class="dossier-lead">The home appliance industry is evolving rapidly as consumers seek smarter, more connected and energy-efficient products. Modern appliances combine mechanical systems, electronics and intelligent connectivity into products that must operate reliably over years of daily use.</p><p class="dossier-lead">Giken integrates precision tooling, plastic injection moulding, electronics manufacturing and complete product assembly to simplify production, improve product quality and optimise manufacturing efficiency.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Product design and engineering support</li><li>High-precision moulds and production tooling for plastic and metal components</li><li>Plastic injection moulding and value-added secondary processes</li><li>Low Pressure Injection Moulding (LPIM)</li><li>PCB Assembly (PCBA) using advanced SMT and through-hole technologies</li><li>Box build assembly and complete product integration</li><li>Comprehensive testing, inspection and quality assurance</li><li>Flexible production and supply chain support</li><li>ISO 9001 and ISO 14001 &ndash; certified sites</li></ul>
    `
  },
  'ind-industrial': {
    tag: 'MARKETS / INDUSTRIAL',
    title: 'Industrial Equipment &amp; Automation',
    body: `
      <img class="dossier-img" src="assets/site/ind-industrial.jpg" alt="Industrial Equipment &amp; Automation">
      <p class="dossier-lead">The industrial equipment sector requires robust, high-performance products that operate reliably in demanding environments and continuous-duty applications. From industrial automation and control systems to machinery, instrumentation and electromechanical equipment, manufacturers rely on precision-engineered components and assemblies that deliver exceptional durability, dimensional accuracy and long-term operational performance.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Product design and engineering support</li><li>Precision plastic components, mechanical parts and electronic assemblies</li><li>Plastic tool and mould design and fabrication</li><li>Plastic injection moulding and value-added secondary processes</li><li>PCB Assembly (PCBA) using advanced SMT and through-hole technologies</li><li>Box build assembly and complete system integration</li><li>Comprehensive testing, inspection and quality assurance</li><li>Flexible production and supply chain support</li></ul>
    `
  },
  'ind-gaming': {
    tag: 'MARKETS / GAMING &amp; TOYS',
    title: 'Gaming Consoles &amp; Toys',
    body: `
      <img class="dossier-img" src="assets/site/ind-gaming.jpg" alt="Gaming Consoles &amp; Toys">
      <p class="dossier-lead">The gaming and toys industry demands products that combine innovative design, outstanding product quality, and uncompromising safety. From traditional toys and educational products to electronic gaming devices and smart connected toys, manufacturers require precision-engineered components and reliable manufacturing processes that ensure durability, consistent performance, and compliance with stringent international safety and regulatory standards.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Plastic tool and mould design and fabrication</li><li>Plastic injection moulding and value-added secondary processes</li><li>PCB Assembly (PCBA)</li><li>Box build assembly and complete system integration</li><li>Prototype development, NPI, flexible production and supply chain support</li><li>Comprehensive testing, inspection and quality assurance</li><li>Manufacturing using phthalate-compliant and food-grade materials where required</li><li>Strict material traceability and compliance with international product safety requirements</li><li>Products such as game consoles, bricks and cash recognition systems for gaming equipment</li><li>ISO 9001 and ISO 14001 &ndash; certified sites</li></ul>
    `
  },
  'ind-energy': {
    tag: 'MARKETS / ENERGY STORAGE',
    title: 'Battery Packs &amp; Energy Storage Solutions',
    body: `
      <img class="dossier-img" src="assets/site/ind-energy.jpg" alt="Battery Packs &amp; Energy Storage Solutions">
      <p class="dossier-lead">The rapid growth of electrification and renewable energy has accelerated demand for reliable, high-performance battery systems across electric mobility, portable power, and energy storage applications.</p><p class="dossier-lead">At Giken, we provide integrated manufacturing solutions for lithium battery packs and Portable Energy Storage Stations (PESS), supporting customers from product development and NPI through to high-volume production &mdash; combining precision engineering, plastic injection moulding, EMS, BMS integration, precision metal fabrication, and complete battery pack assembly.</p>
      
      <h4 class="dossier-h4">Giken Capabilities</h4>
      <ul class="dossier-list"><li>Battery pack design support and engineering for custom applications</li><li>Portable Energy Storage Station (PESS) manufacturing and system assembly</li><li>Battery module and battery pack assembly for lithium-ion technologies</li><li>Battery Management System (BMS) integration and PCBA</li><li>Precision plastic injection moulding for battery enclosures and structural components</li><li>Cell matching, battery balancing, auto-welding and battery pack integration</li><li>Functional testing, validation, electrical safety testing and quality assurance</li><li>Global component sourcing and supply chain management</li><li>Engineering support for product optimisation and product lifecycle enhancement</li><li>ISO 9001, ISO 14001, IATF 16949 &ndash; certified sites</li></ul>
    `
  },

  // FACILITIES
  'fac-sg-hq': {
    tag: 'FACILITIES / SINGAPORE (HQ)',
    title: 'Giken Sakata (Singapore) Ltd &mdash; 4K+ sq. ft',
    body: `
      <div class="dossier-gallery"><figure><img src="assets/site/site-gss.jpg" alt="Giken Sakata (S) Limited, Techplace 1 Singapore" loading="lazy"><figcaption>Giken Sakata (S) Limited, Techplace 1 Singapore</figcaption></figure><figure><img src="assets/site/office.jpg" alt="Group headquarters office" loading="lazy"><figcaption>Group headquarters office</figcaption></figure></div>
      <p class="dossier-address"><i class="fa-solid fa-location-dot"></i> 4012 Ang Mo Kio Ave 10, #05-01 Techplace 1, Singapore 569628 &middot; (65) 6354 6661</p>
      <p class="dossier-lead">The Group headquarters and the customer-facing engineering front end: consultancy, product design and development, Design for Manufacturing, product testing and validation, and global logistics and supply chain management.</p>
      <h4 class="dossier-h4">On-site Capabilities</h4>
      <ul class="dossier-list"><li>Consultancy and customer service</li><li>Product design and development</li><li>Design for Manufacturing (DFM)</li><li>Product testing and validation</li><li>Global logistics and supply chain management</li><li>Listed on SGX as GSS Energy Limited</li></ul>
      <h4 class="dossier-h4">Location</h4>
      <iframe class="dossier-map" src="https://maps.google.com/maps?q=4012+Ang+Mo+Kio+Ave+10+Techplace+1+Singapore+569628&hl=en&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Giken Sakata (S) Ltd, Singapore"></iframe>
      <a class="dossier-map-link" href="https://www.google.com/maps/search/?api=1&query=4012+Ang+Mo+Kio+Ave+10+Techplace+1+Singapore+569628" target="_blank" rel="noopener">Open in Google Maps &rarr;</a>
    `
  },
  'fac-sg-gpe': {
    tag: 'FACILITIES / SINGAPORE (GPE)',
    title: 'Giken Precision Engineering (S) Pte. Ltd. &mdash; 14K sq. ft',
    body: `
      <div class="dossier-gallery"><figure><img src="assets/site/site-gpe.jpg" alt="Giken Precision Engineering (S) Pte Ltd, Singapore" loading="lazy"><figcaption>Giken Precision Engineering (S) Pte Ltd, Singapore</figcaption></figure><figure><img src="assets/site/proc-metrology.jpg" alt="Precision inspection and metrology" loading="lazy"><figcaption>Precision inspection and metrology</figcaption></figure></div>
      <p class="dossier-address"><i class="fa-solid fa-location-dot"></i> Ang Mo Kio Industrial Park, Singapore</p>
      <p class="dossier-lead">The Group's precision shaft and turned-parts plant, running Swiss-type automatic lathes with in-house heat treatment and grinding, from prototype and New Product Introduction through to volume production.</p>
      <h4 class="dossier-h4">On-site Capabilities</h4>
      <ul class="dossier-list"><li>Precision shafts and customised turned parts</li><li>Heat treatment</li><li>Centreless and step grinding</li><li>Secondary machining processes</li><li>Precision inspection and quality control</li><li>Prototype and New Product Introduction (NPI)</li><li>Certified to ISO 9001, ISO 14001 and IATF 16949</li></ul>
      <h4 class="dossier-h4">Location</h4>
      <iframe class="dossier-map" src="https://maps.google.com/maps?q=Giken+Precision+Engineering+Ang+Mo+Kio+Singapore&hl=en&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Giken Precision Engineering, Singapore"></iframe>
      <a class="dossier-map-link" href="https://www.google.com/maps/search/?api=1&query=Giken+Precision+Engineering+Ang+Mo+Kio+Singapore" target="_blank" rel="noopener">Open in Google Maps &rarr;</a>
    `
  },
  'fac-batam': {
    tag: 'FACILITIES / BATAM, INDONESIA',
    title: 'PT Giken Precision Indonesia &amp; PT Giken Technology Indonesia &mdash; 393K sq. ft',
    body: `
      <div class="dossier-gallery"><figure><img src="assets/site/site-gpi.jpg" alt="PT Giken Precision Indonesia, Batam" loading="lazy"><figcaption>PT Giken Precision Indonesia, Batam</figcaption></figure><figure><img src="assets/site/site-gti.jpg" alt="PT Giken Technology Indonesia, Batam" loading="lazy"><figcaption>PT Giken Technology Indonesia, Batam</figcaption></figure><figure><img src="assets/site/proc-line.jpg" alt="Assembly and test lines, Batam" loading="lazy"><figcaption>Assembly and test lines, Batam</figcaption></figure></div>
      <p class="dossier-address"><i class="fa-solid fa-location-dot"></i> Citra Buana Industrial Park &amp; Horizon Industrial Park, Batam, Indonesia</p>
      <p class="dossier-lead">The Group's largest manufacturing campus and the centre of its high-volume work: precision and medical moulding, PCB assembly in a Class 100 cleanroom, box build, battery packs and Portable Energy Storage Stations, and electric motorcycle assembly.</p>
      <h4 class="dossier-h4">On-site Capabilities</h4>
      <ul class="dossier-list"><li>Precision plastic injection moulding</li><li>Medical moulding (100K cleanroom)</li><li>PCB assembly (PCBA) with a Class 100 cleanroom facility built for unique, high-precision products</li><li>Box-build and system assembly</li><li>Battery pack and Portable Energy Storage Station (PESS) assembly</li><li>Electric motorcycle assembly</li><li>Prototype and New Product Introduction (NPI)</li><li>High-volume manufacturing, export manufacturing and supply chain support</li><li>Certified to ISO 9001, ISO 13485, ISO 14001 and IATF 16949</li></ul>
      <h4 class="dossier-h4">Location</h4>
      <iframe class="dossier-map" src="https://maps.google.com/maps?q=Citra+Buana+Industrial+Park+Batam+Indonesia&hl=en&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of PT Giken Precision Indonesia, Batam"></iframe>
      <a class="dossier-map-link" href="https://www.google.com/maps/search/?api=1&query=Citra+Buana+Industrial+Park+Batam+Indonesia" target="_blank" rel="noopener">Open in Google Maps &rarr;</a>
    `
  },
  'fac-china': {
    tag: 'FACILITIES / CHANGZHOU, CHINA',
    title: 'Changzhou Giken Precision &amp; Changzhou Giken Technology &mdash; 151K sq. ft',
    body: `
      <div class="dossier-gallery"><figure><img src="assets/site/site-cgp.jpg" alt="Changzhou Giken Precision Co., Ltd, Jiangsu" loading="lazy"><figcaption>Changzhou Giken Precision Co., Ltd, Jiangsu</figcaption></figure></div>
      <p class="dossier-address"><i class="fa-solid fa-location-dot"></i> Changzhou, Jiangsu Province, China</p>
      <p class="dossier-lead">The Group's China operation, serving customers across Asia-Pacific with 5-axis milling, precision shafts and machined components, injection moulding and product assembly, backed by export manufacturing and supply chain support.</p>
      <h4 class="dossier-h4">On-site Capabilities</h4>
      <ul class="dossier-list"><li>Precision 5-axis CNC milling</li><li>Precision shafts and machining components</li><li>Plastic injection moulding</li><li>Product assembly</li><li>Export manufacturing and supply chain support</li><li>Precision inspection and quality control</li><li>Certified to ISO 9001, ISO 14001 and IATF 16949</li></ul>
      <h4 class="dossier-h4">Location</h4>
      <iframe class="dossier-map" src="https://maps.google.com/maps?q=Changzhou+Giken+Precision+Co+Ltd+Changzhou+Jiangsu+China&hl=en&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Changzhou Giken Precision, China"></iframe>
      <a class="dossier-map-link" href="https://www.google.com/maps/search/?api=1&query=Changzhou+Giken+Precision+Co+Ltd+Changzhou+Jiangsu+China" target="_blank" rel="noopener">Open in Google Maps &rarr;</a>
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
    tag: 'QUALITY',
    title: 'Quality Management &amp; Certifications',
    body: `
      <p class="dossier-lead">Giken's Quality Management System provides a structured framework for planning, monitoring and continuously improving our manufacturing processes. Through standardised procedures, rigorous quality control, comprehensive inspection and validation, and ongoing performance measurement, we ensure consistent product quality, regulatory compliance and operational excellence.</p>
      <h4 class="dossier-h4">Quality Certifications</h4>
      <ul class="dossier-list">
        <li><strong>ISO 9001</strong> &mdash; Quality Management System</li>
        <li><strong>ISO 13485</strong> &mdash; Medical Device Quality Management</li>
        <li><strong>ISO 14001</strong> &mdash; Environmental Management System</li>
        <li><strong>IATF 16949</strong> &mdash; Automotive Quality Management</li>
      </ul>
      <div class="cert-gallery"><img src="assets/site/cert-01.jpg" alt="Giken certificate 1" loading="lazy"><img src="assets/site/cert-02.jpg" alt="Giken certificate 2" loading="lazy"><img src="assets/site/cert-03.jpg" alt="Giken certificate 3" loading="lazy"><img src="assets/site/cert-04.jpg" alt="Giken certificate 4" loading="lazy"><img src="assets/site/cert-05.jpg" alt="Giken certificate 5" loading="lazy"><img src="assets/site/cert-06.jpg" alt="Giken certificate 6" loading="lazy"><img src="assets/site/cert-07.jpg" alt="Giken certificate 7" loading="lazy"><img src="assets/site/cert-08.jpg" alt="Giken certificate 8" loading="lazy"><img src="assets/site/cert-09.jpg" alt="Giken certificate 9" loading="lazy"><img src="assets/site/cert-10.jpg" alt="Giken certificate 10" loading="lazy"><img src="assets/site/cert-11.jpg" alt="Giken certificate 11" loading="lazy"><img src="assets/site/cert-12.jpg" alt="Giken certificate 12" loading="lazy"><img src="assets/site/cert-13.jpg" alt="Giken certificate 13" loading="lazy"><img src="assets/site/cert-14.jpg" alt="Giken certificate 14" loading="lazy"><img src="assets/site/cert-15.jpg" alt="Giken certificate 15" loading="lazy"><img src="assets/site/cert-16.jpg" alt="Giken certificate 16" loading="lazy"><img src="assets/site/cert-17.jpg" alt="Giken certificate 17" loading="lazy"><img src="assets/site/cert-18.jpg" alt="Giken certificate 18" loading="lazy"><img src="assets/site/cert-19.jpg" alt="Giken certificate 19" loading="lazy"></div>
    `
  },

  // CAREERS
  'careers-info': {
    tag: 'CAREERS AT GIKEN',
    title: 'Careers',
    body: `
      <img class="dossier-img" src="assets/site/careers-team.jpg" alt="Giken team">
      <p class="dossier-lead">We are an integrated engineering group with over 40 years of history. Highly people oriented, we take care of every aspect of human resources management.</p>
      <p class="dossier-lead">We create a consultation-and-sharing based team environment to assist people in learning from each other. We organize competition activities that evoke creativity and initiatives, and spur our people to make an impact in improving production efficiency, cost structure, and overall performance. We have established a career progression framework that people can visualize their growth path in the years ahead. With the well-designed incentive and welfare package, as well as the periodical team building activities, we engineered a multidimensional career development system that brings forth the personal fulfilment of our employees.</p>
      <p class="dossier-lead"><strong>The company cares about you, and your career growth.</strong></p>
      <p class="dossier-lead">There is currently no job vacancy or job opening available.</p>
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
    tagEl.innerHTML = content.tag;
    titleEl.innerHTML = content.title;
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
