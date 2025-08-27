import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Join Us', path: '/#join-us' },
  { name: 'Contact', path: '/#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'join-us', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section on location change
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      setActiveSection(section);
    } else if (location.pathname === '/') {
      setActiveSection('');
    }
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !activeSection;
    }
    if (path.startsWith('/#')) {
      const section = path.substring(2);
      return activeSection === section;
    }
    return location.pathname === path;
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
      setActiveSection('');
    } else if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      
      if (element) {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(elementId);
          }, 100);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(elementId);
        }
        window.history.pushState({}, '', path);
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
    
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-4 flex h-16 items-center justify-between rounded-2xl border border-border/20 bg-background/60 px-6 backdrop-blur-xl overflow-hidden -translate-x-1">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary font-display tracking-tight">
            <a 
              href="/" 
              onClick={(e) => handleNavLinkClick(e, '/')}
              className={`transition-colors ${isActive('/') ? 'text-amber-400' : 'text-muted-foreground hover:text-amber-400'}`}
            >
              CodeCafe
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={(e) => handleNavLinkClick(e, link.path)}
                      className={`group relative rounded-md px-3 py-2 text-[13px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                        active ? 'text-amber-400' : 'text-muted-foreground hover:text-amber-400'
                      }`}
                    >
                      {link.name}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-amber-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 z-50"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-1 rounded-xl border border-border/20 bg-background/80 p-4 backdrop-blur-xl">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) => handleNavLinkClick(e, link.path)}
                      className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                        active 
                          ? 'bg-amber-400/10 text-amber-400' 
                          : 'text-muted-foreground hover:bg-amber-400/5 hover:text-amber-400'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
