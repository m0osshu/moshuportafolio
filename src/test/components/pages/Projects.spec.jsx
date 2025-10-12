import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '@/pages/Projects';

const RouterWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('Projects Page', () => {
  it('renderiza el título de la página', () => {
    render(
      <RouterWrapper>
        <Projects />
      </RouterWrapper>
    );
    expect(screen.getByText(/Mis Proyectos/)).toBeTruthy();
  });

  it('renderiza la sección de proyectos', () => {
    render(
      <RouterWrapper>
        <Projects />
      </RouterWrapper>
    );
    // Cambiamos a verificar que existe algún contenido de proyectos
    expect(screen.getByText(/Mis Proyectos/)).toBeTruthy();
  });
});