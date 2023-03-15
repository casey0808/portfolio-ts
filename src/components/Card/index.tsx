import React from "react";
import styles from "./index.module.css";
import arrowIcon from '../../assets/arrow_right.svg'

interface IProps {
  detail: {
    title: string;
    imgSrc: any;
    desc: string;
    demo: string;
    github: string;
  };
}

function Card({ detail }: IProps) {
  const { title, imgSrc, desc, demo } = detail;
  const goToDemo = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className={styles.container} onClick={() => goToDemo(demo)}>
      <img src={imgSrc} alt="img" className={styles.img} loading="lazy" />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        <img src={arrowIcon} className={styles.icon} alt="icon" />
        {/* <a href={demo} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a> */}
      </div>
    </div>
  );
}

export default Card;
