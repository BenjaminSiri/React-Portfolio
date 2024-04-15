import Header from './header';

import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from '../styles/root.module.css';

function Root() {
  return (
    <div className={styles.root}>
        <Header />
        <main>
            <Outlet />
        </main>

    </div>
  );
}

export default Root;