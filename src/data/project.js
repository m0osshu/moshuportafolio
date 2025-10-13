import apiRestImg from '../assets/img/projects/kmDigital.png';
import appMovilImg from '../assets/img/projects/kozi.png';
import paginaWebImg from '../assets/img/projects/logoMama.png';
import paginaWeBImg from '../assets/img/home/a10.jpg';

const projects = [
    {
      id: 1,
      name: 'Proyecto Aplicación movil',
      description: 'Proyecto desarrollado con AndroidStudio y Kotlin',
      tecnologies: ['Kotlin', 'AndroidStudio'],
      image: apiRestImg,
      url: 'https://github.com/m0osshu/KMdigital.git'
    },
    {
      id: 2,
      name: 'Kozi',
      description: 'Proyecto desarrollado con Html, CSS, JavaScript y Bootstrap.',
      tecnologies: ['JavaScript', 'HTML', 'CSS'],
      image:  appMovilImg,
      url: 'https://github.com/m0osshu/kozi.git'
    },
    {
      id: 3,
      name: 'PetShop',
      description: 'Proyecto desarrollado con JavaScript y Bootstrap.',
      tecnologies: ['JavaScript', 'HTML', 'CSS',],
      image:  paginaWebImg,
      url: 'https://github.com/m0osshu/PetShop.git'
    },
        {
      id: 4,
      name: 'Portafolio',
      description: 'Proyecto desarrollado con JavaScript y React',
      tecnologies: ['JavaScript', 'CSS', 'React'],
      image:  paginaWeBImg,
      url: 'https://github.com/m0osshu/PortafolioMoshu.git'
    },
  ];
  
  
  export default projects;