import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  {name: "Works" , path: "/#design"},
  { name: "Join Us", path: "/#join-us" },
  { name: "About Us", path: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Detect visible section (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;
      
      const sections = ["services", "design", "join-us"];
      const scrollPosition = window.scrollY + 100; 
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          } else if (scrollPosition < (document.getElementById('services')?.offsetTop ?? 0)) {
            setActiveSection(""); // No section is active (at the top)
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Update active section when URL hash changes
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      setActiveSection(section);
    } else if (location.pathname === "/") {
      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    } else {
      setActiveSection("");
    }
  }, [location]);

  const isActive = (path: string) => {
    // For home page (no hash)
    if (path === "/") {
      return location.pathname === "/" && !activeSection;
    }
    
    // For hash links (sections on home page)
    if (path.startsWith("/#")) {
      // If we're not on the home page, don't highlight any section links
      if (location.pathname !== "/") return false;
      
      const sectionId = path.substring(2);
      return activeSection === sectionId;
    }
    
    // For other routes like /blog
    return location.pathname === path;
  };

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();

    if (path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("");
    } else if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    } else {
      navigate(path);
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative mt-4 mx-2 sm:mx-0 flex h-14 sm:h-16 items-center justify-between rounded-2xl border border-border/20 bg-background/80 px-4 sm:px-6 backdrop-blur-xl overflow-hidden">
          {/* Logo - Made slightly smaller on mobile */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/Codecafe.png" 
              alt="CodeCafe Logo" 
              className="h-14 w-14 sm:h-16 sm:w-16"
            />
            <a
              href="/"
              onClick={(e) => handleNavLinkClick(e, "/")}
              className={`text-xl sm:text-2xl font-bold font-display tracking-tight text-white`}
            >
              Code<span className="text-amber-400">Cafe</span>
            </a>
          </div>

          {/* Desktop Nav - Hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 sm:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={(e) => handleNavLinkClick(e, link.path)}
                      className={`group relative rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-[13px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                        active
                          ? "text-amber-400"
                          : "text-muted-foreground hover:text-amber-400"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-muted-foreground hover:text-amber-400 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 md:hidden px-4"
            style={{
              // Prevent background scrolling when menu is open
              position: 'fixed',
              height: 'calc(100vh - 5rem)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="rounded-xl border border-border/20 bg-background/95 p-2 backdrop-blur-xl shadow-lg">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      handleNavLinkClick(e, link.path);
                      // Close menu after clicking a link
                      setIsOpen(false);
                    }}
                    className={`block rounded-lg px-4 py-3 my-1 text-base font-medium transition-colors ${
                      active
                        ? "bg-amber-400/10 text-amber-400"
                        : "text-muted-foreground hover:bg-amber-400/5 hover:text-amber-400"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
