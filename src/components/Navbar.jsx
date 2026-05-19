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
      <button className="md:hidden text-white z-50 relative" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed top-0 right-0 w-64 h-screen bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 pt-24 pb-8 flex flex-col items-center gap-8 md:hidden z-40 shadow-2xl"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-xl font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`
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
