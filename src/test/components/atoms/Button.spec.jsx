import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@/components/atoms/Button'

describe('Button Component', () => {
  it('renderiza el botón con el texto correcto', () => {
    render(<Button>Haz click</Button>);
    expect(screen.getByText('Haz click')).toBeTruthy();
  });

  it('aplica la variante primary correctamente', () => {
    render(<Button variant="primary">Haz click</Button>);
    const button = screen.getByText('Haz click');
    expect(button).toHaveClass('btn-primary');
  });

  it('aplica la variante secondary correctamente', () => {
    render(<Button variant="secondary">Cancelar</Button>);
    const button = screen.getByText('Cancelar');
    expect(button).toHaveClass('btn-secondary');
  });
});