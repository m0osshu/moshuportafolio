import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from '@/components/molecules/ContactForm';

const mockInputs = [
  {
    id: 'name',
    type: 'text',
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
    value: '',
    onChange: () => {}, // ← Cambiado de jest.fn() a función vacía
  }
];

describe('ContactForm Component', () => {
  it('renderiza el formulario correctamente', () => {
    render(<ContactForm inputs={mockInputs} />);
    expect(screen.getByText('Nombre')).toBeTruthy();
  });

  it('renderiza los placeholders correctamente', () => {
    render(<ContactForm inputs={mockInputs} />);
    expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeTruthy();
  });
});