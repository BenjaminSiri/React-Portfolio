import React from 'react';

import styles from '../styles/projects.module.css';

import projectJSON from '../data/projects.json';

import ProjectCard from './projectCard';

function Projects() {

  const projectComps = projectJSON.projects.map((project) => {
    return <ProjectCard name={project.name} description={project.description} image={project.image} techList={project.techList} />;
  });

  return (
    <div className={styles.projects}>
       {projectComps}
    </div>
  );
}

export default Projects;