import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';

const RouterWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('Home Page', () => {
  it('renderiza la página de inicio correctamente', () => {
    render(
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );
    expect(screen.getByText(/Ver Mis Proyectos/)).toBeTruthy();
  });

  it('renderiza el componente UserCard', () => {
    render(
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );
    expect(screen.getByText(/Daniel Salazar Berrios/)).toBeTruthy();
  });
});