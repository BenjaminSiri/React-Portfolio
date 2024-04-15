import React from 'react';

import styles from '../styles/projectCard.module.css';


function ProjectCard(props) {

  const techList = props.techList.map((tech) => {
    return <h4>{tech}</h4>;
  });

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
      <div className={styles.image}>
        <img src={props.image} alt="project" />
      </div>
    </div>
  );
}

export default ProjectCard;