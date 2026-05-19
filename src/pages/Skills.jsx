import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'React', emoji: '⚛️', color: 'text-blue-400', level: 85, category: 'Frontend' },
  { name: 'Angular', emoji: '🅰️', color: 'text-red-500', level: 72, category: 'Frontend' },
  { name: 'JavaScript', emoji: '🟡', color: 'text-yellow-400', level: 80, category: 'Frontend' },
  { name: 'HTML & CSS', emoji: '🎨', color: 'text-orange-400', level: 90, category: 'Frontend' },
  { name: 'Node.js', emoji: '🟢', color: 'text-green-400', level: 70, category: 'Backend' },
  { name: 'Java', emoji: '☕', color: 'text-red-400', level: 75, category: 'Backend' },
  { name: 'Spring Boot', emoji: '🍃', color: 'text-green-500', level: 60, category: 'Backend' },
  { name: 'MySQL', emoji: '🗄️', color: 'text-blue-300', level: 72, category: 'Database' },
  { name: 'AWS', emoji: '☁️', color: 'text-orange-500', level: 65, category: 'Cloud' },
  { name: 'Android', emoji: '📱', color: 'text-green-500', level: 68, category: 'Mobile' },
  { name: 'Git', emoji: '🐙', color: 'text-gray-300', level: 78, category: 'Tools' },
  { name: 'Docker', emoji: '🐳', color: 'text-cyan-400', level: 50, category: 'Tools' },
];

const categories = [...new Set(skills.map((s) => s.category))];

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <motion.div
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text text-center">My Arsenal ⚔️</h1>
      <p className="text-center text-gray-400 mb-14">Technologies I work with daily</p>

      {categories.map((cat, ci) => (
        <div key={cat} className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 inline-block" />
            {cat}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.filter((s) => s.category === cat).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: ci * 0.1 + i * 0.07 }}
                whileHover={{ y: -10, scale: 1.06, rotate: [-1, 1, 0] }}
                className="glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
              >
                <span className="text-4xl">{skill.emoji}</span>
                <h3 className={`font-semibold ${skill.color}`}>{skill.name}</h3>
                {/* Skill bar */}
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <motion.div
                    className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: ci * 0.1 + i * 0.07 + 0.3 }}
                  />
                </div>
                <span className="text-xs text-gray-500">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <Link to="/projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
          See My Projects →
        </Link>
      </div>
    </motion.div>
  );
}
