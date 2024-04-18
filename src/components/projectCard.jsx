import React from 'react';

import styles from '../styles/projectCard.module.css';

import i2048 from '../images/2048.png';
import strange from '../images/strange-attractor.png';
import react from '../images/react-original.png';

function ProjectCard(props) {

  const techList = props.techList.map((tech) => {
    return <h4>{tech}</h4>;
  });

  let image = null;
  if(props.image === "2048") {
    image = i2048;
  } else if (props.image === "strange-attractor") {
    image = strange;
  } else if (props.image === "react") {
    image = react;
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.info}>
        <div className={styles.infoContent}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        <div className={styles.techUsed}>
          {techList}
        </div>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer"><div className={styles.image}>
        <img href src={image} alt="project" />
      </div></a>
    </div>
  );
}

export default ProjectCard;