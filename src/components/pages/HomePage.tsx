import React, { useState } from 'react';
import Footer from '../organisms/Footer';

// Datos de las imágenes para el carousel
const carouselImages = [
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png',
    subtitle: 'Subtítulo de la primera imagen.',
  },
  {
    imageUrl: 'https://cdn-icons-png.freepik.com/256/12148/12148631.png?semt=ais_hybrid',
    subtitle: 'Subtítulo de la segunda imagen.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/166/166258.png',
    subtitle: 'Subtítulo de la tercera imagen.',
  },
  {
    imageUrl: 'https://cdn-icons-png.freepik.com/256/12148/12148631.png?semt=ais_hybrid',
    subtitle: 'Subtítulo de la cuarta imagen.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/166/166258.png',
    subtitle: 'Subtítulo de la quinta imagen.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/6840/6840478.png',
    subtitle: 'Subtítulo de la sexta imagen.',
  },
];

// Datos de colecciones populares (ejemplo)
const trendingCollections = [
  {
    title: 'Nature Collection',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3646/3646293.png',
    description: 'Discover beautiful landscapes and wildlife photography.',
  },
  {
    title: 'Foodie Delights',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3646/3646295.png',
    description: 'Explore mouth-watering dishes and culinary experiences.',
  },
  {
    title: 'Travel Adventures',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3646/3646297.png',
    description: 'Travel to breathtaking destinations around the globe.',
  },
];

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 3 : prevIndex - 3));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex >= carouselImages.length - 3 ? 0 : prevIndex + 3));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        {/* Imágenes del carousel */}
        <div className="flex items-center justify-center mb-4">
          {carouselImages.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
            <div key={index} className="w-1/3 px-2">
              <div className="flex items-center justify-center mb-4">
                <img src={image.imageUrl} className="w-48 h-48 object-contain rounded-lg shadow-lg" alt={`Imagen ${currentImageIndex + index + 1}`} />
              </div>
              <p className="text-lg text-center mb-4  dark:text-white">{image.subtitle}</p>
            </div>
          ))}
        </div>
        
        {/* Controles de navegación */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
          <button onClick={goToPrevious} className="bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={goToNext} className="bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className='dark:bg-slate-900'>
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
                src="src\assets\logo_olympus.png"
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
            {carouselImages.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center flex-col mb-4">
                <img src={item.imageUrl} className="w-16 h-16 rounded-full mb-2" alt={`Imagen ${index + 1}`} />
                <p className="text-lg text-center  dark:text-white">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Segunda columna */}
          <div>
            {carouselImages.slice(3, 6).map((item, index) => (
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
          {trendingCollections.map((collection, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={collection.imageUrl} className="w-16 h-16 object-contain mx-auto mb-4" alt={`Icono ${collection.title}`} />
              <h3 className="text-lg font-semibold mb-2 ">{collection.title}</h3>
              <p className="text-sm">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default HomePage;
