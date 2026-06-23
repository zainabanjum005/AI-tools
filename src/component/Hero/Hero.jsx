import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Glow */}
      <div className={styles.topGlow}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          AI-driven tools for product teams
        </h1>

        <p className={styles.subtitle}>
          Our landing page template works on all devices,
          so you only have to set it up once,
          and get beautiful results forever.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            Start Building →
          </button>

          <button className={styles.secondaryBtn}>
            Schedule Demo
          </button>
        </div>
      </div>

      {/* Image Section */}

      <div className={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Developer"
          className={styles.heroImage}
        />

        <div className={styles.watchDemo}>
          <span className={styles.playIcon}>▶</span>

          <span>Watch Demo</span>

          <span className={styles.duration}>3:47</span>
        </div>
      </div>

      <div className={styles.bottomGlow}></div>
    </section>
  );
};

export default Hero;