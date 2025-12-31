# IMMEDIATE TASKS - NARTHEX WEBSITE

## Priority 1: Image Swaps (CRITICAL)

### Homepage (pages/Home.tsx)
```
Line 11: Replace hero background
FROM: url('https://images.unsplash.com/photo-1548544149-4835e62ee5b3?auto=format&fit=crop&q=80')
TO: url('/images/cathedral-nave.jpg')

Line 82: Replace "Who This Is For" background
FROM: bg-[url('https://images.unsplash.com/photo-1590059591465-b46321287118?auto=format&fit=crop&q=80')]
TO: bg-[url('/images/gothic-archway.jpg')]
```

### Work Page (pages/Work.tsx)
```
Line 11: Replace hero background
FROM: bg-[url('https://images.unsplash.com/photo-1517502884422-41e157d4ed43?auto=format&fit=crop&q=80')]
TO: bg-[url('/images/vaulted-ceiling.jpg')]

Line 55: Replace pricing section background
FROM: bg-[url('https://images.unsplash.com/photo-1590059591465-b46321287118?auto=format&fit=crop&q=80')]
TO: bg-[url('/images/gothic-archway.jpg')]
```

### Support Page (pages/Support.tsx)
```
Line 11: Replace hero background
FROM: bg-[url('https://images.unsplash.com/photo-1576771329249-1433de8e88e8?q=80&w=2072&auto=format&fit=crop')]
TO: bg-[url('/images/st-joseph-stained-glass.jpg')]
```

---

## Priority 2: Navigation Enhancement

### Header Component (components/Header.tsx)
Make navigation sticky with backdrop blur:
```
Add to header element:
className="sticky top-0 z-50 bg-narthex-cream/95 backdrop-blur-sm border-b border-narthex-gray/10 transition-all"
```

---

## Priority 3: Contact Information

Update placeholder contact info:
- Email: hello@narthex.com → real email
- Phone: (405) 555-0123 → real phone
- Confirm address details

---

## Priority 4: Logo (Optional)

If you have a logo file, replace the Logo component (components/Logo.tsx) with the actual logo image.

---

## Priority 5: Actual Space Photos (When Available)

Replace placeholder office photos in:
- Homepage "See the Space" gallery (lines 109, 113)
- Work page "Tour the Space" gallery (lines 137-140)

---

## Testing Checklist

After making changes, verify:
- [ ] All images load correctly
- [ ] Images are properly faded/opacity applied
- [ ] Responsive design works on mobile
- [ ] Navigation is sticky and looks good
- [ ] All links work
- [ ] Contact forms/buttons have correct actions
- [ ] Typography renders correctly
- [ ] Colors match brand guidelines
- [ ] Animations are smooth

---

## Quick Wins (Nice to Have)

- Add favicon (create from logo)
- Add meta tags for SEO
- Optimize image file sizes
- Add Google Analytics (when ready)
- Set up contact form backend (when ready)

---

## Files to Review

Essential files to understand:
1. `DESIGN_BRIEF.md` - Complete design guidelines
2. `pages/Home.tsx` - Homepage structure
3. `pages/Work.tsx` - Membership page
4. `pages/Support.tsx` - Donor page
5. `pages/About.tsx` - About page
6. `components/Header.tsx` - Navigation
7. `components/Footer.tsx` - Footer
8. `components/Button.tsx` - Button component

---

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Ready to start? Begin with Priority 1 (image swaps) and work your way down!**
