import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub, FaPython,
} from 'react-icons/fa';
import { FiCode, FiServer, FiBarChart2, FiGitBranch, FiBox, FiDatabase } from 'react-icons/fi';
import {
  SiMysql, SiFigma, SiTypescript, SiTailwindcss, SiVite, SiExpress, SiSpringboot, SiMongodb,
  SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiJupyter, SiPostman, SiLinux,
} from 'react-icons/si';
import './Skills.css';

// level: 3 = daily use, 2 = comfortable, 1 = learning
const LEVELS = { 3: 'Daily', 2: 'Comfortable', 1: 'Learning' };

const CATEGORIES = [
  {
    title: 'Frontend',
    tagline: 'builds the interface',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 3 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 3 },
      { name: 'JavaScript', icon: <FaJsSquare />, level: 3 },
      { name: 'React', icon: <FaReact />, level: 3 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 2 },
      { name: 'Vite', icon: <SiVite />, level: 2 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 1 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    tagline: 'trains and tests models',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 3 },
      { name: 'NumPy', icon: <SiNumpy />, level: 2 },
      { name: 'Pandas', icon: <SiPandas />, level: 2 },
      { name: 'scikit-learn', icon: <SiScikitlearn />, level: 2 },
      { name: 'Matplotlib', icon: <FiBarChart2 />, level: 2 },
      { name: 'Jupyter', icon: <SiJupyter />, level: 2 },
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 1 },
    ],
  },
  {
    title: 'Backend & Data',
    tagline: 'stores and serves data',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 2 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 2 },
      { name: 'Express', icon: <SiExpress />, level: 2 },
      { name: 'REST APIs', icon: <FiServer />, level: 2 },
      { name: 'MySQL', icon: <SiMysql />, level: 2 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 1 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 1 },
    ],
  },
  {
    title: 'Tools & Workflow',
    tagline: 'keeps work shippable',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 3 },
      { name: 'GitHub', icon: <FaGithub />, level: 3 },
      { name: 'VS Code', icon: <FiCode />, level: 3 },
      { name: 'Figma', icon: <SiFigma />, level: 2 },
      { name: 'Postman', icon: <SiPostman />, level: 2 },
      { name: 'Linux CLI', icon: <SiLinux />, level: 1 },
    ],
  },
  {
    title: 'Computer Science Core',
    tagline: 'the fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <FiGitBranch />, level: 2 },
      { name: 'Object-Oriented Design', icon: <FiBox />, level: 2 },
      { name: 'Database Systems', icon: <FiDatabase />, level: 2 },
    ],
  },
];

export const SKILL_COUNT = CATEGORIES.reduce((n, c) => n + c.skills.length, 0);

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-heading">What I work with, and how well</h2>
        <p className="section-sub">
          Each skill is marked by how I use it today: daily, comfortably, or still learning.
        </p>

        <div className="skills-key" aria-hidden="true">
          {[3, 2, 1].map((l) => (
            <span key={l}><Pips level={l} /> {LEVELS[l]}</span>
          ))}
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skill-category card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (ci % 2) * 0.1, duration: 0.6 }}
            >
              <div className="skill-category-head">
                <h3>{cat.title}</h3>
                <span className="tag">{cat.tagline}</span>
              </div>

              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill.name} title={`${skill.name}: ${LEVELS[skill.level]}`}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <Pips level={skill.level} />
                    <span className="sr-only">{LEVELS[skill.level]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pips({ level }) {
  return (
    <span className="pips" aria-hidden="true">
      {[1, 2, 3].map((n) => <i key={n} className={n <= level ? 'on' : ''} />)}
    </span>
  );
}
