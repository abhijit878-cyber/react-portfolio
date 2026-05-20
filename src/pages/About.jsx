import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { num: '3+',  label: 'Projects Completed',    icon: '🚀' },
  { num: '6+',  label: 'Programming Languages', icon: '💻' },
  { num: '2+',  label: 'Development Domains',   icon: '🌐' },
];

const specializations = [
  'Full Stack Web Development using Java, Spring Boot, Angular, HTML, CSS, and JavaScript',
  'Android Development with Kotlin and Java',
  'Building responsive and user-friendly applications',
  'Creating scalable backend solutions',
  'Problem-solving and clean code practices',
];

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit:    { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-12 gradient-text text-center">About Me 👋</h1>

      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden"
      >
        <motion.span
          className="absolute top-5 right-6 text-5xl select-none"
          animate={{ rotate: [0, 20, -10, 0], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >🎓</motion.span>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <motion.div
            className="w-36 h-36 rounded-full glass flex items-center justify-center text-7xl shrink-0 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            👨‍💻
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Who Am I?</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Abhijit Paul</span>, a passionate B.Tech CSE student at{' '}
              <span className="text-blue-400 font-semibold">Centurion University of School and Management</span>. I'm driven by a curiosity for technology and a desire to create solutions that make a difference.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 gradient-text">My Journey 🗺️</h2>
          <p className="text-gray-300 leading-relaxed">
            My coding journey began with the fundamentals of programming and has evolved into full-stack development and Android app development. I believe in continuous learning and staying updated with the latest technologies.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 gradient-text">What I Do ⚙️</h2>
          <p className="text-gray-400 mb-3">I specialize in:</p>
          <ul className="space-y-2">
            {specializations.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="text-blue-400 mt-1 shrink-0">▹</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 gradient-text">Beyond Coding 🌟</h2>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, I love exploring new technologies, contributing to open-source projects, and helping fellow developers solve challenging problems.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-5 mb-10">
        {stats.map(({ num, label, icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i + 0.5 }}
            whileHover={{ scale: 1.08, y: -6 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{num}</h3>
            <p className="text-gray-400 text-sm">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass rounded-3xl p-8 mb-10 relative overflow-hidden"
      >
        <motion.span
          className="absolute top-5 right-6 text-4xl select-none"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >📚</motion.span>

        <h2 className="text-2xl font-bold mb-6 gradient-text">Education 🎓</h2>
        <div className="border-l-2 border-blue-500/40 pl-6">
          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold">B.Tech in Computer Science & Engineering</h3>
                <span className="text-sm font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full shrink-0">
                  2023 – 2027
                </span>
              </div>
              <p className="text-blue-400 font-semibold mb-2">Centurion University of School and Management</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pursuing a degree in Computer Science & Engineering with a focus on software development and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-center">
        <Link to="/skills" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
          See My Skills →
        </Link>
      </div>
    </motion.div>
  );
}
