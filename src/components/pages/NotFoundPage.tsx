import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <p className="text-3xl font-semibold text-red-800 mb-8">Oops! Page not found</p>
        <p className="text-lg text-red-700">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
