import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dibuat oleh Rangga Arya Pradana.</p>
      </div>
    </footer>
  );
};

export default Footer;