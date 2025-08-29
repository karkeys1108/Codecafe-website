import React, { useState } from 'react';
import { Code, Layout, Smartphone, ShoppingCart, Search, Settings, X, Phone } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGraphql, SiPython, SiDocker, SiGithub, SiGit, SiMongodb, SiTailwindcss } from 'react-icons/si';
import BookCallModal from '../modals/BookCallModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (id: number) => {
    setSelectedService(id);
    setIsPopoverOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popover is open
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    // Small delay to allow the animation to complete before resetting the selected service
    setTimeout(() => setSelectedService(null), 300);
  };

  const openBookCallModal = () => {
    closePopover();
    setIsModalOpen(true);
  };

  // Service details for popovers
  const serviceDetails = {
    1: {
      title: 'Web Development',
      description: 'Full-stack web development services tailored to your business needs.',
      features: [
        'Custom web applications',
        'Responsive design',
        'Progressive Web Apps (PWA)',
        'API development & integration',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    },
    2: {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences that drive engagement.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'UI/UX audits',
        'Design systems',
        'User testing',
        'Accessibility compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Webflow', 'Tailwind CSS']
    },
    3: {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with native performance.',
      features: [
        'iOS & Android development',
        'React Native apps',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'API integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux']
    },
    4: {
      title: 'E-commerce',
      description: 'Scalable online stores with seamless checkout experiences.',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
        'Multi-currency support',
        'Mobile-optimized checkout',
        'SEO optimization'
      ],
      technologies: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'Stripe', 'PayPal']
    },
    5: {
      title: 'SEO',
      description: 'Improve your search rankings and online visibility.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO audits',
        'Link building',
        'Content strategy',
        'Local SEO'
      ],
      technologies: ['Google Analytics', 'Google Search Console', 'Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog']
    },
    6: {
      title: 'Maintenance',
      description: 'Keep your digital products running smoothly.',
      features: [
        'Regular updates',
        'Performance monitoring',
        'Security patches',
        'Bug fixes',
        'Backup management',
        'Uptime monitoring'
      ],
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'Jenkins', 'New Relic', 'Sentry']
    }
  };

  const techIcons = [
    { icon: <SiHtml5 className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-orange-400' },
    { icon: <SiCss3 className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-blue-400' },
    { icon: <SiJavascript className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-yellow-300' },
    { icon: <SiTypescript className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-blue-400' },
    { icon: <SiReact className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-cyan-300' },
    { icon: <SiNextdotjs className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-gray-300' },
    { icon: <SiNodedotjs className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-green-400' },
    { icon: <SiGraphql className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-pink-400' },
    { icon: <SiPython className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-blue-400' },
    { icon: <SiDocker className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-blue-300' },
    { icon: <SiGithub className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-gray-300' },
    { icon: <SiGit className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-orange-400' },
    { icon: <SiMongodb className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-green-400' },
    { icon: <SiTailwindcss className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-100 transition-opacity duration-300" />, color: 'text-cyan-300' },
  ];

  // Duplicate the array for seamless looping
  const marqueeIcons = [...techIcons, ...techIcons];

  const services = [
    { 
      id: 1,
      title: 'Web Development',
      description: 'Building modern, responsive, and performant web applications using the latest technologies.',
      icon: <Code className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 2,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that drive engagement and satisfaction.',
      icon: <Layout className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 3,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android with native performance.',
      icon: <Smartphone className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 4,
      title: 'E-commerce',
      description: 'Scalable online stores with seamless checkout and payment integration.',
      icon: <ShoppingCart className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 5,
      title: 'SEO',
      description: 'Improve your search rankings and online visibility with proven SEO strategies.',
      icon: <Search className="w-8 h-8 text-amber-500" />
    },
    { 
      id: 6,
      title: 'Maintenance',
      description: 'Ongoing support and updates to keep your digital products running smoothly.',
      icon: <Settings className="w-8 h-8 text-amber-500" />
    },
  ];

  return (
    <section id="services" className="pt-5 pb-20 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Tech Icons Marquee */}
      <div className="relative w-full mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/0 to-background z-10 pointer-events-none" />
        <div className="pt--10pb-20 flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {marqueeIcons.map((tech, index) => (
            <div 
              key={`${tech.color}-${index}`} 
              className={`inline-flex items-center justify-center ${tech.color} hover:scale-110 transition-transform duration-300`}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Background elements similar to Hero */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.08),transparent_60%)] blur-3xl" />
        <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.06),transparent_60%)] blur-2xl" />
      </div>

      {/* Popover Overlay */}
      {selectedService && isPopoverOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closePopover}>
          <div 
            className="relative w-full max-w-2xl bg-background rounded-xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopover}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">{serviceDetails[selectedService].title}</h3>
            <p className="text-gray-300 mb-6">{serviceDetails[selectedService].description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {serviceDetails[selectedService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Technologies We Use</h4>
                <div className="flex flex-wrap gap-3">
                  {serviceDetails[selectedService].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-200 group-hover:translate-x-1"
                aria-label={`Book a free call`}
              >
                <Phone size={18} />
                Book a Free Call
              </button>
              <button
                onClick={closePopover}
                className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
        <span className="inline-block px-8 py-4 text-lg font-semibold text-amber-400 rounded-full mb-4 font-mozilla shadow-md relative overflow-hidden">
  <span className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-900 opacity-30 blur-xl animate-pulse rounded-full"></span>
  <span className="relative z-10">Our Services</span>
</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-400">
            Professional services tailored to help your business grow in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 border-l-4 border-transparent hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-900/20 rounded-xl mb-4 group-hover:bg-amber-500/10 transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: `${service.icon.props.className} w-6 h-6 transition-transform duration-300 group-hover:scale-110`
                  })}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <button 
                  onClick={() => handleLearnMore(service.id)}
                  className="flex items-center text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-200 group-hover:translate-x-1"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Book a Call Button - Moved to bottom */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals. Schedule a free consultation call with our team.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-amber-500 text-gray-900 hover:bg-amber-400 transition-colors duration-300 shadow-lg hover:shadow-amber-500/20"
          >
            Book a Free Call
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
