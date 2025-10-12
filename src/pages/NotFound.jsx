import React from 'react';
import Image from '../components/atoms/Image';
import Footer from '../components/molecules/Footer';
import '../styles/pages/NotFound.css';

// Constante para la imagen de error
const NOT_FOUND_IMAGE = {
};

function NotFound() {
    return (
        <div className="not-found-container" role="main">
            <header className="not-found-header">
                <h1 className="not-found-title">Página no encontrada</h1>
                <p className="not-found-subtitle">¿Estás seguro de que era aquí?</p>
            </header>
            <div className="not-found-image-container">
                <Image 
                    src={NOT_FOUND_IMAGE.src} 
                    alt={NOT_FOUND_IMAGE.alt} 
                    className="not-found-image" 
                />
            </div>
            
        </div>
    );
}

export default NotFound;