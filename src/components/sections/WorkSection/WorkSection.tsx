import { useState } from 'react';
import { ParallaxBlock, TiltSpring, TypewriterText } from '@/components/effects';
import { experience, projects } from '@/data/portfolioData';
import type { WorkTab } from '@/types/portfolio';
import styles from './WorkSection.module.css';

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState<WorkTab>('experience');

  return (
    <section id="work" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.05}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Work</span>
          <h2 className={styles.title}>
            <TypewriterText
              words={['Experience and Projects']}
              className={styles.titleTyped}
              showCursor={false}
              loop={false}
            />
          </h2>
        </div>

        <div className={styles.segmentedControl} role="tablist" aria-label="Portfolio tabs">
          <button
            type="button"
            className={activeTab === 'experience' ? styles.tabButtonActive : styles.tabButton}
            onClick={() => setActiveTab('experience')}
            role="tab"
            aria-selected={activeTab === 'experience'}
          >
            Experience
          </button>
          <button
            type="button"
            className={activeTab === 'projects' ? styles.tabButtonActive : styles.tabButton}
            onClick={() => setActiveTab('projects')}
            role="tab"
            aria-selected={activeTab === 'projects'}
          >
            Projects
          </button>
        </div>

        {activeTab === 'experience' ? (
          <div className={styles.cardGrid}>
            {experience.map((job) => (
              <TiltSpring key={`${job.company}-${job.period}`}>
                <article className={styles.workCard}>
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
                </article>
              </TiltSpring>
            ))}
          </div>
        ) : (
          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <TiltSpring key={project.name}>
                <article className={styles.workCard}>
                  <p className={styles.cardPeriod}>{project.period}</p>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <p className={styles.cardText}>{project.summary}</p>
                  <p className={styles.cardNote}>{project.mediaNote}</p>
                  <div className={styles.badgeWrap}>
                    {project.stack.map((skill) => (
                      <span key={`${project.name}-${skill}`} className={styles.badge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" className={styles.inlineLink}>
                    Open project
                  </a>
                </article>
              </TiltSpring>
            ))}
          </div>
        )}
      </ParallaxBlock>
    </section>
  );
}
