import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/molecules/Footer';

describe('Footer Component', () => {
  it('renderiza el footer correctamente', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeTruthy();
  });

  it('muestra información de copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Todos los derechos reservados/)).toBeTruthy();
  });

  it('muestra que fue desarrollado con React', () => {
    render(<Footer />);
    expect(screen.getByText(/Desarrollado con/)).toBeTruthy();
  });
});