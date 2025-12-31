# NARTHEX WEBSITE - DESIGN BRIEF

## PROJECT OVERVIEW

**Project:** Narthex Catholic Co-Working Website  
**Mission:** Create a transformative workspace where Catholic professionals can flourish both professionally and spiritually  
**Location:** Oklahoma City (Nichols Hills • I-44 & Broadway Extension)  
**Vision:** Expand to cities nationwide as a network of Catholic professional hubs  

---

## DESIGN PHILOSOPHY

### Core Concept
**"Gothic Cathedral Architecture Meets Modern Minimalist Web Design"**

The website must bridge two worlds that rarely touch well:
1. **Sacred Tradition** - Gothic cathedral aesthetic (timeless, substantial, beautiful)
2. **Modern Professional Credibility** - Cutting-edge, clean, functional design

### Guiding Principles
Every design decision should pass this test: *"Does this make someone think 'These people take both faith and professionalism seriously'?"*

The site should feel:
- **Timeless** (like a cathedral stands for centuries)
- **Substantial** (real weight and gravitas)
- **Modern** (cutting-edge professional credibility)
- **Beautiful** (worthy of the sacred tradition it represents)

### Design Approach
- Treat Gothic aesthetic like luxury brands treat heritage: as a mark of timelessness, craftsmanship, and substance (not nostalgia)
- Modern structure with traditional soul
- Clean interface that doesn't compete with imagery - let the imagery do emotional heavy lifting
- Restrained elegance over flashy effects

---

## BRAND GUIDELINES

### Color Palette

**Primary Colors:**
```
Rich Black:    #0A0A0A  (backgrounds, text)
Warm Gold:     #C9A961  (logo, accents, key CTAs)
Warm Cream:    #F5F1E8  (backgrounds - NEVER pure white)
```

**Accent Colors:**
```
Deep Forest Green: #1B3B2B  (primary CTA buttons)
Stone Gray:        #8B8680  (subtle text, borders)
Deep Walnut Brown: #3E2723  (text on light backgrounds)
```

**Color Usage Rules:**
- Black and cream are workhorses (90% of the site)
- Gold for logos, key accents, hover states
- Green for primary action buttons
- Brown for body text on light backgrounds
- **NEVER use pure white (#FFFFFF)** - always use cream

### Typography

**Heading Font: Cormorant Garamond**
- Use for: H1, H2, major statements
- Weight: 400 (regular), 600 (semibold), 700 (bold)
- Character: Elegant, classical serif with gravitas
- Source: Google Fonts

**Body Font: Inter**
- Use for: Body copy, navigation, buttons, forms
- Weight: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Character: Clean, modern, highly readable sans-serif
- Source: Google Fonts

**Accent Font: Cinzel** - USE SPARINGLY
- Use for: Very specific moments that need extra weight
- Weight: 400 (regular), 700 (bold)
- Do NOT overuse - strong medicine
- Source: Google Fonts

**Typography Scale:**
```
H1: 48-64px (desktop), 32-40px (mobile)
H2: 36-48px (desktop), 28-32px (mobile)
H3: 24-32px
Body: 16-18px
Small text: 14px
```

### Tone & Voice

**Written Tone:**
- Warm and conversational (NOT formal or institutional)
- Inspire without being preachy
- Show, don't tell (use concrete examples)
- Balance professional credibility with sacred mission
- Avoid Catholic jargon unless necessary
- Lead with benefits, not features

**Example Good Copy:**
"Whether you're an entrepreneur building something new, a remote worker seeking community, or a business owner looking for a workspace that aligns with your values—Narthex is your home."

**Example Bad Copy:**
"Narthex Inc. provides office solutions for faith-based professionals seeking co-location opportunities in accordance with Catholic social teaching."

---

## VISUAL ASSETS

### Core Images (AI-Generated)

**Image File Locations:** `/public/images/`

1. **cathedral-nave.jpg** (Landscape)
   - Cathedral interior view from back toward altar
   - Symmetrical composition with central aisle
   - Soaring vaulted ceilings, stone arches
   - Warm, soft lighting
   - **Use:** Homepage hero background (25% opacity)

2. **st-joseph-stained-glass.jpg** (Portrait)
   - St. Joseph the Worker with carpenter tools
   - Traditional iconography, green/brown robes, gold halo
   - Medieval Gothic stained glass style
   - **Use:** Support Us page hero background (20% opacity)

3. **gothic-archway.jpg** (Portrait)
   - Stone archway entrance with quatrefoil tracery
   - Weathered limestone in warm grays
   - Wooden door with iron hardware visible
   - **Use:** Multiple backgrounds (Homepage "Who This Is For", Work page pricing section)

4. **vaulted-ceiling.jpg** (Portrait/Square)
   - Upward view of Gothic ribbed vaulting
   - Fan vaulting with intricate stonework
   - Central rosette/boss as focal point
   - **Use:** Work at Narthex page hero background (25% opacity)

5. **stone-texture.png** (Tileable)
   - Seamless stone texture
   - Warm gray base with subtle variations
   - **Use:** Overlay on cream sections at 5-8% opacity

### Image Treatment Rules

**For Background Images:**
- Opacity: 20-30% (depending on section and readability needs)
- Apply subtle vignetting (darkening at edges)
- Add dark gradient overlay where text appears for readability
- All should feel cohesive in treatment
- Use `background-size: cover` and `background-position: center`
- Consider `background-attachment: fixed` for parallax effect on hero sections

**For Gallery/Content Images:**
- Slight desaturation or grayscale effect at rest
- Full color on hover
- Subtle scale transform on hover (scale: 1.05)
- Smooth transitions (700ms)

---

## SITE STRUCTURE

### Navigation
**Pages:** Home | Work at Narthex | Support Us | About

**Nav Styling:**
- Sticky header (fixed to top on scroll)
- Cream background with subtle transparency when scrolling
- Black text, gold underline on hover
- Mobile: Hamburger menu
- Logo on left, links on right

### Page Breakdown

#### **1. HOMEPAGE**

**Hero Section:**
- Full viewport height (100vh min-height)
- Background: Cathedral nave image (faded, vignette)
- Centered content: Logo → Headline → Subheadline → 2 CTAs
- Scroll indicator at bottom (animated chevron)
- Headline: "Where Faith Meets Professional Excellence"
- CTAs: "Work at Narthex" (green) + "Support Our Mission" (cream with gold border)

**Four Pillars Section:**
- Cream background with stone texture overlay (5-8% opacity)
- 4-column grid (responsive: 2x2 on tablet, stacked on mobile)
- Each pillar: Icon (gold line art) + Heading + 2-3 sentence description
- Four Pillars:
  1. Professional Workspace
  2. Authentic Community
  3. Professional Formation (workshops, mentorship from Catholic business leaders)
  4. Faith Formation (Masses, small groups, spiritual resources)

**Who This Is For Section:**
- Dark background (black) with faded Gothic archway image on left (25% opacity)
- Content on right side (60% width)
- Gold heading, cream body text
- Explains who Narthex serves (entrepreneurs, remote workers, business owners)

**See the Space Section:**
- Black background
- Heading: "Your Workspace in Oklahoma City"
- Location: "Nichols Hills • I-44 & Broadway Extension"
- Photo gallery of actual workspace (placeholder images for now)
- Footer note: "Starting in Oklahoma City, with vision to expand to cities nationwide"

**Take the Next Step Section:**
- Cream background with texture
- Two cards side-by-side (50/50)
- Card 1: "Ready to Join?" → CTA to Work at Narthex
- Card 2: "Want to Support?" → CTA to Support Us

#### **2. WORK AT NARTHEX PAGE**

**Hero Section:**
- Background: Vaulted ceiling image (faded)
- Headline: "Where Your Work Becomes Worship"
- Subheadline: "Professional workspace designed for Catholic excellence"
- CTA: "Apply for Membership"

**Membership Benefits Section:**
- Cream background with texture
- 4-card grid showing:
  1. Amenities (WiFi, conference rooms, professional atmosphere)
  2. Community (networking, mentorship, collaboration)
  3. Formation (workshops, training from Catholic business leaders)
  4. Spiritual (Quarterly Masses, small groups, spiritual resources)

**Membership Options (Pricing) Section:**
- Dark background with Gothic archway faded image
- Two pricing cards side-by-side:
  - **Co-Working:** $250/month (flexible shared workspace)
  - **Dedicated Office:** $600/month (private office, 24/7 access) - "Most Popular" badge
- Note below: "Scholarship opportunities available - we don't want cost to be a barrier to joining this community."

**Community Programming Section:**
- Cream background
- Grid or numbered list:
  1. Quarterly Masses
  2. Quarterly Community Events
  3. Small Groups & Bible Studies
  4. Professional Formation Workshops
- Note: "All programming open to the broader community"

**Tour the Space Section:**
- Black background
- Photo gallery (4-6 images)
- Placeholder for actual workspace photos

**FAQs Section:**
- Accordion or simple list
- Common questions about membership

**Application/Next Steps Section:**
- Cream background
- Process visualization: "Schedule a Tour → Submit Application → Get Started"
- Email input form + CTA: "Schedule Your Tour"

#### **3. SUPPORT US PAGE**

**Hero Section:**
- Background: St. Joseph stained glass (faded)
- Headline: "Invest in Catholic Professionals"
- Subheadline: "Help us build workspaces where faith and excellence thrive"
- CTA: "Partner With Us"

**The Vision / Why This Matters Section:**
- Cream background
- Text-focused with generous spacing
- Explains the gap being filled, why it matters, vision for impact

**Your Investment Enables Section:**
- Dark background
- 4-card grid with icons:
  1. Excellence (Stronger Catholic professionals)
  2. Community (Vibrant faith communities)
  3. Formation (Scholarship fund, professional workshops)
  4. Expansion (Future cities nationwide)

**How You Can Give Section:**
- Cream background
- Options: One-time, Monthly recurring, Scholarship fund, Legacy giving

**Ways to Partner Section:**
- Two cards side-by-side:
  1. **Financial Support** (green top border)
     - Support scholarship fund, sponsor events, capital campaign
     - Note: 501(c)(3) organization
     - CTA: "Contact to Give"
  2. **Share Your Expertise** (gold top border)
     - Lead workshops, mentor professionals, share skills
     - "Your wisdom is just as valuable as financial support"
     - CTA: "Get Involved"

**Give Now Section:**
- Centered, prominent
- Donation form/link
- Tax-deductibility info
- Contact for major gifts

#### **4. ABOUT PAGE**

**Our Story Section:**
- Origin story of Narthex
- Why Oklahoma City
- Brief, personal

**Our Mission Section:**
- Mission statement (condensed for web)
- Can use alternate background (subtle architectural image)

**Leadership/Team Section (if applicable):**
- Founder/key people bios
- Keep brief

**Vision for the Future Section:**
- Network of Catholic professional hubs
- Replication model
- Impact goals

---

## COMPONENT SPECIFICATIONS

### Buttons

**Primary CTA (Green):**
```css
Background: #1B3B2B (forest green)
Text: #F5F1E8 (cream)
Border: 2px solid transparent
Padding: 14px 32px
Font: Inter, 16px, medium weight (500)
Transition: 300ms ease

Hover State:
Border: 2px solid #C9A961 (gold)
Transform: subtle lift (translateY(-2px))
Box-shadow: soft shadow
```

**Secondary CTA (Outline):**
```css
Background: #F5F1E8 (cream) or transparent
Text: #0A0A0A (black) or #F5F1E8 (cream on dark backgrounds)
Border: 2px solid #1B3B2B (green) or #C9A961 (gold)
Padding: 14px 32px
Font: Inter, 16px, medium weight (500)
Transition: 300ms ease

Hover State:
Background: #1B3B2B (green) or #C9A961 (gold)
Text: #F5F1E8 (cream)
Transform: subtle lift
```

### Cards

**Standard Card:**
```css
Background: #F5F1E8 (cream) or white/50 on cream sections
Border: 1px solid #8B8680 (stone gray) at 20-30% opacity
Box-shadow: 0 2px 8px rgba(0,0,0,0.08)
Padding: 32px (or more for larger cards)
Border-radius: 0 or 2px (minimal rounding)

Hover State:
Transform: translateY(-4px)
Box-shadow: 0 4px 16px rgba(0,0,0,0.12)
Transition: 300ms ease
```

**Pricing Cards:**
```css
Background: Semi-transparent on dark sections
Border: 1px solid gold at 20% opacity
Padding: 48px (generous)

"Most Popular" badge:
Position: Absolute top-right
Background: #C9A961 (gold)
Text: #0A0A0A (black)
Font-size: 12px, bold, uppercase, tracking-widest
```

### Section Patterns

**Standard Section Padding:**
```
Desktop: 80-120px vertical
Mobile: 60-80px vertical
Horizontal: 24px (1.5rem) or use max-width container
```

**Max-Width Containers:**
```
Standard content: 1200-1400px
Text-heavy content: 800px (for readability)
```

**Section Backgrounds:**
- Never flat/empty - always have depth
- Cream sections: Add stone texture overlay at 5-8% opacity
- Dark sections: Consider faded architectural images
- Alternate between light and dark for visual rhythm

**Section Dividers:**
- Thin gold lines (1px, #C9A961)
- Or subtle arch shapes in stone gray
- Never harsh horizontal rules
- Use sparingly - white space is often better

### Animations & Interactions

**General Principles:**
- Subtle, purposeful (not flashy or attention-seeking)
- Think: "Cathedral doors opening slowly"
- All transitions: 300ms ease (or 500-700ms for larger movements)

**Common Animations:**
```
Fade-in on scroll: opacity 0 → 1, translateY(20px) → 0
Hover lift: translateY(0) → translateY(-4px)
Image scale on hover: scale(1) → scale(1.05)
Button hover: Add border color, subtle lift
```

**Parallax Effect:**
- Use sparingly on hero sections
- `background-attachment: fixed`
- Subtle, not dramatic

### Responsive Breakpoints

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

**Responsive Patterns:**
- 4-column grids → 2x2 grid (tablet) → stacked (mobile)
- 2-column layouts → stacked (mobile)
- Navigation → hamburger menu (mobile)
- Font sizes scale down appropriately
- Touch targets minimum 44px on mobile

---

## CONTENT GUIDELINES

### Mission & Vision

**Mission:**
Narthex exists to create transformative workspaces where Catholic professionals can flourish both professionally and spiritually. We believe that faith and work are not separate spheres of life, but interconnected aspects of our calling to serve God and neighbor through our vocations.

**Vision:**
A network of Catholic professional hubs across the United States, creating spaces where faith and professional excellence strengthen each other, demonstrating that Catholics can lead with integrity and thrive in the modern workplace.

### Key Differentiators

1. **Only Catholic co-working space** - There are no other spaces like this
2. **Integration of faith and work** - Not just a workspace with a chapel, but genuine integration
3. **Professional formation** - Workshops and mentorship from successful Catholic business leaders
4. **Community-focused** - Not just desks, but authentic relationships
5. **Scholarship opportunities** - Removing financial barriers to participation

### Membership Details

**Co-Working: $250/month**
- Flexible shared workspace
- Community events access
- High-speed internet
- Coffee & amenities

**Dedicated Office: $600/month**
- Private, lockable office
- 24/7 building access
- Priority conference room booking
- Mail handling
- All co-working benefits

**Scholarships:**
- Available for those who need financial assistance
- "We don't want cost to be a barrier to joining this community"

### Programming

**Quarterly Masses** - Celebrate the Eucharist in your workplace

**Quarterly Community Events** - Networking and social gatherings

**Small Groups & Bible Studies** - Spiritual formation and support

**Professional Formation Workshops** - Skill development from Catholic business leaders

**Note:** All programming is open to the broader community (not just members)

### Contact Information

**Location:**
Nichols Hills  
I-44 & Broadway Extension  
Oklahoma City, OK

**Contact:**
Email: hello@narthex.com (placeholder)
Phone: (405) 555-0123 (placeholder)

**Legal:**
501(c)(3) nonprofit organization

---

## TECHNICAL SPECIFICATIONS

### Tech Stack
- React + TypeScript
- Tailwind CSS (with custom configuration)
- Vite (build tool)
- React Router (navigation)
- Lucide React (icons)

### Image Optimization
- Use WebP format where possible
- Lazy load images below the fold
- Compress all images (maintain quality but reduce file size)
- Set explicit width/height to prevent layout shift

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse score: > 90

### Accessibility Requirements
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Alt text for all images
- Color contrast ratios meet WCAG AA standards (minimum 4.5:1 for normal text)
- Focus states visible and styled

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Graceful degradation for older browsers
- Mobile Safari and Chrome (iOS and Android)

---

## IMAGE SWAP REFERENCE

### Current Placeholder Images → Replace With:

**Homepage (pages/Home.tsx):**
- Line 11 Hero: `unsplash photo` → `/images/cathedral-nave.jpg`
- Line 82 "Who This Is For": `unsplash photo` → `/images/gothic-archway.jpg`
- Lines 109, 113 Gallery: Generic office photos → Actual Narthex space photos (when available)

**Work Page (pages/Work.tsx):**
- Line 11 Hero: `unsplash ceiling` → `/images/vaulted-ceiling.jpg`
- Line 55 Pricing background: `unsplash archway` → `/images/gothic-archway.jpg`
- Lines 137-140 Gallery: Generic offices → Actual Narthex space photos (when available)

**Support Page (pages/Support.tsx):**
- Line 11 Hero: `unsplash stained glass` → `/images/st-joseph-stained-glass.jpg`

---

## CRITICAL REMINDERS

### What Makes This Different
This is NOT a traditional church website. It's a professional workspace that happens to be rooted in Catholic values. The design must feel:
- Modern and credible (not dated or amateur)
- Elegant and substantial (not generic or template-y)
- Warm and inviting (not institutional or cold)

### Design Decisions Already Made
- Modern structure with traditional imagery (not trying to make the whole site look medieval)
- Clean sans-serif body text with classical serif headings (not all old-fashioned fonts)
- Subtle architectural backgrounds (not literal church photos everywhere)
- Professional photography aesthetic (not stock photo clichés)

### Common Pitfalls to Avoid
- ❌ Don't make it look like a church bulletin
- ❌ Don't use too much gold (it should accent, not dominate)
- ❌ Don't use heavy-handed religious imagery
- ❌ Don't make it look "churchy" - this is a workspace first
- ❌ Don't use pure white backgrounds - always cream
- ❌ Don't over-animate or make it flashy
- ❌ Don't use stock photos of people in offices - either real photos or architectural imagery

### What Success Looks Like
✅ Professional meets sacred seamlessly
✅ Someone's first thought: "This looks like a serious, well-run organization"
✅ Second thought: "And they clearly care about their Catholic identity"
✅ Third thought: "I want to be part of this"

---

## FINAL NOTE

This brief represents weeks of thoughtful iteration and refinement. Every decision has been carefully considered to achieve the delicate balance between professional credibility and sacred tradition. Trust the guidelines, but also trust your design instincts - if something feels off, it probably is.

When in doubt, ask: "Does this serve the mission of helping Catholic professionals integrate faith and work with excellence?"

---

**Document Version:** 1.0  
**Last Updated:** December 31, 2024  
**Created By:** Claude (Anthropic) in collaboration with Narthex team
