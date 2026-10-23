# Agent Guidelines & Design Contract

> **MANDATORY DIRECTIVE**: All coding agents working on this codebase MUST follow the design specifications defined in `DESIGN.md`, in full compliance with the [OpenDesign (nexu-io/open-design)](https://github.com/nexu-io/open-design) standard.

## Core Rules for All Future Work

1. **Read & Respect `DESIGN.md`**:
   - Before adding or modifying UI components, review `DESIGN.md` for color tokens, typography scales, spacing, radii, and component contracts.
   - Never introduce ad-hoc colors, arbitrary paddings, or un-themed fonts.

2. **Mobile-First UX Priority**:
   - The user primarily uses this application on **mobile phones** (iPhone / Android screens ~375px to 414px width).
   - Ensure all touch targets are **44px - 48px minimum height**.
   - Primary action controls must be placed in comfortable thumb-reach zones (bottom docks or compact action bars).
   - Horizontal swipeable ribbons must use smooth scrolling and hide scrollbars.

3. **Zero Scroll Jump & In-Place DOM Updates**:
   - In study and list views (Chuyên Đề, Câu Hỏi Tủ, Lịch Sử), selecting options or answering questions must update the target DOM element in-place (`updateStudyCardDOM`).
   - NEVER re-render the entire list of questions on an individual user interaction, as this destroys the student's scroll position on mobile.

4. **Interactive 3D Flip Card Standards**:
   - Flashcards must support 3D interactive flipping (`perspective: 1200px`, `transform-style: preserve-3d`), spaced repetition mastery rating (`❌ Chưa nhớ` vs `✅ Đã thuộc!`), and full persistence in `localStorage`.

5. **Audio & TTS Integrity**:
   - Explanations and flashcards must maintain high-quality Vietnamese text-to-speech support (`speakExplanation`).
   - Always sanitize and normalize medical abbreviations (`CrCl`, `eGFR`, `NSAIDs`, `ADR`, etc.) before speech synthesis.

6. **Balanced Question Options**:
   - Multiple-choice questions must keep option lengths balanced to avoid giving away correct answers.
