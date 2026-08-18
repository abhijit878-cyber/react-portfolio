import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Hospital Management System',
    desc: 'A full-stack hospital management system with patient registration, doctor management, appointment scheduling, billing, and medical records — built as a real-world B.Tech project.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'React', 'REST API'],
    emoji: '🏥',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    github: 'https://github.com/abhijit878-cyber/Hospital-Mangement-System',
    live: '#',
  },
  {
    title: 'React Portfolio Website',
    desc: 'A modern animated multi-page portfolio website built with React, Tailwind CSS, and Framer Motion. Features a Pikachu cursor mascot, glassmorphism UI, smooth page transitions, and dark mode.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
    emoji: '🚀',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    github: 'https://github.com/abhijit878-cyber/react-portfolio',
    live: 'https://react-portfolio-lovat-three.vercel.app',
  },
  {
    title: 'Food Ordering System',
    desc: 'A full-stack food delivery application with real-time order tracking, menu management, cart functionality, and restaurant admin panel.',
    tech: ['Java', 'Spring Boot', 'Angular', 'HTML', 'CSS', 'MySQL'],
    emoji: '🍕',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    github: 'https://github.com/abhijit878-cyber',
    live: '#',
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <motion.div
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text text-center">My Projects 🛠️</h1>
      <p className="text-center text-gray-400 mb-14">Things I've built with passion ❤️</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -12, rotate: [0, 0.5, -0.5, 0] }}
            className="glass rounded-2xl overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Emoji badge */}
              <div className="absolute top-3 left-3 text-3xl bg-black/40 backdrop-blur-sm rounded-xl p-1.5">
                {project.emoji}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.15 }}
                  title="Live Demo"
                  className="p-3 bg-white text-black rounded-full shadow-lg"
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  title="GitHub"
                  className="p-3 bg-white/20 backdrop-blur text-white rounded-full"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-3xl p-8 mt-14 text-center"
      >
        <div className="text-5xl mb-4">🐙</div>
        <p className="text-gray-300 text-lg mb-6">Interested in seeing more of my work?</p>
        <a
          href="https://github.com/abhijit878-cyber"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 border border-white/20 font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow"
        >
          <Github size={22} /> Visit My GitHub
        </a>
      </motion.div>

      <div className="text-center mt-10">
        <Link to="/contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
          Let's Connect →
        </Link>
      </div>
    </motion.div>
  );
}
