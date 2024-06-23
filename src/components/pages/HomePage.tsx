import React from 'react';
import Footer from '../organisms/Footer';
import logo from '../../assets/logo_olympus.png';
import ImageCarousel from '../molecules/ImageCarousel';
import { CAROUSELIMAGES, TRENDINGCOLLECTIONS } from '../../types';


const HomePage: React.FC = () => {
  return (
    <div className='dark:bg-stone-800'>
      <div className="container mx-auto p-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4  dark:text-white">Hi there, I'm Ixartz 👋</h1>
            <p className="text-lg mb-4   dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-blue-400">
                <img src="https://www.svgrepo.com/show/489937/twitter.svg" className='h-8' alt="log Twitter" />
                Twitter
              </a>
              <a href="https://facebook.com" className="text-blue-600">
                <img src="https://www.svgrepo.com/show/489934/facebook.svg" className='h-8' alt="log Facebook" />
                Facebook
              </a>
              <a href="https://google.com" className="text-red-500">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className='h-8' alt="log Google" />
                Google
              </a>
              <a href="https://microsoft.com" className="text-blue-500">
                <img src="https://www.svgrepo.com/show/448239/microsoft.svg" className='h-8' alt="log Microsoft" />
                Microsoft
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center h-auto ">
            <div className="relative">
              <img
                src={logo}
                alt="Imagen animada"
                className="w-48 h-48 object-contain animate-float"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Nueva sección con dos columnas y 6 filas */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Primera columna */}
          <div>
            {CAROUSELIMAGES.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center flex-col mb-4">
                <img src={item.imageUrl} className="w-16 h-16 rounded-full mb-2" alt={`Imagen ${index + 1}`} />
                <p className="text-lg text-center  dark:text-white">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Segunda columna */}
          <div>
            {CAROUSELIMAGES.slice(3, 6).map((item, index) => (
              <div key={index} className="flex items-center flex-col mb-4">
                <img src={item.imageUrl} className="w-16 h-16 rounded-full mb-2" alt={`Imagen ${index + 4}`} />
                <p className="text-lg text-center  dark:text-white">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección del Carrousel de Imágenes */}
      <ImageCarousel />


      {/* Sección de Colecciones Populares */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4  dark:text-white">Trending Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRENDINGCOLLECTIONS.map((collection, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={collection.imageUrl} className="w-16 h-16 object-contain mx-auto mb-4" alt={`Icono ${collection.title}`} />
              <h3 className="text-lg font-semibold mb-2 ">{collection.title}</h3>
              <p className="text-sm">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
