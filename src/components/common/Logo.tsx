import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" className="text-2xl font-bold font-display text-foreground hover:text-primary transition-colors duration-300">
      CodeCafe
    </NavLink>
  );
};

export default Logo;
