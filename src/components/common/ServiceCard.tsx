import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

interface ServiceCardProps {
  title: string;
  description: string;
  lottieFile: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ServiceCard = ({ title, description, lottieFile }: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative h-full bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/20 shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
      <div className="relative z-10">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-border/30">
          <Player
            autoplay
            loop
            src={lottieFile}
            style={{ height: '60px', width: '60px' }}
          />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
