import { useEffect, useRef, type ReactNode } from 'react';
import styles from './TiltSpring.module.css';

interface TiltSpringProps {
  className?: string;
  children: ReactNode;
}

const SPRING_FACTOR = 0.12;

export default function TiltSpring({ className, children }: TiltSpringProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef({ x: 0, y: 0, scale: 1 });
  const targetRef = useRef({ x: 0, y: 0, scale: 1 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) {
      return;
    }

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * SPRING_FACTOR;
      current.y += (target.y - current.y) * SPRING_FACTOR;
      current.scale += (target.scale - current.scale) * SPRING_FACTOR;

      element.style.transform = `perspective(760px) rotateX(${current.x}deg) rotateY(${current.y}deg) scale(${current.scale})`;
      animationRef.current = window.requestAnimationFrame(animate);
    };

    animationRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = wrapperRef.current;
    if (!element) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const xPosition = (event.clientX - bounds.left) / bounds.width;
    const yPosition = (event.clientY - bounds.top) / bounds.height;

    targetRef.current = {
      x: (0.5 - yPosition) * 10,
      y: (xPosition - 0.5) * 14,
      scale: 1.02,
    };
  };

  const onMouseLeaveHandler = () => {
    targetRef.current = { x: 0, y: 0, scale: 1 };
  };

  const composedClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <div
      ref={wrapperRef}
      className={composedClassName}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
    </div>
  );
}
