import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/project';
import ProjectCard from '../components/organisms/ProjectCard';
import Footer from '../components/molecules/Footer';
import '../styles/pages/Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-page__header">
        <motion.p
          className="projects-page__label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Portafolio
        </motion.p>
        <motion.h1
          className="projects-page__title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.07 }}
        >
          Mis proyectos<span className="projects-page__dot">.</span>
        </motion.h1>
        <motion.p
          className="projects-page__subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.14 }}
        >
          {projects.length} proyectos desarrollados
        </motion.p>
      </div>

      <div className="projects-page__grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;