import { Mail, Phone, MapPin, Clock, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white">CodeCafe</h3>
            <p className="text-gray-400">Transforming ideas into digital reality with innovative web solutions and exceptional user experiences.</p>
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/#services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/#contact' },
              ].map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@codecafe.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="pt-2">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-amber-500 text-gray-900 hover:bg-amber-400 transition-colors duration-300 shadow-lg hover:shadow-amber-500/20 mt-2"
                >
                  Book a Free Call
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors w-full text-sm"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} CodeCafe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
