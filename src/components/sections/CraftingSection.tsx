import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const designs = [
  {
    id: 1,
    title: 'UI/UX Design',
    image: '/images/Procurse.png',
    width: 1,
    height: 1,
  },
  {
    id: 2,
    title: 'Mobile App',
    image: '/images/Easegit-Light.png',
    width: 1,
    height: 2,
  },
  {
    id: 3,
    title: 'Web Design',
    image: '/images/Roboloom-hero.png',
    width: 2,
    height: 1,
  },
  {
    id: 4,
    title: 'Brand Identity',
    image: '/images/Kppg.png',
    width: 1,
    height: 1,
  },
  {
    id: 5,
    title: 'Dashboard UI',
    image: '/images/OrderSync-Light.png',
    width: 1,
    height: 1,
  },
  {
    id: 6,
    title: 'Portfolio',
    image: '/images/Portfolio.png',
    width: 2,
    height: 1,
  },
];

const CraftingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-background to-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.03),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mozilla">
            Design <span className="text-amber-400">Showcase</span>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-5"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-nata">
            A collection of our latest creative works and design solutions
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              custom={index}
              variants={item}
              initial="hidden"
              animate="show"
              className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 
                hover:border-amber-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5
                ${design.width === 2 ? 'col-span-2' : ''}
                ${design.height === 2 ? 'row-span-2' : ''}`}
            >
              <div className="relative w-full h-full">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-medium mb-1">
                      {design.title}
                    </h3>
                    <div className="w-0 group-hover:w-8 h-0.5 bg-amber-400 transition-all duration-500 mb-2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="hex" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon
                points="10,0 20,5 20,15 10,20 0,15 0,5"
                className="stroke-amber-400/40 fill-transparent"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#hex)" />
        </svg>
      </div>

    </section>
  );
};

export default CraftingSection;
