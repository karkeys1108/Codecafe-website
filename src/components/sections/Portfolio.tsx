import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../common/ProjectCard';

const projectsData = [
  {
    title: 'Project Alpha',
    description: 'A sleek and modern e-commerce platform.',
    imageUrl: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'E-commerce'],
  },
  {
    title: 'Project Beta',
    description: 'A corporate website with a focus on user experience.',
    imageUrl: '/images/project2.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'CMS'],
  },
  {
    title: 'Project Gamma',
    description: 'A mobile application for a social networking service.',
    imageUrl: '/images/project3.jpg',
    tags: ['React Native', 'Firebase', 'Mobile'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="pt-0 pb-20 md:pb-28 bg-gradient-to-b from-background/95 via-background to-background/90">
      {/* Connecting element */}
      <div className="w-full h-16 bg-gradient-to-b from-transparent via-background/20 to-background/95"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore a selection of our finest projects. We take pride in delivering high-quality solutions that make an impact.
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
