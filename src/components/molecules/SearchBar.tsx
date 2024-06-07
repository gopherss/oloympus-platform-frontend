import React, { useState } from 'react';
import Button from '../atoms/Button';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  initialValue?: string; // Parametro opcional para el valor inicial del input
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} value={inputValue} onChange={handleChange} />
      <Button label="Search" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
