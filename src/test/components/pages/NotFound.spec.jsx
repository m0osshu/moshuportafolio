import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '@/pages/NotFound';

describe('NotFound Page', () => {
  it('renderiza el mensaje de página no encontrada', () => {
    render(<NotFound />);
    expect(screen.getByText(/Página no encontrada/)).toBeTruthy();
  });

  it('renderiza la pregunta de confirmación', () => {
    render(<NotFound />);
    expect(screen.getByText(/¿Estás seguro de que era aquí\?/)).toBeTruthy();
  });
});