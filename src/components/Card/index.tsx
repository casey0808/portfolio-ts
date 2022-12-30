import React from 'react';
import styles from './index.module.css';

interface IProps {
  detail: { title: string; imgSrc: any; desc: string; demo: string; github: string };
}

function Card({ detail }: IProps) {
  const { title, imgSrc, desc, demo, github } = detail;
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt='' className={styles.img} loading={'lazy'} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <a href={demo} target="_blank" >Demo</a>
        <a href={github} target="_blank">GitHub</a>
      </div>
    </div>
  );
}

export default Card;
