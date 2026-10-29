import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import useTypewriter from '../../hooks/useTypewriter.js';
import { PROFILE_PIC } from '../../data/profile.js';
import './Hero.css';

const ROLES = ['AI & ML Student', 'Web Developer', 'React Developer', 'Java Learner'];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="hero">
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`particle particle-${i % 4}`} style={{ '--i': i }} />
        ))}
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.p className="eyebrow" custom={0} initial="hidden" animate="show" variants={fadeUp}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className="hero-name" custom={1} initial="hidden" animate="show" variants={fadeUp}>
            Vinay <span className="gradient-text">R Y</span>
          </motion.h1>

          <motion.div className="hero-role" custom={2} initial="hidden" animate="show" variants={fadeUp}>
            <span className="hero-role-prompt">$</span>
            <span className="hero-role-text">{typed}</span>
            <span className="hero-caret" />
          </motion.div>

          <motion.p className="hero-intro" custom={3} initial="hidden" animate="show" variants={fadeUp}>
            I'm a B.Tech AI &amp; ML student who builds web applications with React and Java. I like clean code, simple interfaces, and learning by shipping small projects that actually work.
          </motion.p>

          <motion.div className="hero-actions" custom={4} initial="hidden" animate="show" variants={fadeUp}>
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-socials" custom={5} initial="hidden" animate="show" variants={fadeUp}>
            <a href="https://github.com/VINAY-RY4" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/vinay-r-y-5a1aa3363" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:vinayry31@gmail.com" aria-label="Email"><FiMail /></a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <motion.div
            className="hero-card"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero-card-topbar">
              <span /><span /><span />
              <p>vinay.dev</p>
            </div>
            <pre className="hero-card-code">
<span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}
  name: <span className="tok-str">'Vinay R Y'</span>,
  role: <span className="tok-str">'B.Tech AI & ML Student'</span>,
  stack: [<span className="tok-str">'React'</span>, <span className="tok-str">'Java'</span>, <span className="tok-str">'Python'</span>],
  focus: <span className="tok-str">'clean, simple UI'</span>,
  available: <span className="tok-bool">true</span>,
{'}'}<span className="tok-punc">;</span>
            </pre>
            <img className="hero-card-avatar" src={PROFILE_PIC} alt="Vinay R Y" />
          </motion.div>

          <motion.div
            className="hero-float-chip chip-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="hero-float-chip chip-2"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            ☕ Java
          </motion.div>
          <motion.div
            className="hero-float-chip chip-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          >
            🐍 Python
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
