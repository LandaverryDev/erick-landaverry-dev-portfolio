# Figma Screen Plan

## Purpose

Translate the approved design brief and design direction into a Figma-ready execution plan. This document defines what screens should be designed, in what order, which shared components should exist, and what each frame must communicate.

This is not final UI copy or final visual polish. It is the screen architecture and design-production plan.

## What The Designer Should Produce

The design work should result in:

- one shared design system foundation
- one desktop set of core page frames
- one mobile set of core page frames
- reusable components and states
- enough detail for development handoff without guessing

## Figma Workspace Structure

Use one Figma file with this structure:

1. `00 Foundations`
2. `01 Components`
3. `02 Desktop Screens`
4. `03 Mobile Screens`
5. `04 Experiments`
6. `05 Handoff Notes`

If the designer wants to explore alternates, keep them in `04 Experiments` so production frames stay clean.

## Foundations

Create these foundations first before full screens:

- Color palette
- Typography scale
- Spacing scale
- Layout grid
- Border radius rules
- Surface rules
- Elevation and shadow rules
- Motion rules
- Interaction states

### Foundation Notes

- Primary accent: `#20A4F3`
- Surface system: mixed surfaces, not fully light or fully dark
- Overall feel: lean, modern, animated, tech-forward
- The system should support both clean recruiter readability and a more premium technical feel

## Core Components

Build these reusable components before full page detail:

- Navigation bar
- Mobile menu
- Primary button
- Secondary button
- Text link state
- Tag / badge
- Capability highlight item
- Featured project card
- Standard project card
- Experience timeline item
- Skills group block
- Testimonial card
- Resume section block
- Contact form block
- Footer

### Component States

For interactive components, define:

- default
- hover
- focus
- active
- disabled if applicable
- mobile behavior if different

## Screen Priority

Design screens in this order:

1. Home desktop
2. Home mobile
3. Projects desktop
4. Resume desktop
5. Contact desktop
6. About desktop
7. Experience desktop
8. Mobile variants for Projects, Resume, and Contact
9. Remaining page mobile variants

This order keeps the most important hiring surfaces moving first.

## Required Desktop Screens

### 1. Home

The homepage is the most important screen in the file.

Required sections:

- Header / nav
- Hero
- Proof / capability strip
- Featured projects preview
- Experience preview
- Skills preview
- Testimonials preview
- Resume preview
- Contact CTA
- Footer

What the screen must communicate:

- Erick operates at leadership level but still ships real web work
- Erick has frontend and WordPress credibility
- Erick has worked across in-house, agency, small business, and enterprise contexts
- Erick can own a site end to end

### 2. About

Required sections:

- Intro block
- Working style / leadership block
- Experience breadth block
- Personal positioning block
- CTA

What the screen must communicate:

- breadth without fluff
- technical leadership
- strategy plus implementation

### 3. Projects

Required sections:

- Page intro
- Project grid or stacked layout
- Featured project emphasis treatment
- Supporting project treatments
- CTA / contact bridge

Requirements:

- all 6 launch projects are represented
- strongest projects can be emphasized
- cards should show role, stack, context, and outcome

### 4. Experience

Required sections:

- Page intro
- Experience timeline or structured history
- Optional summary blocks if useful
- CTA

Requirements:

- easy to scan fast
- visibly structured
- not text-heavy

### 5. Skills

Required sections:

- Intro
- Grouped skills blocks
- Tooling / systems / leadership grouping if needed

Requirements:

- organized, not cluttered
- supports breadth without reading like a keyword dump

### 6. Testimonials

Required sections:

- Intro
- 3-card or equivalent supporting layout
- Placeholder quote content for now

Requirements:

- feels credible
- does not overpower projects or experience

### 7. Resume

Required sections:

- Resume page intro
- Summary block
- Experience blocks
- Skills / tools blocks
- Leadership / ownership highlights
- Download CTA

Requirements:

- do not embed the PDF
- make the page feel designed, not copied from a document
- support animation and readability

### 8. Contact

Required sections:

- Page intro
- Minimal form
- Direct contact methods
- Closing CTA / reassurance

Requirements:

- form fields: name, email, message
- direct contact options visible
- works cleanly with a WordPress form plugin like WPForms

## Required Mobile Screens

At minimum, produce mobile frames for:

- Home
- Projects
- Resume
- Contact

Then expand to:

- About
- Experience
- Skills
- Testimonials

### Mobile Rules

- Preserve hierarchy, not just content
- Keep spacing generous enough to feel premium
- Reduce motion complexity compared to desktop
- Keep forms, nav, and CTAs easy to use with touch

## Motion Plan

The designer should define motion intent in Figma notes or handoff blocks for:

- Hero entrance
- Section reveal rhythm
- Project hover / emphasis states
- Nav interactions
- Resume page section transitions
- CTA and link feedback

### Motion Constraints

- No motion should block reading
- No motion should reduce performance confidence
- Reduced-motion behavior should be noted

## Content Dependencies

The following content will affect final design detail:

- final homepage headline and summary
- final project ordering
- project thumbnails or placeholders
- approved testimonials
- final resume refinements
- final contact methods

The designer should use placeholders where needed, but the layout must not depend on perfect content to work.

## Handoff Expectations

Before development starts, the design file should make these things obvious:

- exact page hierarchy
- reusable component patterns
- spacing and type decisions
- hover and focus states
- mobile behavior
- motion intent
- which elements are placeholders vs real content

## Build Sequence After Design

Once the design file reaches handoff quality, development should build in this order:

1. foundations and tokens
2. navigation and shell
3. homepage sections
4. project system
5. experience and skills
6. resume page
7. contact page
8. testimonials
9. analytics/script slot

## Current Visual Guardrails

- Do not let the design drift into a generic corporate template
- Do not overuse the blue accent
- Do not make the site feel heavier than the content
- Do not sacrifice readability for motion
- Do not make the resume page more important than the portfolio
