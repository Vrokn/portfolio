import { useEffect, useRef, type ReactNode } from 'react';
import styles from './ParallaxBlock.module.css';

interface ParallaxBlockProps {
  speed?: number;
  className?: string;
  children: ReactNode;
}

export default function ParallaxBlock({ speed = -0.07, className, children }: ParallaxBlockProps) {
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = blockRef.current;
    if (!element) {
      return;
    }

    let animationFrameId = 0;

    const render = () => {
      const offset = window.scrollY * speed;
      element.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`);
      animationFrameId = 0;
    };

    const onScrollHandler = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', onScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  const composedClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <div ref={blockRef} className={composedClassName}>
      {children}
    </div>
  );
}
