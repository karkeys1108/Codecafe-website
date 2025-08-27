import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'The team delivered exceptional work on our mobile app. Their attention to detail and creative approach helped us stand out in the market.',
    rating: 5,
    frontContent: 'Mobile App Development',
    backContent: 'Delivered 2 weeks ahead of schedule with 100% client satisfaction.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    content: 'Outstanding design and development services. They transformed our vision into a beautiful, functional product that our users love.',
    rating: 5,
    frontContent: 'UI/UX Redesign',
    backContent: 'Increased user engagement by 45% post-launch.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandFlow',
    content: 'Working with this team was a game-changer for our brand. Their innovative solutions and timely delivery exceeded our expectations.',
    rating: 4,
    frontContent: 'Brand Strategy',
    backContent: 'Helped rebrand and increase market share by 30%.'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, StartupHub',
    content: 'Professional, creative, and highly skilled. They understood our needs and delivered beyond what we imagined possible.',
    rating: 5,
    frontContent: 'Web Development',
    backContent: 'Built a scalable platform supporting 50k+ monthly users.'
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-current' : 'text-gray-400'}`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isActive, onClick }: { testimonial: any, isActive: boolean, onClick: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className={`relative w-full h-full cursor-pointer rounded-2xl overflow-hidden ${isActive ? 'scale-100' : 'scale-90 opacity-70'}`}
      onClick={() => !isActive ? onClick() : null}
    >
      <div 
        className="relative w-full h-full"
        style={{
          transform: `rotateY(${isFlipped ? '180deg' : '0'})`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
        }}
        onClick={() => isActive && setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div 
          className="absolute w-full h-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 text-xl font-bold flex-shrink-0">
              {testimonial.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium truncate">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              <div className="mt-1">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
            <Quote className="text-amber-400/20 w-8 h-8 flex-shrink-0" />
          </div>
          
          <div className="flex-1 flex flex-col">
            <p className="text-gray-300 mb-6 line-clamp-4">"{testimonial.content}"</p>
            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-amber-400 text-sm font-medium">{testimonial.frontContent}</p>
              <p className="text-xs text-gray-400 mt-1">Click to see results</p>
            </div>
          </div>
        </div>
        
        {/* Back of Card */}
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-amber-900/30 to-transparent border border-amber-400/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 text-2xl font-bold mb-6">
            {testimonial.rating}.0
          </div>
          <p className="text-white font-medium mb-2">{testimonial.frontContent}</p>
          <p className="text-gray-300 text-sm mb-6">{testimonial.backContent}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            className="text-amber-400 hover:text-white text-sm font-medium flex items-center gap-1 mt-2"
          >
            <ChevronLeft className="w-4 h-4" /> Back to review
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, isAutoPlaying]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.03),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-amber-500/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 text-sm font-medium text-amber-400 bg-amber-900/30 rounded-full mb-4 font-mono tracking-wider">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-amber-400">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        </motion.div>

        <div className="relative">
          <div className="max-w-4xl mx-auto relative h-[500px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <TestimonialCard 
                  testimonial={testimonials[activeIndex]} 
                  isActive={true}
                  onClick={nextTestimonial}
                />
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={() => {
                setIsAutoPlaying(false);
                prevTestimonial();
              }}
              className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-center text-white/70 hover:text-amber-400 hover:border-amber-400/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => {
                setIsAutoPlaying(false);
                nextTestimonial();
              }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-center text-white/70 hover:text-amber-400 hover:border-amber-400/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  handleDotClick(index);
                }}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-amber-400' 
                    : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-400 hover:text-amber-400 flex items-center justify-center gap-2 mx-auto"
            >
              {isAutoPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Auto-playing
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  Click to auto-play
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
