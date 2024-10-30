import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a passionate developer skilled in various technologies.</p>
      <p>Check out my projects below!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
};

export default Home;
