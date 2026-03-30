import { ReactTyped as Typed } from 'react-typed';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  decorateWithSdot?: boolean;
  startWhenVisible?: boolean;
}

export default function TypewriterText({
  words,
  className,
  typeSpeed = 54,
  backSpeed = 28,
  backDelay = 1800,
  loop = true,
  showCursor = true,
  cursorChar = '|',
  decorateWithSdot = true,
  startWhenVisible = true,
}: TypewriterTextProps) {
  if (words.length === 0) {
    return null;
  }

  const classes = [styles.wrapper, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {decorateWithSdot ? <span className={styles.sdot}>&sdot;</span> : null}
      <Typed
        strings={words}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
        loop={loop}
        showCursor={showCursor}
        cursorChar={cursorChar}
        startWhenVisible={startWhenVisible}
        className={styles.typedText}
      />
      {decorateWithSdot ? <span className={styles.sdot}>&sdot;</span> : null}
    </span>
  );
}
