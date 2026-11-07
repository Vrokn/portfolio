import Image from 'next/image';
import { ParallaxBlock, TiltSpring, TypewriterText } from '@/components/effects';
import { projects } from '@/data/portfolioData';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section id="projects" className={styles.section} data-reveal="true">
      <ParallaxBlock speed={-0.05}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Portfolio</span>
          <h2 className={styles.title}>
            <TypewriterText
              words={['What I Built']}
              className={styles.titleTyped}
              showCursor={false}
              loop={false}
            />
          </h2>
        </div>

        <div className={styles.horizontalRail} aria-label="Projects showcase">
          {projects.map((project) => (
            <TiltSpring key={project.name} className={styles.railItem}>
              <article className={styles.workCard}>
                <div className={styles.projectMedia}>
                  {project.imageSrc ? (
                    <Image
                      src={`${basePath}${project.imageSrc}`}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 920px) 100vw, 440px"
                      className={styles.projectImage}
                    />
                  ) : project.videoSrc ? (
                    <video
                      className={styles.projectVideo}
                      src={`${basePath}${project.videoSrc}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`${project.name} project demo`}
                    >
                      Sorry, your browser does not support embedded videos.
                    </video>
                  ) : null}
                </div>
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
                {project.links && project.links.length > 0 ? (
                  <div className={styles.linkRow}>
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={styles.inlineLink}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a href={project.href} target="_blank" rel="noreferrer" className={styles.inlineLink}>
                    Open live site
                  </a>
                )}
              </article>
            </TiltSpring>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
