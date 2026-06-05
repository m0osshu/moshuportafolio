import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconArrowRight } from '@tabler/icons-react';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
import '../../styles/organisms/ProjectCard.css';

function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <div className="project-card__img-wrap">
        <Image src={project.image} alt={project.name} className="project-card__img" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__actions">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--outline"
          >
            <IconBrandGithub size={14} strokeWidth={1.75} />
            Repositorio
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;