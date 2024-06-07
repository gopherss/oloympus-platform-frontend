import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id justo eget enim semper tincidunt.</p>
      </div>
    </div>
  );
};

export default AboutPage;
