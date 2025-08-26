import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorSize = 60;
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const rotate = useMotionValue(0);
  const isVisible = useRef(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef<NodeJS.Timeout>();
  
  // Smooth out the cursor movement
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);
  const smoothRotate = useSpring(rotate, smoothOptions);

  // Bounce animation variants
  const bounceVariants = {
    initial: { y: -20, scale: 0.8 },
    bounce: {
      y: [0, -30, 0],
      scale: [1, 0.9, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }
    }
  };

  useEffect(() => {
    if (!cursorRef.current) return;

    const resetIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000); // 2 seconds idle time
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible.current) {
        isVisible.current = true;
        // The CSS will handle visibility when hero-cursor-active class is present
      }
      
      // Reset idle state
      if (isIdle) setIsIdle(false);
      resetIdleTimer();
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
      rotate.set(angle + 90);

      // Check for interactive elements
      const target = e.target as HTMLElement;
      const isNavbarElement = target.closest('nav, nav *');
      const isInteractive = target.closest('a, button, [role="button"], [data-cursor="pointer"]');
      
      if (isNavbarElement) {
        cursorRef.current.classList.add('cursor-navbar');
        cursorRef.current.classList.remove('cursor-pointer');
      } else if (isInteractive) {
        cursorRef.current.classList.add('cursor-pointer');
        cursorRef.current.classList.remove('cursor-navbar');
      } else {
        cursorRef.current.classList.remove('cursor-pointer', 'cursor-navbar');
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.classList.remove('cursor-pointer', 'cursor-navbar');
      }
    };

    // Initialize
    resetIdleTimer();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, rotate, isIdle]);

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
        rotate: smoothRotate,
      }}
    >
      <div className="relative w-full h-full">
        <AnimatePresence>
          {isIdle ? (
            <motion.div
              key="bouncing-circle"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b87333] to-[#e9b168]"
              variants={bounceVariants}
              initial="initial"
              animate="bounce"
              exit={{ y: 0, scale: 1 }}
            />
          ) : (
            <motion.div 
              key="cursor-content"
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cursor-circle" />
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <polygon points="12,4 8,12 12,10 16,12" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CustomCursor;
