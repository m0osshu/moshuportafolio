import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '@/components/organisms/NavBar';

// Wrapper para componentes que usan React Router
const RouterWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('NavBar Component', () => {
  it('renderiza la marca del portafolio', () => {
    render(
      <RouterWrapper>
        <NavBar />
      </RouterWrapper>
    );
    expect(screen.getByText('Mi Portafolio')).toBeTruthy();
  });

  it('renderiza los enlaces de navegación', () => {
    render(
      <RouterWrapper>
        <NavBar />
      </RouterWrapper>
    );
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Proyectos')).toBeTruthy();
    expect(screen.getByText('Noticias')).toBeTruthy();
    expect(screen.getByText('Contacto')).toBeTruthy();
  });

  it('renderiza el navbar con la clase personalizada', () => {
    render(
      <RouterWrapper>
        <NavBar />
      </RouterWrapper>
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-custom');
  });
});