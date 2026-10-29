import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiLayers, FiAward } from 'react-icons/fi';
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter.jsx';
import { PROJECTS } from '../Projects/Projects.jsx';
import { SKILL_COUNT } from '../Skills/Skills.jsx';
import { PROFILE_PIC } from '../../data/profile.js';
import './About.css';

const STATS = [
  { icon: <FiLayers />, value: PROJECTS.length, suffix: '', label: 'Projects Built' },
  { icon: <FiCode />, value: SKILL_COUNT, suffix: '+', label: 'Tools & Languages' },
  { icon: <FiAward />, value: 1, suffix: '', label: 'B.Tech in Progress' },
];

const points = [
  'Studying B.Tech in Artificial Intelligence & Machine Learning at MS Ramaiah University of Applied Sciences.',
  'Building web projects with React, JavaScript and Java to turn classroom concepts into working software.',
  'Enjoys breaking a problem into small steps and debugging until it makes sense.',
  'Always learning new tools, and comfortable working in a team with Git and GitHub.',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Turning ideas into digital experiences
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-frame">
              <img className="about-image" src={PROFILE_PIC} alt="Vinay R Y" />
            </div>
            <div className="about-image-badge">
              <FiCode />
              <div>
                <strong>AI &amp; ML</strong>
                <span>B.Tech student</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about-lead">
              I&apos;m Vinay R Y, a B.Tech student in AI &amp; ML who enjoys building for the web: designing the interface, connecting it to data, and making sure it works well for the person using it.
            </p>
            <ul className="about-points">
              {points.map((p, i) => (
                <li key={i}>
                  <span className="about-points-dot" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="about-stats">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="stat-icon">{s.icon}</div>
              <h3><AnimatedCounter value={s.value} suffix={s.suffix} /></h3>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
