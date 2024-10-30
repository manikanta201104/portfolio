import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>
      <p>I am a software developer with a love for building web applications.</p>
      <p>My skills include React, Node.js, MongoDB, and more.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
};

export default About;
