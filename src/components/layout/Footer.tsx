import { Instagram, Linkedin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <Logo />
            <p className="text-muted-foreground mt-2 text-sm">&copy; {new Date().getFullYear()} CodeCafe. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
