# OpenDesign Design System Specification: Dược Lâm Sàng 80 Câu

> **Version**: 2.0.0 • **Standard**: [OpenDesign (nexu-io/open-design)](https://github.com/nexu-io/open-design)  
> **Domain**: Medical & Pharmaceutical Education • Real-time Exam & Active Recall System  
> **Brand Persona**: Clinically Precise, Trustworthy, Modern, Ultra-Fluid Mobile-First UX.

---

## 0. OpenDesign Core Framework Compliance

This project strictly adheres to the design specifications defined in [`nexu-io/open-design`](https://github.com/nexu-io/open-design):

1. **Web Interface Guidelines (Vercel Standards)**:
   - **Accessibility**:
     - All icon-only buttons include descriptive `aria-label` and `title`.
     - Decorative icons include `aria-hidden="true"`.
     - High-priority skip link at the top of the DOM: `<a href="#question-card" class="skip-link">`.
     - Dynamic updates (timer, progress) use `aria-live="polite"`.
   - **Focus States**:
     - Never use `outline: none` without focus ring replacement.
     - Accessible `:focus-visible` styling with 2px solid primary ring and 4px glow offset.
   - **Typography Rules**:
     - Proper ellipsis `…` used instead of three consecutive dots `...`.
     - Headings use `text-wrap: balance` to prevent orphaned words.
     - Metrics, scores, question numbers, and timers use `font-variant-numeric: tabular-nums`.
     - Formulas use true vertical stacked fractions (`.math-frac`), completely eliminating `/` slashes.
   - **Motion Discipline**:
     - Complete support for `@media (prefers-reduced-motion: reduce)`.
     - No generic `transition: all` — all transitions explicitly declare target properties (`opacity`, `transform`, `background-color`, `border-color`).
   - **Touch Ergonomics**:
     - Minimum 44px × 44px hit targets across all interactive mobile elements.
     - Floating sticky bottom dock for thumb-friendly one-handed examination.

---

## 1. Brand Tokens & Color Palette

The color system uses tailored HSL and semantic tokens, ensuring AAA accessibility, high contrast, and cohesive themes in both Light and Dark modes.

```css
:root {
  /* Primary: Medical Emerald (Precision, Correctness, Vitality) */
  --primary: #059669;
  --primary-hover: #047857;
  --primary-light: #ecfdf5;
  --primary-glow: rgba(5, 150, 105, 0.25);

  /* Secondary: Clinical Royal Blue (Authority, Education, Focus) */
  --secondary: #1e3a8a;
  --secondary-hover: #1e40af;
  --secondary-light: #eff6ff;
  --secondary-glow: rgba(30, 58, 138, 0.25);

  /* Semantic Alerts */
  --danger: #ef4444;
  --danger-hover: #dc2626;
  --danger-light: #fee2e2;

  --warning: #f59e0b;
  --warning-hover: #d97706;
  --warning-light: #fef3c7;

  /* Surfaces & Neutrals (Light Theme) */
  --bg-app: #f8fafc;
  --surface: #ffffff;
  --surface-alt: #f1f5f9;
  --border: #e2e8f0;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --text-dim: #94a3b8;
}

[data-theme="dark"] {
  --bg-app: #090d16;
  --surface: #111827;
  --surface-alt: #1f2937;
  --border: #374151;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --primary-light: rgba(5, 150, 105, 0.15);
  --secondary-light: rgba(30, 58, 138, 0.2);
  --danger-light: rgba(239, 68, 68, 0.15);
  --warning-light: rgba(245, 158, 11, 0.15);
}
```

---

## 2. Typography Rules & Hierarchy

Strict typographic hierarchy combining display headings with hyper-legible UI body text.

| Element | Font Family | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| **App Title** | `Outfit`, sans-serif | `1.15rem` (Mobile) / `1.4rem` (Desktop) | 800 | 1.15 | -0.02em |
| **Section Headings** | `Outfit`, sans-serif | `1.05rem` - `1.25rem` | 700 | 1.25 | -0.01em |
| **Question Body** | `Outfit`, sans-serif | `1.02rem` - `1.15rem` | 600–700 | 1.45–1.5 | Normal |
| **Option Text** | `Inter`, sans-serif | `0.92rem` - `0.98rem` | 500 | 1.45 | Normal |
| **Explanation Text** | `Inter`, sans-serif | `0.88rem` - `0.92rem` | 400–500 | 1.6 | Normal |
| **Badges & Metadata** | `Inter`, sans-serif | `0.72rem` - `0.8rem` | 700 | 1.0 | +0.03em |

---

## 3. Spatial System & Elevation

All spacing follows an 8-point rhythm (with 4px half-steps):
- **Base Grid**: `4px` (`0.25rem`), `8px` (`0.5rem`), `12px` (`0.75rem`), `16px` (`1rem`), `20px` (`1.25rem`), `24px` (`1.5rem`), `32px` (`2rem`).
- **Corner Radii Tokens**:
  - Small elements / Badges: `6px` (`--radius-sm`)
  - Cards & Option Items: `12px` (`--radius-md`)
  - Containers & Modals: `16px` (`--radius-lg`)
  - Filter Pills & Chips: `9999px` (`--radius-full`)
- **Elevation / Shadows**:
  - Flat/Subtle: `0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)`
  - Elevated Card: `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)`
  - Modal / Drawer: `0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.1)`

---

## 4. Mobile-First Ergonomics (OpenDesign Mobile Standards)

1. **Touch Target Size**:
   - Every interactive tap target (buttons, options, chips, navigation toggles) MUST meet a minimum of **44px × 44px** (preferably 48px on phones).
2. **One-Handed Thumb Zone**:
   - Primary flow actions are placed in a sticky bottom dock (`mobile-exam-dock` in Exam Mode, `fc-dock-controls` in Flashcards).
   - Bottom sheets and slide-up drawers for large grids (`#sidebar-palette.mobile-open`).
3. **Zero Scroll Jump Rule**:
   - When answering questions in list modes (Topic Study), **NEVER** re-render the whole page. Update only the tapped card via in-place DOM manipulation (`updateStudyCardDOM`), preserving the student's exact scroll position.
4. **Horizontal Swipeable Ribbons**:
   - Filter chips and chapter selectors must overflow horizontally with `-webkit-overflow-scrolling: touch`, hidden scrollbars, and smooth momentum.
5. **No Visual Layout Shift**:
   - Card bounding heights and option paddings must remain stable when revealing explanations.

---

## 5. Component Patterns

### A. 3D Flip Card (Interactive Recall)
- Card container with `perspective: 1200px` and `transform-style: preserve-3d`.
- Smooth `0.45s cubic-bezier(0.4, 0, 0.2, 1)` rotation.
- Front: Question text, Topic tag, Star bookmark toggle, Vietnamese TTS button.
- Back: High-yield Clinical Pearls in high-contrast emerald badge container.
- Thumb Controls: `[◀ Trước] [❌ Chưa nhớ] [✅ Đã thuộc!] [Tiếp ▶]`.

### B. Medical Question Card
- Option letter in circular badge (`width: 32px; height: 32px`).
- Active / Selected / Correct state: Emerald green border (`#059669`) with subtle green background tint (`rgba(5, 150, 105, 0.08)`).
- Incorrect state: Rose red border (`#ef4444`) with subtle red background tint.
- Explanation box: Slide-in with clinical source citation and Vietnamese TTS voice button.

### C. Sticky Navigation Header
- Ultra-compact height on mobile (`<= 85px` total including tabs).
- Visible countdown timer with pause/resume functionality.
- Dark/Light mode toggle switch.

---

## 6. Voice, Tone & Content System

- **Medical Rigor**: Terminology adheres strictly to Vietnamese Ministry of Health textbooks (Bộ Y tế) and Vietnamese Pharmacopoeia (Dược điển Việt Nam).
- **Audio TTS**: Natural Vietnamese pronunciation with automated normalization for clinical terms (`CrCl` -> *độ thanh thải Creatinine*, `NSAIDs` -> *thuốc kháng viêm không steroid*, `ADR` -> *tác dụng không mong muốn*, `HbA1c` -> *H b A một c*).
- **Celebratory Feedback**: Distinct audio chimes for click, success, and bookmarking.

---

## 7. OpenDesign Anti-Patterns (NEVER DO)

1. **NO Default Unstyled Controls**: Native unstyled `<input>`, `<select>`, `<button>` without custom borders, padding, and focus rings are strictly prohibited.
2. **NO Disproportionate Answer Lengths**: Correct answers must never be artificially longer or more detailed than distractors in multiple-choice exams.
3. **NO Hardcoded Fixed Layouts**: Never use fixed pixel widths on mobile viewports.
4. **NO Missing Visual Feedback**: Every tap must show an active scale or color transition.
5. **NO English TTS on Vietnamese Medical Content**: Always ensure genuine Vietnamese TTS voices or authenticated audio streams.
