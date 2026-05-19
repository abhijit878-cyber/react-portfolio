import { motion } from 'framer-motion';

const shapes = [
  { emoji: '🚀', x: '8%',  y: '18%', dur: 4.5 },
  { emoji: '⭐', x: '82%', y: '12%', dur: 3.8 },
  { emoji: '💻', x: '72%', y: '58%', dur: 5.2 },
  { emoji: '🎯', x: '18%', y: '63%', dur: 4.0 },
  { emoji: '⚡', x: '55%', y: '8%',  dur: 3.2 },
  { emoji: '🌙', x: '90%', y: '38%', dur: 6.0 },
  { emoji: '🎨', x: '4%',  y: '48%', dur: 4.8 },
  { emoji: '{ }', x: '44%', y: '82%', dur: 5.5 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none opacity-20"
          style={{ left: s.x, top: s.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: s.dur, ease: 'easeInOut', delay: i * 0.3 }}
        >
          {s.emoji}
        </motion.div>
      ))}
    </div>
  );
}
