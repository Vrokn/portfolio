import { useState } from 'react';
import styles from './SiteHeader.module.css';

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <span className={styles.brandName}>Mateo Gomez Ossa</span>
          <span className={styles.brandRole}>Senior Frontend Developer</span>
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Toggle sections menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span className={styles.menuToggleText}>Sections</span>
          <span className={isMenuOpen ? styles.menuToggleIconOpen : styles.menuToggleIcon}>▾</span>
        </button>
        <nav
          id="primary-navigation"
          className={isMenuOpen ? `${styles.navigation} ${styles.navigationOpen}` : styles.navigation}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
