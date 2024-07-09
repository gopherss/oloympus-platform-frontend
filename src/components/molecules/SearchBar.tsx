import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="relative w-full max-w-md">
        <input
          autoFocus
          type="text"
          className="w-full py-2 px-4 pl-10 text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:focus:ring-primary/50"
          placeholder="Search..."
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <img
            className="h-5 w-5 text-gray-400"
            src="https://www.svgrepo.com/show/476948/search.svg"
            alt="img search" />
        </div>
      </div>
    </div>

  );
};

export default SearchBar;
