'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0); // State baru untuk Progress Bar

  useEffect(() => {
    // --- Logic Tema ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // --- Logic Scroll (Navbar Background & Progress Bar) ---
    const handleScroll = () => {
      // 1. Navbar Glass Effect
      setScrolled(window.scrollY > 50);

      // 2. Perhitungan Progress Bar (0% - 100%)
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (height > 0) {
        const scrolledTotal = (winScroll / height) * 100;
        setScrollProgress(scrolledTotal);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Logic Active Link (Intersection Observer) ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Fungsi Scroll Halus Custom
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>

        {/* Logo (Kiri) */}
        <Link href="/" onClick={(e) => handleNavClick(e, 'hero')} className={styles.logo}>
          <img
            src="/icon.jpg"
            alt="Rangga"
            className={styles.logoAvatar}
          />
          <span style={{ color: '#14a5aaff' }}> P O R T F O L I O</span>
        </Link>

        {/* Container Kanan */}
        <div className={styles.rightSection}>

          {/* Menu Links */}
          <div className={`${styles.navLinks} ${isOpen ? styles.mobileOpen : ''}`}>
            {[
              { id: 'about', label: 'About Me' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={activeSection === link.id ? styles.active : ''}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/cv-rangga.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>

          {/* Garis Pembatas */}
          <span className={styles.divider}>|</span>

          {/* Theme Toggle & Hamburger */}
          <div className={styles.controls}>
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Ganti Tema">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* --- ELEMENT BARU: PROGRESS BAR --- */}
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

    </nav>
  );
};

export default Navbar;