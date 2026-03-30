import { ParallaxBlock, TypewriterText } from '@/components/effects';
import { contactEntries } from '@/data/portfolioData';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.04}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Contact</span>
          <h2 className={styles.title}>
            <TypewriterText
              words={["Let's Work Together"]}
              className={styles.titleTyped}
              showCursor={false}
              loop={false}
            />
          </h2>
        </div>
        <p className={styles.contactText}>
          Open to senior frontend opportunities, technical leadership challenges and product collaborations.
        </p>
        <div className={styles.contactLinkWrap}>
          {contactEntries.map((entry) => (
            <a key={entry.href} href={entry.href} target="_blank" rel="noreferrer" className={styles.contactLink}>
              {entry.label}
            </a>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
