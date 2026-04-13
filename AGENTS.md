# Agent Operating Model

This repository uses a persistent multi-agent workflow for building a headless WordPress portfolio and resume site.

## Project Context

- Purpose: rebuild the current personal website as a portfolio and resume site for job applications.
- CMS: headless WordPress.
- Frontend: modern headless frontend, with the final stack to be confirmed before implementation begins.
- Primary audience: recruiters, hiring managers, collaborators, and potential clients.
- Success criteria: clear positioning, strong presentation of work, maintainable content workflows, and a fast polished frontend.
- Current website reference: `https://ericklandaverry.com/`

## Reference Sources

- Use the current website at `https://ericklandaverry.com/` as a reference source when existing messaging, resume details, project framing, or baseline structure need to be reviewed.
- Treat the current website as source material for context, not as a constraint on the redesign.
- If the current website conflicts with direct user input, the user's current instructions win.

## Team Structure

- Project Manager: owns scope, sequencing, acceptance criteria, and delivery readiness.
- Designer: owns visual direction, UX, layout systems, and accessibility-aware presentation.
- Content Writer: owns messaging, resume copy, project narratives, and editorial consistency.
- Developer: owns implementation, architecture, API integration, and technical quality.

Detailed role instructions live in:

- `docs/agents/project-manager.md`
- `docs/agents/designer.md`
- `docs/agents/content-writer.md`
- `docs/agents/developer.md`

## Working Rules

- Keep responsibilities clear. Each agent should stay within its role unless explicitly asked to help another role.
- Do not make architecture assumptions permanent until the Project Manager and Developer agree they are in scope.
- Do not invent resume facts, project metrics, dates, employers, or results. Missing information must be flagged.
- Prefer shipping small, reviewable increments over large unstructured changes.
- Resolve uncertainty early. If content, design, or technical choices affect other roles, record the decision before implementation spreads.

## Decision Routing

- Scope, priorities, milestones: Project Manager.
- Brand direction, page hierarchy, UX presentation: Designer.
- Copy, tone, narrative framing, recruiter readability: Content Writer.
- Stack, implementation details, data flow, performance, testing: Developer.

If a decision touches multiple roles, the Project Manager owns final coordination and records the result.

## Delivery Flow

1. Project Manager defines the current goal, dependencies, and acceptance criteria.
2. Designer and Content Writer shape the user experience and messaging needed for that goal.
3. Developer implements only against agreed requirements and documented content/design inputs.
4. Project Manager verifies that the output matches scope before work is considered complete.

## File Ownership

- `AGENTS.md`: shared operating contract for the whole repo.
- `docs/agents/project-manager.md`: Project Manager playbook.
- `docs/agents/designer.md`: Designer playbook.
- `docs/agents/content-writer.md`: Content Writer playbook.
- `docs/agents/developer.md`: Developer playbook.

Future feature work should define ownership before parallel agent edits begin.

## Commit Rules

- Commit often and in small increments when meaningful progress is complete.
- Use this format for every commit: `<emoji> <present-tense message>.`
- Keep messages short, concrete, and end with a period.
- Preferred emoji mapping:
  - `✅` for new work
  - `🔧` for fixes
  - `🗑️` for removals
  - `🧼` for cleanup and refactors

Examples:

- `✅ Adds persistent agent docs.`
- `🔧 Fixes broken project slug mapping.`
- `🧼 Cleans unused theme scaffolding.`
- `🗑️ Removes outdated placeholder content.`

## Near-Term Guardrails

- Do not commit WordPress core, uploads, or local environment secrets.
- Keep the frontend and WordPress concerns separated cleanly.
- Model content intentionally before building pages.
- Build for hiring outcomes first, not for CMS novelty.
