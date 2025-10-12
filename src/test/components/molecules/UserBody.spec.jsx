import React from 'react';
import { render, screen } from '@testing-library/react';
import UserBody from '@/components/molecules/UserBody';

const mockUser = {
  name: 'Juan Pérez',
  titulo: ['Desarrollador Frontend'],
  edad: 30,
  habilidades: ['JavaScript', 'React'],
  redes: [
    { nombre: 'GitHub', url: 'https://github.com', icono: 'github' }
  ],
};

describe('UserBody Component', () => {
  it('renderiza el nombre del usuario', () => {
    render(<UserBody user={mockUser} />);
    // El componente renderiza "Juan Pérez." (con punto) no "Juan Pérez"
    expect(screen.getByText(/Juan Pérez/)).toBeTruthy(); // ← Usamos regex
  });

  it('renderiza las habilidades técnicas', () => {
    render(<UserBody user={mockUser} />);
    expect(screen.getByText('JavaScript')).toBeTruthy();
    expect(screen.getByText('React')).toBeTruthy();
  });
});