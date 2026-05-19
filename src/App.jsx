import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import CartoonRobot from './components/CartoonRobot';
import FloatingShapes from './components/FloatingShapes';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary/30 relative">
        <ScrollBar />
        <FloatingShapes />
        <CartoonRobot />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
