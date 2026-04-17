import styles from "./page.module.css";

const proofChips = ["WordPress depth", "Full-site ownership", "Digital strategy"];

const projects = ["Smart Start", "Plainsight AI", "Consensus"];

export default function HomeOptionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true">
        <span className={styles.orbA}></span>
        <span className={styles.orbB}></span>
        <span className={styles.grid}></span>
      </div>

      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.kicker}>Home Explorations</p>
          <h1>Three visual directions for the home panel.</h1>
          <p>
            These are deliberately different so you can react to the structure, emphasis, and energy instead of
            trying to imagine them from description alone.
          </p>
        </header>

        <section className={styles.option}>
          <div className={styles.optionHead}>
            <span>Option 1</span>
            <h2>Statement First</h2>
            <p>Big message, minimal supporting structure, stronger first impression.</p>
          </div>

          <div className={`${styles.preview} ${styles.previewStatement}`}>
            <div className={styles.statementCopy}>
              <p className={styles.eyebrow}>Senior Web Developer</p>
              <h3>Web leadership grounded in web development.</h3>
              <p>
                I build and operate websites that support real business goals through WordPress, frontend
                execution, analytics, and post-launch ownership.
              </p>
              <div className={styles.actions}>
                <button type="button">View projects</button>
                <button type="button" className={styles.secondary}>
                  Contact
                </button>
              </div>
            </div>

            <div className={styles.statementVisual}>
              <div className={styles.visualCardLarge}>
                <span>Current focus</span>
                <strong>Built, measured, optimized, and supported after launch.</strong>
              </div>
              <div className={styles.proofRow}>
                {proofChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.option}>
          <div className={styles.optionHead}>
            <span>Option 2</span>
            <h2>Split Identity</h2>
            <p>Shows both sides of your value: what you build and what you own after launch.</p>
          </div>

          <div className={`${styles.preview} ${styles.previewSplit}`}>
            <div className={styles.splitCopy}>
              <p className={styles.eyebrow}>Senior Web Developer</p>
              <h3>More than build work. Real platform ownership.</h3>
              <p>
                This version leans harder into your webmaster-style value: strategy, implementation, analytics,
                compliance, migrations, and operations.
              </p>
            </div>

            <div className={styles.splitPanels}>
              <article className={styles.identityPanel}>
                <span>What I build</span>
                <strong>WordPress sites, landing pages, frontend systems, migrations, integrations.</strong>
              </article>
              <article className={styles.identityPanel}>
                <span>What I own</span>
                <strong>GA4, GTM, VWO, CRO, hosting, compliance, and launch support.</strong>
              </article>
              <div className={styles.rangeRail}>
                <span>In-house to enterprise</span>
                <span>Frontend depth</span>
                <span>Digital strategy</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.option}>
          <div className={styles.optionHead}>
            <span>Option 3</span>
            <h2>Portfolio First</h2>
            <p>Leads with work immediately instead of making the intro carry all the weight.</p>
          </div>

          <div className={`${styles.preview} ${styles.previewPortfolio}`}>
            <div className={styles.portfolioCopy}>
              <p className={styles.eyebrow}>Selected work</p>
              <h3>Actual projects do the talking first.</h3>
              <p>
                This direction makes the home panel feel more like a designer-developer portfolio and less like
                a traditional intro block.
              </p>
            </div>

            <div className={styles.projectStack}>
              {projects.map((project, index) => (
                <article className={styles.projectCard} key={project}>
                  <div className={`${styles.projectImage} ${styles[`projectImage${index + 1}`]}`}></div>
                  <div className={styles.projectMeta}>
                    <strong>{project}</strong>
                    <span>Case-study style preview</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
