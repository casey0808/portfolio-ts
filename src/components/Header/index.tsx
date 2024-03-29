// import React from 'react';
import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>Casey CUI</div>
      <div className={styles.menu}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://www.linkedin.com/in/cancui1208/"
          target="_blank"
          rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Header;
