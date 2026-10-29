import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const CERTS = [
  { name: 'Java Full Stack Developer', org: 'Oracle University', year: '2023' },
  { name: 'React — The Complete Guide', org: 'Udemy', year: '2023' },
  { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2024' },
  { name: 'Spring Boot Microservices', org: 'Coursera', year: '2024' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="eyebrow">Certifications</p>
        <h2 className="section-heading">Continued learning</h2>
        <p className="section-sub">Certifications that back up hands-on experience with formal training.</p>

        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              className="cert-card card-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-icon"><FiAward /></div>
              <h3>{c.name}</h3>
              <p>{c.org}</p>
              <span className="tag">{c.year}</span>
              <a href="#" className="cert-link">
                View Certificate <FiExternalLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
