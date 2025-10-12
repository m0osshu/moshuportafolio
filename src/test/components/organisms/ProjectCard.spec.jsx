import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '@/components/organisms/ProjectCard';

const mockProject = {
  id: 1,
  name: 'Proyecto Test',
  description: 'Descripción del proyecto test',
  image: 'test-image.jpg',
  tecnologies: ['React', 'Node.js']
};

// Wrapper para componentes que usan React Router
const RouterWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('ProjectCard Component', () => {
  it('renderiza el nombre del proyecto', () => {
    render(
      <RouterWrapper>
        <ProjectCard project={mockProject} />
      </RouterWrapper>
    );
    expect(screen.getByText('Proyecto Test')).toBeTruthy();
  });

  it('renderiza la descripción del proyecto', () => {
    render(
      <RouterWrapper>
        <ProjectCard project={mockProject} />
      </RouterWrapper>
    );
    expect(screen.getByText('Descripción del proyecto test')).toBeTruthy();
  });

  it('renderiza los botones del proyecto', () => {
    render(
      <RouterWrapper>
        <ProjectCard project={mockProject} />
      </RouterWrapper>
    );
    expect(screen.getByText('Repositorio')).toBeTruthy();
    expect(screen.getByText('Detalles')).toBeTruthy();
  });

});