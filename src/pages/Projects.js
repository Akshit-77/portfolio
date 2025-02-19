import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Mobile-first responsive website with modern UI/UX',
      technologies: ['React', 'Material-UI', 'Firebase'],
      link: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 