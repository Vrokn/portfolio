import { ParallaxBlock, TiltSpring, TypewriterText } from '@/components/effects';
import { skillCategories } from '@/data/portfolioData';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.05}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Capabilities</span>
          <h2 className={styles.title}>
            <TypewriterText words={['Skills']} className={styles.titleTyped} showCursor={false} loop={false} />
          </h2>
        </div>
        <div className={styles.skillCategoryGrid}>
          {skillCategories.map((category) => (
            <TiltSpring key={category.title}>
              <article className={styles.skillCard}>
                <h3 className={styles.skillCardTitle}>{category.title}</h3>
                <div className={styles.badgeWrap}>
                  {category.badges.map((badge) => (
                    <span key={`${category.title}-${badge}`} className={styles.badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            </TiltSpring>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
