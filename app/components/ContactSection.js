'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa';
import { MdEmail, MdMessage } from 'react-icons/md';
import styles from './ContactSection.module.css';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send(
        'service_9m6n4ji',
        'template_lejnlrg',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'GsUedagYhnFsx1XO7'
      )
      .then(
        () => {
          setStatus('✅ Pesan berhasil dikirim!');
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatus('❌ Gagal mengirim pesan. Coba lagi nanti.');
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contactSection} ${inView ? 'fade-in-up' : ''}`}
    >
      <div className="container">
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>
          Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang kerja. Jangan ragu untuk menghubungi saya!
        </p>

        {/* Sosial Media */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/RanggaArya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/ranggaaarya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:ranggaaarya0110@gmail.com" aria-label="Email">
            <FaEnvelope size={40} />
          </a>
        </div>

        {/* Form Kontak */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.5rem', width: '100%' }}>
            <span><FaUser size={15} /></span> Name
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.5rem', width: '100%' }}>
            <span><MdEmail size={15} /></span> Email
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email@Example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.5rem', width: '100%' }}>
            <span><MdMessage size={15} /></span> Message
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </form>

        {status && <p className={styles.status}>{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
