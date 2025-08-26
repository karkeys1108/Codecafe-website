import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Work With Us', path: '/work-with-us' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-4 flex h-16 items-center justify-between rounded-2xl border border-border/20 bg-background/60 px-6 backdrop-blur-xl overflow-hidden -translate-x-1">
          {/* Moving sheen */}
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl animate-sheen" />
          {/* Small gradient pill accent */}
          <span className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-[2px]" />
          {/* Decorative accent line and dots */}
          <div className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="pointer-events-none absolute -bottom-px left-10 h-1 w-1 rounded-full bg-primary/50 blur-[1px]" />
          <div className="pointer-events-none absolute -top-1 right-10 h-1.5 w-1.5 rounded-full bg-accent/60 blur-[1px] animate-pulse" />
          {/* Logo */}
          <div className="text-2xl font-bold text-primary font-display tracking-tight">
            <NavLink to="/">CodeCafe</NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `group relative rounded-md px-3 py-2 text-[13px] uppercase tracking-wider font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {link.name}
                        <span className={`absolute bottom-[-12px] left-0 right-0 h-3 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
                          <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="w-full h-full">
                            <line x1="2" y1="8" x2="98" y2="8" className="marker-line-gradient-thin" />
                          </svg>
                        </span>
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary focus:outline-none"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mt-2 space-y-1 rounded-xl border border-border/20 bg-background/80 p-4 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-base font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
