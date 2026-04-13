# Project Kickoff Meeting

## Meeting Purpose

Align the Project Manager, Designer, Content Writer, Developer, and owner on the scope, priorities, technical direction, and working rules for the headless WordPress portfolio and resume rebuild.

## Participants

- Owner: Erick Landaverry
- Project Manager
- Designer
- Content Writer
- Developer

## Reference Material

- Current website: `https://ericklandaverry.com/`
- Resume source: `/Users/erick/Documents/Resume/2025/Erick Resume 2025.pdf`
- Current agent operating model: `AGENTS.md`
- Agent role files in `docs/agents/`

## Current Known Direction

- The site is a rebuild of the current portfolio/resume website.
- The CMS will be headless WordPress.
- Stack changes require owner approval.
- Done means the owner has reviewed and approved the work.
- The visual tone should sit between creative and professional with a clear tech edge.
- Primary color: `#20A4F3`
- The portfolio should lead. The resume should support it.
- Motion is encouraged as long as it stays professional, tech-forward, accessible, and performant.
- Mobile responsiveness is mandatory.
- The code should be simple, readable, and easy for the owner to maintain.
- Performance is a standing requirement, including strong Core Web Vitals.
- `Advanced Custom Fields` is the default content-modeling direction unless another approved option is chosen.
- Content should support organic search and avoid obvious AI-generated tone.
- Target positioning should support frontend, WordPress-adjacent, lead, manager, and digital strategy opportunities where credible.
- The target hosting platform is Hostinger.
- The site should be ready for GA4, GTM, and future script integrations through a clean implementation point.

## Kickoff Goals

1. Confirm what v1 includes and what is explicitly out of scope.
2. Decide the frontend stack recommendation to bring back for owner approval.
3. Define the content model needed in WordPress.
4. Define the page structure and narrative flow for the portfolio.
5. Agree on the implementation quality bar for performance, animation, and maintainability.
6. Identify missing source material, especially resume details, project details, and imagery.
7. Turn the outcome into an ordered backlog for execution.

## Agenda

### 1. Current Site Review

- What should be kept from `https://ericklandaverry.com/`
- What should be removed
- What should be improved
- What is missing for current job applications

### 2. Audience And Hiring Goal

- Primary roles to target
- Secondary roles to target
- What recruiters and hiring managers should understand within the first screen
- What differentiates Erick from similar candidates

Current input:

- Primary roles: Frontend Developer, Senior Frontend Developer, WordPress Developer, Web Developer, Headless WordPress / Frontend hybrid.
- Secondary roles: Lead or Manager positions in web development, plus digital strategy opportunities where relevant.
- First-screen takeaway: Erick has worked in-house, at agencies, and across small-business through enterprise environments, with experience spanning integrations, strategy, and development.
- Differentiators to emphasize: full-site ownership, webmaster-style breadth, technical implementation, integrations, management of offshore and contractor developers, and the ability to operate across company sizes.
- Primary audience focus: recruiters and hiring managers.

### 3. Scope For V1

- Required pages
- Optional pages
- Required CMS-managed content
- Features intentionally deferred until after launch

Current input:

- Required launch pages: Home, About, Projects, Experience, Skills, Contact, Resume.
- Services / For Hire page: out of scope.
- Blog: out of scope for v1.
- Testimonials: in scope for v1 if real approved quotes are available.
- Launch project count target: 6 projects.
- Resume: downloadable in v1.
- Contact: include both a contact form and direct contact methods.

### 4. Design Direction

- Tech-forward visual references
- Motion style and interaction rules
- Typography direction
- Image strategy until real photography is added
- Mobile-first layout priorities

### 5. Technical Direction

- Frontend framework candidates
- Data layer approach
- REST API vs GraphQL recommendation
- WordPress plugin strategy
- Hosting and deployment considerations
- Performance constraints and measurement plan

Current input:

- Frontend framework: owner wants a researched recommendation based on 2026 demand, current trends, and project fit.
- API layer: owner wants a recommendation between REST, WPGraphQL, or both based on scope and maintainability.
- Hosting target: Hostinger.
- Analytics: include readiness for GA4, GTM, and future scripts in v1.
- Resume access: include in nav and build a dedicated resume page with its own sections and animations, without embedding the PDF in-page.
- Project hierarchy: all 6 projects matter, but the strongest ones can be placed higher or receive stronger visual emphasis.
- Provisional technical recommendation approved for planning: Next.js frontend, headless WordPress with ACF, core REST API first, Hostinger-compatible deployment, and a clean GA4/GTM-ready integration point.

### 6. Content Strategy

- Homepage messaging
- About positioning
- Experience and project structure
- Resume support strategy
- SEO priorities
- Source material gaps that need owner input

Current input:

- Testimonials target for v1: 3 real approved testimonials.
- Copy direction: start fresh rather than preserving the current site's wording.
- Messaging should be tuned primarily toward Senior Frontend Developer, WordPress Developer, Web Development Manager, and Digital Strategy opportunities.
- Hero positioning should lean toward web leadership and digital strategy while staying anchored in web development credibility.

### 7. Delivery Model

- Work phases
- Review checkpoints
- Approval flow
- What gets committed in each milestone

## Decisions Required From Kickoff

- Confirm target role positioning:
  Frontend Developer
  WordPress Developer
  Headless WordPress / Frontend hybrid
- Confirm the v1 page list.
- Confirm whether a blog is out of scope for v1.
- Confirm whether testimonials are in scope for v1.
- Confirm the frontend stack recommendation to prepare for owner approval.
- Confirm whether WordPress will expose data primarily through REST, WPGraphQL, or both.
- Confirm the first content model draft.

## Proposed V1 Page List

- Home
- About
- Projects
- Experience
- Skills
- Contact
- Resume

## Proposed V1 Out Of Scope

- Blog
- Services / For Hire page
- Case-study microsites
- Experimental playground sections
- Advanced personalization
- CMS-driven landing page system

## Open Questions

- Do we want to optimize primarily for recruiter review, freelance/client trust, or both?
- Should all 6 projects be equally prominent, or should a smaller set be featured first with the rest secondary?
- Should the first release include analytics and event tracking, or defer that?
- Are there any company types or industries that should receive stronger emphasis inside the copy?

## Expected Outputs

- Approved v1 scope
- Initial architecture recommendation
- Initial content model recommendation
- Initial sitemap and page hierarchy
- Initial design direction summary
- List of required source materials from the owner
- Ordered implementation backlog

## Immediate Follow-Up After Kickoff

1. Project Manager writes the v1 brief and backlog.
2. Designer produces a visual direction summary and layout priorities.
3. Content Writer audits current material and drafts missing-content requests.
4. Developer proposes the technical stack and implementation plan for approval.
