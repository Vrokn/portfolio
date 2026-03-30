import Head from 'next/head';
import { useEffect } from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ParticleBackground,
  SiteHeader,
  SkillsSection,
  WorkSection,
} from '@/components';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, SOCIAL_IMAGE_URL, personSchema } from '@/data/portfolioData';
import styles from './index.module.css';

export default function HomePage() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const isDesktop = window.matchMedia('(min-width: 921px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('section[data-reveal="true"]'));
    if (revealTargets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-8% 0px -8% 0px',
      },
    );

    revealTargets.forEach((target, index) => {
      if (index === 0) {
        target.classList.add('is-visible');
        target.classList.remove('reveal-pending');
        return;
      }
      target.classList.add('reveal-pending');
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((target) => {
        target.classList.remove('is-visible');
        target.classList.remove('reveal-pending');
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo Gomez Ossa" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="manifest" href={`${SITE_URL}manifest.json`} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:secure_url" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1920" />
        <meta property="og:image:alt" content="Portrait of Mateo Gomez Ossa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="Portrait of Mateo Gomez Ossa" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </Head>

      <div className={styles.pageBackground} aria-hidden="true" />
      <ParticleBackground />
      <div className={styles.pageDecor} aria-hidden="true" />
      <SiteHeader />

      <div className={styles.pageRoot}>
        <main className={styles.mainContent}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <WorkSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
