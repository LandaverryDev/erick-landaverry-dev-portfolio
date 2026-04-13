# Homepage Design Spec

## Purpose

Translate the approved homepage brief into a concrete visual system that a designer or developer can use to build the homepage with minimal interpretation. This spec covers layout, surfaces, typography, spacing, buttons, project cards, proof treatment, CTA treatment, imagery, and motion for the homepage only.

The homepage is the primary hiring surface. It must establish identity, credibility, range, and next-step actions quickly.

## Design Intent

The homepage should feel:

- lean
- modern
- animated
- techy
- credible
- easy to scan

It should read like an experienced frontend developer built it with deliberate choices, not like a generic portfolio template.

## Core Visual System

### Surface Treatment

Use a mixed-surface system with controlled contrast.

- Alternate between light and dark tonal zones to separate sections.
- Use deep neutral panels for proof and featured content.
- Use lighter surfaces for readability and breathing room.
- Reserve the most atmospheric treatment for the hero.
- Keep surfaces crisp and structured, not heavily textured.

Recommended surface behavior by section:

- Hero: slightly dramatic, with layered depth and subtle glow.
- Proof strip: cleaner, tighter, more utility-driven.
- Featured projects: crisp cards on a restrained surface.
- Experience and skills: structured, editorial, easy to scan.
- Testimonials and contact: straightforward and readable.

### Color Usage

Primary accent: `#20A4F3`

Use the blue as a signal color, not a flood color.

- Use it for primary actions, links, active states, highlights, tags, and selected details.
- Keep the rest of the palette neutral and cool.
- Support the blue with charcoal, off-white, slate, and muted gray tones.
- Avoid secondary accent colors that compete with the brand blue.

### Typography Behavior

Typography should feel technical, contemporary, and highly legible.

- Use a clean sans-serif family with enough character to feel intentional.
- Hero headline should be large, bold, and compact enough to fit the screen without feeling crowded.
- Supporting copy should be short and readable with comfortable line length.
- Metadata should be smaller, tighter, and more structured than body copy.
- Section titles should be clear and rhythmic, not decorative.

Type hierarchy should follow this pattern:

- headline
- role/title line
- short supporting summary
- section eyebrow
- section title
- card metadata
- body copy

## Spacing Rhythm

Use a consistent, breathable spacing system.

- Keep generous outer padding on desktop and mobile.
- Separate sections with clear vertical rhythm rather than heavy dividers.
- Use tighter spacing inside cards and proof items.
- Keep content blocks aligned to a stable grid.
- Avoid excessive visual density in the hero and proof areas.

Suggested rhythm:

- large spacing between major sections
- medium spacing between section header and content
- compact spacing inside cards, tags, and metadata rows

The page should feel organized and deliberate even when several sections are stacked vertically.

## Homepage Structure

The homepage should follow this order:

1. Header / navigation
2. Hero
3. Capability / trust strip
4. Featured projects
5. Experience preview
6. Skills preview
7. Testimonials
8. Resume preview
9. Contact CTA / minimal form
10. Footer

## Section-by-Section Layout Guidance

### 1. Header / Navigation

Goal: keep navigation simple and premium.

- Logo or name mark on the left.
- Projects, Experience, Resume, and Contact in the nav.
- Keep the nav light and not overly tall.
- Use a subtle transparent or surface-backed treatment depending on scroll state.
- On mobile, collapse to a clean menu trigger with simple stacked options.

Behavior:

- Home can be present as the logo/mark.
- Resume must be visible in the nav.
- Contact must be visible in the nav.
- Active state should be clear but restrained.

### 2. Hero

Goal: establish identity and positioning immediately.

Layout:

- Strong role statement on the left or upper block.
- Short supporting summary below it.
- Two CTAs: primary `View Projects`, secondary `Contact`.
- Optional supporting visual or dummy image area to the side or behind, but only if it improves the composition.

Visual direction:

- Most atmospheric section on the page.
- Mixed surface with subtle depth, layered shapes, or a restrained gradient field.
- Hero should feel like a polished work surface, not a marketing splash.

Copy behavior:

- Lead with senior web leadership and digital strategy, grounded in web development.
- Keep the supporting line concise and readable.
- Do not overload the hero with badges or statistics.

### 3. Capability / Trust Strip

Goal: give fast proof after the hero.

Layout:

- Compact horizontal strip on desktop.
- Stacked or wrapped cards/tags on mobile.
- Each item should be short, scannable, and credible.

Recommended content themes:

- WordPress depth
- Full-site ownership
- CRO and VWO testing
- GA4 and GTM
- Integrations and automations
- Hosting, migrations, and deployment

Visual treatment:

- Tight cards, pills, or labeled proof blocks.
- Use the accent blue sparingly for emphasis.
- Keep the strip crisp and structured.

### 4. Featured Projects

Goal: show real work early and make the strongest work stand out.

Layout:

- One featured project can span wider or receive stronger emphasis.
- Remaining projects can sit in a grid or staggered card layout.
- All 6 launch projects must be represented in the larger system, even if only a subset is visible on the homepage.

Card content:

- Project title
- Short summary
- Role
- Core stack
- Outcome or impact

Card hierarchy:

- Strongest projects should feel larger or more visually prominent.
- Secondary projects should remain clearly clickable and equally legitimate.
- Avoid making the weaker cards look unimportant; use emphasis, not exclusion.

Card styling:

- Clean borders or subtle elevation.
- Consistent internal padding.
- A clear title hierarchy.
- Metadata row for role and stack.
- One short supporting line for impact or context.

### 5. Experience Preview

Goal: show scope and seniority without forcing a full resume read.

Layout:

- Short intro line.
- Timeline preview or stacked role blocks.
- One clear path to the resume page.

Visual treatment:

- More editorial and compact than the hero.
- Use structured spacing and simple rules or markers to organize roles.
- Keep the preview scannable in a few seconds.

### 6. Skills Preview

Goal: support technical credibility without becoming a keyword dump.

Layout:

- Grouped blocks by discipline.
- Recommended groups: frontend, WordPress, integrations, tooling, leadership.
- Use short labels and compact supporting items.

Visual treatment:

- Use cards, chips, or cluster blocks.
- Keep the group titles strong and the lists tight.
- Align groups to a consistent rhythm.

### 7. Testimonials

Goal: add supporting proof without overpowering the page.

Layout:

- Three testimonial cards.
- Short quotes only.
- Name, role, and company when available.

Visual treatment:

- Quiet, trustworthy, and restrained.
- Do not make the section look like a sales page.
- Design it now so real quotes can drop in later without rework.

### 8. Resume Preview

Goal: give resume-minded reviewers a clear path without turning the homepage into a document.

Layout:

- Short summary of resume value.
- Small preview of structured resume sections.
- Clear CTA to the resume page.
- Optional download CTA if appropriate.

Visual treatment:

- Simple and direct.
- Slightly utility-forward compared to the rest of the homepage.
- Keep the page consistent with the design system, but less decorative than the hero.

### 9. Contact CTA / Minimal Form

Goal: make it easy to act.

Required fields:

- Name
- Email
- Message

Supporting actions:

- Email link
- LinkedIn link

Visual treatment:

- Minimal form block with strong labels and comfortable spacing.
- Clear CTA hierarchy.
- Enough visual presence to feel intentional, but not heavy.

### 10. Footer

Goal: close cleanly and reinforce important paths.

Layout:

- Name or mark
- Secondary nav links
- Contact methods

Visual treatment:

- Simple, low-noise, and aligned with the rest of the system.

## Button Styling

Buttons should feel polished and technical.

Primary button:

- Filled or strongly accented using `#20A4F3`.
- High contrast text.
- Slightly rounded but not playful.
- Use for the main action on each section, especially `View Projects` and `Contact`.

Secondary button:

- Outlined or surface-based.
- Uses the same radius and type scale as the primary button.
- Should feel purposeful without competing with the primary CTA.

Button behavior:

- Clear hover shift.
- Clear focus state.
- Light motion on press or active state.
- Buttons should not look oversized or generic.

## Project Card Direction

Project cards are the most important reusable proof component on the homepage.

Card anatomy:

- Title
- Summary
- Role
- Stack
- Outcome

Card emphasis options:

- Featured card with larger footprint
- Subtle size variation
- Stronger image or visual block
- Accent border or surface treatment

Card behavior:

- Cards should feel like evidence, not marketing tiles.
- The design should support quick scanning and quick comparison.
- Keep internal spacing consistent across cards.
- On hover, use a subtle lift, border highlight, or accent glow rather than dramatic movement.

## Proof Strip Treatment

The proof strip should act as a fast credibility layer.

Recommended treatments:

- compact labeled rows
- small stat-style blocks
- capability pills with short descriptors

Rules:

- Keep it short.
- Avoid clutter.
- Use visual order to surface the strongest proof first.
- Make it legible at a glance on mobile.

## CTA Treatment

CTAs should be clear, direct, and repeated in a controlled way.

Primary CTA examples:

- View Projects
- Contact
- Download Resume

CTA rules:

- One primary CTA per major section is enough.
- Keep button hierarchy consistent across the page.
- Do not overuse competing CTA styles.
- Reuse the same button language in hero, resume preview, and contact sections.

## Imagery Treatment

Imagery should support the layout without becoming a dependency.

- Use dummy images until real assets are available.
- Keep image placeholders polished and consistent.
- Use imagery selectively for projects or hero support only where it helps the page.
- Avoid designs that break if the portrait or project image is missing.
- If using project imagery, keep thumbnails readable and tied to the project content.

Recommended image behavior:

- restrained cropping
- consistent aspect ratios
- clean borders or surface framing
- no overly decorative mockup frames unless they improve clarity

## Motion Notes

Motion should feel like a well-built frontend implementation.

Use motion for:

- hero entrance
- staggered section reveal
- proof strip reveal
- card hover states
- CTA feedback

Motion rules:

- smooth and purposeful
- short delays
- no gimmicky parallax
- no repetitive scroll tricks
- respect `prefers-reduced-motion`
- lighter motion on mobile than desktop

Recommended motion style:

- fade and rise on entrance
- subtle stagger between items
- small hover lift on cards
- accent highlight on active states

## Spacing and Layout Recommendations

These recommendations should keep the homepage easy to build:

- Use a consistent max-width for content sections.
- Keep section padding generous enough to breathe on desktop.
- Reduce horizontal complexity on mobile by stacking content in a single, readable column.
- Preserve clear vertical separation between hero, proof, projects, and supporting sections.
- Keep text blocks and card grids aligned to the same rhythm.

## Build Notes

This spec should be implementable without inventing the visual system from scratch.

The homepage should be built with:

- predictable spacing
- reusable section patterns
- consistent card treatment
- clear button hierarchy
- mixed-surface backgrounds
- subtle motion
- accessible contrast

If a visual choice does not improve clarity, credibility, or hiring outcomes, it should be left out.
