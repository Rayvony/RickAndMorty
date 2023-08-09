import React, { useState } from 'react';
import Cards from "./components/Cards/Cards";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchedCharacterIds, setSearchedCharacterIds] = useState([]);

  const handleSearch = (characterId) => {
    if (!characterId) {
      alert('Por favor, ingresa un ID válido.');
    } else if (parseInt(characterId) > 826) {
      alert('Por favor, ingresa un ID válido.');
    } else {
      setSearchedCharacterIds((prevIds) => [...prevIds, characterId]);
    }
  };

  const handleClose = (characterId) => {
    setSearchedCharacterIds((prevIds) => prevIds.filter(id => id !== characterId));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Cards characterIds={searchedCharacterIds} onClose={handleClose} />
    </div>
  );
}

export default App;
