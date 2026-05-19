import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/skills',   label: 'Skills'   },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full glass z-40 py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold gradient-text tracking-tighter">
        AP.
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
            }
          >
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass py-4 flex flex-col items-center gap-4 md:hidden"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
