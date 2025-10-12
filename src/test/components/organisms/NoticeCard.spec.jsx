import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticeCard from '@/components/organisms/NoticeCard';

const mockNotice = {
  id: 1,
  titulo: 'Noticia Test',
  categoria: 'Tecnología',
  fecha: '2024-01-01',
  contenido: 'Contenido de la noticia test',
  image: 'test-image.jpg'
};

describe('NoticeCard Component', () => {
  it('renderiza el título de la noticia', () => {
    render(<NoticeCard notice={mockNotice} />);
    expect(screen.getByText('Noticia Test')).toBeTruthy();
  });

  it('renderiza la categoría de la noticia', () => {
    render(<NoticeCard notice={mockNotice} />);
    expect(screen.getByText('Tecnología')).toBeTruthy();
  });

  it('renderiza el contenido de la noticia', () => {
    render(<NoticeCard notice={mockNotice} />);
    expect(screen.getByText('Contenido de la noticia test')).toBeTruthy();
  });
});