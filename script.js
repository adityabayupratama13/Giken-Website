/**
 * GIKEN SAKATA (S) LIMITED - MODERN CORPORATE CONTROLLER
 * Benchmark: Pegatron Corp (https://www.pegatroncorp.com/)
 * Official Management Dossier (Aug 2026) & Y2026-8.2 Integration
 * Light Mode Default with Dark Mode Toggle & Multi-Language Support
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initNavigation();
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
   2. NAVIGATION & SMOOTH SCROLL
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('corpHeader');
  const backToTopBtn = document.getElementById('btnBackToTop');

  window.smoothScrollTo = function(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    }
  });
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
   3. MACHINERY & TECHNICAL PARAMETERS MATRIX
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
   4. METRIC COUNTERS
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
   5. CINEMA VIDEO STREAM MODAL
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
    modal.classList.add('open');
    videoEl.currentTime = 0;
    videoEl.play().catch(() => {});
  }
};

window.closeCinemaStream = function() {
  const modal = document.getElementById('cinemaModal');
  const videoEl = document.getElementById('modalCinemaVideo');
  if (modal) {
    modal.classList.remove('open');
    if (videoEl) videoEl.pause();
  }
};

/* ==========================================================================
   6. CORPORATE DETAIL DOSSIER MODALS (FROM OFFICIAL DOC & PPTX)
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
      <p style="font-size:0.92rem; line-height:1.65; color:var(--text-secondary); margin-bottom:18px;">
        Giken serves customers across a broad range of industries, including automotive, medical and healthcare, consumer electronics, home appliances, industrial equipment, environmental technologies and energy storage. More than a contract manufacturer, Giken works as an extension of its customers' engineering, procurement and operations teams, delivering reliable, cost-effective manufacturing solutions that improve manufacturability, strengthen supply chain resilience and accelerate time-to-market.
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
        At Giken, we strive to meet the diverse needs of our customers by delivering high-quality, cost-effective products and services, supported by timely delivery and responsive after-sales support. Through continuous improvement, operational excellence, and a customer-focused approach, we aim to create lasting value and exceed expectations.
      </p>
      <p style="font-size:0.92rem; line-height:1.65; color:var(--text-secondary); margin-bottom:16px;">
        We foster strong, long-term relationships with our customers, suppliers, and business associates, built on trust, collaboration, and mutual respect. By working together and leveraging our collective strengths, we create sustainable value, enhance competitiveness, and drive shared growth in an evolving global marketplace.
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
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:16px;">
        From a precision engineering company established in Singapore to a regional manufacturing solutions provider with operations across Singapore, Indonesia and China, Giken's growth journey reflects its commitment to quality, innovation and long-term customer partnerships.
      </p>
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
      <p style="font-size:0.92rem; line-height:1.65; color:var(--text-secondary); margin-bottom:14px;">
        Giken Sakata (S) Limited adheres to rigorous corporate governance practices as mandated by the Singapore Exchange (SGX: GSS Energy Limited).
      </p>
      <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:14px; border-radius:6px;">
        <strong style="font-size:0.9rem; color:var(--text-primary); display:block; margin-bottom:4px;">Executive Leadership & Engineering Directorate</strong>
        <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.5; margin:0;">
          Over 45+ years of combined manufacturing management expertise directing 250+ Quality/R&D engineers, automated lines, and customer programs with Fortune 500 OEMs.
        </p>
      </div>
    `
  },

  // SERVICES: DESIGN
  'srv-design': {
    tag: 'SERVICES / DESIGN & DEVELOPMENT',
    title: 'Comprehensive Product Design & Rapid Prototyping',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        At Giken, we provide comprehensive product design and development services that integrate industrial design, engineering expertise and manufacturing knowledge to optimise product performance, enhance manufacturability and accelerate time-to-market.
      </p>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Giken Capabilities:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Complete product design solutions</li>
        <li>Industrial design & 3D modeling</li>
        <li>Mechanical design & electronic design</li>
        <li>Software design & firmware development</li>
        <li>Functional prototyping & rapid validation</li>
        <li>Product development & reliability testing</li>
        <li>Regulatory compliance application support</li>
      </ul>
    `
  },

  // SERVICES: TOOLING
  'srv-tooling': {
    tag: 'SERVICES / TOOLING DESIGN & FABRICATION',
    title: 'Precision Tooling Fabrication (30T to over 650 Tonnes)',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Successful products begin with precision tooling. At Giken, our experienced team of tooling engineers, designers, and mould makers delivers high-quality injection moulds ranging from 30 to over 650 tonnes, supporting both prototype development and high-volume production.
      </p>
      <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
        Every tooling project is supported by comprehensive <strong>Design for Manufacturing (DFM)</strong> analysis and <strong>Mould Flow Simulation</strong> to validate the design before fabrication.
      </p>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Giken Capabilities:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Injection mould design and fabrication (30T to 650T+)</li>
        <li>DFM analysis & Mold Flow simulation</li>
        <li>Prototype and high-volume production tooling</li>
        <li>Jigs, fixtures and custom production tooling</li>
        <li>In-house tool maintenance, modification and engineering support</li>
      </ul>
    `
  },

  // SERVICES: INJECTION
  'srv-injection': {
    tag: 'SERVICES / INJECTION MOULDING',
    title: 'Precision Plastic Injection Moulding (18T to 650 Tonnes)',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Since 1992, precision plastic injection moulding has been one of Giken's core manufacturing capabilities. Our comprehensive fleet of injection moulding machines, ranging from 18 to 650 tonnes, enables us to support projects from small, high-precision components to large and complex plastic parts.
      </p>
      <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
        <strong>Engineering Thermoplastics:</strong> ABS, PC, PA, POM, PVC, PSU, LCP, PPSU, PBT, PPS, PP + Gamma Resistance, and glass-filled high-temperature Nylon.
      </p>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Giken Capabilities:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Precision plastic injection moulding (18 – 650 tonnes)</li>
        <li>NPI and scalable mass production support</li>
        <li>In-house mould maintenance, repair and modification</li>
        <li>Cleanroom injection moulding (Class 100,000 / ISO Class 8)</li>
        <li>Equipment including CNC, EDM, wire cut, copper drilling and laser welding</li>
      </ul>
    `
  },

  // SERVICES: LPM
  'srv-lpm': {
    tag: 'SERVICES / LOW PRESSURE MOULDING (LPIM)',
    title: 'Low Pressure Polyamide Over-Moulding & Encapsulation',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Low Pressure Injection Moulding (LPIM) is an advanced over-moulding technology designed to protect sensitive electronic components and assemblies from harsh operating environments. Using specialised polyamide materials, the process encapsulates printed circuit board assemblies (PCBAs), sensors, connectors and cable assemblies within a durable protective housing.
      </p>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Giken Capabilities:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Custom aluminium mould design and fabrication</li>
        <li>PCB over-moulding solutions</li>
        <li>Encapsulation of sensors, connectors, and critical cable assemblies</li>
        <li>Low-pressure polyamide injection moulding</li>
        <li>IC underfill application & Conformal coating services</li>
        <li>Integrated assembly, testing and quality inspection</li>
      </ul>
    `
  },

  // SERVICES: PCBA
  'srv-pcba': {
    tag: 'SERVICES / PCB ASSEMBLY',
    title: 'High-Speed SMT & Through-Hole Electronics Assembly',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Since 1994, Giken has been providing high-quality, flexible-volume PCB Assembly (PCBA) services across automotive, medical, IoT, and industrial sectors.
      </p>
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-bottom:14px; text-align:center;">
        <div style="background:var(--bg-page-subtle); padding:10px; border-radius:4px; border:1px solid var(--border-color);">
          <strong style="color:var(--brand-primary); font-size:1.1rem; display:block;">720M</strong>
          <span style="font-size:0.7rem; color:var(--text-muted);">Chip Pts / Mo</span>
        </div>
        <div style="background:var(--bg-page-subtle); padding:10px; border-radius:4px; border:1px solid var(--border-color);">
          <strong style="color:var(--brand-primary); font-size:1.1rem; display:block;">10M</strong>
          <span style="font-size:0.7rem; color:var(--text-muted);">Radial Pts / Mo</span>
        </div>
        <div style="background:var(--bg-page-subtle); padding:10px; border-radius:4px; border:1px solid var(--border-color);">
          <strong style="color:var(--brand-primary); font-size:1.1rem; display:block;">5M</strong>
          <span style="font-size:0.7rem; color:var(--text-muted);">Axial Pts / Mo</span>
        </div>
      </div>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Key Technical Highlights:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Components: 0315 chips and above, SOP, PLCC, QFP, BGA, CSP</li>
        <li>Fine pitch assembly down to 0.25 mm; up to 8-layer multi-layer PCBs</li>
        <li>12-Zone Nitrogen Reflow Oven & Wave Soldering</li>
        <li>Solder Paste Inspection (SPI), 3D AOI, Real-time X-Ray, ICT, and FCT</li>
        <li>Bluetooth & Wi-Fi RF IoT integrated testing</li>
        <li>Class 100 Cleanroom facility for high-precision optical & sensor assemblies</li>
      </ul>
    `
  },

  // SERVICES: ASSEMBLY
  'srv-assembly': {
    tag: 'SERVICES / PRODUCT ASSEMBLY',
    title: 'Turnkey Box-Build & Complete Product Integration',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Giken provides comprehensive box build and product assembly services that transform individual components into fully assembled, tested and market-ready products.
      </p>
      <strong style="font-size:0.88rem; color:var(--brand-primary); display:block; margin-bottom:6px;">Giken Capabilities:</strong>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Mechanical and electromechanical assembly</li>
        <li>Box build and complete product integration</li>
        <li>Battery pack assembly and integration</li>
        <li>Portable Energy Storage Solution (ESS/PESS) assembly</li>
        <li>Prototype, low-to-high volume scalable production</li>
        <li>Integrated assembly, functional testing, packaging, labelling and global distribution</li>
      </ul>
    `
  },

  // SERVICES: MACHINING
  'srv-machining': {
    tag: 'SERVICES / PRECISION MACHINING',
    title: 'Sub-Micron Turning & Precision Motor Shafts',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        With more than 40 years of precision engineering experience, Giken specialises in producing complex precision-machined components with exceptionally tight tolerances, superior surface finishes and outstanding dimensional accuracy.
      </p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px; font-size:0.82rem;">
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Outer Diameter:</strong> 0.5 mm to 500 mm
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Length:</strong> 0.8 mm to 1000 mm
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Diameter Tolerance:</strong> &plusmn;0.002 mm (2 microns)
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Roundness:</strong> 0.0003 mm (0.3 microns)
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Surface Finish:</strong> Ry 0.4 (Ra 0.025)
        </div>
        <div style="background:var(--bg-page-subtle); padding:8px 12px; border-radius:4px; border:1px solid var(--border-color);">
          <strong>Concentricity:</strong> 0.001 mm
        </div>
      </div>
      <p style="font-size:0.84rem; color:var(--text-muted);">
        <strong>In-House Secondary Processes:</strong> Swiss-type Escomatic lathes, centreless grinding, cylindrical grinding, induction quenching heat treatment, barrel polishing, and ultrasonic degreasing.
      </p>
    `
  },

  // SERVICES: PRINTING
  'srv-printing': {
    tag: 'SERVICES / TEMPO & PAD PRINTING',
    title: 'Value-Added Pad Printing & Silk Screen Services',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        At Giken, we offer a range of value-added printing services that enhance both the appearance and functionality of finished products for branding, traceability, and decorative graphics.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li><strong>Pad Printing:</strong> High-resolution transfer onto flat, curved or irregular surfaces; ideal for corporate logos, product ID, control panels, and serial numbers.</li>
        <li><strong>Silk Screen Printing:</strong> High-adhesion, durable graphics for front panels, enclosures, and operating instructions.</li>
      </ul>
    `
  },

  // SERVICES: TESTING
  'srv-testing': {
    tag: 'SERVICES / PRODUCT TESTING',
    title: 'Comprehensive Product Validation & Metrology',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        As a one-stop manufacturing partner, we provide comprehensive testing and validation services to verify product performance, reliability and compliance with customer and industry standards.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Electromagnetic compatibility (EMC) & Wireless RF testing</li>
        <li>Reliability testing & Burn-In cyclic aging</li>
        <li>Temperature & humidity chamber testing</li>
        <li>Vibration testing, drop & impact testing</li>
        <li>Water resistance IPX4 spray chamber & Air leakage sealing testing</li>
      </ul>
    `
  },

  // SERVICES: CLEANROOM
  'srv-cleanroom': {
    tag: 'SERVICES / CLEANROOM FACILITIES',
    title: 'Class 100 & Class 100K Cleanroom Environments',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Giken operates certified Cleanroom manufacturing facilities in Batam, Indonesia engineered for high-precision electronics, optics, and medical devices:
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li><strong>Class 100 Cleanroom:</strong> Dedicated for unique, ultra-high precision PCBA, micro-sensor integration, and optical pick-up units.</li>
        <li><strong>Class 100,000 (ISO Class 8) Cleanroom:</strong> 32 electric injection moulding machines dedicated to ISO 13485 medical disposables, surgical cables, and clean packaging.</li>
      </ul>
    `
  },

  // 7 INDUSTRIES / MARKETS
  'ind-automotive': {
    tag: 'MARKETS / AUTOMOTIVE',
    title: 'Safety-Critical Automotive Components & Assemblies',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Giken combines precision engineering, advanced manufacturing technologies and disciplined process control under <strong>IATF 16949</strong> certification.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Airbag capsule initiators (1M units/month for Takata/Joyson)</li>
        <li>Headlamp assemblies & Pioneer car audio systems (5M sets)</li>
        <li>Precision camshafts and high-precision turned parts</li>
        <li>Assembly of electric motorcycles and internal combustion engine (ICE) motorcycles</li>
        <li>Full process traceability and ISO 9001, ISO 14001, IATF 16949 certified sites</li>
      </ul>
    `
  },
  'ind-medical': {
    tag: 'MARKETS / HEALTHCARE & MEDICAL',
    title: 'ISO 13485 Medical Devices & Cleanroom Manufacturing',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Medical devices demand the highest standards of precision, quality, and regulatory compliance under <strong>ISO 13485</strong>.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Class 100K (ISO Class 8) cleanroom injection moulding</li>
        <li>Olympus surgical light guide cables & endoscope components</li>
        <li>JMS medical blood bag accessories & infusion disposables</li>
        <li>Cardiac monitoring battery chargers & sterile sub-assemblies</li>
        <li>Design for Manufacturing (DFM) and validation risk mitigation</li>
      </ul>
    `
  },
  'ind-consumer': {
    tag: 'MARKETS / CONSUMER ELECTRONICS',
    title: 'Cosmetic Plastics, SMT & Smart IoT Devices',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Delivering consistent quality, cosmetic excellence, and efficient production for global brands like Philips and other leaders:
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Cosmetic plastic parts, mechanical parts and SMT PCBA</li>
        <li>Low Pressure Injection Moulding (LPIM) for moisture/dust protection</li>
        <li>Personal care grooming products & smart home appliances</li>
        <li>Smart wearables and connected wireless IoT devices</li>
      </ul>
    `
  },
  'ind-home': {
    tag: 'MARKETS / HOME APPLIANCES',
    title: 'Intelligent Connected Home Appliance Solutions',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Integrating precision tooling, plastic injection, SMT electronics, and complete box build to simplify production and reduce supply chain complexity.
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Ice maker assemblies and refrigeration mechanisms</li>
        <li>Smart connected appliance control panels & wire harnesses</li>
        <li>High-durability plastic enclosures and full-system testing</li>
      </ul>
    `
  },
  'ind-industrial': {
    tag: 'MARKETS / INDUSTRIAL & AUTOMATION',
    title: 'Continuous-Duty Industrial Controls & Sub-Micron Shafts',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Precision components and electromechanical assemblies engineered for continuous-duty environments:
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Precision DC motor shafts and stepper motor shafts (OD 0.5–500mm)</li>
        <li>Wireless IoT tree-tilt monitoring sensors & environmental gateways</li>
        <li>Automated fare collection (AFC) validation readers</li>
        <li>Semiconductor and industrial automation tooling</li>
      </ul>
    `
  },
  'ind-gaming': {
    tag: 'MARKETS / GAMING & TOYS',
    title: 'Game Consoles, Entertainment & Safety-Compliant Toys',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Precision-engineered components and complete console assembly compliant with international safety standards:
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>SEGA, Nintendo, and Microsoft Xbox console assembly & sub-modules</li>
        <li>Optical pickup drive mechanisms and cash recognition gaming systems</li>
        <li>Phthalate-compliant and food-grade material processing</li>
      </ul>
    `
  },
  'ind-energy': {
    tag: 'MARKETS / ENERGY STORAGE SOLUTIONS',
    title: 'Lithium Battery Packs & Portable Energy Storage (PESS)',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        Integrated manufacturing for lithium battery packs and Portable Energy Storage Stations (PESS) across electric mobility and energy storage:
      </p>
      <ul style="font-size:0.84rem; line-height:1.65; padding-left:18px; list-style:disc; color:var(--text-secondary);">
        <li>Battery pack design support & custom enclosure moulding</li>
        <li>Cell matching, automated laser welding, and battery pack balancing</li>
        <li>Battery Management System (BMS) integration & high-voltage safety testing</li>
        <li>Collaborations with tier-1 battery cell suppliers and e2W manufacturers</li>
      </ul>
    `
  },

  // 4 GLOBAL FACILITIES
  'fac-sg-hq': {
    tag: 'FACILITIES / SINGAPORE (HQ)',
    title: 'Giken Sakata (Singapore) Ltd – 4K+ sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Location:</strong> 4012 Ang Mo Kio Ave 10, #05-01 Techplace 1, Singapore 569628.<br>
        <strong>Facility Size:</strong> 4,000+ sq. ft.<br>
        <strong>Core Capabilities:</strong> Group Corporate Governance, Engineering Consultancy, Product Design & Development, Design for Manufacturing (DFM), Customer Service, Product Testing & Validation, and Global Supply Chain Management.
      </p>
    `
  },
  'fac-sg-gpe': {
    tag: 'FACILITIES / SINGAPORE (GPE)',
    title: 'Giken Precision Engineering (S) Pte. Ltd. – 14K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Location:</strong> Ang Mo Kio Industrial Park, Singapore.<br>
        <strong>Facility Size:</strong> 14,000 sq. ft.<br>
        <strong>Core Capabilities:</strong> Swiss-type Escomatic automatic lathes, ultra-precision CNC turning, in-house induction quenching heat treatment (HRC 55-62), centreless and step grinding, secondary machining, precision metrology, and NPI prototype builds.<br>
        <strong>Certifications:</strong> ISO 9001, ISO 14001, IATF 16949.
      </p>
    `
  },
  'fac-batam': {
    tag: 'FACILITIES / BATAM, INDONESIA',
    title: 'PT Giken Precision & PT Giken Technology Indonesia – 393K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Location:</strong> Batamindo Industrial Park, Mukakuning & Citra Buana / Horizon Industrial Parks, Batam.<br>
        <strong>Facility Size:</strong> 393,000 sq. ft.<br>
        <strong>Core Capabilities:</strong> Precision plastic injection moulding (18T–650T), Class 100K medical cleanroom (32 electric machines), 23 SMT lines (720M pts/mo), Class 100 cleanroom PCBA, box-build system assembly, battery packs, PESS, and electric motorcycle assembly.<br>
        <strong>Certifications:</strong> ISO 9001, ISO 13485, ISO 14001, IATF 16949.
      </p>
    `
  },
  'fac-china': {
    tag: 'FACILITIES / CHANGZHOU, CHINA',
    title: 'Changzhou Giken Precision & Tech Co., Ltd – 151K sq. ft',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Location:</strong> Changzhou City, Jiangsu Province, China.<br>
        <strong>Facility Size:</strong> 151,000 sq. ft.<br>
        <strong>Core Capabilities:</strong> Precision 5-axis CNC milling, precision motor shafts and machining components, plastic injection moulding, product assembly, precision inspection, and export logistics for Asia-Pacific supply chains.<br>
        <strong>Certifications:</strong> ISO 9001, ISO 14001, IATF 16949.
      </p>
    `
  },

  // EXPANSION BUILDINGS
  'expansion-e1': {
    tag: 'BATAM EXPANSION / BUILDING E1',
    title: 'Building E1: 10,940 m² Solar Panel Production Line',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Building E1 (10,940 m² Total Built-up):</strong><br>
        &bull; <strong>Level 1 (6,480 m²):</strong> Solar PV cell tabber stringing, EVA lay-up, automatic vacuum lamination, and framing lines.<br>
        &bull; <strong>Level 2 (4,460 m²):</strong> Solar simulator flash testing, electroluminescence (EL) defect detection, and packaging.
      </p>
    `
  },
  'expansion-a7': {
    tag: 'BATAM EXPANSION / BUILDING A7',
    title: 'Building A7: 7,736 m² Portable Power Station Production',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Building A7 (7,736 m² Total Built-up):</strong><br>
        &bull; <strong>Level 1 (3,868 m²):</strong> Automated lithium battery module laser welding, BMS integration, and insulation testing.<br>
        &bull; <strong>Level 2 (3,868 m²):</strong> Inverter assembly, full-load cyclic discharge burn-in aging, and boxed packaging.
      </p>
    `
  },
  'expansion-a10': {
    tag: 'BATAM EXPANSION / BUILDING A10',
    title: 'Building A10: 4,338 m² Material Warehouse & Logistics',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Building A10 (4,338 m² Level 1):</strong> Central bonded material warehouse and smart fulfillment center for Batam campus, featuring humidity-controlled dry cabinets (MSL 2/3/4) and automated inventory management.
      </p>
    `
  },
  'expansion-g3': {
    tag: 'BATAM EXPANSION / BUILDINGS G3 & G3A',
    title: 'Buildings G3 & G3A: 5,832 m² Next-Gen Production Lines',
    body: `
      <p style="font-size:0.92rem; line-height:1.65;">
        <strong>Buildings G3 (2,916 m²) & G3A (2,916 m²):</strong> 5,832 m² of flexible, high-spec manufacturing clean floor area reserved for strategic tier-1 client launches and specialized ISO 13485 cleanroom medical lines.
      </p>
    `
  },

  // QUALITY CERTIFICATIONS
  'quality-cert': {
    tag: 'QUALITY & ESG DOSSIER',
    title: 'Certified Quality Management & ESG Framework',
    body: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px; font-size:0.84rem;">
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong style="color:var(--brand-primary); display:block;">ISO 9001 : 2015</strong>
          <span style="color:var(--text-muted);">General Quality Management System</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong style="color:var(--brand-primary); display:block;">ISO 13485 : 2016</strong>
          <span style="color:var(--text-muted);">Medical Devices Quality Management</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong style="color:var(--brand-primary); display:block;">ISO 14001 : 2015</strong>
          <span style="color:var(--text-muted);">Environmental Management System</span>
        </div>
        <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:10px; border-radius:4px;">
          <strong style="color:var(--brand-primary); display:block;">IATF 16949 : 2016</strong>
          <span style="color:var(--text-muted);">Automotive Quality Management</span>
        </div>
      </div>
      <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6;">
        <strong>Sustainability & Ethics:</strong> Audited and compliant with Amfori BSCI; active participant in the United Nations Global Compact (UNGC). Strict adherence to RoHS, REACH, conflict-free minerals, and fair workplace principles.
      </p>
    `
  },

  // CAREERS INFO
  'careers-info': {
    tag: 'CAREERS AT GIKEN',
    title: 'People-Oriented Human Resources & Talent Development',
    body: `
      <p style="font-size:0.92rem; line-height:1.65; margin-bottom:14px;">
        We are an integrated engineering group with over 40 years of history. Highly people oriented, we take care of every aspect of human resources management.
      </p>
      <p style="font-size:0.88rem; line-height:1.6; color:var(--text-secondary); margin-bottom:14px;">
        We create a consultation-and-sharing based team environment to assist people in learning from each other. We organize competition activities that evoke creativity and initiatives, and spur our people to make an impact in improving production efficiency, cost structure, and overall performance.
      </p>
      <p style="font-size:0.88rem; line-height:1.6; color:var(--text-secondary); margin-bottom:16px;">
        We have established a career progression framework that people can visualize their growth path in the years ahead. With the well-designed incentive and welfare package, as well as periodical team building activities, we engineered a multidimensional career development system that brings forth the personal fulfilment of our employees.
      </p>
      <div style="background:var(--bg-page-subtle); border:1px solid var(--border-color); padding:12px; border-radius:4px; font-size:0.84rem; color:var(--text-muted);">
        <em>Note: There is currently no job vacancy or job opening available. For future inquiries, you may reach out to hr@giken.com.sg.</em>
      </div>
    `
  },

  // PRIVACY & DISCLAIMER
  'privacy': {
    tag: 'LEGAL',
    title: 'Privacy Policy',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        Giken Sakata (S) Ltd respects the privacy of all visitors and clients. Any information submitted via our quotation forms or contact channels is strictly used for official business correspondence and engineering evaluation in compliance with Singapore Personal Data Protection Act (PDPA).
      </p>
    `
  },
  'disclaimer': {
    tag: 'LEGAL',
    title: 'Corporate Disclaimer',
    body: `
      <p style="font-size:0.88rem; line-height:1.65; color:var(--text-secondary);">
        All technical specifications, machine counts, and product capabilities presented herein reflect the official engineering profile of Giken Sakata (S) Ltd (SGX: GSS Energy Limited). Trademarks of client partners (Panasonic, Philips, Olympus, Takata, SEGA, Nintendo, Microsoft, Pioneer) remain the property of their respective owners.
      </p>
    `
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
    modal.classList.add('open');
  }
};

window.closeDetailModal = function() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.classList.remove('open');
};

/* ==========================================================================
   7. RFQ MODAL & SUBMISSION
   ========================================================================= */
window.openRfqModal = function() {
  const modal = document.getElementById('rfqModal');
  if (modal) modal.classList.add('open');
};

window.closeRfqModal = function() {
  const modal = document.getElementById('rfqModal');
  if (modal) modal.classList.remove('open');
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
   8. MULTI-LANGUAGE TRANSLATION (EN / CN / ID / JP)
   ========================================================================= */
const translations = {
  EN: {
    nav_about: 'About Us',
    nav_capabilities: 'Services & Capabilities',
    nav_markets: 'Industries',
    nav_facilities: 'Facilities',
    nav_quality: 'Quality & ESG',
    nav_careers: 'Careers',
    hero_title: 'A Trusted Manufacturing Partner<br><span class="text-accent-gradient">Built on Engineering Excellence.</span>',
    hero_subtitle: 'Providing integrated manufacturing solutions that combine precision engineering, Electronics Manufacturing Services (EMS), tooling, plastic injection moulding, battery pack assembly, and complete product integration across Singapore, Indonesia, and China.',
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
    hero_title: '值得信赖的制造伙伴<br><span class="text-accent-gradient">奠基于卓越的工程技术。</span>',
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
    hero_title: 'Mitra Manufaktur Tepercaya<br><span class="text-accent-gradient">Berlandaskan Keunggulan Rekayasa.</span>',
    hero_subtitle: 'Menghadirkan solusi manufaktur terintegrasi yang menggabungkan rekayasa presisi, Electronics Manufacturing Services (EMS), perkakas cetakan, injeksi plastik, perakitan baterai, dan integrasi produk lengkap di Singapura, Indonesia, dan Tiongkok.',
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
    hero_title: '信頼される製造パートナー<br><span class="text-accent-gradient">卓越したエンジニアリング技術。</span>',
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
