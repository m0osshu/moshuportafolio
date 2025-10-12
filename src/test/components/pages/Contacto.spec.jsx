import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacto from '@/pages/Contacto';

describe('Contacto Page', () => {
  it('renderiza la página de contacto correctamente', () => {
    render(<Contacto />);
    expect(screen.getByText(/Enviar Mensaje/)).toBeTruthy();
  });

  it('renderiza los campos del formulario', () => {
    render(<Contacto />);
    expect(screen.getByPlaceholderText(/Ingresa tu nombre/)).toBeTruthy();
    expect(screen.getByPlaceholderText(/tuemail@ejemplo.com/)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Escribe tu mensaje aquí/)).toBeTruthy();
  });
});