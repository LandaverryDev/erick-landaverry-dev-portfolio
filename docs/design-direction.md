# Design Direction

## Purpose

Translate the approved brief into a clearer design direction for Erick Landaverry’s portfolio. This is a frontend-developer portfolio first, not a generic resume site. The design should feel like an experienced web leader built it: technical, modern, fast, and deliberate.

The job of the design is to help recruiters and hiring managers answer three questions quickly:

- Who is Erick?
- What kind of work does he lead or ship?
- Why should I keep reading?

## Visual Concept

The visual concept is a lean technical portfolio with editorial polish. It should feel like a blend of product UI, engineering portfolio, and digital strategy presentation.

The site should communicate:

- senior frontend craft
- WordPress depth
- full-site ownership
- leadership across in-house, agency, small business, and enterprise contexts
- enough personality to stand out without feeling gimmicky

The experience should not feel like a template, a brochure, or a design experiment. It should feel like a refined work surface that happens to be a portfolio.

## Surface System

Use a mixed-surface system with controlled contrast.

- Base surfaces should alternate between light and dark tonal zones.
- Use deep neutral panels to anchor credibility and lighter surfaces to keep the page breathable.
- Avoid a purely dark layout and avoid a purely white marketing-site look.
- Keep surface changes purposeful: hero, proof sections, feature blocks, and supporting sections should feel distinct without becoming noisy.
- Use subtle depth through borders, soft shadows, glows, or layered gradients instead of heavy decoration.

Recommended surface behavior:

- Hero: slightly more dramatic and atmospheric.
- Proof sections: cleaner and more structured.
- Project cards: crisp surfaces with controlled emphasis on featured work.
- Resume and contact: straightforward, readable, and utility-forward.

## Typography Strategy

Typography should look technical, modern, and readable at a glance.

- Use a clean sans-serif family with a sharp, contemporary feel.
- Do not choose a font that looks generic or overused in default SaaS templates.
- Use strong contrast between headings and body copy.
- Headings should feel confident and slightly condensed in tone.
- Body copy should stay open and highly legible.
- Metadata, labels, and supporting text should be smaller, tighter, and more structured than body copy.

Type hierarchy should do most of the work:

- large, clear hero headline
- short supporting summary
- section titles with strong rhythm
- compact metadata for role, stack, scope, and context
- readable body text with short line lengths

## Color Usage

Primary brand color: `#20A4F3`.

Use the blue as a signal color, not a flood color.

- Use it for links, primary actions, active states, key highlights, skill emphasis, and selected accent moments.
- Use neutral surfaces for most of the layout.
- Keep contrast clean and accessible.
- Use the blue sparingly in motion states so it feels intentional and technical.
- Pair it with dark charcoal, off-white, and muted cool grays rather than saturated secondary colors.

Color behavior should support hierarchy:

- blue means action or emphasis
- neutral surfaces mean structure
- soft gradients mean atmosphere
- reserved accent color only where something deserves attention

## Motion Language

Motion should feel like a polished frontend implementation, not decoration.

Use motion for:

- hero load-in
- section reveal
- staggered content entrance
- hover and focus states
- subtle emphasis on featured projects
- transitions between cards, tabs, or resume sections

Motion rules:

- keep it smooth and purposeful
- avoid long delays
- avoid gimmicky parallax or novelty effects
- respect reduced-motion settings
- preserve legibility while animating
- keep mobile motion lighter than desktop motion

The feel should be techy, but not restless. A few strong animation decisions are better than constant movement.

## Homepage Direction

The homepage should read like a strong pitch, not a long scroll of generic sections.

Recommended flow:

1. Hero with role positioning, short summary, and clear actions.
2. Immediate proof block with experience range or capability highlights.
3. Featured projects preview.
4. Experience summary or timeline.
5. Skills grouped by discipline.
6. Testimonials placeholder section.
7. Resume preview or summary block.
8. Contact call to action.

Homepage content should emphasize:

- web leadership and digital strategy, grounded in web development
- breadth across in-house, agency, small business, and enterprise
- technical implementation, integrations, and ownership
- frontend and WordPress credibility

The first screen should make the audience confident that Erick can own a site, collaborate with stakeholders, and ship work that holds up in production.

## Page-by-Page Guidance

### Home

- Lead with a clear role statement that balances leadership and web development.
- Use a short supporting paragraph that references cross-environment experience and technical range.
- Include two actions: view projects and contact.
- Add a compact trust strip or capability highlights.
- Bring projects into view early.

### About

- Tell the story of how Erick works, not just what he has done.
- Focus on breadth, ownership, and the ability to work with teams of different sizes.
- Keep the tone direct and credible.
- Avoid soft personal-brand filler.

### Projects

- Show six projects.
- Make the strongest projects visually stand out through size, ordering, or emphasis.
- Every project should show role, stack, context, and outcome.
- Make the cards feel like portfolio evidence, not ad tiles.
- Keep the interaction clean on mobile.

### Experience

- Present experience as a structured timeline or stacked history system.
- Show company, role, timeframe, scope, and a few concrete bullets.
- Highlight leadership, integrations, ownership, and adaptability.
- Keep it scannable for quick recruiter review.

### Skills

- Group skills by discipline: frontend, WordPress, integrations, tooling, leadership.
- Use this as a credibility map, not a raw list dump.
- Visual treatment should feel organized and compact.

### Testimonials

- Design the section now even though the quotes will come later.
- Use a layout that can support three short testimonials.
- Keep the visual treatment restrained so it reads as proof, not hype.

### Resume

- Treat the resume as its own designed reading experience.
- Do not embed a PDF inline.
- Present the resume in sections that feel intentional and animated.
- Keep the page aligned with the portfolio system, but more utility-driven.

### Contact

- Use a minimal contact form: name, email, message.
- Show email and LinkedIn as direct contact options.
- Keep the form visually simple and easy to complete.
- Make the CTA easy to find from multiple points in the site.

## Component Priorities

Design and refine these components first:

- hero
- primary and secondary buttons
- capability or trust highlights
- featured project card
- standard project card
- experience timeline item
- skills group block
- testimonial card
- resume section block
- contact form block
- navigation and mobile navigation
- footer

Lower-priority visual details:

- decorative background accents
- subtle separators
- small icon treatments
- secondary badge styles

## Practical Handoff Rules

The design must be usable by development without interpretation.

- Keep spacing rules consistent across sections.
- Use reusable component patterns instead of one-off layouts.
- Define clear states for hover, focus, active, loading, and empty content.
- Keep the system simple enough for a readable implementation.
- Leave room for future additions like more testimonials, scripts, or sections.
- Make sure the layout still works when images are placeholders.
- Design for a headless WordPress + Next.js build with strong performance requirements.

Implementation should not require the developer to invent the visual system from scratch. The design direction should be specific enough that the build can proceed with confidence.

## Final Design Bar

The finished site should feel:

- lean
- modern
- animated
- techy
- credible
- fast
- easy to scan
- senior enough for leadership roles
- technical enough for frontend and WordPress roles

If a visual choice does not improve clarity, credibility, or hiring outcomes, it should not be added.
