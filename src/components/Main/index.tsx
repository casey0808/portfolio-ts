import React from 'react';
import Card from '../Card';
import styles from './index.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <div id='about' className={styles.about}>
        about
      </div>
      <div id='projects' className={styles.projects}>
        Projects
        <div className={styles.cardContainer}>
          <Card imgSrc='' desc='' />
        </div>
      </div>
    </div>
  );
}

export default Main;
