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
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Company Info */}
          <motion.div 
            className="space-y-5"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-white">CodeCafe</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering freelancers, boosting project visibility, and solving real-world problems with cutting-edge web solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Twitter, link: "https://twitter.com" },
                { icon: Instagram, link: "https://instagram.com" },
                { icon: Linkedin, link: "https://linkedin.com" },
                { icon: Github, link: "https://github.com" },
              ].map(({ icon: Icon, link }, i) => (
                <motion.a 
                  key={i}
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
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
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/#services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-amber-400 hover:pl-1 transition-all"
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
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5" />
                <span>hello@codecafe.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <a 
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-amber-500 text-gray-900 hover:bg-amber-400 transition-all shadow-md hover:shadow-amber-500/30"
            >
              Book a Free Call
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M21 12H3" />
              </svg>
            </a>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Cookies Policy', path: '/cookies-policy' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-gray-400 hover:text-amber-400 hover:pl-1 transition-all flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-xs text-gray-500">
                By using our services, you agree to our terms and policies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} CodeCafe. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 md:mt-0">
            <a href="/privacy-policy" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-amber-400 transition">Terms of Service</a>
            <a href="/cookies-policy" className="hover:text-amber-400 transition">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
