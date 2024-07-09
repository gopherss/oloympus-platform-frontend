import React from 'react';
import SearchBar from '../molecules/SearchBar';

const SearchPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">Search Page</h1>
        <SearchBar/>
      </div>
    </div>
  );
};

export default SearchPage;
