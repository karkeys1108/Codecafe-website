import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies for optimal performance.',
    icon: <Code className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
    icon: <Layout className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that work seamlessly on all devices.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Fast Performance',
    description: 'Lightning-fast load times and smooth interactions for better engagement.',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-400',
  },
];

const InteractiveFeatureCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 text-sm font-medium text-amber-400 bg-amber-900/30 rounded-full mb-4 font-mono tracking-wider">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mozilla">
            What We <span className="text-amber-400">Excel At</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon, color }: { title: string; description: string; icon: React.ReactNode; color: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  
  // Smooth spring effect for x and y
  const xSmooth = useSpring(x, springConfig);
  const ySmooth = useSpring(y, springConfig);
  
  // Rotate based on mouse position
  const rotateX = useTransform(ySmooth, [-50, 50], [10, -10]);
  const rotateY = useTransform(xSmooth, [-50, 50], [-10, 10]);
  
  // Glow effect
  const gradientOpacity = useTransform(
    xSmooth,
    [-100, 0, 100],
    [0.1, 0.05, 0.1]
  );
  
  const background = useMotionTemplate`radial-gradient(
    200px circle at ${xSmooth}px ${ySmooth}px,
    rgba(255, 255, 255, ${gradientOpacity}) 0%,
    transparent 80%
  )`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="h-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 overflow-hidden relative"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          background,
        }}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 pointer-events-none`} />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-mozilla">{title}</h3>
          <p className="text-gray-400 flex-grow">{description}</p>
          
          {/* Animated border bottom */}
          <div className="mt-6 pt-6 border-t border-white/5 relative overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              initial={{ width: 0, x: '-100%' }}
              whileInView={{ width: '100%', x: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <span className="text-sm text-amber-400 font-medium">Learn more →</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveFeatureCards;
