import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticeBody from '@/components/molecules/NoticeBody';

const mockNotice = {
  titulo: 'Título de noticia',
  categoria: 'Categoría',
  fecha: '2024-01-01',
  contenido: 'Contenido de la noticia',
};

describe('NoticeBody Component', () => {
  it('renderiza el título de la noticia', () => {
    render(<NoticeBody notice={mockNotice} />);
    expect(screen.getByText('Título de noticia')).toBeTruthy();
  });

  it('renderiza el contenido de la noticia', () => {
    render(<NoticeBody notice={mockNotice} />);
    expect(screen.getByText('Contenido de la noticia')).toBeTruthy();
  });
});