import React from 'react';
import { render, screen } from '@testing-library/react';
import Notice from '@/pages/Notice';

describe('Notice Page', () => {
  it('renderiza el título de noticias', () => {
    render(<Notice />);
    expect(screen.getByText(/Noticias/)).toBeTruthy();
  });

  it('renderiza el subtítulo de noticias', () => {
    render(<Notice />);
    expect(screen.getByText(/Últimas actualizaciones y logros/)).toBeTruthy();
  });
});