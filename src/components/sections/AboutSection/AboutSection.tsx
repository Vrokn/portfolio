import { ParallaxBlock, TypewriterText } from '@/components/effects';
import { aboutParagraphs } from '@/data/portfolioData';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.06}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Profile</span>
          <h2 className={styles.title}>
            <TypewriterText words={['About Me']} className={styles.titleTyped} showCursor={false} loop={false} />
          </h2>
        </div>
        <div className={styles.aboutGrid}>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.aboutParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
