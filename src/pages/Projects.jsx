import React from 'react';
import projects from '../data/project';
import ProjectCard from '../components/organisms/ProjectCard';
import Text from '../components/atoms/Text';
import Footer from '../components/molecules/Footer';
import '../styles/pages/Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <Text variant="h1" type="title" className="section-title">
        Mis Proyectos
      </Text>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;