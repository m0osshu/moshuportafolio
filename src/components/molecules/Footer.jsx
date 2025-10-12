import React from "react";
import Text from "../atoms/Text";
import User from "../../data/user";
import "../../styles/molecules/Footer.css";

function Footer({ className = "" }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        {/* Redes sociales */}
        <div className="footer-socials">
          {User.redes.map((red, index) => (
            <a
              key={index}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={`Ir al perfil de ${red.nombre}`}
            >
              <Text variant="p" type="highlight">
                {red.nombre}
              </Text>
            </a>
          ))}
        </div>

        {/* Línea divisoria */}
        <hr className="footer-divider" />

        {/* Información adicional */}
        <div className="footer-info">
          <Text variant="p">
            © {currentYear} {User.nombre}Todos los derechos reservados Moshu.
          </Text>
          <Text variant="p" type="secondary">
            Desarrollado con usando React.
          </Text>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
