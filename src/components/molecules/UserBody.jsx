import React from 'react';
import { motion } from 'framer-motion';
import { IconCalendar, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconLink } from '@tabler/icons-react';
import '../../styles/molecules/UserBody.css';

const ICON_MAP = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function UserBody({ user, className = '' }) {
  if (!user) return <div>No hay datos de usuario disponibles</div>;

  return (
    <div className={`user-body ${className}`}>

      <motion.p
        className="user-body__greeting"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        Portafolio
      </motion.p>

      <motion.h1
        className="user-body__name"
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {user.name}<span className="user-body__dot">.</span>
      </motion.h1>

      <motion.h2
        className="user-body__title"
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {user.titulo.join(' • ')}
      </motion.h2>

      <motion.span
        className="user-body__age"
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <IconCalendar size={14} strokeWidth={1.75} />
        {user.edad} años
      </motion.span>

      <motion.hr
        className="user-body__divider"
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="user-body__section"
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <p className="user-body__label">Sobre mí</p>
        <ul className="user-body__sobre-list">
          {user.sobreMi.map((item, i) => (
            <li key={i} className="user-body__sobre-item">{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="user-body__section"
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <p className="user-body__label">Habilidades técnicas</p>
        <div className="user-body__skills">
          {user.habilidades.map((skill, i) => (
            <motion.span
              key={skill}
              className="user-body__skill"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.45 + i * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="user-body__social"
        custom={7}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {user.redes.map((red) => {
          const IconComponent = ICON_MAP[red.icono] ?? IconLink;
          return (
            <a
              key={red.nombre}
              href={red.url}
              className="user-body__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={red.nombre}
            >
              <IconComponent size={16} strokeWidth={1.75} />
              {red.nombre}
            </a>
          );
        })}
      </motion.div>

    </div>
  );
}

export default UserBody;