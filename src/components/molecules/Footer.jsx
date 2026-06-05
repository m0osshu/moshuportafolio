import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconLink } from '@tabler/icons-react';
import User from '../../data/user';
import '../../styles/molecules/Footer.css';

const ICON_MAP = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
};

function Footer({ className = '' }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__container">

        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-dot" />
            <span className="footer__brand-name">{User.name}</span>
          </div>
          <p className="footer__tagline">Desarrollador Full Stack · DuocUC</p>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">© {currentYear} {User.name}. Todos los derechos reservados.</p>
          <div className="footer__socials">
            {User.redes.map((red) => {
              const IconComponent = ICON_MAP[red.icono] ?? IconLink;
              return (
                <a
                  key={red.nombre}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={red.Daniel}
                >
                  <IconComponent size={16} strokeWidth={1.75} />
                  {red.nombre}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;