import styles from './Nav.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <div className={styles.inner}></div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.register}>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;