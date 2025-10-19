import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          Rangga Arya Pradana
        </Link>
        <div className={styles.navLinks}>
          <Link href="#about">Tentang Saya</Link>
          <Link href="#projects">Portofolio</Link>
          <Link href="#contact">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;