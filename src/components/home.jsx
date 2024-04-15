import React from 'react';

import styles from '../styles/home.module.css';

import pyLogo from '../images/python-original.png';
import javaLogo from '../images/java-original.png';
import cLogo from '../images/c-plain.png';
import goLogo from '../images/go-original-wordmark.png';
import reactLogo from '../images/react-original.png';

function Home() {
  const bannerText = "I'm a Computer Science student studying at The Pennsylvania State University. I'm interested in pursuing full-stack development as well as using my statistics minor to work with machine learning models.";

  const pngArray = [pyLogo, javaLogo, cLogo, goLogo, reactLogo];

  const imgArray = pngArray.map((img) => { 
    return <img className={styles.carouselItem} src={img} alt="logo" />;
  });

  return (
    <div className={styles.home}>
        <div className={styles.banner}>
          <div className={styles.bannerItem}>
            <p>{bannerText}</p>
          </div>
          <div className={styles.bannerItem}>
            <div className={styles.picture}></div>
          </div>
        </div>
        <div className={styles.carousel}>
          {imgArray}
        </div>
        <div className={styles.featured}>
          <h1>Featured Projects</h1>
          
        </div>
    </div>
  );
} 

export default Home;