import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {title.split(' ').map((word, index, array) => (
          <span key={index} className="inline-block">
            {word}
            {index < array.length - 1 && ' '}
            {index === Math.floor(array.length / 2) - 1 && (
              <span className="relative inline-block">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"></span>
              </span>
            )}
          </span>
        ))}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg text-gray-500 dark:text-gray-400 ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`mt-8 mb-12 h-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/50 to-primary-500/20 ${centered ? 'mx-auto' : ''}`}
        style={{ width: '100px' }}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
};

export default SectionHeader;
