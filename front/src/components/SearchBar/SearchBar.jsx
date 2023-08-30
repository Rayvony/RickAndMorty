import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
      setInputValue('');
    }
  };
  if(location.pathname === "/home"){
  return (
    <div>
      <input
        type="text"
        className="searchBar"
        placeholder='Ingrese un ID'
        value={inputValue}
        onChange={onChange}
        />
      <span onClick={handleAddClick} className="material-symbols-outlined botonAdd">add_circle</span>
    </div>
  );
}
}
