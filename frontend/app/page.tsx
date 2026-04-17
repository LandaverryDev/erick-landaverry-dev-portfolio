const navigation = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const projectCards = [
  {
    title: "Smart Start",
    category: "Lead generation",
    summary: "High-conversion landing experience with stronger intake flow and clearer sales intent.",
  },
  {
    title: "Low Cost Interlock",
    category: "Paid traffic landing page",
    summary: "Conversion-first page system built around ad traffic, quote flow, and local targeting.",
  },
  {
    title: "RoadGuard Interlock",
    category: "Service acquisition",
    summary: "Offer-focused landing page designed to simplify quote requests and trust-building.",
  },
  {
    title: "North Texas HVAC",
    category: "Local business website",
    summary: "Branded service website with stronger calls to action, trust proof, and service coverage.",
  },
  {
    title: "Plainsight AI",
    category: "B2B product marketing",
    summary: "Clean product storytelling for an AI platform with stronger hierarchy and product framing.",
  },
  {
    title: "Consensus",
    category: "SaaS experience",
    summary: "Product-led site work supporting clearer positioning, conversion, and buyer education.",
  },
];

const experienceItems = [
  {
    period: "Current",
    title: "Senior Web Developer",
    context: "Enterprise and marketing operations",
    points: [
      "Owns websites across strategy, frontend implementation, analytics, compliance, and operations.",
      "Supports CRO efforts, experimentation, and GTM or GA4 alignment across business goals.",
      "Serves as an AI champion for the marketing team with practical adoption of ChatGPT Enterprise.",
    ],
  },
  {
    period: "Agency + in-house",
    title: "Web platform ownership",
    context: "Small business through enterprise",
    points: [
      "Delivers sites and campaigns across different team sizes, stakeholders, and technical needs.",
      "Coordinates launches, migrations, integrations, and post-launch optimization.",
      "Balances business requirements with accessible, performant frontend execution.",
    ],
  },
  {
    period: "Leadership",
    title: "Distributed delivery coordination",
    context: "Offshore and contractor support",
    points: [
      "Coordinates offshore and contractor developers across active web projects.",
      "Runs weekly standups, delivery planning, and integration oversight.",
      "Keeps launches aligned with legal, privacy, cookie consent, and ADA-related requirements.",
    ],
  },
];

const capabilityGroups = [
  {
    title: "Platform ownership",
    items: ["WordPress", "Site migrations", "Hosting", "Governance", "Release support"],
  },
  {
    title: "Growth systems",
    items: ["GA4", "GTM", "VWO", "CRO", "SEO support", "Reporting alignment"],
  },
  {
    title: "Frontend execution",
    items: ["Responsive UI", "Component thinking", "Accessibility", "Performance", "Interaction design"],
  },
  {
    title: "Connected systems",
    items: ["Automations", "Integrations", "Lead flows", "Tracking plans", "Operational upkeep"],
  },
];

const testimonials = [
  {
    quote: "Testimonial placeholder. Approved client or teammate feedback will be added here later.",
    name: "Future testimonial",
    role: "Placeholder",
  },
  {
    quote: "This section is intentionally designed now so the final site can be populated without redesigning the layout later.",
    name: "Future testimonial",
    role: "Placeholder",
  },
  {
    quote: "The final version will feature real quotes that support delivery, strategy, and ownership credibility.",
    name: "Future testimonial",
    role: "Placeholder",
  },
];

export default function Home() {
  return (
    <div className="portfolio-app">
      <div className="ambient-shell" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a"></span>
        <span className="ambient-orb ambient-orb-b"></span>
        <span className="ambient-orb ambient-orb-c"></span>
        <span className="ambient-grid"></span>
        <span className="ambient-noise"></span>
      </div>

      <aside className="sidebar">
        <div className="sidebar-card">
          <div className="avatar-shell">
            <div className="avatar-ring"></div>
            <div className="avatar-core">
              <span>EL</span>
            </div>
          </div>

          <p className="sidebar-kicker">Senior Web Developer</p>
          <h1 className="sidebar-name">Erick Landaverry</h1>
          <p className="sidebar-copy">
            WordPress depth, full-site ownership, digital strategy, and frontend execution across in-house,
            agency, and enterprise environments.
          </p>

          <div className="sidebar-tags">
            <span>WordPress</span>
            <span>Frontend</span>
            <span>Strategy</span>
            <span>Optimization</span>
          </div>

          <nav className="sidebar-nav" aria-label="Section navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="sidebar-actions">
            <a className="button-primary" href="#projects">
              View projects
            </a>
            <a className="button-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </aside>

      <main className="content-shell">
        {/* Hero */}
        <section className="hero-section page-panel" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Web leadership grounded in web development</p>
            <h2 className="hero-title">
              I build and operate websites that support real business goals after launch.
            </h2>
            <p className="hero-text">
              Senior web developer with experience across frontend implementation, WordPress ecosystems,
              analytics, optimization, compliance, and site operations.
            </p>
            <p className="hero-text hero-text-soft">
              The goal is not just shipping pages. The goal is owning the platform well enough that it stays
              useful, measurable, compliant, and performant over time.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore work
              </a>
              <a className="button-secondary" href="#experience">
                Experience
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="signal-card signal-card-large">
              <span className="signal-label">Current focus</span>
              <strong>WordPress systems, frontend craft, analytics, and digital strategy.</strong>
            </div>

            <div className="signal-grid">
              <div className="signal-card">
                <span className="signal-label">Build</span>
                <strong>Sites, landing pages, migrations, and integrations.</strong>
              </div>
              <div className="signal-card">
                <span className="signal-label">Optimize</span>
                <strong>GA4, GTM, VWO, CRO, and SEO-aware delivery.</strong>
              </div>
              <div className="signal-card">
                <span className="signal-label">Operate</span>
                <strong>Compliance, hosting, tracking quality, and post-launch support.</strong>
              </div>
              <div className="signal-card signal-card-accent">
                <span className="signal-label">Range</span>
                <strong>In-house, agency, small business, and enterprise work.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="page-panel section-panel" id="about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Full-site ownership with frontend depth.</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I work across the parts of a website that usually live in separate conversations: design
                implementation, WordPress management, analytics, compliance, experimentation, and operational
                upkeep.
              </p>
              <p>
                That range is why I am positioning this portfolio around web ownership rather than a narrower
                title alone. I have worked with different team structures, handled different levels of technical
                complexity, and helped keep websites moving after they launch.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <span>Ownership</span>
                <strong>Build to optimization</strong>
              </div>
              <div className="stat-card">
                <span>Tools</span>
                <strong>WordPress, GA4, GTM, VWO</strong>
              </div>
              <div className="stat-card">
                <span>Teams</span>
                <strong>In-house, agency, offshore, contractor</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="page-panel section-panel" id="projects">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Portfolio work with stronger visual presence.</h2>
          </div>

          <div className="project-grid">
            {projectCards.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-preview project-preview-${(index % 6) + 1}`}>
                  <span className="project-chip">{project.category}</span>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience + Skills */}
        <section className="page-panel section-panel" id="experience">
          <div className="section-head">
            <p className="eyebrow">Experience + Skills</p>
            <h2>Structured to read quickly without feeling like a template resume block.</h2>
          </div>

          <div className="experience-layout">
            <div className="experience-column">
              {experienceItems.map((item) => (
                <article className="experience-card" key={item.title}>
                  <span className="experience-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="experience-context">{item.context}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="capability-column">
              <div className="capability-feature">
                <span className="signal-label">Core strengths</span>
                <strong>WordPress depth, digital strategy, CRO thinking, and web operations.</strong>
              </div>

              <div className="capability-grid">
                {capabilityGroups.map((group) => (
                  <article className="capability-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="page-panel section-panel" id="testimonials">
          <div className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h2>Designed now so approved quotes can drop in later.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.quote}>
                <p>{testimonial.quote}</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="page-panel section-panel contact-panel" id="contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <p>
                This site is being built as a sharper portfolio and resume experience for senior web, WordPress,
                management, and digital strategy opportunities.
              </p>
              <div className="contact-links">
                <a href="mailto:hello@ericklandaverry.com">Email</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="#home">Resume</a>
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
                <textarea placeholder="Tell me a little about the role or project." rows={5}></textarea>
              </label>
              <button className="button-primary" type="submit">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
