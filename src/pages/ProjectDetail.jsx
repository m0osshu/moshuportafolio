import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import projects from '../data/project.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import Footer from '../components/molecules/Footer.jsx';
import '../styles/pages/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Verificar si el ID es válido
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);

  // Si el proyecto no existe, redirigir a NotFound
  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const handleRepositorioClick = () => {
    if (project && project.url) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate('/projects')}>
        ← Volver a Proyectos
      </button>
      
      <div className="project-card-detail">
        <Image src={project.image} alt={project.name} className="project-image" />
        <div className="card-body">
          <Text variant="h1" className="project-title">{project.name}</Text>
          <Text variant="p" className="project-description">{project.description}</Text>
          
          <div className="technologies-section">
            <Text variant="h3">Tecnologías Utilizadas</Text>
            <div className="technologies-list">
              {project.tecnologies && project.tecnologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <Button variant="primary" onClick={handleRepositorioClick} className="mt-3">
            Ver Repositorio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;