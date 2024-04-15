import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/header.module.css';

function Header() {
  return (
    <div className={styles.header}>
        <NavLink className={styles.link} to='/'><h2>Home</h2></NavLink>
        <NavLink className={styles.link} to='/projects'><h2>Projects</h2></NavLink>
        <NavLink className={styles.link} to='/contact'><h2>Contact</h2></NavLink>
    </div>
  );
}

export default Header;