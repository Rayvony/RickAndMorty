import React, {useState} from 'react';
import Cards from "./components/Cards/Cards";
import SearchBar from './components/SearchBar/SearchBar';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import { Routes, Route} from 'react-router-dom';

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

  const handleLogin = (userData) => {
    // Aquí lógica de inicio de sesión, validar los datos
    console.log('Intento de inicio de sesión:', userData);
    // redirigir a otra página después del inicio de sesión exitoso
    navigate('/cards');
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Routes>
      <Route path="/form" element={<Form login={handleLogin} />} /> 
      <Route path="/" element={<Cards characterIds={searchedCharacterIds} onClose={handleClose} />}/>
      <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>

  );
}

export default App;
