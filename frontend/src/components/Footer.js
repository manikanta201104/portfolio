import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative', // Changed to relative
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
