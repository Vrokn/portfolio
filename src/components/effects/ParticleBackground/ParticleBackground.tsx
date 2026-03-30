import { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 74;
const LINK_DISTANCE = 145;
const MAX_SPEED = 0.2;
const MIN_SPEED = 0.1;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    let animationFrameId = 0;
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const setCanvasSize = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const createParticles = () => {
      particles.length = 0;
      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          radius: Math.random() * 1.7 + 0.7,
        });
      }
    };

    const drawConnections = () => {
      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
          const firstParticle = particles[firstIndex];
          const secondParticle = particles[secondIndex];

          const deltaX = firstParticle.x - secondParticle.x;
          const deltaY = firstParticle.y - secondParticle.y;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (distance > LINK_DISTANCE) {
            continue;
          }

          const opacity = 1 - distance / LINK_DISTANCE;
          context.beginPath();
          context.strokeStyle = `rgba(209, 219, 255, ${opacity * 0.34})`;
          context.lineWidth = 0.75;
          context.moveTo(firstParticle.x, firstParticle.y);
          context.lineTo(secondParticle.x, secondParticle.y);
          context.stroke();
        }
      }
    };

    const tick = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        const mouseDeltaX = mouse.x - particle.x;
        const mouseDeltaY = mouse.y - particle.y;
        const mouseDistance = Math.sqrt(mouseDeltaX * mouseDeltaX + mouseDeltaY * mouseDeltaY) || 1;

        if (mouseDistance < 150) {
          particle.vx -= (mouseDeltaX / mouseDistance) * 0.015;
          particle.vy -= (mouseDeltaY / mouseDistance) * 0.015;
        }

        particle.vx += (Math.random() - 0.5) * 0.003;
        particle.vy += (Math.random() - 0.5) * 0.003;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));
        }

        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > MAX_SPEED) {
          particle.vx = (particle.vx / speed) * MAX_SPEED;
          particle.vy = (particle.vy / speed) * MAX_SPEED;
        }
        if (speed < MIN_SPEED && speed > 0) {
          particle.vx = (particle.vx / speed) * MIN_SPEED;
          particle.vy = (particle.vy / speed) * MIN_SPEED;
        }

        context.beginPath();
        context.fillStyle = 'rgba(238, 243, 255, 0.86)';
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      drawConnections();
      animationFrameId = window.requestAnimationFrame(tick);
    };

    const onPointerMoveHandler = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onResizeHandler = () => {
      setCanvasSize();
      createParticles();
    };

    setCanvasSize();
    createParticles();
    tick();

    window.addEventListener('resize', onResizeHandler);
    window.addEventListener('pointermove', onPointerMoveHandler);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
      window.removeEventListener('pointermove', onPointerMoveHandler);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef} aria-hidden="true" />;
}
