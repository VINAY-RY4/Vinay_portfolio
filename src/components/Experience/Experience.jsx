import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const EXPERIENCE = [
  {
    company: 'MS Ramaiah University of Applied Sciences',
    role: 'B.Tech Student, AI & ML',
    duration: '2025 — Present',
    points: [
      'Coursework in data structures, discrete mathematics, programming and machine learning fundamentals.',
      'Applying classroom concepts in hands-on mini projects and lab work.',
      'Using Git and GitHub to manage code and collaborate with classmates.',
    ],
  },
  {
    company: 'Self-Directed Projects',
    role: 'Full-Stack Web Developer',
    duration: '2024 — Present',
    points: [
      'Built 14 responsive web and AI/ML projects with HTML, CSS, JavaScript, React, Java and Python.',
      'Practised component design, state management, REST API integration and accessible UI.',
      'Publishing code on GitHub (VINAY-RY4) and improving each project with every iteration.',
    ],
  },
  {
    company: 'Hackathons & Coding Challenges',
    role: 'Participant',
    duration: '2025 — Present',
    points: [
      'Prototyped ideas under time pressure, from problem statement to a working demo.',
      'Worked in small teams, splitting frontend, backend and model work and reviewing each other\'s code.',
      'Practised data structures and problem solving through regular coding challenges.',
    ],
  },
  {
    company: 'Open Source & Developer Community',
    role: 'Learner & Contributor',
    duration: '2025 — Present',
    points: [
      'Reading open-source codebases and documentation to learn real-world project structure.',
      'Exploring beginner-friendly issues and learning the pull request workflow.',
      'Sharing notes and helping peers debug problems in React and Java.',
    ],
  },
  {
    company: 'Machine Learning Self-Study',
    role: 'ML Learner',
    duration: '2025 — Present',
    points: [
      'Practising the full workflow on small datasets: cleaning, feature engineering, training, evaluation and plotting results.',
      'Using NumPy, Pandas, scikit-learn and TensorFlow in Jupyter notebooks, and keeping notes on what each model got wrong.',
      'Turning finished models into small web demos so they can be tried without reading code.',
    ],
  },
  {
    company: 'UI Design Practice',
    role: 'Frontend & Design Learner',
    duration: '2024 — Present',
    points: [
      'Recreating real-world layouts in Figma, then building them in React with responsive CSS Grid and Flexbox.',
      'Working on contrast, spacing, keyboard focus and reduced-motion support so interfaces stay usable for everyone.',
    ],
  },
  {
    company: 'Peer Mentoring & Study Groups',
    role: 'Peer Mentor',
    duration: '2025 — Present',
    points: [
      'Explaining Java, Python and Git basics to classmates and juniors, and walking through their bugs step by step.',
      'Organising small revision sessions before exams on data structures and programming labs.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading">Learning by building</h2>
        <p className="section-sub">
          A timeline of my studies, project work and the communities I learn with.
        </p>

        <div className="timeline">
          <div className="timeline-line" />
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-dot">
                <FiBriefcase />
              </div>
              <div className="timeline-card card-surface">
                <span className="tag">{exp.duration}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((p, pi) => (
                    <li key={pi}>{p}</li>
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
