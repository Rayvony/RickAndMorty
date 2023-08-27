import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
      setInputValue('');
    }
  };

  return (
    <nav className="nav">
      <input
        type="text"
        className="searchBar"
        placeholder='Ingrese un ID'
        value={inputValue}
        onChange={onChange}
      />
      <span onClick={handleAddClick} className="material-symbols-outlined botonAdd">add_circle</span>
    </nav>
  );
}
