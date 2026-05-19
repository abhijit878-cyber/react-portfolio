import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function CartoonRobot() {
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 400
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 300
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      animate(mouseX, e.clientX, { duration: 0.35, ease: 'easeOut' });
      animate(mouseY, e.clientY, { duration: 0.35, ease: 'easeOut' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed z-30 pointer-events-none select-none"
      style={{ left: mouseX, top: mouseY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">

          {/* Shadow */}
          <ellipse cx="45" cy="108" rx="18" ry="3" fill="black" opacity="0.2"/>

          {/* ⚡ Lightning bolt left */}
          <motion.text x="2" y="30" fontSize="14" fill="#fbbf24"
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.3, 0.8], y: [30, 20, 30] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>⚡</motion.text>

          {/* ⚡ Lightning bolt right */}
          <motion.text x="70" y="40" fontSize="12" fill="#fde68a"
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.3, 0.8], y: [40, 30, 40] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.7 }}>⚡</motion.text>

          {/* === TAIL === */}
          <motion.path
            d="M60 82 L72 65 L80 72 L70 58 L82 50"
            stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: '60px 82px' }}
          />
          {/* Tail tip brown */}
          <motion.path
            d="M70 58 L82 50"
            stroke="#92400e" strokeWidth="5" strokeLinecap="round"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: '60px 82px' }}
          />

          {/* === BODY === */}
          <ellipse cx="44" cy="82" rx="24" ry="22" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>

          {/* Belly patch */}
          <ellipse cx="44" cy="88" rx="14" ry="10" fill="#fde68a"/>

          {/* === RED CHEEKS === */}
          <motion.circle cx="22" cy="72" r="7" fill="#ef4444" opacity="0.85"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <motion.circle cx="66" cy="72" r="7" fill="#ef4444" opacity="0.85"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
          />

          {/* === EARS === */}
          {/* Left ear */}
          <path d="M20 38 L14 12 L30 28Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
          {/* Left ear tip black */}
          <path d="M14 12 L20 24 L26 16Z" fill="#1f2937"/>

          {/* Right ear */}
          <path d="M60 38 L76 12 L68 28Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
          {/* Right ear tip black */}
          <path d="M76 12 L70 24 L64 16Z" fill="#1f2937"/>

          {/* === HEAD === */}
          <ellipse cx="44" cy="48" rx="26" ry="24" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>

          {/* === EYES === */}
          <motion.circle cx="34" cy="44" r="7" fill="#1f2937"
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.5, 0.55] }}
          />
          <motion.circle cx="54" cy="44" r="7" fill="#1f2937"
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.5, 0.55] }}
          />
          {/* Eye shine */}
          <circle cx="36" cy="42" r="2.5" fill="white"/>
          <circle cx="56" cy="42" r="2.5" fill="white"/>
          {/* Tiny shine dot */}
          <circle cx="38" cy="45" r="1" fill="white" opacity="0.7"/>
          <circle cx="58" cy="45" r="1" fill="white" opacity="0.7"/>

          {/* === NOSE === */}
          <ellipse cx="44" cy="52" rx="2.5" ry="1.5" fill="#92400e"/>

          {/* === MOUTH === */}
          <path d="M38 56 Q44 62 50 56" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Smile dimples */}
          <path d="M37 56 Q35 58 37 60" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M51 56 Q53 58 51 60" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" fill="none"/>

          {/* === ARMS === */}
          {/* Left arm */}
          <motion.g
            animate={{ rotate: [0, 30, 0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ transformOrigin: '24px 78px' }}
          >
            <ellipse cx="18" cy="82" rx="8" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2" transform="rotate(-30 18 82)"/>
          </motion.g>

          {/* Right arm */}
          <motion.g
            animate={{ rotate: [0, -30, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ transformOrigin: '66px 78px' }}
          >
            <ellipse cx="72" cy="82" rx="8" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2" transform="rotate(30 72 82)"/>
          </motion.g>

          {/* === FEET === */}
          {/* Left foot */}
          <motion.ellipse cx="34" cy="103" rx="10" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
          {/* Right foot */}
          <motion.ellipse cx="54" cy="103" rx="10" ry="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2"
            animate={{ rotate: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />

          {/* === STRIPE on back (Brown stripes) === */}
          <path d="M32 66 Q44 62 56 66" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>

          {/* Defs */}
          <defs>
            <radialGradient id="cheekg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444"/>
              <stop offset="100%" stopColor="#dc2626"/>
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}
