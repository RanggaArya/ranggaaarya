'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero'); // Default active ke 'hero'

  useEffect(() => {
    // --- Logic Tema ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // --- Logic Scroll Navbar Background ---
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // --- Logic Active Link (Intersection Observer) ---
    // Mengambil semua elemen <section> di halaman
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null,
      // Margin ini membuat deteksi aktif terjadi saat section berada di tengah layar (-50%)
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
    e.preventDefault(); // Mencegah loncat kasar default browser
    setIsOpen(false); // Tutup menu mobile jika terbuka

    const element = document.getElementById(id);
    if (element) {
      // Hitung posisi offset agar tidak tertutup Navbar
      const navbarHeight = 70; // Sesuaikan dengan tinggi navbar Anda
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id); // Set aktif manual biar responsif instan
    } else if (id === 'hero') {
      // Khusus untuk klik Logo/Home ke paling atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>

        {/* Logo (Kiri) - Klik balik ke atas */}
        <Link href="/" onClick={(e) => handleNavClick(e, 'hero')} className={styles.logo}>
          <img
            src="/icon.jpg"
            alt="Rangga"
            className={styles.logoAvatar}
          />
          <span style={{ color: '#14a5aaff' }}> P O R T F O L I O</span>
        </Link>

        {/* Container Kanan (Links + Divider + Toggle) */}
        <div className={styles.rightSection}>

          {/* Menu Links */}
          <div className={`${styles.navLinks} ${isOpen ? styles.mobileOpen : ''}`}>
            {/* List Menu untuk memudahkan mapping */}
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

            {/* Resume tetap link biasa (External) */}
            <a
              href="/cv-rangga.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>

          {/* Garis Pembatas (Hanya di Desktop) */}
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
    </nav>
  );
};

export default Navbar;