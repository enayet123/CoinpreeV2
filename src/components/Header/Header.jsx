import React from 'react';
import Logo from './Logo/Logo';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerItem}><Logo /></div>
      <div className={styles.headerItem}>Bitcoin to Ripple</div>
      <div className={`${styles.headerItem} ${styles.btn}`}>&#63;</div>
    </div>
  );
}

export default Header;
