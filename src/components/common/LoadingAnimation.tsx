import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // auto-hide after 3s
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const dotVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      {/* Dots Loader */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-primary"
            variants={dotVariants}
            animate="animate"
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Logo / Text */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-foreground">CodeCafe</h2>
        <p className="text-sm text-muted-foreground">Brewing your experience...</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
