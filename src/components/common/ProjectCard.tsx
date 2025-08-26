import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProjectCard = ({ title, description, imageUrl, tags }: ProjectCardProps) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15}>
      <motion.div
        className="group relative bg-white/5 rounded-2xl border border-white/10 shadow-lg overflow-hidden"
        variants={cardVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-56 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Oswald' }}>{title}</h3>
          <p className="font-sans text-muted-foreground mb-4 flex-grow" style={{ fontFamily: 'Noto Sans' }}>{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="font-sans px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary ring-1 ring-primary/20" style={{ fontFamily: 'Noto Sans' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white font-semibold">
            View Project <ExternalLink size={18} />
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
