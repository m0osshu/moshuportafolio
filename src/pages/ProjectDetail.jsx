import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconArrowLeft, IconBrandGithub } from '@tabler/icons-react';
import projects from '../data/project.js';
import Image from '../components/atoms/Image.jsx';
import Footer from '../components/molecules/Footer.jsx';
import '../styles/pages/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <div className="project-detail">
      <div className="project-detail__inner">

        <motion.button
          className="project-detail__back"
          onClick={() => navigate('/projects')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconArrowLeft size={15} strokeWidth={1.75} />
          Volver a proyectos
        </motion.button>

        <motion.div
          className="project-detail__card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="project-detail__img-wrap">
            <Image src={project.image} alt={project.name} className="project-detail__img" />
          </div>

          <div className="project-detail__body">
            <h1 className="project-detail__title">{project.name}</h1>
            <p className="project-detail__desc">{project.description}</p>

            {project.tecnologies && project.tecnologies.length > 0 && (
              <div className="project-detail__tech">
                <p className="project-detail__label">Tecnologías utilizadas</p>
                <div className="project-detail__tech-list">
                  {project.tecnologies.map((tech, i) => (
                    <span key={i} className="project-detail__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__btn"
            >
              <IconBrandGithub size={15} strokeWidth={1.75} />
              Ver repositorio
            </a>
          </div>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;