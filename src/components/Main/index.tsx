// import React from 'react';
import Card from "../Card";
import styles from "./index.module.css";
import {
  wesDetail,
  markdownDetail,
  asteroidDetail,
  colorGameDetail,
} from "../../detail";
// import profileImg from "../../assets/profile.jpg";

function Main() {
  // const profileLink = "https://gateway.pinata.cloud/ipfs/QmPedPPiAvERizxeJxDwJmcjAnHjdjDMKHYvYexn7bpHEz?_gl=1*13jpj8r*_ga*ZGIwNjQ0YmEtNzk0Yi00NzAwLWE0ODQtZTU0OGU4MjkzM2Vm*_ga_5RMPXG14TE*MTY3ODg3MjkwMy4xLjEuMTY3ODg3MzgyOS41My4wLjA.";
  const profileLink =
    "https://res.cloudinary.com/dhmmmen4e/image/upload/v1706147898/portfolio/QmPedPPiAvERizxeJxDwJmcjAnHjdjDMKHYvYexn7bpHEz_s6wpyf.jpg";

  return (
    <div className={styles.container}>
      <div id="about" className={styles.about}>
        <div className={styles.title}>About Me</div>
        <div className={styles.aboutContent}>
          <img
            className={styles.profileImg}
            src={profileLink}
            loading="lazy"
            alt="profileImg"
          />
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
      <div id="projects" className={styles.projects}>
        <div className={styles.title}>Projects</div>
        <div className={styles.projectCards}>
          <Card detail={wesDetail} />
          <Card detail={asteroidDetail} />
          <Card detail={markdownDetail} />
          <Card detail={colorGameDetail} />
        </div>
      </div>
      <div id="contact" className={styles.contact}>
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
