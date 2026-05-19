import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const socials = [
  { icon: <Github size={22} />,    label: 'GitHub',    href: 'https://github.com/abhijit878-cyber',       color: 'hover:bg-gray-700' },
  { icon: <Linkedin size={22} />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/abhijitpaul28', color: 'hover:bg-blue-700' },
  { icon: <Instagram size={22} />, label: 'Instagram', href: 'https://instagram.com',                     color: 'hover:bg-pink-600' },
  { icon: <Mail size={22} />,      label: 'Email',     href: 'mailto:apau.labhijitpaul28@gmail.com',      color: 'hover:bg-red-600'  },
];

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit:    { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [sent, setSent]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const to      = 'apau.labhijitpaul28@gmail.com';
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body    = encodeURIComponent(
      `Hi Abhijit!\n\nYou have a new message from your portfolio:\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    // Opens Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`,
      '_blank'
    );
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <motion.div
      variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text text-center">Let's Connect 🤝</h1>
      <p className="text-center text-gray-400 mb-14">Available for freelance &amp; internship opportunities</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Info + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <motion.span
              className="absolute top-5 right-6 text-5xl select-none"
              animate={{ rotate: [0, 20, -10, 0], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >🤝</motion.span>

            <h2 className="text-2xl font-bold mb-4">Say Hello!</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop a message and I'll get back to you!
            </p>
            <div className="flex items-center gap-3 text-gray-300 mb-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <a href="mailto:apau.labhijitpaul28@gmail.com" className="hover:text-white transition-colors break-all text-sm">
                apau.labhijitpaul28@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-lg">📍</span>
              <span className="text-sm">Odisha, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass rounded-3xl p-6">
            <h3 className="font-semibold text-gray-300 mb-4">Find me on</h3>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon, label, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  whileHover={{ x: 6, scale: 1.02 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 ${color} transition-colors`}
                >
                  <div className="text-gray-300">{icon}</div>
                  <span className="font-medium">{label}</span>
                  <span className="ml-auto text-gray-500 text-sm">→</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message 💌</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hey Abhijit, I'd love to work with you on..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow"
            >
              {sent ? '✅ Opening Gmail...' : <><Send size={18} /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <p className="text-center text-gray-600 text-xs mt-10">
        © {new Date().getFullYear()} Abhijit Paul · Built with React, Tailwind &amp; Framer Motion · AI chatbot built this portfolio
      </p>
    </motion.div>
  );
}
