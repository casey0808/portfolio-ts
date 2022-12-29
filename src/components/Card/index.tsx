import React from 'react';
import styles from './index.module.css';

interface IProps {
  imgSrc: string | object;
  desc: string;
}

function Card({ imgSrc, desc }: IProps) {
  console.log(imgSrc, desc);
  return <div className={styles.container}></div>;
}

export default Card;
