import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Briefcase, Globe, Rocket, Code, Users, Shield, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';

// Cursor styles are now handled in CSS

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20 
    } 
  },
};

// Subtle, clean background with full diagonal grid, icons, and accent glow
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.12),transparent_60%)]" />

    {/* Full grid with diagonals */}
    <svg className="absolute inset-0 w-full h-full text-foreground/10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M0 56 L56 0" fill="none" stroke="currentColor" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>

    {/* Subtle gradient glow accents mixed with warm tone */}
    <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.18),transparent_60%)] blur-3xl" />
    <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.12),transparent_60%)] blur-2xl" />
    
    {/* Bottom fade for seamless transition */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

    {/* Enhanced business icons with mix of white and gradient colors */}
    <div className="absolute inset-0 pointer-events-none">
      {/* White icons with subtle glow */}
      <motion.div 
        className="absolute top-[12%] left-[8%]" 
        animate={{ 
          y: [0, 8, 0], 
          x: [0, 3, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }} 
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        <Briefcase className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </motion.div>
      
      {/* Gradient icon */}
      <motion.div 
        className="absolute top-[24%] right-[14%]" 
        animate={{ 
          y: [0, -6, 0], 
          x: [0, 4, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.15, 1]
        }} 
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <div className="h-6 w-6 bg-gradient-to-br from-[#b87333] via-[#d18a44] to-[#f0c07a] rounded-sm p-0.5">
          <TrendingUp className="h-5 w-5 text-white" />
        </div>
      </motion.div>
      
      {/* White icon */}
      <motion.div 
        className="absolute top-[40%] left-[18%]" 
        animate={{ 
          y: [0, 6, 0], 
          x: [0, -2, 0],
          rotate: [0, 3, 0],
          scale: [1, 1.08, 1]
        }} 
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <Globe className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </motion.div>
      
      {/* Gradient icon */}
      <motion.div 
        className="absolute top-[68%] right-[20%]" 
        animate={{ 
          y: [0, -8, 0], 
          x: [0, -3, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.12, 1]
        }} 
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <div className="h-6 w-6 bg-gradient-to-br from-[#b87333] via-[#d18a44] to-[#f0c07a] rounded-sm p-0.5">
          <Rocket className="h-5 w-5 text-white" />
        </div>
      </motion.div>
      
      {/* White icon */}
      <motion.div 
        className="absolute bottom-[18%] left-[30%]" 
        animate={{ 
          y: [0, 5, 0], 
          x: [0, 2, 0],
          rotate: [0, 4, 0],
          scale: [1, 1.1, 1]
        }} 
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Code className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </motion.div>
      
      {/* Gradient icon */}
      <motion.div 
        className="absolute top-[58%] left-[6%]" 
        animate={{ 
          y: [0, 7, 0], 
          x: [0, -1, 0],
          rotate: [0, -3, 0],
          scale: [1, 1.05, 1]
        }} 
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      >
        <div className="h-6 w-6 bg-gradient-to-br from-[#b87333] via-[#d18a44] to-[#f0c07a] rounded-sm p-0.5">
          <Users className="h-5 w-5 text-white" />
        </div>
      </motion.div>
      
      {/* White icon */}
      <motion.div 
        className="absolute bottom-[26%] right-[10%]" 
        animate={{ 
          y: [0, -5, 0], 
          x: [0, 3, 0],
          rotate: [0, 6, 0],
          scale: [1, 1.08, 1]
        }} 
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        <Shield className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </motion.div>
    </div>

    {/* Enhanced floating orbs with more dynamic movement */}
    <motion.div
      className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3], 
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: [0.2, 0.5, 0.2], 
        scale: [1, 1.15, 1],
        rotate: [360, 180, 0]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 0.2 }}
    />
    
    {/* Additional floating accent elements with varied colors */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#b87333]/20 blur-2xl"
      animate={{ 
        y: [0, -20, 0],
        x: [0, 15, 0],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
    
    <motion.div
      className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-[#b87333]/15 blur-xl"
      animate={{ 
        y: [0, 25, 0],
        x: [0, -10, 0],
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.3, 0.15]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    
    {/* White floating element for contrast */}
    <motion.div
      className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/10 blur-xl"
      animate={{ 
        y: [0, -15, 0],
        x: [0, -8, 0],
        scale: [1, 1.15, 1],
        opacity: [0.1, 0.25, 0.1]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
    />
    
    {/* Gradient floating element */}
    <motion.div
      className="absolute bottom-1/4 left-1/6 w-28 h-28 rounded-full bg-gradient-to-br from-[#b87333]/15 via-[#d18a44]/20 to-[#f0c07a]/15 blur-2xl"
      animate={{ 
        y: [0, 18, 0],
        x: [0, 12, 0],
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.35, 0.15]
      }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    />
  </div>
);

const Hero = () => {
  useEffect(() => {
    // Add hero-cursor-active class to body when component mounts
    document.body.classList.add('hero-cursor-active');
    // Also add to html element to ensure global coverage
    document.documentElement.classList.add('hero-cursor-active');
    
    // Debug: Check if classes are applied
    console.log('Hero cursor active:', document.body.classList.contains('hero-cursor-active'));
    console.log('HTML cursor active:', document.documentElement.classList.contains('hero-cursor-active'));
    
    // Remove hero-cursor-active class when component unmounts
    return () => {
      document.body.classList.remove('hero-cursor-active');
      document.documentElement.classList.remove('hero-cursor-active');
    };
  }, []);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedBackground />
      
      {/* Enhanced scroll indicator with smooth scroll behavior */}
      <motion.button 
        onClick={() => {
          const nextSection = document.getElementById('services');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="fixed right-6 bottom-12 z-20 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-[2px] bg-gradient-to-b from-primary/70 to-transparent rounded-full overflow-hidden">
            <motion.div 
              className="w-full h-full bg-primary"
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut',
                repeatType: 'reverse'
              }}
            />
          </div>
          <div className="relative h-10 w-10 rounded-full border border-primary/30 bg-background/70 backdrop-blur-md group-hover:bg-background/90 transition-all duration-300">
            <motion.span
              className="absolute left-1/2 top-2.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className="text-xs tracking-widest uppercase text-muted-foreground/80 font-oswald font-medium group-hover:text-foreground transition-colors duration-300">
            Scroll
          </span>
        </div>
      </motion.button>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm md:text-base font-mozilla font-semibold border border-primary/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2.5 animate-pulse"></span>
              We're accepting new projects
            </motion.div>
            
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.15] md:leading-[1.12] lg:leading-[1.08] font-black"
              style={{ textWrap: 'balance' }}
            >
              <span className="block font-black tracking-[-0.015em] md:tracking-[-0.02em] lg:tracking-[-0.025em] pb-1">Shaping Ideas Into</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#b87333] via-[#d18a44] to-[#f0c07a] font-black tracking-[0.02em] md:tracking-[0.025em] lg:tracking-[0.03em] pt-1 pb-2 gradient-text-optimized">Digital futures.</span>
            </h1>
            
            <p className="top-20 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-mozilla font-medium leading-relaxed">
              We design and build high‑performance websites and applications for growth.
              Reliable delivery, clean code, measurable impact.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-6"
              variants={itemVariants}
            >
              <Button 
                variant="primary"
                size="lg"
                className="group gold-hover shadow-lg shadow-warm hover:shadow-warm-strong transition-all duration-300 transform hover:-translate-y-0.5 bg-gradient-to-r from-[#b87333] via-[#cf8b3c] to-[#e9b168] text-white border border-white/10 focus:ring-2 focus:ring-[#b87333] focus:ring-offset-2 focus:ring-offset-background hover:from-[#bf6b2b] hover:to-[#f3c77f] text-lg font-oswald font-semibold"
                iconPosition="right"
                icon={<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />}
                data-cursor="pointer"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="group border-[#b87333]/50 hover:border-[#b87333] text-foreground/80 hover:text-[#b87333] focus:ring-[#b87333] transition-colors duration-300 text-lg font-oswald font-semibold"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Simple Three Points with Icons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-12 px-4 max-w-4xl mx-auto"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { 
                  text: "Automate your operations",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                { 
                  text: "Execute Fast, Grow Fast",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                { 
                  text: "Bulk execution with quality",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border/30"
                >
                  {item.icon}
                  <span className="font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
