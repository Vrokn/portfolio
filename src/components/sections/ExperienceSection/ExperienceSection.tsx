import Image from 'next/image';
import { useState } from 'react';
import { ParallaxBlock, TiltSpring, TypewriterText } from '@/components/effects';
import { experience } from '@/data/portfolioData';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [hiddenPreviews, setHiddenPreviews] = useState<Record<string, boolean>>({});

  return (
    <section id="experience" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.05}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Career</span>
          <h2 className={styles.title}>
            <TypewriterText
              words={['Where I Delivered']}
              className={styles.titleTyped}
              showCursor={false}
              loop={false}
            />
          </h2>
        </div>

        <div className={styles.horizontalRail} aria-label="Experience timeline">
          {experience.map((job) => (
            <TiltSpring key={`${job.company}-${job.period}`} className={styles.railItem}>
              <article className={styles.workCard}>
                {/*
                  Preview image falls back to gradient caption if file does not exist.
                */}
                <div className={styles.previewFrame}>
                  {job.previewImageSrc && !hiddenPreviews[`${job.company}-${job.period}`] ? (
                    <Image
                      src={`${basePath}${job.previewImageSrc}`}
                      alt={`${job.company} project preview`}
                      className={styles.previewImage}
                      fill
                      sizes="(max-width: 920px) 100vw, 400px"
                      loading="lazy"
                      onError={() => {
                        setHiddenPreviews((previous) => ({
                          ...previous,
                          [`${job.company}-${job.period}`]: true,
                        }));
                      }}
                    />
                  ) : null}
                </div>
                <p className={styles.cardPeriod}>{job.period}</p>
                <h3 className={styles.cardTitle}>{job.company}</h3>
                <p className={styles.cardSubtitle}>
                  {job.role} - {job.location}
                </p>
                <ul className={styles.highlightList}>
                  {job.highlights.map((highlight) => (
                    <li key={`${job.company}-${highlight}`} className={styles.cardText}>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className={styles.badgeWrap}>
                  {job.stack.map((skill) => (
                    <span key={`${job.company}-${skill}`} className={styles.badge}>
                      {skill}
                    </span>
                  ))}
                </div>
                {job.href ? (
                  <a href={job.href} target="_blank" rel="noreferrer" className={styles.inlineLink}>
                    Open project
                  </a>
                ) : null}
              </article>
            </TiltSpring>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
