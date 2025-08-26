import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type AnimationTarget = string | React.RefObject<HTMLElement> | HTMLElement | null;

interface AnimationOptions {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  scrollTrigger?: gsap.TweenVars['scrollTrigger'];
  duration?: number;
  delay?: number;
  stagger?: number | gsap.StaggerVars;
  onComplete?: () => void;
}

export const useGsapAnimation = (
  target: AnimationTarget,
  options: AnimationOptions
) => {
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    let element: HTMLElement | null = null;
    let ctx: gsap.Context;

    // Set a small timeout to ensure the DOM is ready
    const timer = setTimeout(() => {
      if (typeof target === 'string') {
        element = document.querySelector(target);
      } else if (target && 'current' in target) {
        element = target.current;
      } else if (target instanceof HTMLElement) {
        element = target;
      }

      if (!element) return;

      // Create a GSAP context for cleanup
      ctx = gsap.context(() => {
        const { from, to, scrollTrigger, duration = 1, delay = 0, stagger, onComplete } = options;

        // Set initial state
        gsap.set(element, { ...from, opacity: 0 });

        // Create animation
        animationRef.current = gsap.to(element, {
          ...to,
          opacity: 1,
          duration,
          delay,
          stagger,
          scrollTrigger: scrollTrigger ? {
            trigger: element,
            toggleActions: 'play none none none',
            ...scrollTrigger,
          } : undefined,
          onComplete,
          ease: 'power3.out',
        });
      }, element);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (ctx) {
        ctx.revert();
      }
    };
  }, [target, options]);

  return animationRef;
};

export const useParallax = (target: AnimationTarget, speed: number = 1) => {
  useEffect(() => {
    let element: HTMLElement | null = null;
    let ctx: gsap.Context;
    let y: number;

    const setY = () => {
      if (element) {
        y = window.scrollY * speed;
        gsap.to(element, { y: y, ease: 'none', duration: 0.1 });
      }
    };

    // Set a small timeout to ensure the DOM is ready
    const timer = setTimeout(() => {
      if (typeof target === 'string') {
        element = document.querySelector(target);
      } else if (target && 'current' in target) {
        element = target.current;
      } else if (target instanceof HTMLElement) {
        element = target;
      }

      if (!element) return;

      // Initial setup
      ctx = gsap.context(() => {
        gsap.set(element, { willChange: 'transform' });
        window.addEventListener('scroll', setY);
      }, element);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', setY);
      if (ctx) {
        ctx.revert();
      }
    };
  }, [target, speed]);
};
