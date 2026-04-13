# Design Brief

## Purpose

Design a headless WordPress portfolio and resume site that helps Erick Landaverry get interviews for frontend, WordPress, web development manager, and digital strategy roles. The site should feel like it was built by an experienced frontend developer: sharp, modern, technically credible, and easy to scan quickly.

This is a portfolio-first site. The resume supports the portfolio, not the other way around.

## Design Goals

- Make the value proposition obvious within the first screen.
- Signal seniority, range, and technical judgment without sounding inflated.
- Present work in a way that hiring managers can review quickly.
- Keep the experience professional, but with enough personality to feel current and memorable.
- Use motion and visual polish to reinforce quality, not distract from content.
- Build for mobile first and keep the same intent across breakpoints.
- Keep the interface fast, readable, and simple to implement.

## Audience

- Primary: recruiters and hiring managers.
- Secondary: technical leads, web managers, and digital strategy reviewers.

The design should support fast answers to:

- Who is this person?
- What kind of work do they do?
- What level are they operating at?
- What proof do they have?
- How do I contact them?

## Visual Direction

### Overall Tone

- Creative and professional, with a clear tech edge.
- More polished engineering portfolio than marketing site.
- Confident and modern, not flashy or playful for its own sake.
- The interface should feel like a frontend developer made deliberate choices.

### Color Direction

- Primary brand color: `#20A4F3`.
- Use it as an accent for action, emphasis, links, hover states, tags, and key highlights.
- Do not flood the layout with it. Keep the palette restrained and intentional.
- Support the blue with neutral surfaces and one or two subtle contrast accents if needed.

### Type Direction

- Use typography that feels technical, legible, and contemporary.
- Establish a strong hierarchy with distinct sizing for headline, role, summary, section titles, and metadata.
- Prioritize readability over stylistic novelty.
- Keep line lengths and spacing comfortable on desktop and mobile.

### Layout Direction

- Strong section rhythm with clear transitions between blocks.
- Avoid generic stacked-card portfolio patterns unless they are visually elevated.
- Use a mix of full-width sections, structured grids, and focused callout blocks.
- Make the first screen visually strong enough to establish credibility immediately.

### Atmosphere

- Add subtle depth through gradients, layered surfaces, soft glows, or directional textures where appropriate.
- Keep the look clean, not cluttered.
- The page should feel like a premium technical portfolio, not a template.
- Use a mixed-surface system rather than a purely light or purely dark presentation.
- Keep the overall impression lean, modern, animated, and tech-forward.

## Page Hierarchy

### Global Priority Order

1. Home
2. Projects
3. Experience
4. About
5. Skills
6. Testimonials
7. Resume
8. Contact

This order reflects the portfolio-first positioning while still making the resume and contact actions easy to find.

### Navigation

- Keep navigation simple and direct.
- Include Resume in the nav.
- Include Contact in the nav.
- Avoid overloading the nav with extra labels unless they improve hiring outcomes.

## Section Priorities

### Home

- First screen should establish identity, role range, and credibility.
- Show a concise summary that leans toward web leadership and digital strategy while staying grounded in frontend depth, WordPress experience, full-site ownership, and work across in-house, agency, small business, and enterprise contexts.
- Include one clear primary action and one secondary action.
- Surface featured work early.
- Add a compact trust layer for stack breadth, experience range, or notable capabilities.

### Projects

- Show 6 projects at launch.
- Treat all 6 as valid, but visually emphasize the strongest ones with order, size, or feature treatment.
- Each project card should include title, short summary, role, core stack, and outcome or impact.
- Make project browsing easy on mobile and desktop.
- If possible, support a featured state for the top projects without hiding the rest.

### Experience

- Present work history in a way that is easy to scan.
- Highlight scope, environment, ownership, and technical breadth.
- Include enough detail to support senior frontend, WordPress, manager, and strategy roles.
- Keep this section readable and compact, not a wall of text.

### About

- Use this section to frame working style, breadth of experience, and the ability to own a site end to end.
- Keep the tone human and credible.
- Avoid generic “passionate developer” language.

### Skills

- Organize skills into understandable groups such as frontend, WordPress, tooling, and systems/integrations.
- Use this as evidence of breadth, not as a dump of technologies.
- The layout should feel structured and efficient.

### Testimonials

- Include 3 testimonials if approved quotes are available.
- Design them as supporting proof, not the main selling point.
- Keep each testimonial short enough to scan quickly.
- Make the section feel trustworthy and restrained.

### Resume

- Resume should be a dedicated page and also available in the nav.
- Do not embed the PDF directly in the page.
- Use the page to present resume content as a polished, animated reading experience.
- Keep the resume visually distinct but consistent with the rest of the site.

### Contact

- Include a contact form.
- Include direct contact methods such as email and LinkedIn.
- Make the next step obvious.
- Keep friction low and the call to action visible throughout the experience.

## Component Inventory

Design the site around reusable, implementation-friendly components.

- Hero section with headline, summary, and actions.
- Role or credential highlights.
- Featured project cards.
- Full project card or detail tile.
- Experience timeline or structured history block.
- Skills group cards or tag clusters.
- Testimonial cards.
- Resume section blocks.
- Contact form section.
- Contact method list or quick links.
- Navigation and mobile navigation.
- Footer with contact and supporting links.
- Button, link, tag, badge, and card states.
- Section headers with eyebrow, title, and supporting text.

## Motion Rules

- Motion is allowed and encouraged, but it should feel intentional and professional.
- Use animation to support hierarchy, transitions, and reveal, not as decoration.
- Favor subtle entrance reveals, staggered content, and polished hover states.
- Add motion to reinforce the technical feel of the site.
- Keep performance in mind. Motion must not cause jank or delay content access.
- Respect reduced-motion preferences and provide a usable experience when animation is reduced or disabled.
- Avoid gimmicky effects, overdone parallax, or repetitive scroll tricks.
- Reserve stronger motion for key moments such as hero load, section transitions, and project emphasis.

## Responsive Behavior

- Design mobile first.
- The mobile experience must feel intentional, not like a stripped-down fallback.
- Ensure readable type, comfortable spacing, and touch-friendly controls on small screens.
- Reflow hero, project grids, and testimonial layouts cleanly on tablet and mobile.
- Keep the resume page scannable on phones without forcing excessive scrolling fatigue.
- Navigation should collapse cleanly and remain easy to use.
- Preserve hierarchy when sections stack vertically.

## Accessibility Requirements

- Maintain strong color contrast for text, icons, and interactive states.
- Ensure visible focus states on all interactive elements.
- Use semantic structure and predictable heading levels.
- Keep tap targets large enough for mobile use.
- Do not rely on color alone to communicate meaning.
- Make motion safe for users who prefer reduced animation.
- Keep copy and layout readable for quick review and assistive technology.

## Imagery Strategy

- Use dummy images until real photos are provided.
- Keep placeholders consistent and polished enough to fit the overall design.
- Treat photography as supporting material, not a dependency for the layout to work.
- Avoid layouts that collapse without real headshots.
- If imagery is used for projects, use clear, readable mockups or representative thumbnails.

## Practical Implementation Notes

- Keep the design system simple enough that the developer can implement it without guesswork.
- Use predictable spacing, type scales, and component states.
- Define reusable section patterns instead of one-off layouts everywhere.
- The design should be compatible with a headless WordPress + Next.js build.
- Leave room for future additions like more testimonials, scripts, or sections without needing a redesign.

## Open Questions

- What is the final ordering of the 6 launch projects?
- Which 3 testimonials are approved for public use?
- Do we want the resume page to read like a condensed narrative or a sectioned presentation of the resume content?
- Are there any project thumbnails or imagery constraints the design should account for?
- Should the contact form be minimal or more structured with role and project-type fields?

## Definition Of Done For Design

- The design direction is specific enough for implementation without guessing.
- The portfolio leads and the resume supports it.
- The site feels credible, technical, modern, and hiring-focused.
- Mobile behavior is intentionally designed, not improvised.
- Motion is polished and restrained enough to stay professional.
- The design supports the content model, page hierarchy, and performance goals already agreed in kickoff.
