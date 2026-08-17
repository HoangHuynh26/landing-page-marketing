## Business Context
- **Business**: A professional digital marketing agency.
- **Location**: Perth, Western Australia (serving local businesses).
- **Target audience**: Business owners, marketing managers, and decision-makers in Perth and WA — typically 30–55 years old, value trust, transparency, and proven results over flashy trends.
- **Goal**: Drive consultation bookings. Every design decision must guide the user toward "Book a Consultation".

## Core Visual Direction
The interface must feel:
- **Modern**: Clean lines, intentional whitespace, current design standards (2026).
- **Premium**: High-quality but understated. Think "boutique consultancy" not "luxury hotel". No gold, no marble textures.
- **Professional**: Conservative enough for a 50-year-old business owner to trust, modern enough for a 35-year-old marketing manager to respect.
- **Clean**: Uncluttered. Every element must earn its place.
- **Transparent (Visual)**: Glassmorphism used sparingly and lightly. The user should feel they can "see through" the UI layer to a calm, professional background — but text must ALWAYS remain crisp and readable. NO heavy blur. NO frosted glass that obscures content.
- **Trustworthy**: Stable, predictable layout. No sudden movements. No gimmicks.
- **Conversion-focused**: Clear visual hierarchy directing eye toward CTAs. Social proof visible. Friction minimized.
- **Easy to read**: High contrast. Generous line-height. Comfortable font sizes.
- **Visually engaging**: Subtle depth through light shadows and soft glass layers, not through color chaos or animation overload.
- **Not excessive**: Maximum 3 colors in primary palette. No neon. No complex gradients. No decorative 3D elements.

## What the Design Must NOT Look Like
- Gaming website (no dark neon, no aggressive angles, no RGB).
- Cryptocurrency website (no futuristic glow, no "to the moon" energy).
- Futuristic neon interface (no cyan/pink gradients, no holographic effects).
- Excessive 3D website (no WebGL hero, no 3D models, no depth that distracts).
- Over-animated website (no parallax scrolling, no text that flies in from random directions, no bouncing elements).
- Overly colorful template (no rainbow accents, no multi-colored icons, no gradient buttons).

---

## 1. Design Philosophy
- **"Calm Confidence"**: The design speaks softly but carries authority. It doesn't shout to get attention.
- **"Transparent by Design"**: Visual transparency (light glass layers) reinforces the brand promise of honesty and clarity. But transparency is a garnish, not the main course.
- **"Content First"**: Typography and whitespace do the heavy lifting. Effects support, never compete.
- **"One Action Per Viewport"**: At any scroll position, the user's eye should know exactly what to do next.

---

## 2. Visual Hierarchy
1. **Hero headline** — largest, boldest, immediate attention.
2. **Primary CTA** — high contrast, prominent placement, repeated strategically.
3. **Social proof / Trust signals** — immediately visible after value proposition.
4. **Secondary CTA** — visible but subordinate.
5. **Body content** — readable, well-paced.
6. **Tertiary elements** — footer links, legal text.

Eye flow: Hero value → CTA → Trust proof → Service overview → Case study proof → Final CTA.

---

## 3. Typography System
- **Primary font (Headings)**: A modern, geometric sans-serif (e.g., Inter, Plus Jakarta Sans, or Satoshi). Clean, neutral, confident. NO decorative serifs for headings.
- **Secondary font (Body)**: Same family as headings for consistency. Use weight and size to create hierarchy, not font switching.
- **Scale**:
  - Hero H1: 48–64px (desktop), 36–44px (mobile), weight 700, line-height 1.1, letter-spacing -0.02em.
  - H2: 36–40px, weight 600, line-height 1.2.
  - H3: 24–28px, weight 600, line-height 1.3.
  - Body: 16–18px, weight 400, line-height 1.6–1.7.
  - Small/Caption: 14px, weight 400, line-height 1.5.
- **Color**: Headings `#0F172A` (slate-900). Body `#334155` (slate-700). Muted text `#64748B` (slate-500).
- **Max width for text blocks**: 65 characters per line for optimal readability.

---

## 4. Color System
**Palette strategy**: Warm neutral base + single cool accent. Conveys trust (warmth) and competence (cool accent).

- **Background Primary**: `#F8FAFC` (very light cool gray — almost white, easy on eyes).
- **Background Secondary**: `#FFFFFF` (pure white for cards on top of primary background).
- **Background Tertiary (subtle depth)**: `#F1F5F9` (slate-100, used for alternating sections).
- **Text Primary**: `#0F172A` (slate-900).
- **Text Secondary**: `#334155` (slate-700).
- **Text Muted**: `#64748B` (slate-500).
- **Accent Primary**: `#2563EB` (blue-600 — trustworthy, professional, conversion-friendly. NOT neon, NOT gradient).
- **Accent Hover**: `#1D4ED8` (blue-700).
- **Accent Subtle**: `#DBEAFE` (blue-100 — for badges, light backgrounds).
- **Success**: `#059669` (emerald-600 — for positive indicators only).
- **Border**: `#E2E8F0` (slate-200).
- **Glass Border**: `rgba(255, 255, 255, 0.4)` (subtle, only on glass elements).
- **NO other accent colors.** No orange, no purple, no pink. Blue + neutrals only.

---

## 5. Background System
- **Base**: Solid `#F8FAFC` for the entire page. No full-page gradients. No animated backgrounds.
- **Section alternation**: Every 2nd section may use `#FFFFFF` or `#F1F5F9` to create subtle rhythm.
- **Hero background**: 
  - Option A: Solid `#F8FAFC` with a very subtle, large-scale abstract shape in `#E2E8F0` (10% opacity) positioned behind text.
  - Option B: High-quality photograph of Perth business district or WA landscape, heavily desaturated and overlaid with `rgba(248, 250, 252, 0.92)` so it feels local but doesn't compete with text.
- **NO pattern overlays.** NO mesh gradients. NO noise textures.

---

## 6. Glassmorphism Rules (CRITICAL — Read Carefully)
Glassmorphism is used **sparingly** as a premium accent. It must feel "transparent" but NEVER obscure content.

**Allowed on**:
- Sticky navigation bar (when scrolled).
- Floating CTA cards.
- Modal/dialog overlays.
- Tooltips.

**Strict specifications**:
- `background`: `rgba(255, 255, 255, 0.75)` — MUST be at least 75% opaque. NO 0.2, NO 0.3.
- `backdrop-filter: blur(8px)` — EXACTLY 8px. NO 16px. NO 24px. 8px is enough to suggest depth without obscuring.
- `border`: `1px solid rgba(255, 255, 255, 0.4)`.
- `box-shadow`: `0 4px 24px rgba(0, 0, 0, 0.04)` — soft, not dramatic.
- **Dark text on glass MUST maintain WCAG AA contrast** (4.5:1 minimum). If background behind glass is complex, add a subtle inner gradient or ensure the glass layer is opaque enough.
- **Maximum 3 glass elements visible at once** to prevent performance issues and visual clutter.
- **NEVER use glassmorphism for**: full-section backgrounds, hero backgrounds, text containers over busy images (unless image is heavily overlaid).

---

## 7. Card Design
- **Background**: `#FFFFFF`.
- **Border**: `1px solid #E2E8F0`.
- **Border radius**: `12px` (consistent across all cards).
- **Padding**: `32px` (desktop), `24px` (mobile).
- **Shadow**: `0 1px 3px rgba(0, 0, 0, 0.05)` — barely visible, creates subtle lift.
- **Hover shadow**: `0 4px 12px rgba(0, 0, 0, 0.08)` — gentle lift on hover.
- **NO glassmorphism on standard cards.** Cards are solid white for maximum readability.
- **Icon containers inside cards**: `48px × 48px`, rounded `12px`, background `#F1F5F9`, icon color `#2563EB`.

---

## 8. Border Rules
- **Standard**: `1px solid #E2E8F0`.
- **Dividers**: `1px solid #E2E8F0`.
- **Glass elements only**: `1px solid rgba(255, 255, 255, 0.4)`.
- **NO border-radius on**: full-width sections, images (unless specified).
- **Input borders**: `1px solid #CBD5E1`, transition to `#2563EB` on focus.

---

## 9. Shadow Rules
Shadows must be **invisible at first glance, noticeable when removed**.
- **Card default**: `0 1px 3px rgba(0, 0, 0, 0.05)`.
- **Card hover**: `0 4px 12px rgba(0, 0, 0, 0.08)`.
- **Button hover**: `0 2px 8px rgba(37, 99, 235, 0.25)`.
- **Navigation (scrolled)**: `0 1px 3px rgba(0, 0, 0, 0.05)`.
- **NO colored shadows** (no blue glow, no neon shadow).
- **NO large diffuse shadows** (no 0 20px 40px).

---

## 10. Border Radius
- **Buttons**: `8px` (slightly rounded, professional, not pill-shaped).
- **Cards**: `12px`.
- **Inputs**: `8px`.
- **Images**: `12px` (if contained in cards) or `0` (if full-width).
- **Avatars**: `50%` (circular).
- **Tags/Badges**: `6px`.
- **NO fully rounded (pill) buttons for primary CTAs.** Pill buttons feel too casual/SaaS-generic.

---

## 11. Spacing System
Based on `8px` grid.
- **Section padding**: `96px` top/bottom (desktop), `64px` (tablet), `48px` (mobile).
- **Content max-width**: `1200px` centered with `24px` side padding (mobile: `16px`).
- **Between elements in a section**: `48px`.
- **Between related items**: `24px`.
- **Between text blocks**: `16px`.
- **Card internal padding**: `32px`.
- **Generous whitespace is non-negotiable.** When in doubt, add more space.

---

## 12. Button System
- **Primary Button (Book a Consultation)**:
  - Background: `#2563EB`.
  - Text: `#FFFFFF`, 16px, weight 600.
  - Padding: `14px 28px`.
  - Border radius: `8px`.
  - Hover: Background `#1D4ED8`, shadow `0 2px 8px rgba(37, 99, 235, 0.25)`, transform `translateY(-1px)`.
  - Active: transform `translateY(0)`.
  - Focus: `0 0 0 3px rgba(37, 99, 235, 0.3)` outline.

- **Secondary Button (View Case Studies)**:
  - Background: `#FFFFFF`.
  - Border: `1px solid #E2E8F0`.
  - Text: `#334155`, 16px, weight 600.
  - Padding: `14px 28px`.
  - Hover: Background `#F8FAFC`, border `#CBD5E1`.
  - Focus: same as primary but with gray outline.

- **Tertiary Button (Text link)**:
  - Text: `#2563EB`, weight 500, with subtle underline on hover.
  - No background, no border.

- **Button states must always be clearly distinguishable.** No disabled styles that look like active states.

---

## 13. CTA Hierarchy
- **Primary CTA**: "Book a Consultation" — blue filled button. Appears:
  - Hero section (prominent, next to headline).
  - Sticky navigation (appears after scrolling past hero, compact version).
  - After case studies section.
  - Footer.
  - Exit-intent modal (if applicable).
- **Secondary CTA**: "View Case Studies" — white outlined button. Appears:
  - Hero section (next to primary, subordinate).
  - Service section (after service descriptions).
- **Tertiary CTA**: "Learn More" text links within service cards.
- **Visual weight ratio**: Primary should draw 3x more attention than Secondary. Achieve this through color contrast, size, and surrounding whitespace.

---

## 14. Form Design
- **Input fields**:
  - Height: `48px`.
  - Background: `#FFFFFF`.
  - Border: `1px solid #CBD5E1`, radius `8px`.
  - Padding: `12px 16px`.
  - Font: 16px (prevents iOS zoom).
  - Placeholder: `#94A3B8`.
  - Focus: Border `#2563EB`, shadow `0 0 0 3px rgba(37, 99, 235, 0.1)`.
  - Error: Border `#DC2626`, text `#DC2626`, subtle shake animation (optional).
- **Labels**: 14px, weight 500, `#334155`, margin-bottom `6px`.
- **Helper text**: 14px, `#64748B`.
- **Submit button**: Full-width on mobile, auto-width on desktop. Primary button style.
- **Form containers**: White card, `32px` padding, `12px` radius.
- **NO glassmorphism on forms.** Forms require maximum readability and accessibility.

---

## 15. Calendar Design (Booking)
- **Calendar widget** (for consultation booking):
  - Container: White card, solid background.
  - Selected date: `#2563EB` background, white text.
  - Available date: `#FFFFFF` background, `#0F172A` text, hover `#F1F5F9`.
  - Unavailable date: `#F1F5F9` background, `#94A3B8` text, not clickable.
  - Time slots: Button group style, selected state matches primary button.
  - Current month header: 18px, weight 600.
  - Navigation arrows: `#334155`, hover `#0F172A`.
- **NO glassmorphism on calendar.** Users need to read dates clearly.

---

## 16. Navigation Design
- **Initial state (top of page)**:
  - Transparent background, no border.
  - Logo left, links center, CTA right.
  - Links: 15px, weight 500, `#334155`, hover `#0F172A`.
  - Height: `72px`.
- **Scrolled state**:
  - Glassmorphism bar: `background: rgba(255, 255, 255, 0.85)`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid rgba(255, 255, 255, 0.4)`.
  - Shadow: `0 1px 3px rgba(0, 0, 0, 0.05)`.
  - Height: `64px` (slightly compact).
  - CTA button appears in nav if it wasn't there initially, or remains visible.
- **Mobile**: Hamburger menu, full-screen overlay with white background (NOT glassmorphism — readability first), links centered vertically, 24px size.
- **Sticky behavior**: Nav sticks after scrolling `100px`.

---

## 17. Hero Design
- **Layout**: Two-column on desktop (60/40 or 55/45). Text left, image right. Single column on mobile (text first, image second).
- **Text block**:
  - Eyebrow text: 14px, uppercase, tracking `0.05em`, `#2563EB`, weight 600. Example: "PERTH DIGITAL MARKETING EXPERTS".
  - Headline: H1, 56px, weight 700, `#0F172A`. Example: "Grow Your Business with Data-Driven Marketing."
  - Subheadline: 18px, `#334155`, line-height 1.6, max-width `540px`. Example: "We help Perth businesses attract more customers through SEO, paid advertising, and conversion-focused websites."
  - CTA group: Primary + Secondary buttons, gap `16px`, margin-top `32px`.
  - Trust micro-bar below CTAs: 5-star rating + "Trusted by 50+ WA businesses" in 14px, `#64748B`.
- **Image**:
  - High-quality, authentic-looking image. Prefer: professional team photo, modern Perth office, or abstract business concept with WA color palette (soft blues, warm neutrals).
  - Border radius: `12px`.
  - NO lazy loading on hero image (load immediately).
  - Subtle shadow: `0 4px 24px rgba(0, 0, 0, 0.06)`.
- **Background**: `#F8FAFC` solid. Optional: very subtle, oversized, low-opacity geometric shape behind text block (`#E2E8F0`, 5% opacity).
- **NO video background. NO slider/carousel. NO typewriter effect on headline.**

---

## 18. Service Card Design
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile. Gap `24px`.
- **Card structure**:
  - Icon container (48px, `#F1F5F9` bg, `#2563EB` icon).
  - H3: Service name (24px, weight 600).
  - Body: 2–3 lines description (16px, `#334155`).
  - Link: "Learn More →" (text link style).
- **Card style**: White background, `12px` radius, `1px #E2E8F0` border, `32px` padding.
- **Hover**: Shadow increases, `translateY(-2px)`, border color `#CBD5E1`. Transition `200ms ease-out`.
- **NO glassmorphism on service cards.**

---

## 19. Case Study Design
- **Layout**: Alternating left/right two-column layout (image + text). Creates visual rhythm.
- **Image side**:
  - Aspect ratio 16:10 or 4:3.
  - Radius `12px`.
  - Subtle shadow.
  - Label badge on image: "SEO" / "PPC" / "Web Design" — blue-100 background, blue-700 text, `6px` radius, `8px 12px` padding.
- **Text side**:
  - Client name: 14px, uppercase, tracking wide, `#64748B`.
  - Headline: H3, result-focused. Example: "150% Increase in Organic Traffic for Perth Law Firm."
  - Metrics row: 3 key numbers in a row. Large number (32px, weight 700, `#2563EB`) + label (14px, `#64748B`).
  - Description: 16px, `#334155`.
  - CTA: "Read Full Case Study" (secondary button) or text link.
- **Background**: Alternate between `#FFFFFF` and `#F8FAFC` for each case study.

---

## 20. Testimonial Design
- **Layout**: Horizontal scroll on mobile, 3-column grid on desktop. OR single featured testimonial with large quote.
- **Card**:
  - White background, `12px` radius, `32px` padding.
  - Quote icon: `#DBEAFE`, 32px, decorative.
  - Quote text: 18px, `#334155`, line-height 1.6, italic or regular (choose one, be consistent).
  - Author: Avatar (48px circle) + Name (16px, weight 600) + Title/Company (14px, `#64748B`).
  - Star rating: `#F59E0B` (amber-500), 16px, above quote.
- **NO glassmorphism.** Solid cards for readability.
- **Hover**: None, or very subtle shadow increase. Testimonials shouldn't move.

---

## 21. FAQ Design
- **Layout**: Single column, max-width `720px`, centered.
- **Accordion style**:
  - Question row: 18px, weight 500, `#0F172A`, padding `24px 0`.
  - Border bottom: `1px solid #E2E8F0`.
  - Chevron icon right: `#64748B`, rotates 180° on open.
  - Answer: 16px, `#334155`, line-height 1.6, padding `0 0 24px 0`.
  - Background: Transparent (part of section background).
- **Open state**: Answer fades in (`200ms`), chevron rotates. NO height animation (avoid layout shift performance issues).
- **Hover on question**: Text color `#2563EB`, cursor pointer.

---

## 22. About Section Design
- **Layout**: Two-column. Text left, image right (or team grid).
- **Content**:
  - Eyebrow: "About Us" (same style as hero eyebrow).
  - Headline: H2, company story angle.
  - Body: 2–3 paragraphs, 18px, `#334155`.
  - Team stats: "10+ Years", "50+ Clients", "3 Office Locations" — displayed as a horizontal row with large numbers.
  - CTA: "Meet the Team" (secondary) or "Book a Consultation" (primary).
- **Team photos** (if included): Consistent aspect ratio, `12px` radius, grayscale or full color (specify and be consistent).
- **Background**: `#F1F5F9` (slate-100) to differentiate from surrounding sections.

---

## 23. Footer Design
- **Background**: `#0F172A` (dark slate). This is the ONLY dark section on the page. Creates a definitive "end" feeling.
- **Text**: `#F8FAFC` (headings), `#94A3B8` (links), `#64748B` (muted).
- **Layout**:
  - Top: Logo + tagline (left), Newsletter signup (right).
  - Middle: 3–4 link columns (Services, Company, Resources, Legal).
  - Bottom: Copyright + social icons.
- **Links**: Hover `#FFFFFF`, underline.
- **Social icons**: `#94A3B8`, hover `#FFFFFF`.
- **Newsletter input**: Dark background `#1E293B`, border `#334155`, white text.
- **NO glassmorphism in footer.** Solid dark for contrast and closure.

---

## 24. Responsive Design
- **Large desktop (1440px+)**: Max-width container `1280px`. Increase section padding to `120px`. Hero headline can go up to `64px`.
- **Desktop (1024–1439px)**: Standard as defined above. Container `1200px`.
- **Tablet (768–1023px)**: 
  - Two-column grids become single column or 2-column if space permits.
  - Section padding: `64px`.
  - Hero headline: `44px`.
  - Navigation: CTA may hide behind "Contact" link to save space.
- **Mobile (< 768px)**:
  - Single column everywhere.
  - Section padding: `48px`.
  - Hero headline: `36px`.
  - Cards full-width with `16px` side margin.
  - Buttons stack vertically (Primary on top, Secondary below), full-width.
  - Font sizes: Body 16px (minimum), Headings scale down proportionally.
  - Navigation: Hamburger menu.
  - NO hover effects (touch devices). Use active states instead.
  - Reduce glassmorphism usage on mobile (performance + touch readability). Nav becomes solid white when scrolled on mobile.

---

## 25. Animation Principles
**Philosophy: "The user should barely notice the animation, but the page should feel alive."**

Allowed animations:
- **Subtle fade-in**: Opacity `0 → 1`, duration `400ms`, ease-out. Used for text blocks entering viewport.
- **Fade-up**: `translateY(20px) + opacity 0 → translateY(0) + opacity 1`, duration `500ms`, ease-out. Used for cards, sections.
- **Staggered cards**: Children fade-up with `100ms` delay between each. Max stagger: 5 items.
- **Image reveal**: Image container clips from bottom (`clip-path` or `overflow hidden` with translate), duration `600ms`, ease-out.
- **Number counters**: Animate from 0 to final value over `1.5s` when scrolled into view. Use easing. Only for stats/metrics.
- **Hover transitions**: `200ms ease-out` for buttons, cards, links. NO bounce, NO spring physics.
- **Scroll reveal**: IntersectionObserver at `10%` visibility threshold. Animation plays once (no reverse on scroll up).

**Strictly FORBIDDEN**:
- Parallax scrolling.
- Text typing/scrambling effects.
- 3D transforms (rotateX, rotateY, perspective).
- Continuous looping animations (pulsing, floating, shaking).
- Page load sequences that block content.
- Animations longer than `600ms`.
- More than 3 animated elements in the viewport at once.

---

## 26. Loading States
- **Page load**: Content visible immediately. NO full-screen loader. NO spinner overlay.
- **Above-the-fold content**: Render-blocking not allowed. Critical CSS inline if needed.
- **Below-the-fold**: Lazy load with skeleton states (see below).
- **Button loading**: Button text replaced with inline spinner (16px, `#FFFFFF` on primary, `#2563EB` on secondary). Button disabled state. NO button text + spinner side by side.
- **Form submission**: Button loading state + field opacity reduced to `0.6`.

---

## 27. Skeleton States
- **For**: Case study images, testimonial avatars, blog post cards, metric numbers.
- **Appearance**:
  - Background: `#E2E8F0`.
  - Shimmer animation: `linear-gradient(90deg, #E2E8F0 0%, #F1F5F9 50%, #E2E8F0 100%)`, animated left-to-right, duration `1.5s`, infinite loop until loaded.
  - Border radius matches final element (12px for cards, 50% for avatars).
- **Transition to loaded**:
  - Skeleton fades out (`200ms`).
  - Real content fades in (`300ms`).
  - NO sudden pop-in.
- **Hero image**: NO skeleton. Load immediately or use a low-quality placeholder (LQIP) that blurs into final image.

---

## 28. Image Behavior
- **Hero image**: Load immediately (`fetchpriority="high"`). NO lazy loading.
- **Below-fold images**: Lazy load with native `loading="lazy"`.
- **Loading sequence**:
  1. Skeleton state visible.
  2. Image loads in background.
  3. Skeleton fades out (`200ms`).
  4. Image fades in (`300ms ease-out`).
- **Image treatment**:
  - All photos: Slightly desaturated (90–95%) for cohesive look. NO heavy filters.
  - Illustrations: If used, must be consistent style (line art or soft 3D, not mixed). Prefer photography over illustration for trust.
  - Icons: Lucide-style or Heroicons (24px stroke, 1.5px width, consistent).
- **Alt text**: Mandatory for all images. Descriptive, not decorative.

---

## 29. Accessibility Considerations
- **Contrast**: ALL text must meet WCAG AA (4.5:1 for normal text, 3:1 for large text). Glassmorphism areas must be tested against likely backgrounds.
- **Focus states**: All interactive elements have visible focus rings (`0 0 0 3px rgba(37, 99, 235, 0.3)`).
- **Keyboard navigation**: Tab order logical. Skip-to-content link.
- **Screen readers**: Proper heading hierarchy (H1 → H2 → H3, no skips). ARIA labels on icons and buttons.
- **Motion**: Respect `prefers-reduced-motion`. If enabled: disable fade-ups, disable number counters, show content immediately.
- **Touch targets**: Minimum `44×44px` on mobile.
- **Form errors**: Associated with inputs via `aria-describedby`. Error messages clear and specific.
- **Color independence**: Never rely on color alone to convey information (icons + text for states).

---

## Final Notes for Implementation
- The design should feel like a **conversation with a trusted advisor** — not a sales pitch, not a tech demo.
- Every time you consider adding an effect, animation, or color, ask: "Does this help the user trust us and book a consultation?" If no, remove it.
- **Glassmorphism is a spice, not the main dish.** Use it 3 times or fewer per viewport.
- When in doubt, choose the more conservative option. This audience values stability over novelty.