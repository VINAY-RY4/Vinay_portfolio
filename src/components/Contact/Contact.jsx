import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const INFO = [
  { icon: <FiPhone />, label: 'Phone', value: '+91 81236 99716' },
  { icon: <FiMail />, label: 'Email', value: 'vinayry31@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Bengaluru, Karnataka, India' },
];

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/VINAY-RY4', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/vinay-r-y-5a1aa3363', label: 'LinkedIn' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) errs.subject = 'Please enter a subject';
    if (!form.message.trim()) errs.message = 'Please enter a message';
    else if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3200);
    }, 1200);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 className="section-heading">Let&apos;s build something together</h2>
        <p className="section-sub">
          Have a role, project, or just want to say hi? My inbox is open.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {INFO.map((item) => (
              <div className="contact-info-item" key={item.label}>
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}

            <div className="contact-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form card-surface"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-row">
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell me a bit about your project or role..." />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact-submit"
              whileTap={{ scale: 0.97 }}
              disabled={status === 'sending'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'sent' ? (
                  <motion.span key="sent" className="submit-inner" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <FiCheck /> Message Sent
                  </motion.span>
                ) : (
                  <motion.span key="send" className="submit-inner" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
