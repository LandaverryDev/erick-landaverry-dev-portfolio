"use client";

import { useEffect, useState } from "react";

type SectionId =
  | "home"
  | "about"
  | "resume"
  | "projects"
  | "testimonials"
  | "contact";

const sections: Array<{ id: SectionId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const experience = [
  {
    years: "Current",
    role: "Senior Web Developer",
    company: "Enterprise and marketing operations",
    summary:
      "Owns websites across frontend implementation, analytics, compliance, CRO, and post-launch operations.",
  },
  {
    years: "Previous",
    role: "Web Platform Ownership",
    company: "Agency and in-house environments",
    summary:
      "Delivered sites, landing pages, and optimizations for small business through enterprise teams.",
  },
  {
    years: "Leadership",
    role: "Distributed Delivery Coordination",
    company: "Offshore and contractor support",
    summary:
      "Ran weekly standups, coordinated work, and kept launches aligned with operational and legal requirements.",
  },
];

const education = [
  "Hands-on delivery across in-house, agency, and enterprise environments",
  "Practical platform leadership across strategy, code, and operations",
  "Strong CMS, analytics, compliance, and launch support experience",
];

const skills = [
  { label: "WordPress", value: "94%" },
  { label: "Frontend Execution", value: "91%" },
  { label: "GA4 / GTM", value: "88%" },
  { label: "CRO / VWO", value: "84%" },
];

const projects = [
  "Smart Start",
  "Low Cost Interlock",
  "RoadGuard Interlock",
  "North Texas HVAC",
  "Plainsight AI",
  "Consensus",
];

const testimonials = [
  {
    quote:
      "Approved testimonial placeholder. Final quote will be added once the real testimonial list is confirmed.",
    name: "Future Client Quote",
    role: "Placeholder",
  },
  {
    quote:
      "This space is designed to support credibility without forcing a redesign later when approved feedback comes in.",
    name: "Future Team Quote",
    role: "Placeholder",
  },
  {
    quote:
      "The final version will highlight ownership, strategy, delivery, and cross-functional support.",
    name: "Future Stakeholder Quote",
    role: "Placeholder",
  },
];

const aboutPrinciples = [
  {
    title: "Craft",
    detail: "Build websites that stay useful, measurable, and maintainable after launch.",
  },
  {
    title: "Strategy",
    detail: "Connect design, analytics, optimization, and platform decisions to business goals.",
  },
  {
    title: "Consistency",
    detail: "Treat launches as the start of refinement, not the finish line.",
  },
  {
    title: "Patience",
    detail: "Improve performance, UX, and operations steadily over time instead of chasing noise.",
  },
];

const aboutWhatIDo = [
  "WordPress development and management",
  "CMS implementation and scalable content support",
  "Performance, accessibility, and frontend QA",
  "GA4, GTM, reporting, and measurement quality",
];

const aboutPersonalSide = [
  {
    title: "Lord of the Rings",
    detail: "I like stories and worlds with depth, atmosphere, and a clear sense of craft behind them.",
  },
  {
    title: "Golf",
    detail: "It keeps me honest about rhythm, patience, adjustment, and improving over time.",
  },
  {
    title: "How that shows up in work",
    detail: "I tend to value detail, consistency, and long-term refinement over rushed delivery.",
  },
];

function resolveInitialSection(): SectionId {
  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace("#", "");
  const matched = sections.find((section) => section.id === hash);

  return matched?.id ?? "home";
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const updateFromHash = () => {
      setActiveSection(resolveInitialSection());
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  const handleSectionChange = (nextSection: SectionId) => {
    window.history.replaceState(null, "", `#${nextSection}`);
    setActiveSection(nextSection);
  };

  return (
    <div className="vcard-app">
      <div className="vcard-background" aria-hidden="true">
        <span className="particle particle-a"></span>
        <span className="particle particle-b"></span>
        <span className="particle particle-c"></span>
        <span className="particle particle-d"></span>
        <span className="background-grid"></span>
      </div>

      <div className="vcard-shell">
        {/* Sidebar */}
        <aside className="profile-column">
          <div className="profile-card">
            <div className="profile-image-shell">
              <div className="profile-image-glow"></div>
              <div className="profile-image">
                <span>EL</span>
              </div>
            </div>

            <p className="profile-kicker">Senior Web Developer</p>
            <h1 className="profile-name">Erick Landaverry</h1>
            <p className="profile-role">WordPress & Digital Strategy</p>

            <div className="profile-summary">
              I work across web strategy, frontend implementation, analytics, optimization, compliance, and
              the operational details that keep a site useful after launch.
            </div>

            <nav className="vcard-nav" aria-label="Primary">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "is-active" : ""}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSectionChange(section.id);
                  }}
                >
                  {section.label}
                </a>
              ))}
            </nav>

            <div className="profile-actions">
              <a className="button-primary" href="mailto:hello@ericklandaverry.com">
                Email me
              </a>
              <a className="button-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        {/* Main panel area */}
        <main className="panel-column">
          <div className="panel-frame">
            <article className={`content-panel ${activeSection === "home" ? "is-active" : ""}`} id="home">
              <div className="panel-inner panel-home">
                <div className="home-copy">
                  <div className="home-copy-shell">
                  <p className="panel-eyebrow">Senior Web Developer</p>
                  <h2>More than build work. Real platform ownership.</h2>
                  <p>
                    I work across the parts of the website that usually live in separate conversations:
                    frontend execution, WordPress management, analytics, optimization, compliance, launches,
                    and ongoing platform support.
                  </p>
                  <p className="text-soft">
                    That is why this home panel should communicate both sides of the role clearly: what gets
                    built and what still needs to be owned after launch.
                  </p>

                  <div className="home-notes">
                    <div className="home-note-card">
                      <span>Operating range</span>
                      <strong>In-house, agency, small business, and enterprise environments.</strong>
                    </div>
                    <div className="home-note-card">
                      <span>Working style</span>
                      <strong>Frontend execution backed by analytics, launch support, and web operations.</strong>
                    </div>
                  </div>

                  <div className="hero-actions">
                    <button className="button-primary" type="button" onClick={() => handleSectionChange("projects")}>
                      View projects
                    </button>
                    <button className="button-secondary" type="button" onClick={() => handleSectionChange("contact")}>
                      Contact
                    </button>
                  </div>
                  </div>
                </div>

                <div className="home-signal">
                  <div className="identity-panel identity-panel-build">
                    <span>What I build</span>
                    <strong>WordPress sites, landing pages, frontend systems, migrations, and integrations.</strong>
                    <ul className="identity-list">
                      <li>Responsive marketing and service websites</li>
                      <li>Campaign pages and conversion-focused flows</li>
                      <li>CMS builds, integrations, and platform changes</li>
                    </ul>
                  </div>
                  <div className="identity-panel identity-panel-own">
                    <span>What I own</span>
                    <strong>GA4, GTM, VWO, CRO, hosting, compliance, and launch support after go-live.</strong>
                    <ul className="identity-list">
                      <li>Tracking quality, reporting alignment, and testing</li>
                      <li>Compliance, governance, and cookie requirements</li>
                      <li>Operational upkeep after launch, not just delivery</li>
                    </ul>
                  </div>
                  <div className="identity-rail">
                    <span>Frontend depth</span>
                    <span>Full-site ownership</span>
                    <span>In-house to enterprise</span>
                  </div>
                  <div className="identity-footnote">
                    A stronger home direction for this site is showing both delivery and ownership up front,
                    not hiding the operational side deeper in the resume.
                  </div>
                </div>
              </div>
            </article>

            <article
              className={`content-panel about-panel-shell ${activeSection === "about" ? "is-active" : ""}`}
              id="about"
            >
              <div className="panel-inner about-panel">
                <div className="about-atmosphere" aria-hidden="true"></div>
                <p className="panel-eyebrow">About me</p>
                <h2>More than just frontend implementation.</h2>

                <div className="about-grid">
                  <section className="about-card about-card-story">
                    <div className="about-card-head">
                      <span>How I work</span>
                    </div>
                    <div className="about-story-copy">
                      <p>
                        I am a senior web developer who works across the parts of the website that often live in
                        separate conversations: frontend implementation, WordPress management, analytics,
                        optimization, compliance, and ongoing operational support.
                      </p>
                      <p>
                        That is why this portfolio is framed around ownership. My experience spans the build
                        itself, the systems connected to it, and the work required after launch to keep a site
                        measurable, useful, and aligned with business goals.
                      </p>
                    </div>

                    <div className="about-story-breakdown">
                      <article>
                        <strong>Own the build</strong>
                        <p>Frontend execution, CMS implementation, migrations, launches, and platform changes.</p>
                      </article>
                      <article>
                        <strong>Refine after launch</strong>
                        <p>Analytics, CRO, accessibility, cookie governance, and ongoing operational support.</p>
                      </article>
                      <article>
                        <strong>Work across teams</strong>
                        <p>Comfortable bridging strategy, marketing, stakeholders, and distributed development support.</p>
                      </article>
                    </div>

                    <div className="about-story-note">
                      Outside of work, I tend to gravitate toward things that reward immersion, patience, and
                      refinement. Lord of the Rings and golf both reflect that for me in different ways.
                    </div>

                    <div className="about-traits">
                      {aboutPrinciples.map((item) => (
                        <span key={item.title}>{item.title}</span>
                      ))}
                    </div>
                  </section>

                  <section className="about-card about-card-list">
                    <div className="about-card-head">
                      <span>What I do</span>
                    </div>
                    <ul className="about-list">
                      {aboutWhatIDo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="about-card about-card-list">
                    <div className="about-card-head">
                      <span>Personal Side</span>
                    </div>
                    <div className="about-principle-stack">
                      {aboutPersonalSide.map((item) => (
                        <article className="about-principle" key={item.title}>
                          <strong>{item.title}</strong>
                          <p>{item.detail}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="about-footer">
                  <p>
                    I bring a balance of technical depth and strategic thinking, with a focus on building
                    websites that are fast, complete, measurable, and built to grow.
                  </p>
                  <button className="button-secondary" type="button" onClick={() => handleSectionChange("projects")}>
                    View my work
                  </button>
                </div>
              </div>
            </article>

            <article className={`content-panel ${activeSection === "resume" ? "is-active" : ""}`} id="resume">
              <div className="panel-inner">
                <p className="panel-eyebrow">Resume</p>
                <h2>Experience, range, and core strengths.</h2>

                <div className="resume-layout">
                  <section className="resume-column">
                    <h3>Experience</h3>
                    <div className="timeline-list">
                      {experience.map((item) => (
                        <article className="timeline-item" key={item.role}>
                          <span>{item.years}</span>
                          <div>
                            <strong>{item.role}</strong>
                            <p className="timeline-company">{item.company}</p>
                            <p>{item.summary}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="resume-column">
                    <h3>Highlights</h3>
                    <div className="highlight-list">
                      {education.map((item) => (
                        <article className="highlight-card" key={item}>
                          <p>{item}</p>
                        </article>
                      ))}
                    </div>

                    <h3>Skills</h3>
                    <div className="skill-list">
                      {skills.map((skill) => (
                        <div className="skill-row" key={skill.label}>
                          <div className="skill-head">
                            <span>{skill.label}</span>
                            <strong>{skill.value}</strong>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-fill" style={{ width: skill.value }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>

            <article className={`content-panel ${activeSection === "projects" ? "is-active" : ""}`} id="projects">
              <div className="panel-inner">
                <p className="panel-eyebrow">Portfolio</p>
                <h2>Selected website work.</h2>

                <div className="project-filter">
                  <span className="is-active">All</span>
                  <span>Landing Pages</span>
                  <span>Business Sites</span>
                  <span>SaaS</span>
                </div>

                <div className="project-gallery">
                  {projects.map((project, index) => (
                    <article className="project-card" key={project}>
                      <div className={`project-image project-image-${(index % 6) + 1}`}></div>
                      <div className="project-card-copy">
                        <strong>{project}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <article
              className={`content-panel ${activeSection === "testimonials" ? "is-active" : ""}`}
              id="testimonials"
            >
              <div className="panel-inner">
                <p className="panel-eyebrow">Testimonials</p>
                <h2>Credibility space ready for approved quotes.</h2>

                <div className="testimonial-list">
                  {testimonials.map((testimonial) => (
                    <article className="testimonial-card" key={testimonial.quote}>
                      <p>{testimonial.quote}</p>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </article>
                  ))}
                </div>
              </div>
            </article>

            <article className={`content-panel ${activeSection === "contact" ? "is-active" : ""}`} id="contact">
              <div className="panel-inner">
                <p className="panel-eyebrow">Contact</p>
                <h2>Let&apos;s talk.</h2>

                <div className="contact-layout">
                  <div className="text-stack">
                    <p>
                      This site is being rebuilt as a stronger portfolio and resume experience for senior web,
                      WordPress, management, and digital strategy roles.
                    </p>
                    <div className="contact-details">
                      <span>hello@ericklandaverry.com</span>
                      <span>LinkedIn available</span>
                      <span>Resume download coming next</span>
                    </div>
                  </div>

                  <form className="contact-form">
                    <label>
                      <span>Name</span>
                      <input type="text" placeholder="Your name" />
                    </label>
                    <label>
                      <span>Email</span>
                      <input type="email" placeholder="you@example.com" />
                    </label>
                    <label>
                      <span>Message</span>
                      <textarea rows={5} placeholder="Tell me about the role or project." />
                    </label>
                    <button className="button-primary" type="submit">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
