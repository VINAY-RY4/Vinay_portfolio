import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const FILTERS = ['All', 'React', 'JavaScript', 'Java', 'Python', 'AI/ML'];

const G = (a, b) => `linear-gradient(135deg, ${a}, ${b})`;
const GITHUB = 'https://github.com/VINAY-RY4';

export const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    description:
      'This responsive portfolio built with React, Vite and Framer Motion, with dark mode, animated sections, a project filter and a validated contact form.',
    tags: ['React', 'Vite', 'Framer Motion'],
    category: 'React',
    demo: '#',
    code: GITHUB,
    gradient: G('#2B4EFF', '#0FA3A3'),
    emoji: '💼',
  },
  {
    title: 'AI Study Buddy',
    description:
      'A study planner that turns a syllabus into a weekly schedule and generates quick revision questions from pasted notes using an LLM API.',
    tags: ['React', 'LLM API', 'Node.js'],
    category: 'AI/ML',
    demo: '#',
    code: GITHUB,
    gradient: G('#FFB400', '#2B4EFF'),
    emoji: '🧠',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Current conditions and a 5-day forecast for any city, with unit toggle, recent searches and graceful error states, using a public weather API.',
    tags: ['JavaScript', 'HTML5', 'REST API'],
    category: 'JavaScript',
    demo: '#',
    code: GITHUB,
    gradient: G('#0FA3A3', '#22D3EE'),
    emoji: '⛅',
  },
  {
    title: 'Library Management System',
    description:
      'A Java application to add, search, issue and return books with fines and member records, built to practise object-oriented design and JDBC.',
    tags: ['Java', 'OOP', 'MySQL'],
    category: 'Java',
    demo: '#',
    code: GITHUB,
    gradient: G('#F59E0B', '#FFB400'),
    emoji: '📚',
  },
  {
    title: 'House Price Predictor',
    description:
      'A regression model trained on housing data with feature engineering and cross-validation, wrapped in a small form that returns a predicted price.',
    tags: ['Python', 'scikit-learn', 'Pandas'],
    category: 'AI/ML',
    demo: '#',
    code: GITHUB,
    gradient: G('#10B981', '#0FA3A3'),
    emoji: '🏠',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-heading">Things I&apos;ve built</h2>
        <p className="section-sub">
          A selection of web and AI/ML projects that show how I approach UI craft, clean code
          and turning ideas into working software.
        </p>

        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.title}
                className="project-card card-surface"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image" style={{ background: project.gradient }}>
                  <span className="project-emoji" aria-hidden="true">{project.emoji}</span>
                  <div className="project-overlay">
                    <a href={project.demo} className="project-overlay-btn" aria-label="Live demo">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.code} className="project-overlay-btn" aria-label="Source code">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
