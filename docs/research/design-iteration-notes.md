# Design Iteration Notes

## Purpose
This note translates current 2026-looking portfolio and tech-site patterns into concrete changes for Erick's homepage concept. It is based on current web references where available and on established best practices where the source material is trend-driven rather than prescriptive.

## Research Summary

Current portfolio and tech-site patterns favor:

- roomier layouts with stronger vertical rhythm
- clear storytelling instead of dense card grids
- interactive sections that respond to scroll, hover, or cursor movement
- subtle motion that supports hierarchy rather than distracting from it
- editorial presentation for credibility, especially for senior or lead roles
- large type, clean spacing, and fewer elements competing on screen at once
- performance-first animation systems that stay lightweight and accessible

The strongest current examples do not feel packed. They usually leave breathing room around the hero, give each section a single job, and use motion as a signal of craft rather than decoration.

## What Makes Sites Feel Less Compact

Sites feel cramped when too many of these happen at once:

- multiple dense panels appear in one viewport
- copy blocks are too wide or too tall without hierarchy
- sections use the same background treatment repeatedly
- cards sit too close together with little negative space
- media, metrics, and copy all compete at the same visual weight
- motion is added without spatial pauses between moments

To feel less compact, the page should instead:

- open with a taller hero and more empty space around the primary message
- separate major sections with clearer vertical gaps and/or background shifts
- reduce the number of simultaneous elements in each viewport
- let featured content breathe with larger cards or split layouts
- alternate between text-led and media-led sections so the rhythm changes

## Concrete Recommendations For The Existing Homepage Concept

1. Expand the hero.

The current concept should be less compressed at the top. Increase top and bottom padding, raise the headline size slightly on desktop, and let the support line sit with more air. The hero should read as a strong opening statement, not a compact intro block.

2. Split the proof strip into a more breathable pattern.

Instead of a dense row of bullets, use a staggered or wrapped proof system with more spacing between items. A mixed treatment, such as icon + label + short descriptor, will feel more premium and less stacked.

3. Give the featured projects more room.

The project section should not read like a tight card wall. Use larger project cards, more internal padding, and alternating emphasis so one project can feel dominant while others stay supportive. This better fits a senior web leadership profile.

4. Add one interactive section early.

A cursor-reactive or scroll-reactive section should appear within the first half of the page. Good candidates are:

- an animated skill mesh or stack map
- a lightweight motion grid behind the hero or proof strip
- a scroll-linked timeline for experience or delivery themes

Keep the effect subtle and performant. It should add depth, not turn the page into a demo reel.

5. Use section background transitions.

The site should alternate between surface tones, translucent panels, and lightly textured areas. This gives the page more visual breathing room and keeps the layout from feeling like one continuous block of content.

6. Increase spacing around supporting content.

About, testimonials, and contact should each have more vertical separation than a typical compact portfolio. These sections should feel like distinct moments, not stacked widgets.

7. Make motion part of the structure.

Motion should reinforce transitions between sections, not only animate microinteractions. Use staggered entrance, soft parallax, text reveals, and hover depth to make the page feel alive while keeping the interface readable.

8. Keep the color system, but let the surfaces do more work.

The existing `#20A4F3` accent works. The less compact feel should come from spacing, contrast, layered surfaces, and motion timing, not from adding more color complexity.

## Motion Guidance

Current web guidance continues to support motion, but only when it is intentional and performant. Prefer transforms and opacity for animation, keep the experience smooth, and respect reduced-motion preferences.

Recommended motion treatments for this site:

- hero text reveals that stagger in rather than appear all at once
- section headers that animate in with a subtle vertical lift
- hover depth on cards and buttons
- lightweight cursor or scroll feedback in one or two sections
- soft reveal transitions between alternating background surfaces

Avoid:

- long parallax chains
- constant looping motion everywhere
- heavy canvas effects that slow down the page
- animations that fight the reading path

## Typography And Layout

Current portfolio patterns favor strong typography and comfortable reading widths. For this site:

- keep line lengths controlled on desktop
- use a larger type scale for hero and section headings
- avoid packing too many short text blocks into one screen
- let text sections breathe with more margin and line-height
- use clear hierarchy so the page reads in a linear path

This is especially important because the site needs to signal seniority and leadership, not just visual style.

## Implementation Direction For The Homepage

If the homepage is being refined from the current concept, the next design pass should aim for:

- a taller, more dramatic opening hero
- more whitespace between major section groups
- one or two interactive moments that feel modern and restrained
- stronger project presentation with greater emphasis on featured work
- alternating background tones or surfaces to reduce visual monotony
- motion that feels premium, not busy

## Assumptions

- These recommendations are based on current public design references and best-practice reasoning, not a formal trend forecast.
- The goal is to make the site feel current for 2026 without chasing novelty that harms readability, performance, or recruiter trust.
- The homepage should keep its tech-forward, professional tone and remain suitable for senior frontend, WordPress, web leadership, and digital strategy roles.

## Sources Referenced

- Framer: tech website design examples and motion/clarity patterns
- Framer: UX-focused website principles
- Webflow: 2025 web design trends
- Webflow: portfolio examples and animation patterns
- web.dev: reduced motion and high-performance animation guidance
- web.dev: typography and accessible layout guidance

