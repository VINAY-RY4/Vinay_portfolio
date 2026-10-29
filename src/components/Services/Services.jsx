import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout } from 'react-icons/fi';
import './Services.css';

const SERVICES = [
  {
    icon: <FiCode />,
    title: 'Web Development',
    description:
      'End-to-end web application development — from React front ends to Java back-end logic, written to be clean and easy to maintain.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Design',
    description:
      'Interfaces that adapt cleanly across desktop, tablet, and mobile, built with Flexbox and CSS Grid for real-world devices.',
  },
  {
    icon: <FiLayout />,
    title: 'UI Development',
    description:
      'Clean, accessible interfaces built from a design or from scratch, with attention to detail.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h2 className="section-heading">How I can help</h2>
        <p className="section-sub">
          Whether you need a full application built from the ground up or an existing UI refined,
          here&apos;s where I add the most value.
        </p>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
