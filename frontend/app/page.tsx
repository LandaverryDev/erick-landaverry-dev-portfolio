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

const services = [
  "Web Development",
  "WordPress Management",
  "Digital Strategy",
  "CRO and Testing",
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

                  <div className="hero-actions">
                    <button className="button-primary" type="button" onClick={() => handleSectionChange("projects")}>
                      View projects
                    </button>
                    <button className="button-secondary" type="button" onClick={() => handleSectionChange("contact")}>
                      Contact
                    </button>
                  </div>
                </div>

                <div className="home-signal">
                  <div className="identity-panel identity-panel-build">
                    <span>What I build</span>
                    <strong>WordPress sites, landing pages, frontend systems, migrations, and integrations.</strong>
                  </div>
                  <div className="identity-panel identity-panel-own">
                    <span>What I own</span>
                    <strong>GA4, GTM, VWO, CRO, hosting, compliance, and launch support after go-live.</strong>
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

            <article className={`content-panel ${activeSection === "about" ? "is-active" : ""}`} id="about">
              <div className="panel-inner">
                <p className="panel-eyebrow">About me</p>
                <h2>More than just frontend implementation.</h2>

                <div className="two-column-layout">
                  <div className="text-stack">
                    <p>
                      I work across the technical and operational parts of the site that often live in separate
                      conversations: design implementation, CMS management, analytics, optimization, compliance,
                      and ongoing platform support.
                    </p>
                    <p>
                      That is why this portfolio is framed around ownership. My experience spans the actual build,
                      the systems connected to it, and the post-launch upkeep that keeps sites useful.
                    </p>
                  </div>

                  <div className="service-grid">
                    {services.map((service) => (
                      <div className="service-card" key={service}>
                        <strong>{service}</strong>
                      </div>
                    ))}
                  </div>
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
