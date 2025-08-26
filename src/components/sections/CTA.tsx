import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section 
      ref={ref}
      className="pt-0 pb-20 md:pb-28 bg-gradient-to-b from-background/90 via-background to-background"
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Connecting element */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent via-background/20 to-background/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-12 md:p-20 border border-border/20">
          <div className="absolute inset-0 z-0 h-full w-full bg-background/50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Ready to Start a Project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build something amazing together. Reach out to us to discuss your ideas.
            </p>
            <Button 
              variant="primary"
              size="lg"
              className="group"
              iconPosition="right"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
