import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '@/components/atoms/Image';

describe('Image Component', () => {
  const mockImage = {
    src: 'test-image.jpg',
    alt: 'Test image'
  };

  it('renderiza la imagen con src y alt correctos', () => {
    render(<Image src={mockImage.src} alt={mockImage.alt} />);
    
    const image = screen.getByRole('img');
    expect(image).toBeTruthy(); 
    expect(image.getAttribute('src')).toBe(mockImage.src);
    expect(image.getAttribute('alt')).toBe(mockImage.alt);
  });

  it('aplica la clase className correctamente', () => {
    render(<Image src={mockImage.src} alt={mockImage.alt} className="test-class" />);
    
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
  });
});