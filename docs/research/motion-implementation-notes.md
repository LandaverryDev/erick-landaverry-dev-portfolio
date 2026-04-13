# Motion Implementation Notes

## Purpose

This note is for the designer and developer working on Erick Landaverry's homepage. The goal is to make the page feel more interactive, more modern, and more technical without hurting readability or Core Web Vitals.

The current direction should feel:
- lean, modern, and tech-forward
- more spacious than the earlier wireframe
- interactive at the section level, not just with small button hover states
- polished enough to signal senior web craft

The homepage should not feel like a compact stack of blocks. It should feel like a guided experience with clear visual rhythm, breathing room, and distinct transitions between major sections.

## What Needs To Feel More Interactive

### 1. Section Entry And Exit

Each major section should have a distinct entrance moment. The page should not simply scroll from one static block into the next.

Recommended approach:
- use staggered fade and translateY reveals for section content
- vary the reveal timing slightly by section to avoid repetition
- let background treatment change as the user moves through the page
- use soft overlap or separator shapes between sections to create visual continuity

Good targets for section-level motion:
- hero introduction
- proof strip
- featured projects
- experience / leadership section
- testimonials
- contact call to action

### 2. Featured Projects

The project cards should feel alive without becoming flashy.

Recommended interactions:
- card lift on hover
- subtle media zoom or parallax on thumbnail hover
- a small accent line or border glow that responds to hover
- a short transition on metadata reveal, such as role or outcome

The project cards should feel more like interactive case-study previews than simple list items.

### 3. Hero Treatment

The hero should create an immediate technical impression.

Recommended elements:
- a layered background with soft gradients or noise
- one strong motion accent near the headline or visual module
- an animated trust signal, such as a moving metric row or subtle text ticker
- a visual rhythm that suggests systems, precision, and engineering maturity

Avoid making the hero feel like a generic marketing banner.

### 4. Proof And Credibility

The proof strip, skills, and trust content should feel deliberate and compact, but not cramped.

Use motion for:
- icon or badge entrance
- sequential reveal of proof items
- subtle highlight states on hover or focus

The proof elements should reinforce legitimacy, not distract from the core message.

### 5. Resume And Leadership Content

The resume-related sections should have more editorial structure and slightly slower pacing.

Recommended treatments:
- timeline or stacked milestone layout
- animated divider or progress-style anchor line
- controlled reveal of role blocks and achievements
- less motion than the hero, but more structure than a plain list

This section should communicate depth and order, not decoration.

## Spacing And Rhythm

The earlier version feels too compact because the sections are too close together and the transitions are too similar.

Spacing guidance:
- increase vertical breathing room between major sections
- use larger section padding on desktop, tighter but still generous spacing on mobile
- alternate full-width and inset section treatments so the page does not feel like one continuous column
- let visual density vary by section instead of keeping everything equally tight

Practical rule:
- if a section is persuasive or content-heavy, give it more space and a clearer visual frame
- if a section is supporting proof, keep it concise but visually distinct

## Motion Patterns To Use

Use a small set of motion patterns consistently.

Recommended patterns:
- fade + rise for content entry
- staggered child animation for lists and cards
- subtle scale and glow on hover
- background shift between sections
- soft pinning or sticky context for one or two key areas only

Motion should support hierarchy. It should not compete with the content.

## Motion Patterns To Avoid

Do not use:
- constant looping movement
- excessive parallax on every section
- heavy scroll-linked animation across the whole page
- large text transformations that make the page hard to scan
- animation that delays access to content

If a motion idea is visually interesting but costs readability or performance, it should be reduced or removed.

## Performance Constraints

This site needs to pass Core Web Vitals and remain responsive on mobile. Motion must be implemented with that constraint first.

Hard requirements:
- respect `prefers-reduced-motion`
- keep animation work on `transform` and `opacity` where possible
- avoid layout thrash from JS-driven animation
- avoid large scroll libraries unless there is a clear need
- keep image, video, and background asset sizes controlled
- do not animate expensive properties like `height`, `width`, `top`, `left`, or `box-shadow` in ways that trigger repaint storms

Budget guidance:
- the homepage should feel animated, but not script-heavy
- motion should not create a noticeably delayed first render
- mobile should receive a lighter motion profile than desktop
- any extra flourish must be justified by the hiring value of the section

## Implementation Guidance For Next.js

The developer should build motion in a way that stays readable and maintainable.

Recommended implementation style:
- keep animations local to components
- prefer CSS transitions and keyframes for simple behavior
- use a motion library only where the pattern is clearly richer than CSS alone
- isolate animation logic from data fetching and content rendering
- keep section components simple enough that the owner can read and edit them later

The code should not feel like a demo project. It should feel like a professional site that can be maintained easily.

## Implementation Guidance For WordPress

Because the site is headless, motion should not depend on heavy backend payloads.

Keep the CMS output lean:
- return only the fields needed for the section
- avoid nested data that the frontend has to reshape heavily
- keep ACF groups simple and predictable
- do not use motion to compensate for poor content modeling

The frontend should receive content in a shape that can render quickly and cleanly.

## Specific Guidance For Erick's Site

Erick's site should feel like a web leader's portfolio, not a generic resume site.

That means:
- motion should reinforce technical maturity
- section transitions should feel intentional and calm, not noisy
- the color system, especially `#20A4F3`, should appear in controlled accents rather than everywhere
- the page should feel like it has enough depth for a senior frontend or web leadership audience
- the visual system should have more presence and more breathing room than the earlier compact wireframe

The ideal feeling is:
- interactive enough to show skill
- restrained enough to stay credible
- polished enough to look current in 2026

## Suggested Build Order

1. Define section-level motion rules for hero, proof strip, projects, and contact.
2. Adjust spacing and section height so the page breathes.
3. Add hover and reveal states to projects and proof items.
4. Add a minimal scroll-based reveal system for large blocks.
5. Verify reduced-motion behavior and mobile performance.
6. Test with Lighthouse or similar tooling before expanding motion further.

## Acceptance Check

The homepage motion work is on target if:
- the page feels more spacious than the wireframe
- each section feels distinct
- the project area feels interactive
- motion improves the perception of quality without delaying access
- the site remains readable with motion disabled
- Core Web Vitals are not sacrificed for visual polish
