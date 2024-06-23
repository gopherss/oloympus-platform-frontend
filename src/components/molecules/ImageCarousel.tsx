import React, { useState } from 'react';
import { CAROUSELIMAGES } from '../../types';

const ImageCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? CAROUSELIMAGES.length - 3 : prevIndex - 3));
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex >= CAROUSELIMAGES.length - 3 ? 0 : prevIndex + 3));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="relative">
                {/* Imágenes del carousel */}
                <div className="flex items-center justify-center mb-4">
                    {CAROUSELIMAGES.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
                        <div key={index} className="w-1/3 px-2">
                            <div className="flex items-center justify-center mb-4">
                                <img src={image.imageUrl} className="w-48 h-48 object-contain rounded-lg shadow-lg" alt={`Imagen ${currentImageIndex + index + 1}`} />
                            </div>
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
export default ImageCarousel;