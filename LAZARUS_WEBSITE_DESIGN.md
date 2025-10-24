# LAZARUS WEBSITE DESIGN SPECIFICATION
**Industrial Manufacturing Website Design**  
**Platform:** Webflow/Framer Ready  
**Created:** December 2024  
**Based on:** LAZARUS_WEBSITE_PRD_v1.1.md

---

## 1. WEBSITE ARCHITECTURE

### Primary Navigation Structure
```
Home
├── Solutions
│   ├── Industrial Vulcanizers
│   ├── Automation & Control Systems
│   ├── Smart Conveyor Management
│   └── Custom Engineered Equipment
├── Industries
│   ├── Mining & Quarrying
│   ├── Manufacturing
│   ├── Ports & Terminals
│   └── Food Processing
├── Services
│   ├── Field Operations
│   ├── OEM Partnerships
│   ├── Equipment Refurbishment
│   └── Technical Support
├── Resources
│   ├── Case Studies
│   ├── Technical Documentation
│   ├── Lazarus Academy
│   └── Industry Insights
├── About
│   ├── Company History
│   ├── Leadership Team
│   ├── Certifications
│   └── Global Presence
└── Contact
    ├── Request Quote
    ├── Technical Support
    ├── Find a Partner
    └── Global Locations
```

---

## 2. HOMEPAGE DESIGN

### Hero Section
**Layout:** Full-screen video background with overlay content
- **Background:** Dark industrial video loop (machinery, sparks, precision manufacturing)
- **Headline:** "Reviving Industry. Reinventing Possibility."
- **Subtext:** "Lazarus engineers intelligent machinery and materials that redefine industrial performance."
- **CTAs:** 
  - Primary: "Explore Solutions" (Copper button)
  - Secondary: "Our Vision" (Ion Blue outline button)
- **Scroll Indicator:** Animated copper line with subtle pulse

### Solutions Overview Grid
**Layout:** 4-column responsive grid (2x2 on mobile)
- **Industrial Vulcanizers**
  - Icon: Precision gear with copper accent
  - Description: "Advanced vulcanizing systems for conveyor belt splicing"
  - Hover: Copper glow effect + subtle lift animation
  
- **Automation & Control**
  - Icon: Circuit board with blue accent
  - Description: "Intelligent control systems for industrial operations"
  - Hover: Ion Blue glow effect + text shift
  
- **Smart Conveyor Management**
  - Icon: Conveyor belt with motion lines
  - Description: "AI-powered conveyor optimization and monitoring"
  - Hover: Copper to blue gradient transition
  
- **Custom Engineered Equipment**
  - Icon: Custom gear assembly
  - Description: "Bespoke solutions for unique industrial challenges"
  - Hover: Multi-color glow sequence

### Capabilities Section
**Layout:** Two-column split with alternating image/text placement
- **Field Operations:** Mobile service teams with 24/7 support
- **OEM Partnerships:** Collaborative engineering and manufacturing
- **Equipment Refurbishment:** Complete system restoration and upgrades

### Case Study Highlight
**Layout:** Full-width dark section with animated statistics
- **Background:** Subtle industrial video with dark overlay
- **Stats Animation:** 
  - "500+ Projects Completed"
  - "99.7% Uptime Achieved"
  - "50+ Countries Served"
- **CTA:** "View All Case Studies" (Copper button)

### Lazarus Academy Section
**Layout:** Centered content with blue accent elements
- **Tagline:** "Building the next generation of industrial mastery"
- **Features:**
  - Technical Training Programs
  - Certification Courses
  - Online Learning Platform
  - Industry Best Practices
- **Visual:** Blue glow accents with subtle particle animation

---

## 3. DETAILED COMPONENT SPECIFICATIONS

### Button Components
```css
/* Primary Button */
.btn-primary {
  background: #C46F2F; /* Lazarus Copper */
  color: white;
  border-radius: 4px;
  padding: 16px 32px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #C46F2F, #1E8FFB);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(196, 111, 47, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1E8FFB; /* Ion Blue */
  border: 2px solid #1E8FFB;
  border-radius: 4px;
  padding: 14px 30px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #1E8FFB;
  color: white;
  transform: translateY(-2px);
}
```

### Card Components
```css
.card {
  border: 2px solid #C46F2F;
  border-radius: 8px;
  padding: 32px;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: #1E8FFB;
  box-shadow: 0 0 20px rgba(30, 143, 251, 0.2);
  transform: translateY(-4px);
}
```

### Navigation Component
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-transparent {
  background: transparent;
  backdrop-filter: blur(10px);
}

.navbar-scrolled {
  background: rgba(17, 19, 23, 0.95); /* Lazarus Graphite */
  backdrop-filter: blur(20px);
}
```

---

## 4. PRODUCT/SERVICE PAGES

### Industrial Vulcanizers Page
**Hero Section:**
- Large product image with copper accent overlay
- Headline: "Precision Vulcanizing Systems"
- Key benefits: Speed, Accuracy, Reliability

**Product Categories:**
- **Portable Vulcanizers:** Field-ready equipment
- **Stationary Systems:** High-volume production
- **Custom Solutions:** Bespoke vulcanizing systems

**Technical Specifications:**
- Interactive specification tables
- Downloadable PDFs
- 3D model viewers (if available)

### Automation & Control Page
**Hero Section:**
- Animated control panel interface
- Headline: "Intelligent Control Systems"
- Key benefits: Efficiency, Safety, Scalability

**System Types:**
- **PLC Integration:** Seamless control integration
- **HMI Solutions:** User-friendly interfaces
- **IoT Connectivity:** Smart monitoring and analytics

### Smart Conveyor Management Page
**Hero Section:**
- Dynamic conveyor visualization
- Headline: "AI-Powered Conveyor Optimization"
- Key benefits: Predictive Maintenance, Efficiency, Cost Reduction

**Features:**
- **Real-time Monitoring:** Live system status
- **Predictive Analytics:** Failure prevention
- **Performance Optimization:** Automated adjustments

---

## 5. CASE STUDIES SECTION

### Case Study Layout
**Grid Structure:** 3-column responsive grid
- **Featured Case Study:** Large card with video/image
- **Secondary Studies:** Standard cards with hover effects

### Case Study Template
- **Client:** Company name and industry
- **Challenge:** Specific problem description
- **Solution:** Lazarus approach and technology
- **Results:** Quantified outcomes and benefits
- **Testimonial:** Client quote with photo

### Sample Case Studies
1. **Mining Operation Efficiency:** 40% reduction in downtime
2. **Port Terminal Automation:** 60% increase in throughput
3. **Manufacturing Integration:** Seamless system upgrade

---

## 6. LAZARUS ACADEMY SECTION

### Training Programs
**Layout:** Tabbed interface with course categories
- **Technical Training:** Equipment operation and maintenance
- **Certification Programs:** Industry-recognized credentials
- **Online Learning:** Self-paced digital courses
- **Custom Training:** Tailored programs for specific needs

### Course Features
- **Interactive Modules:** Hands-on learning experiences
- **Progress Tracking:** Individual learning paths
- **Certification Badges:** Digital credentials
- **Community Access:** Peer learning and support

---

## 7. RESPONSIVE DESIGN SYSTEM

### Breakpoint Specifications
```css
/* Mobile First Approach */
@media (min-width: 375px) { /* Mobile */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Grid System
- **Mobile (375px):** 4 columns, 24px margin, 16px gutter
- **Tablet (768px):** 8 columns, 48px margin, 20px gutter
- **Desktop (1024px):** 12 columns, 80px margin, 24px gutter
- **Large Desktop (1440px):** 12 columns, 120px margin, 32px gutter

### Typography Scaling
- **Mobile:** H1: 48px, H2: 32px, Body: 16px
- **Tablet:** H1: 60px, H2: 40px, Body: 18px
- **Desktop:** H1: 72px, H2: 48px, Body: 20px

---

## 8. MOTION & INTERACTION GUIDELINES

### Animation Principles
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1) for natural motion
- **Duration:** 0.3s for micro-interactions, 0.6s for page transitions
- **Performance:** GPU-accelerated transforms only

### Specific Interactions
- **Hover Effects:** Color transitions with subtle lift
- **Scroll Reveals:** Fade-up with 20px translateY
- **Button Press:** 0.1s scale-down to 0.95
- **Card Interactions:** Border glow + content shift
- **Page Load:** Staggered fade-in with copper sweep

### Loading States
- **Skeleton Screens:** For content-heavy sections
- **Progressive Loading:** Images load with fade-in
- **Smooth Transitions:** Between page states

---

## 9. PERFORMANCE OPTIMIZATION

### Image Optimization
- **WebP Format:** Primary format with JPEG fallback
- **Lazy Loading:** Intersection Observer API
- **Responsive Images:** srcset for different screen sizes
- **Compression:** 85% quality for photos, 95% for graphics

### Code Optimization
- **Critical CSS:** Inline above-the-fold styles
- **Minification:** Compressed CSS and JavaScript
- **Tree Shaking:** Remove unused code
- **CDN Delivery:** Global content distribution

### Caching Strategy
- **Static Assets:** Long-term caching (1 year)
- **Dynamic Content:** Short-term caching (1 hour)
- **API Responses:** Appropriate cache headers

---

## 10. SEO & ACCESSIBILITY

### SEO Implementation
- **Meta Tags:** Dynamic titles and descriptions
- **Structured Data:** Schema.org markup for products
- **Sitemap:** XML sitemap with priority settings
- **Internal Linking:** Strategic cross-page connections

### Accessibility Features
- **WCAG 2.1 AA Compliance:** Color contrast and keyboard navigation
- **Screen Reader Support:** Proper ARIA labels and landmarks
- **Focus Management:** Visible focus indicators
- **Alternative Text:** Descriptive image alt attributes

---

## 11. TECHNICAL IMPLEMENTATION

### Webflow/Framer Compatibility
- **Design Tokens:** CSS custom properties for colors and spacing
- **Component Library:** Reusable design elements
- **CMS Integration:** Dynamic content management
- **Form Handling:** Contact forms with validation

### Third-Party Integrations
- **Analytics:** Google Analytics 4 with enhanced ecommerce
- **Chat Support:** Live chat widget for customer support
- **CRM Integration:** Lead capture and management
- **Email Marketing:** Newsletter signup and automation

---

## 12. CONTENT STRATEGY

### Messaging Framework
- **Primary Message:** "Reviving Industry. Reinventing Possibility."
- **Supporting Messages:**
  - Innovation in industrial technology
  - Global expertise and local support
  - Proven track record of success
  - Commitment to customer success

### Content Types
- **Product Information:** Detailed specifications and benefits
- **Case Studies:** Real-world success stories
- **Technical Resources:** Documentation and guides
- **Industry Insights:** Thought leadership content

---

This comprehensive design specification provides the foundation for creating a modern, professional website for Lazarus that effectively communicates their industrial manufacturing expertise while maintaining the sophisticated visual identity outlined in the PRD.

