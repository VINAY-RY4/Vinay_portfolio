import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

const EDUCATION = [
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    college: 'MS Ramaiah University of Applied Sciences',
    year: '2025 — Present',
    achievements: [
      'Pursuing a specialized curriculum in AI/ML with hands-on project work',
      'Building a strong foundation in data structures, algorithms, and applied machine learning',
    ],
  },
  {
    degree: 'Pre-University Course (PUC)',
    college: 'Creative PU College',
    year: '2023 — 2025',
    achievements: [
      'Completed Pre-University education with a focus on core science subjects',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="section-heading">Academic background</h2>
        <p className="section-sub">The foundation that shaped how I think about engineering.</p>

        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="edu-card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="edu-icon"><FiBookOpen /></div>
              <div className="edu-content">
                <span className="tag">{edu.year}</span>
                <h3>{edu.degree}</h3>
                <h4>{edu.college}</h4>
                <ul>
                  {edu.achievements.map((a, ai) => (
                    <li key={ai}>{a}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
