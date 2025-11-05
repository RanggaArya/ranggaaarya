'use client'; // <-- Tambahkan ini di baris paling atas

import Image from 'next/image';
import styles from './AboutSection.module.css';
import { useInView } from 'react-intersection-observer'; // <-- Import

const AboutSection = () => {
  // Hook untuk mendeteksi saat section terlihat
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // Tambahkan ref dan kelas animasi kondisional
    <section id="about" ref={ref} className={`${styles.aboutSection} ${inView ? 'fade-in-up' : ''}`}>
      <div className="container">
        <h2 className={styles.title}>Tentang Saya</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.avatarWrapper}>
            <Image
              src="/profil.jpg"
              alt="Foto Profil"
              width={256}
              height={256}
              className={styles.avatar}
            />
          </div>
          <div className={styles.textWrapper}>
            <p>
              Saya adalah seorang engineer dengan passion mendalam di bidang Web Developer, khususnya sebagai Fullstack Developer. Saya menikmati proses membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memiliki pengalaman pengguna yang optimal. Selain itu, saya juga tertarik mengeksplorasi penerapan model Machine Learning (ML) dan Artificial Intelligence (AI) ke dalam solusi berbasis web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;