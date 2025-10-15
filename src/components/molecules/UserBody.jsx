import React from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/UserBody.css';

function UserBody({ user, className = '' }) {
    // Validar que user exista y tenga las propiedades necesarias
    if (!user) {
        return <div>No hay datos de usuario disponibles</div>;
    }

    return (
        <div className={`user-body ${className}`}>
            <Text variant="h6" type="highlight" className="user-greeting">
                Hola, mi nombre es
            </Text>
            <Text variant="h1" type="display" className="user-name">
                {user.name || 'Nombre no disponible'}.
            </Text>
            <Text variant="h2" type="title" className="user-title">
                {user.titulo ? user.titulo.join(" • ") : 'Título no disponible'}
            </Text>

            <div className="user-info">
                <Text variant="p" type="highlight" className="info-label">Edad</Text>
                <Text variant="p" type="body" className="info-value">
                    {user.edad ? `${user.edad} años` : 'Edad no disponible'}
                </Text>
            </div>

            {/* === SOBRE MÍ === */}
            <div className="sobre-mi-section">
                <Text variant="h5" type="highlight">
                    Sobre mí
                </Text>
                <div className="sobre-mi-list">
                    {user.sobreMi && user.sobreMi.length > 0 ? (
                        user.sobreMi.map((item, index) => (
                            <Text key={index} variant="p" type="body" className="sobre-mi-item">
                                {item}
                            </Text>
                        ))
                    ) : (
                        <Text variant="p" type="body">No hay información disponible</Text>
                    )}
                </div>
            </div>
            {/* ================= */}

            <div className="habilidades-section">
                <Text variant="h5" type="highlight">
                    Habilidades Técnicas
                </Text>
                <div className="habilidades-list">
                    {user.habilidades && user.habilidades.length > 0 ? (
                        user.habilidades.map((habilidad, index) => (
                            <span key={index} className="habilidad-tag">
                                {habilidad}
                            </span>
                        ))
                    ) : (
                        <Text variant="p" type="body">No hay habilidades disponibles</Text>
                    )}
                </div>
            </div>

            <div className="social-links">
                {user.redes && user.redes.length > 0 ? (
                    user.redes.map((red, index) => (
                        <a
                            key={index}
                            href={red.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={red.nombre}
                        >
                            <i className={`bi bi-${red.icono}`}></i>
                        </a>
                    ))
                ) : (
                    <Text variant="p" type="body">No hay redes sociales disponibles</Text>
                )}
            </div>
        </div>
    );
}

export default UserBody;