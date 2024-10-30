import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div style={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <a style={styles.link} href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
    width: '200px',
    textAlign: 'left',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
  },
};

export default ProjectCard;
