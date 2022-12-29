import React from 'react';
import styles from './index.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href='#contact'>Contact</a>
        {/* <div>LinkedIn</div>
        <div>Github</div> */}
      </div>
    </div>
  );
}

export default Header;
