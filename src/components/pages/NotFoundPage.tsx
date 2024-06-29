import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-3xl font-semibold text-orange-500 mb-8">¡Ups! Página no encontrada</p>
        <p className="text-lg text-orange-300">
          Es posible que la página que está buscando se haya eliminado, haya cambiado de nombre o no esté disponible temporalmente.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
