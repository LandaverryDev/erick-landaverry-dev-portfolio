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

### 3. Scope For V1

- Required pages
- Optional pages
- Required CMS-managed content
- Features intentionally deferred until after launch

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

### 6. Content Strategy

- Homepage messaging
- About positioning
- Experience and project structure
- Resume support strategy
- SEO priorities
- Source material gaps that need owner input

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
- Case-study microsites
- Experimental playground sections
- Advanced personalization
- CMS-driven landing page system

## Open Questions

- Which frontend stack do we want to recommend first for approval?
- Do we want to optimize primarily for recruiter review, freelance/client trust, or both?
- How many featured projects should launch on day one?
- Should resume download live globally or only in key sections?
- Should the first release include analytics and event tracking, or defer that?
- Should we preserve any wording or structure from the current site, or start fresh?
- Are there specific companies or role types the copy should be tuned toward?

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
