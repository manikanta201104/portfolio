import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      technologies: ['React', 'Node.js'],
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <div style={styles.container}>
      <h1>My Projects</h1>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  projectList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
};

export default Projects;
