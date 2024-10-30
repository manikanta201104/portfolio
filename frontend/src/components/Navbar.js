import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>My Portfolio</h1>
      <ul style={styles.navList}>
        <li><Link style={styles.navItem} to="/">Home</Link></li>
        <li><Link style={styles.navItem} to="/about">About</Link></li>
        <li><Link style={styles.navItem} to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#282c34',
    padding: '1rem',
    color: 'white'
  },
  title: {
    margin: 0,
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
  },
};

export default Navbar;
