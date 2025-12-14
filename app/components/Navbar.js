'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContent}`}>

        {/* Logo (Kiri) */}
        <Link href="/" className={styles.logo}>
          <img
            src="/icon.jpg"
            alt="Rangga"
            className={styles.logoAvatar}
          />
          <span style={{ color: '#6e55a0ff' }}> P O R T F O L I O</span>
        </Link>

        {/* Container Kanan (Links + Divider + Toggle) */}
        <div className={styles.rightSection}>

          {/* Menu Links (termasuk Resume) */}
          <div className={`${styles.navLinks} ${isOpen ? styles.mobileOpen : ''}`}>
            <Link href="#about" onClick={() => setIsOpen(false)}>About Me</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Resume sekarang jadi link biasa */}
            <a href="/cv-rangga.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
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