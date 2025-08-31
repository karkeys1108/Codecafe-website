// src/components/sections/Products.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

export default function Products() {
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  // Update time for subtle animations
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
      opacity: [0.5, 0.7, 0.5],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="solutions" className="py-24 mt--10relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-6 py-2 text-sm font-medium text-amber-400 rounded-full border border-amber-400/20 bg-amber-400/5 mb-6 backdrop-blur-sm"
            variants={itemVariants}
          >
            Coming Soon
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            variants={itemVariants}
          >
            Something Extraordinary
            <span className="text-amber-400"> Is Brewing</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-12 font-light"
            variants={itemVariants}
          >
            We're crafting innovative solutions that will transform the way you work. 
            Join our waiting list for early access.
          </motion.p>

          <motion.div 
            className="relative max-w-2xl mx-auto"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={itemVariants}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl"
                animate={{
                  backgroundPosition: [
                    '0% 0%',
                    '100% 100%',
                    '0% 0%'
                  ],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* Moving particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Main card */}
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 overflow-hidden"
              initial={{ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }}
              animate={{
                transform: isHovered 
                  ? `perspective(1000px) rotateX(${(glowPosition.y - 50) / 15}deg) rotateY(${(glowPosition.x - 50) / 15}deg)`
                  : 'perspective(1000px) rotateX(0) rotateY(0)',
                boxShadow: isHovered 
                  ? '0 25px 50px -12px rgba(245, 158, 11, 0.15)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
              {/* Animated border highlight */}
              <motion.div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(
                    600px circle at ${glowPosition.x}% ${glowPosition.y}%,
                    rgba(245, 158, 11, 0.1),
                    transparent 40%
                  )`,
                }}
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 text-center">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/10 mx-auto mb-6 flex items-center justify-center"
                  animate={{
                    rotate: time * 5,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <svg
                    className="w-10 h-10 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  animate={{
                    textShadow: isHovered 
                      ? '0 0 20px rgba(245, 158, 11, 0.5)' 
                      : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Stay Tuned for the Big Reveal
                </motion.h3>

                <motion.p 
                  className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed"
                  animate={{
                    opacity: isHovered ? 0.9 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  We're putting the finishing touches on something truly special. 
                  Sign up to be the first to know when we launch.
                </motion.p>

                <motion.div 
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Buttons have been removed as per request */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
