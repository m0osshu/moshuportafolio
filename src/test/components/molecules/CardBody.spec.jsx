import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '@/components/molecules/CardBody';

const mockProps = {
  title: 'Título de la tarjeta',
  description: 'Descripción de la tarjeta',
};

describe('CardBody Component', () => {
  it('renderiza el título correctamente', () => {
    render(<CardBody {...mockProps} />);
    expect(screen.getByText('Título de la tarjeta')).toBeTruthy();
  });

  it('renderiza la descripción correctamente', () => {
    render(<CardBody {...mockProps} />);
    expect(screen.getByText('Descripción de la tarjeta')).toBeTruthy();
  });
});