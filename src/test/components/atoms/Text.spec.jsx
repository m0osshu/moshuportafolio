import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '@/components/atoms/Text';

describe('Text Component', () => {
  it('renderiza el texto correctamente', () => {
    render(<Text>Hola mundo</Text>);
    expect(screen.getByText('Hola mundo')).toBeTruthy();
  });

  it('renderiza como párrafo por defecto', () => {
    render(<Text>Texto de prueba</Text>);
    const textElement = screen.getByText('Texto de prueba');
    expect(textElement.tagName).toBe('P');
  });

  it('aplica la variante h1 correctamente', () => {
    render(<Text variant="h1">Título</Text>);
    const textElement = screen.getByText('Título');
    expect(textElement.tagName).toBe('H1');
  });
});