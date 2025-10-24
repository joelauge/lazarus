# LAZARUS WEBSITE PRD (v1.1)
**Design Framework:** Inspired by Freight Webflow/Framer Template  
**Platform:** Figma → Webflow / Framer  
**Created:** October 2025  
**Prepared for:** Lazarus Industrial Group  

---

## 1. PROJECT OVERVIEW

**Objective:**  
Transform the legacy Almex experience into a modern, high-authority industrial technology brand site that feels powerful, intelligent, and acquisition-ready.  

**Design Reference:**  
Freight Template (https://freight-template.webflow.io) — chosen for its modular grid, structured content hierarchy, and elegant motion design.  

**Deliverable:**  
A Webflow/Framer-ready responsive website design system and homepage prototype based on Lazarus’ new visual identity.

---

## 2. BRAND CORE

**Tagline:**  
*Reviving Industry. Reinventing Possibility.*

**Tone & Voice:**  
Confident, minimal, engineered, visionary.

**Primary Logo:**  
Flat Copper + Graphite “L” symbol (geometric mark).  

**Color Palette:**
| Role | Name | HEX |
|------|------|------|
| Primary | Lazarus Graphite | `#111317` |
| Secondary | Industrial Slate | `#2A2F36` |
| Accent 1 | Lazarus Copper | `#C46F2F` |
| Accent 2 | Ion Blue | `#1E8FFB` |
| Neutral Light | Titanium Silver | `#D5D7D8` |
| Background | Vapor White | `#F4F6F7` |

---

## 3. DESIGN SYSTEM

### Layout Grid
| Device | Columns | Margin | Gutter |
|---------|----------|---------|---------|
| Desktop (1440px) | 12 | 120px | 32px |
| Tablet (1024px) | 8 | 64px | 24px |
| Mobile (375px) | 4 | 24px | 16px |

- **Container Width:** 1280px max  
- **Section Padding:** 120px top/bottom desktop → 80px tablet → 60px mobile  

---

### Typography
| Type | Font | Weight | Size | Line Height |
|------|------|---------|------|--------------|
| H1 | Neue Haas Grotesk Bold | 700 | 72px | 1.05 |
| H2 | Neue Haas Grotesk Bold | 700 | 48px | 1.1 |
| H3 | Neue Haas Grotesk Medium | 600 | 32px | 1.2 |
| Body L | Inter Regular | 400 | 20px | 1.6 |
| Body S | Inter Regular | 400 | 16px | 1.7 |
| Caption | Space Grotesk Medium | 500 | 14px | 1.5 |

---

### Spacing Tokens
| Token | Value |
|--------|--------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

---

## 4. COMPONENTS

| Component | Description |
|------------|--------------|
| **Buttons** | Copper primary (#C46F2F), white text, 4px radius, hover → gradient to Ion Blue |
| **Cards** | 2px Copper border, no shadow, subtle blue glow on hover |
| **Navigation** | Transparent → Graphite after 100px scroll |
| **Footer** | Graphite background, Silver text, Copper hover |
| **Icons** | Line-based, 24px, 1.5px stroke, Copper for active, Silver for inactive |

---

## 5. HOMEPAGE STRUCTURE

**Hero Section**
- Dark video loop (machinery, sparks)
- Headline: *Reviving Industry. Reinventing Possibility.*
- Subtext: *Lazarus engineers intelligent machinery and materials that redefine industrial performance.*
- Buttons: [Explore Solutions] (Copper) [Our Vision] (Ion Blue outline)

**Solutions Overview**
- 4 grid cards with hover glow:
  - Industrial Vulcanizers  
  - Automation & Control  
  - Smart Conveyor Management  
  - Custom Engineered Equipment

**Capabilities / Services**
- Two-column split layout (Image + Text)
- Focus: Field Operations, OEM Partnerships, Refurbishment

**Case Study Highlight**
- Animated stats over dark video
- CTA: [View All Case Studies]

**Lazarus Academy**
- Blue glow accents
- Tagline: *Building the next generation of industrial mastery.*

**Footer**
- Graphite background
- Copper hover on links
- Logo in Silver

---

## 6. MOTION & INTERACTION GUIDELINES

| Interaction | Description |
|--------------|--------------|
| **Hover** | Copper → Ion Blue color transition |
| **Scroll Reveal** | Fade-up + slight parallax |
| **Button Press** | 0.1s scale down animation |
| **Hero Video** | Slow camera drift motion loop |
| **Card Hover** | Border light-up + text shift + glow |
| **Page Load** | Subtle fade with Copper sweep |

All animations should use cubic-bezier(0.4, 0, 0.2, 1) for natural easing.

---

## 7. PERFORMANCE & SEO
- Lightweight SVG logo/icons  
- Lazy-load videos and Lottie files  
- Meta tags: Lazarus Industrial Group — Intelligent Machinery Systems  
- OpenGraph: Default thumbnail = Copper “L” on Graphite background  

---

## 8. IMPLEMENTATION NOTES
- Compatible with Webflow CMS + Framer animations  
- Design tokens exported from Figma for consistency  
- Copper gradients pre-defined as `--copper-light` and `--copper-dark` for web implementation  

---

## 9. REFERENCES
- Freight Template by Flowmance (UI8)
- Lazarus Brand Sheet (v1.0)
- Logo: Lazarus_Copper_Graphite.svg
