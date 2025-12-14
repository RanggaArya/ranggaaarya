'use client'; // <-- Tambahkan ini di baris paling atas

import Link from 'next/link';
import styles from './HeroSection.module.css';
import { TypeAnimation } from 'react-type-animation'; // <-- Import

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.title}>
          Hello! &nbsp;I&apos;m
        </h2>
        <h1 className={styles.title}>
          <span className="gradient-text">Rangga Arya Pradana</span> {/* <-- Tambahkan kelas gradient-text */}
        </h1>
        {/* Ganti <p> dengan <TypeAnimation> */}
        <TypeAnimation
          sequence={[
            'Saya seorang FullStack Developer.',
            2000,
            'Saya seorang Machine Learning Engineer.',
            2000,
            'Saya seorang Computer Vision Enthusiast.',
            2000,
          ]}
          wrapper="p"
          speed={50}
          className={styles.subtitle}
          repeat={Infinity}
        />
        <div>
          <Link href="#projects" className={styles.buttonSecondary}>
            View Portfolio
          </Link>
          <Link href="#contact" className={styles.buttonSecondary}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
