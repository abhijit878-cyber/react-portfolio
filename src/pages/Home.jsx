import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const roles = ['Full Stack Developer', 'React Enthusiast', 'AWS Cloud Learner', 'Android Developer'];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit:    { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <motion.section
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center z-10">
        {/* Floating avatar */}
        <motion.div
          className="mx-auto mb-6 w-32 h-32 rounded-full glass flex items-center justify-center text-6xl shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          animate={{ y: [0, -14, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          👨‍💻
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-2 font-mono"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight neon-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Abhijit Paul
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl text-gray-300 mb-10 min-h-[2.5rem]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <TypingText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link to="/projects" className="px-7 py-3 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-transform shadow-lg">
            View My Work 🚀
          </Link>
          <Link to="/contact" className="px-7 py-3 rounded-full glass font-bold hover:bg-white/10 transition-colors border border-white/20">
            Contact Me 💌
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </motion.section>
  );
}
