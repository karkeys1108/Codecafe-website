import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CurtainIntroProps = {
  onComplete?: () => void;
};

// Simple cute SVG mascot (non-branded, friendly)
const Mascot = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="m-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(30 90% 85%)" />
        <stop offset="100%" stopColor="hsl(20 90% 80%)" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="none" strokeWidth="1">
      <circle cx="60" cy="60" r="36" fill="url(#m-face)" />
      <circle cx="48" cy="55" r="4" fill="#222" />
      <circle cx="72" cy="55" r="4" fill="#222" />
      <path d="M46 74 C 54 82, 66 82, 74 74" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M38 44 C 48 34, 72 34, 82 44" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="42" cy="64" r="2.5" fill="#ef4444" />
      <circle cx="78" cy="64" r="2.5" fill="#ef4444" />
      <path d="M20 52 C 22 46, 28 44, 34 46" stroke="#a3e635" strokeWidth="6" strokeLinecap="round" />
      <path d="M100 52 C 98 46, 92 44, 86 46" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

const greetings = [
  'नमस्ते', // Hindi
  'வணக்கம்', // Tamil
  'నమస్కారం', // Telugu
  'নমস্কার', // Bengali
  'ನಮಸ್ಕಾರ', // Kannada
  'നമസ്കാരം', // Malayalam
  'નમસ્તે', // Gujarati
  'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', // Punjabi
  'नमस्कार', // Marathi
  'જોઇન કરો', // Generic friendly vibe
];

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem('intro_played_v1');
    if (!hasPlayed) {
      setShow(true);
      localStorage.setItem('intro_played_v1', 'true');
    } else {
      onComplete?.();
    }
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {/* Curtains */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-primary/20 to-primary/5"
            initial={{ x: 0 }}
            animate={{ x: '-110%' }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-accent/20 to-accent/5"
            initial={{ x: 0 }}
            animate={{ x: '110%' }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeInOut' }}
            onAnimationComplete={() => setShow(false)}
          />

          {/* Mascot */}
          <motion.div
            initial={{ x: -80, y: 10, rotate: -5, opacity: 0 }}
            animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 drop-shadow-xl"
          >
            <Mascot />
          </motion.div>

          {/* Greetings carousel */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm text-muted-foreground">Welcome</div>
            <div className="mt-1 h-7 overflow-hidden">
              <motion.div
                key="greet-seq"
                animate={{ y: ['0%', '-100%'] }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              >
                <div className="text-xl font-semibold text-primary">
                  {greetings.slice(0, 1)[0]}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


