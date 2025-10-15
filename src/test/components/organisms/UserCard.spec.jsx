import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '@/components/organisms/UserCard';

const mockUser = {
  name: 'Test User',
  titulo: ['Desarrollador Frontend'],
  edad: 30,
  foto: 'test-image.jpg', 
  sobreMi: [ 
    'Soy un desarrollador apasionado por la tecnología',
    'Me encanta crear soluciones innovadoras'
  ],
  habilidades: ['JavaScript', 'React'],
  redes: [{ nombre: 'GitHub', url: 'https://github.com', icono: 'github' }],
};

describe('UserCard Component', () => {
  it('renderiza el nombre del usuario', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText(/Test User/)).toBeTruthy();
  });

  it('renderiza las habilidades del usuario', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText('JavaScript')).toBeTruthy();
    expect(screen.getByText('React')).toBeTruthy();
  });

  it('renderiza la imagen del usuario', () => {
    render(<UserCard user={mockUser} />);
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
  });
});