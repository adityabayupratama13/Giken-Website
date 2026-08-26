# GIKEN Sakata (S) Limited — Official Corporate Web Portal

> **SGX Listed (SGX: GSS Energy Limited)**  
> Integrated Precision Contract Manufacturing, EMS, SMT Assembly, Tooling, Plastic Injection Moulding, Precision Shafts, Cleanroom Medical Manufacturing, and Battery Energy Storage Solutions.

---

## 🏢 Overview

Official modern corporate web portal for **GIKEN Sakata (S) Limited**, built to the highest aesthetic and engineering benchmarks (inspired by Pegatron Corp & Denso Global). The platform delivers an executive presentation of Giken's 45+ years of precision manufacturing heritage, 9 global production facilities, 23 SMT lines, 100+ injection molding units, sub-micron shaft machining, and the landmark **Batam 78,000 m² Mega Campus Expansion (2026)**.

---

## ✨ Key Features & Capabilities

- **Executive Blue Navy & Crisp White Design**: Clean corporate aesthetic adhering to global electronics manufacturer standards.
- **Light & Dark Mode**: Instant theme toggle with `localStorage` persistence and automatic contrast adaptation.
- **Pegatron-Style Bento Grid**: High-impact media showcase covering Product Design & DFM, 23 SMT Lines, Precision Shafts, Class 100K Cleanroom, Battery Pack Assembly, and Turnkey Box-Build.
- **Interactive Machinery Matrix**: Tabbed engineering specifications for SMT lines, Plastic Injection, Sub-micron Machining (OD 0.5–500mm, Ra 0.025), and Metrology/Testing chambers (Dage X-Ray, IPX4, Air Leakage).
- **Batam Mega Campus Expansion 2026 (78,000 m²)**: Dedicated architecture breakdown for Buildings E1 (Solar Modules), A7 (Portable Energy Storage), A10 (Smart Warehouse), and G3/G3A (Next-Gen Production Lines).
- **Seven Core Industries**: Automotive (IATF 16949), Medical Equipment (ISO 13485), Consumer Electronics, Home Appliances, Industrial Automation, Gaming & Toys, and Energy Storage Solutions.
- **Multi-Language Support**: One-click switching across English (EN), Chinese (CN), Bahasa Indonesia (ID), and Japanese (JP).
- **Interactive Dossiers & Cinema Player**: In-depth modal dialogs for technical specifications, facility tours, and process video streaming.
- **Interactive RFQ Form**: Engineering inquiry modal with instant validation and client-side confirmation.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 (zero excessive emojis, strict accessibility and SEO hierarchy)
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Tokens for Light & Dark mode), Responsive CSS Grid & Flexbox
- **Logic**: Vanilla JavaScript (ES6+), Theme Engine, Modal Controller, Tab Matrix Engine, Multi-Language Translation System
- **Icons & Typography**: Font Awesome 6, Google Fonts (`Inter`, `Outfit`, `JetBrains Mono`)

---

## 📁 Repository Structure

```
├── index.html            # Main semantic HTML5 structure
├── styles.css            # Corporate stylesheet (Light/Dark tokens, Bento Grid, Responsive layout)
├── script.js             # Theme controller, translation engine, modals, matrix tabs, counters
├── assets/               # Extracted images & media assets from official profile
│   ├── giken_web/        # High-resolution web assets
│   └── pptx_2026/        # Technical diagrams & facility photography
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### Local Preview
Simply open `index.html` in any modern web browser, or run a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node / npx
npx serve .
```

Navigate to `http://localhost:8000`.

---

## 📜 Certifications & Compliance

- **IATF 16949 : 2016** — Automotive Quality Management System
- **ISO 13485 : 2016** — Medical Devices Quality Management System
- **ISO 9001 : 2015** — Quality Management System
- **ISO 14001 : 2015** — Environmental Management System
- **Amfori BSCI** — Social & Workplace Compliance
- **United Nations Global Compact (UNGC)** — Corporate Sustainability Principles

---

## 📄 License & Copyright

© 2026 Giken Sakata (S) Ltd (SGX: GSS Energy Limited). All rights reserved.
