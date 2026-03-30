import Image from 'next/image';
import { useRouter } from 'next/router';
import { ParallaxBlock, TiltSpring, TypewriterText } from '@/components/effects';
import { heroContent } from '@/data/portfolioData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { basePath } = useRouter();
  const heroImageSrc = `${basePath || ''}/images/mateo.png`;

  return (
    <section id="home" className={styles.heroSection}>
      <ParallaxBlock speed={-0.1}>
        <div className={styles.heroGrid}>
          <div className={styles.heroMain}>
            <p className={styles.heroDynamic}>
              <TypewriterText
                words={['Hello! I am Mateo', 'Senior Frontend Engineer', 'Artist', 'Music Producer']}
                className={styles.heroTyped}
                typeSpeed={58}
                backSpeed={31}
                loop
                showCursor
              />
            </p>
            <p className={styles.heroBadge}>{heroContent.badge}</p>
            <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>
            <div className={styles.heroActions}>
              <a href={heroContent.primaryAction.href} className={styles.primaryButton}>
                {heroContent.primaryAction.label}
              </a>
              <a href={heroContent.secondaryAction.href} className={styles.secondaryButton}>
                {heroContent.secondaryAction.label}
              </a>
            </div>
          </div>

          <ParallaxBlock speed={-0.18} className={styles.heroPortraitParallax}>
            <TiltSpring className={styles.heroPortraitTilt}>
              <div className={styles.heroPortraitFrame}>
                <Image
                  src={heroImageSrc}
                  alt="Portrait of Mateo Gomez Ossa"
                  width={1080}
                  height={1920}
                  priority
                />
                <div className={styles.heroPortraitGlow} />
              </div>
            </TiltSpring>
          </ParallaxBlock>
        </div>
      </ParallaxBlock>
    </section>
  );
}
