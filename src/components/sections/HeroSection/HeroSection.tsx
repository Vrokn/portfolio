import Image from 'next/image';
import { ParallaxBlock, TypewriterText } from '@/components/effects';
import { heroContent } from '@/data/portfolioData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const heroImageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/mateo.png`;
  const subtitleHighlight = '8+ years';
  const hasSubtitleHighlight = heroContent.subtitle.includes(subtitleHighlight);
  const [subtitleBeforeHighlight = '', subtitleAfterHighlight = ''] = hasSubtitleHighlight
    ? heroContent.subtitle.split(subtitleHighlight)
    : [heroContent.subtitle, ''];

  return (
    <section id="home" className={styles.heroSection}>
      <ParallaxBlock speed={-0.1}>
        <div className={styles.heroGrid}>
          <div className={styles.heroMain}>
            <p className={styles.heroDynamic}>
              <TypewriterText
                words={['Hello! I am Mateo', 'Senior Product Engineer', 'Agentic Systems', 'Artist']}
                className={styles.heroTyped}
                typeSpeed={58}
                backSpeed={31}
                loop
                showCursor
              />
            </p>
            <p className={styles.heroBadge}>{heroContent.badge}</p>
            <p className={styles.heroSubtitle}>
              {hasSubtitleHighlight ? (
                <>
                  {subtitleBeforeHighlight}
                  <strong className={styles.heroSubtitleHighlight}>{subtitleHighlight}</strong>
                  {subtitleAfterHighlight}
                </>
              ) : (
                heroContent.subtitle
              )}
            </p>
            <div className={styles.heroActions}>
              <a href={heroContent.primaryAction.href} className={styles.primaryButton}>
                {heroContent.primaryAction.label}
              </a>
              <a href={heroContent.secondaryAction.href} className={styles.secondaryButton}>
                {heroContent.secondaryAction.label}
              </a>
            </div>
            <ul className={styles.heroProofs}>
              {heroContent.proofs.map((proof) => (
                <li key={proof.value} className={styles.heroProof}>
                  <span className={styles.heroProofValue}>{proof.value}</span>
                  <span className={styles.heroProofLabel}>{proof.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <ParallaxBlock speed={-0.18} className={styles.heroPortraitParallax}>
            <div className={styles.heroPortraitTilt}>
              <div className={styles.heroPortraitFrame}>
                <Image
                  src={heroImageSrc}
                  alt="Portrait of Mateo Gomez Ossa"
                  width={1080}
                  height={1920}
                  sizes="(max-width: 920px) 390px, 620px"
                  priority
                />
                <div className={styles.heroPortraitGlow} />
              </div>
            </div>
          </ParallaxBlock>
        </div>
      </ParallaxBlock>
    </section>
  );
}
