import React from 'react';
import Card from '../Card';
import styles from './index.module.css';
import { Carousel } from 'antd';
import { wesDetail, markdownDetail, pomoDetail } from '../../detail';
import profileImg from '../../assets/images/profile.jpg';

function Main() {
  return (
    <div className={styles.container}>
      <div id='about' className={styles.about}>
        <div className={styles.title}>About Me</div>
        <div className={styles.aboutContent}>
          <img src={profileImg} className={styles.profileImg} />
          <div>
            <p>
              I am a self-taught front-end developer and luckily got my first
              developer job at the end of 2019.
            </p>
            <p>
              Through work, and also from other professionals, I have learnt to
              write clean code and build more elegant websites. Look forward to
              more fun and knowledge in this wonderful field :)
            </p>
          </div>
        </div>
      </div>
      <div id='projects' className={styles.projects}>
        <div className={styles.title}>Projects</div>
        <Carousel className={styles.carousel} autoplay>
          <Card detail={wesDetail} />
          <Card detail={markdownDetail} />
          <Card detail={pomoDetail} />
        </Carousel>
      </div>
      <div id='contact' className={styles.contact}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.contactContent}>
          <div className={styles.name}>Casey CUI</div>
          <div>Email: casey_c0808@outlook.com</div>
          <div>LinkedIn: linkedin.com/in/cancui1208 </div>
          <div>GitHub: casey0808</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
