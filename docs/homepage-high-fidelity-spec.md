# Homepage High-Fidelity Spec

## Purpose

This document is the last step before visual mockup for the homepage. It translates the approved homepage wireframe, design direction, homepage design spec, content draft, and Figma screen plan into a concrete build target for the designer and developer.

The homepage must read as a serious hiring surface for Erick Landaverry. It should feel like a polished web leadership page with strong frontend credibility, WordPress depth, and enough motion to signal technical maturity without turning into a showcase demo.

## Design Outcome

The finished homepage should communicate, in the first few seconds:

- Erick leads and ships web work end to end
- He has WordPress depth and full-site ownership
- He can operate across frontend, strategy, analytics, integrations, and compliance
- He has worked across in-house, agency, small business, and enterprise contexts
- He is credible for senior frontend, WordPress, web leadership, and digital strategy roles

The page should not feel like a generic portfolio, a personal brand landing page, or a corporate brochure.

## Core Frame

Use one desktop homepage frame and one mobile homepage frame as the visual source of truth for the first mockup pass.

The layout should stay aligned to the existing section order:

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

## Visual System

### Surface Behavior

Use a mixed-surface system that alternates between cool light surfaces and deeper neutral panels.

- Hero should feel the most atmospheric and dimensional.
- Proof sections should tighten up visually and feel utility-driven.
- Featured projects should sit on cleaner cards with stronger edges and controlled depth.
- Experience, skills, resume, and contact should progressively become more structured and readable.
- Testimonials should feel calm and trustworthy, not promotional.

The page should avoid both extremes:

- not a flat white marketing layout
- not a fully dark moody portfolio

### Color Behavior

Primary accent: `#20A4F3`

Use the accent color for:

- primary buttons
- link states
- active nav state
- project emphasis markers
- selected tags or small highlights
- subtle motion glows

Use it sparingly. The site should not feel blue-dominated. The blue should read as a technical signal, not a visual theme wash.

Recommended supporting palette behavior:

- charcoal and deep slate for structure
- off-white and soft gray for readable surfaces
- muted cool tones for borders and secondary text

### Type Intent

Typography should feel like a deliberate frontend implementation, not a default system stack.

The hierarchy should read as:

1. hero headline
2. hero role line
3. supporting summary
4. section eyebrow
5. section title
6. card title
7. metadata
8. body copy

Type behavior:

- hero headline: large, compact, confident
- role line: slightly smaller but still strong
- body copy: short lines, highly legible, no dense paragraphs
- metadata: smaller, tighter, and visually consistent across cards
- section titles: clear rhythm, not decorative

The overall feel should be technical and modern, with enough personality to stand apart from standard SaaS typography.

## Hero Composition

The hero is the most important visual block on the page.

### Composition

Use a left-heavy or center-left composition on desktop with a supporting visual element on the right or behind the content.

Recommended structure:

- eyebrow or short intro label
- large headline
- role line
- supporting summary
- primary and secondary buttons
- compact proof cue or one-line value line

### Headline Direction

Lead with the approved positioning:

`Senior Web Developer | WordPress & Digital Strategy`

The headline should feel editorial and confident, not verbose.

### Supporting Copy

The supporting copy should be short enough to read immediately. It should mention:

- WordPress depth
- frontend execution
- full-site ownership
- cross-environment experience
- performance or optimization

Avoid cramming too many claims into the hero. The goal is clarity, not inventory.

### Visual Treatment

The hero should feel like a refined technical workspace.

Use one or more of these treatments:

- soft gradient field behind the copy
- layered geometric paneling
- subtle glow around an accent edge
- a restrained visual card or image frame

If a visual asset is used, it should support the composition rather than compete with it. A placeholder or abstract technical visual is better than forcing a weak image.

### Hero CTA Hierarchy

Primary CTA:

- `View Projects`

Secondary CTA:

- `Contact`

Optional tertiary action if space supports it:

- `Download Resume`

Primary CTA should be the most visually prominent. Secondary should be surface-based or outlined. Resume should never compete with projects as the first action.

## Proof Strip Layout

The proof strip should appear immediately after the hero and compress the strongest credibility into a fast scan.

### Structure

Use one of these treatments:

- compact labeled pills
- small proof cards
- a single horizontal strip broken into equal evidence blocks

### Recommended Order

1. WordPress depth
2. Full-site ownership
3. CRO and VWO
4. GA4 and GTM
5. Integrations and automations
6. ADA and cookie compliance
7. Hosting, migrations, and deployment

### Visual Rules

- keep each item short
- do not wrap into long copy blocks
- make the strip visually denser than the hero, but lighter than the project section
- use the accent blue only for the most important highlights

The strip should feel like proof, not badges.

## Featured Projects Layout

Featured projects are the strongest proof section on the homepage.

### Card Strategy

All six launch projects exist in the broader system, but the homepage should emphasize the strongest work first.

Use a hierarchy such as:

- one featured project with larger footprint
- two supporting projects in a balanced grid
- additional projects visible through scroll or a second row if the layout allows

### Card Anatomy

Each project card should include:

- project title
- short summary
- role
- stack
- outcome or impact

### Layout Behavior

Featured project:

- larger card
- stronger visual emphasis
- more image presence or larger supporting visual

Supporting project cards:

- consistent size
- tighter internal spacing
- easy to scan

### Visual Rules

- cards should feel like evidence
- use clean borders, subtle shadow, or surface separation
- avoid ad-like framing
- keep hover effects subtle

### Project Differentiation

The most important projects should stand out through:

- size
- ordering
- stronger accent treatment
- slightly richer media treatment

Avoid making lesser projects look weak. Emphasis should come from hierarchy, not exclusion.

## Section Background Changes

The homepage should feel like it progresses through a controlled visual rhythm.

### Recommended Section Flow

- Hero: most atmospheric
- Proof strip: tighter and more structural
- Projects: crisp surface with stronger emphasis
- Experience: quieter editorial surface
- Skills: organized neutral surface
- Testimonials: calm and trustworthy
- Resume: slightly utility-forward, more document-like
- Contact: clean and direct

### Background Transition Rules

- background shifts should be obvious enough to guide the eye
- do not change backgrounds on every section
- use contrast to separate content types, not to create noise
- keep transitions consistent across desktop and mobile

The page should feel intentionally layered, not randomly alternating.

## Motion Moments

Motion should be used to signal quality and polish, not to decorate the page.

### Motion to Include

- hero entrance
- headline and CTA stagger
- proof strip reveal
- featured project hover emphasis
- section reveal as the page scrolls
- subtle button feedback
- resume card or preview entrance

### Motion Style

- smooth
- restrained
- responsive
- technical

Avoid:

- novelty motion
- excessive parallax
- exaggerated spring effects
- long delays between section reveals

### Motion and Accessibility

- respect reduced-motion settings
- keep motion lighter on mobile
- never depend on motion to convey essential content

## Visual Accents

The site needs a few reusable accent devices to keep it from feeling flat.

Recommended accents:

- thin accent borders
- small blue highlight chips
- subtle gradient edge treatment
- soft glow on hero or featured project emphasis
- small status-like markers for proof items

Do not overuse decorative icons or pattern noise. The accents should feel like interface language, not ornament.

## Mobile Adaptation

Mobile should feel designed, not compressed.

### General Rules

- preserve the same section order
- keep spacing generous
- maintain clear hierarchy
- reduce the number of elements shown per row
- avoid tiny metadata that becomes unreadable

### Hero on Mobile

- headline can stack into 2 to 4 short lines
- supporting line must stay short
- buttons should stack or remain full-width if needed
- visual treatment should sit below or behind text without crowding it

### Proof Strip on Mobile

- convert to stacked pills, chips, or short blocks
- avoid horizontal overflow
- keep items readable at a glance

### Featured Projects on Mobile

- stack cards vertically
- keep one strong featured card first
- preserve role, stack, and outcome metadata
- keep image crops consistent and simple

### Resume and Contact on Mobile

- keep resume preview compact and scannable
- contact form should remain simple with three fields
- ensure email and LinkedIn are easy to tap

### Motion on Mobile

- reduce motion intensity
- keep entrance animations fast
- avoid any motion that delays usability

## Button Hierarchy

Buttons should read like a polished technical interface.

### Primary Button

- used for the main action in the hero and section CTAs
- filled or strongly accented using `#20A4F3`
- high contrast text
- compact, not oversized

### Secondary Button

- outlined or surface-based
- same radius family and type scale as primary
- should support, not compete

### Button Order

Recommended homepage order of actions:

1. `View Projects`
2. `Contact`
3. `Download Resume`

The resume CTA can appear in the hero, resume preview, and footer, but should not dominate the first interaction.

## Footer Direction

The footer should close the page quietly and reinforce navigation.

Include:

- name or mark
- secondary links
- contact methods

Visual treatment:

- low-noise
- aligned with the page system
- no heavy social bar

## Implementation Handoff Rules

This spec should be sufficient for a designer to create a near-final homepage mockup and for a developer to start implementation without inventing the system.

The mockup should define:

- exact spacing rhythm
- exact hero composition
- button hierarchy
- surface transitions
- project emphasis rules
- mobile stack behavior
- motion treatment
- proof layout

The developer should not have to infer:

- whether the page is light or dark
- where accent color should dominate
- which section should feel most atmospheric
- how project emphasis works
- what button is primary

If a design choice does not improve clarity, credibility, or hiring outcomes, remove it.

## Final Bar

The homepage must feel:

- lean
- modern
- animated
- techy
- senior
- credible
- fast
- easy to scan
- built for recruiters and hiring managers

If the mockup does not look like a strong web leader with deep frontend and WordPress experience could plausibly own it, the design is not done yet.
