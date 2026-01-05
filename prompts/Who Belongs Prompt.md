# CLAUDE CODE PROMPT - "WHO THRIVES AT NARTHEX" WITH ANIMATIONS

<thinking_mode>ultra</thinking_mode>

## 🎯 YOUR MISSION

Replace the "Tour the Space" section on the Work at Narthex page with a new "Who Thrives at Narthex" section featuring member personas/testimonials. Add tasteful Framer Motion animations to bring it to life.

---

## 📍 LOCATION TO MODIFY

**File:** `/pages/Work.tsx`

**Section to Replace:** "Tour the Space" section (currently showing photo gallery)

**Insert Between:**
- Community Programming section (above)
- Application/Next Steps section (below)

---

## 🎨 SECTION DESIGN SPECIFICATIONS

### **Overall Section:**

```tsx
import { motion } from 'framer-motion';

<section className="py-24 md:py-32 px-6 bg-narthex-black">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading with fade-in animation */}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-serif text-3xl md:text-4xl lg:text-5xl text-narthex-gold text-center mb-16 md:mb-20"
    >
      Who Thrives at Narthex
    </motion.h2>
    
    {/* 3-column grid with staggered animations */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
      
      {/* Person cards mapped with animations */}
      {personas.map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            ease: "easeOut" 
          }}
          className="text-center space-y-6 group"
        >
          {/* Avatar circle with hover animation */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-narthex-gold/10 border-2 border-narthex-gold flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-narthex-gold/20"
          >
            <span className="font-serif text-3xl text-narthex-gold">
              {person.initial}
            </span>
          </motion.div>
          
          {/* Name */}
          <p className="font-sans text-narthex-cream font-semibold text-lg">
            {person.name}
          </p>
          
          {/* Role/Title */}
          <p className="font-sans text-narthex-gold text-sm uppercase tracking-wider">
            {person.role}
          </p>
          
          {/* Testimonial quote */}
          <p className="font-sans text-narthex-gray text-base md:text-lg leading-relaxed italic">
            "{person.quote}"
          </p>
        </motion.div>
      ))}
      
    </div>
    
  </div>
</section>
```

---

## 📝 PLACEHOLDER CONTENT (PERSONAS ARRAY)

```tsx
const personas = [
  {
    initial: "S",
    name: "Sarah Chen",
    role: "Tech Entrepreneur",
    quote: "I needed more than a desk—I needed a community that understood both my startup ambitions and my faith. Narthex gave me both."
  },
  {
    initial: "M",
    name: "Michael Rodriguez",
    role: "Real Estate Broker",
    quote: "Working from home was isolating. Here, I'm surrounded by people who share my values and challenge me to grow professionally."
  },
  {
    initial: "E",
    name: "Elena Kowalski",
    role: "Marketing Consultant",
    quote: "The quarterly Masses and professional workshops make this so much more than a workspace—it's a community committed to excellence."
  }
];
```

---

## 🎬 ANIMATION SPECIFICATIONS

### **Animation Philosophy:**
- **Subtle, not flashy** - Animations enhance, don't distract
- **Purposeful** - Each animation has a reason (draw attention, create flow, add polish)
- **Performance-conscious** - Use GPU-accelerated properties (opacity, transform)
- **Respectful of motion preferences** - Animations work via `whileInView` with `once: true`

### **Specific Animations:**

#### **1. Heading Fade-In**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```
**Effect:** Heading gently fades in and slides up as user scrolls to section
**Why:** Creates elegant entrance, draws attention to section

#### **2. Card Stagger**
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ 
  duration: 0.5, 
  delay: index * 0.15,  // Stagger effect
  ease: "easeOut" 
}}
```
**Effect:** Cards appear sequentially (left → center → right) with 150ms delay between each
**Why:** Creates sense of flow and choreography, more interesting than all-at-once

#### **3. Avatar Hover Animation**
```tsx
whileHover={{ scale: 1.05, rotate: 5 }}
transition={{ duration: 0.3, ease: "easeInOut" }}
```
**Effect:** On hover, avatar circle slightly enlarges and rotates 5 degrees
**Why:** Adds playful interactivity, subtle delight
**Plus:** Background color shifts via CSS transition (group-hover:bg-narthex-gold/20)

#### **4. Viewport Trigger Settings**
```tsx
viewport={{ once: true, margin: "-100px" }}
```
**Effect:** Animation triggers when element is 100px into viewport, only plays once
**Why:** 
- `once: true` = better performance, no re-triggering
- `-100px` margin = starts animation slightly before element is fully visible (smoother experience)

---

## 🎨 DESIGN DETAILS

### **Avatar Circle:**

```
Size: w-20 h-20 (80px diameter)
Border: 2px solid gold
Background: gold at 10% opacity (20% on hover)
Initial: Large serif letter (text-3xl, 30px)
Shape: Perfectly round (rounded-full)
Hover: Scales 5%, rotates 5°
Transition: 300ms ease-in-out
```

**Why this design:**
- Simple and elegant (no photo needed)
- Initial creates personal touch
- Gold reinforces brand
- Hover animation adds delight
- Works with placeholder content

### **Typography Hierarchy:**

```
Name: 
- Font: Sans-serif (Inter)
- Size: text-lg (18px)
- Weight: font-semibold (600)
- Color: Cream

Role:
- Font: Sans-serif (Inter)
- Size: text-sm (14px)
- Transform: uppercase, tracking-wider
- Color: Gold

Quote:
- Font: Sans-serif (Inter)
- Size: text-base md:text-lg (16-18px)
- Style: italic
- Color: Gray (text-narthex-gray)
- Leading: leading-relaxed (1.625)
```

### **Spacing:**

```
Section padding: py-24 md:py-32
Heading margin: mb-16 md:mb-20
Grid gap: gap-12 lg:gap-16
Card internal spacing: space-y-6
```

---

## 📦 FRAMER MOTION SETUP

### **Installation:**

If Framer Motion isn't already installed, add it:

```bash
npm install framer-motion
```

### **Import Statement:**

At the top of `/pages/Work.tsx`:

```tsx
import { motion } from 'framer-motion';
```

### **Usage Pattern:**

Replace regular HTML elements with `motion` equivalents:
- `<div>` → `<motion.div>`
- `<h2>` → `<motion.h2>`
- `<p>` → `<motion.p>` (if animating)

---

## 📱 RESPONSIVE BEHAVIOR

### **Desktop (> 1024px):**
- 3 columns side-by-side
- Full stagger animation effect
- Large avatar circles (80px)
- Generous spacing

### **Tablet (768px - 1024px):**
- 3 columns maintained (might be tighter)
- Or could switch to 2-column if preferred
- Spacing adjusts (gap-12)

### **Mobile (< 768px):**
- Single column, stacked
- Stagger animation still works (top → middle → bottom)
- Avatar size maintained
- Typography scales slightly

---

## 🎯 ANIMATION PERFORMANCE NOTES

### **Why These Animations Are Performant:**

**1. GPU-Accelerated Properties:**
- `opacity` - GPU accelerated ✅
- `transform` (y, scale, rotate) - GPU accelerated ✅
- No layout thrashing or repaints

**2. Viewport-Based Triggering:**
- `whileInView` with `once: true` = only animates once
- No continuous re-rendering
- Fires only when user scrolls to section

**3. Reasonable Durations:**
- 300-600ms transitions (not too slow)
- Minimal computational overhead

**4. Respects User Preferences:**
Framer Motion automatically respects `prefers-reduced-motion` system setting

---

## ✅ VERIFICATION CHECKLIST

After implementing, verify:

**Visual:**
- [ ] Section has dark background (black)
- [ ] Heading is gold and centered
- [ ] 3 cards appear in grid (desktop)
- [ ] Avatar circles are gold with initials
- [ ] Quotes are italic and readable
- [ ] Spacing feels generous

**Animations:**
- [ ] Heading fades in smoothly when scrolling to section
- [ ] Cards appear sequentially (stagger effect visible)
- [ ] Avatar circles react to hover (scale + rotate)
- [ ] Background color shifts on hover
- [ ] Animations only play once (not retriggering)
- [ ] No jank or performance issues

**Content:**
- [ ] All 3 personas have placeholder names/quotes
- [ ] Initials match names (S for Sarah, M for Michael, E for Elena)
- [ ] Quotes are properly formatted (italics, quotation marks)
- [ ] Roles are uppercase with tracking

**Responsive:**
- [ ] Desktop: 3 columns
- [ ] Mobile: Stacked vertically
- [ ] Typography scales appropriately
- [ ] Animations work on mobile (maybe reduce/simplify if needed)

**Technical:**
- [ ] Framer Motion imported correctly
- [ ] No console errors
- [ ] Smooth scrolling to section
- [ ] Hover states work properly

---

## 🎨 OPTIONAL ENHANCEMENTS

If you want to push the animations further:

### **Option A: Quote Reveal Animation**
Make quotes fade in after the card appears:

```tsx
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: (index * 0.15) + 0.3, duration: 0.5 }}
  className="font-sans text-narthex-gray..."
>
  "{person.quote}"
</motion.p>
```

### **Option B: Border Glow on Hover**
Add subtle glow effect to avatar on hover:

```tsx
className="... group-hover:shadow-[0_0_20px_rgba(201,169,97,0.3)]"
```

### **Option C: Card Lift on Hover**
Entire card lifts slightly on hover:

```tsx
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="..."
>
```

**My recommendation:** Start with the base animations as spec'd. They're subtle and professional. Add enhancements only if it feels necessary.

---

## 🔄 REPLACING THE EXISTING SECTION

### **Current Section to Remove:**

Look for the "Tour the Space" section in `/pages/Work.tsx`. It probably looks like:

```tsx
<section className="py-24 bg-narthex-black px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="...">Tour the Space</h2>
    <p className="...">A physical environment...</p>
    <div className="grid ...">
      {/* Photo gallery */}
    </div>
  </div>
</section>
```

**Remove the entire section** (from opening `<section>` to closing `</section>`).

**Replace with** the new "Who Thrives at Narthex" section as specified above.

---

## 📐 COMPLETE CODE EXAMPLE

Here's the full section ready to drop in:

```tsx
import { motion } from 'framer-motion';

// Inside the Work component, replace "Tour the Space" section with:

const personas = [
  {
    initial: "S",
    name: "Sarah Chen",
    role: "Tech Entrepreneur",
    quote: "I needed more than a desk—I needed a community that understood both my startup ambitions and my faith. Narthex gave me both."
  },
  {
    initial: "M",
    name: "Michael Rodriguez",
    role: "Real Estate Broker",
    quote: "Working from home was isolating. Here, I'm surrounded by people who share my values and challenge me to grow professionally."
  },
  {
    initial: "E",
    name: "Elena Kowalski",
    role: "Marketing Consultant",
    quote: "The quarterly Masses and professional workshops make this so much more than a workspace—it's a community committed to excellence."
  }
];

return (
  <>
    {/* Previous sections... */}
    
    {/* Who Thrives at Narthex */}
    <section className="py-24 md:py-32 px-6 bg-narthex-black">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-narthex-gold text-center mb-16 md:mb-20"
        >
          Who Thrives at Narthex
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {personas.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              className="text-center space-y-6 group"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-narthex-gold/10 border-2 border-narthex-gold flex items-center justify-center mx-auto transition-colors duration-300 group-hover:bg-narthex-gold/20"
              >
                <span className="font-serif text-3xl text-narthex-gold">
                  {person.initial}
                </span>
              </motion.div>
              
              <p className="font-sans text-narthex-cream font-semibold text-lg">
                {person.name}
              </p>
              
              <p className="font-sans text-narthex-gold text-sm uppercase tracking-wider">
                {person.role}
              </p>
              
              <p className="font-sans text-narthex-gray text-base md:text-lg leading-relaxed italic">
                "{person.quote}"
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
    
    {/* Application/Next Steps section continues... */}
  </>
);
```

---

## 🎬 ANIMATION SHOWCASE

**What users will experience:**

1. **Scroll to section** → Heading gently fades in and rises
2. **Continue scroll** → Three cards appear sequentially (left, center, right) with smooth fade and slide
3. **Hover on avatar** → Circle enlarges slightly, rotates a bit, background lightens
4. **Smooth, professional** → Not flashy, not distracting, just polished

**The result:** Feels premium, modern, and thoughtfully designed.

---

## 🚀 FINAL NOTES

### **Why This Section Works:**

**1. Social Proof** - Shows diverse professional types who thrive here
**2. Relatable** - Easier to see yourself than in empty office photos
**3. Design Quality** - Matches the elevated aesthetic of your site
**4. Animations** - Subtle motion adds polish and modernity
**5. Scalable** - Easy to replace with real testimonials later

### **Implementation Priority:**

1. Install Framer Motion if needed
2. Import at top of Work.tsx
3. Define personas array
4. Remove "Tour the Space" section
5. Add new section with animations
6. Test on desktop and mobile
7. Verify animations feel smooth

---

**This will elevate the Work page significantly. The animations are tasteful, the design is clean, and the social proof is compelling.** 

**Ready to implement? 🎯✨**
