import React, {useState} from 'react';
import Cards from "./components/Cards/Cards";
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route} from 'react-router-dom';
import axios from "axios";

function App() {
  const [searchedCharacterIds, setSearchedCharacterIds] = useState([]);
  const [characterDataArray, setCharacterDataArray] = useState([]);

  const onSearch = (id) =>{

    if(!id) return alert('Ingresa un Id numérico')
    if(characterDataArray.some(char => char.id === parseInt(id))){
      alert(`Ya existe el personaje con el id ${id}`)
      return
    }

    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-rayvony`)
    .then(({data}) => {
      if(data.name){
        setCharacterDataArray(prevChars => [...prevChars, data])
      }
    })
    .catch(err => alert(err.response.data.error))
  }
  
  const onClose = (characterId) => {
    setSearchedCharacterIds((prevIds) => prevIds.filter(id => id !== characterId));
    setCharacterDataArray((prevIds) => prevIds.filter(character => character.id !== characterId));
  };

  const handleLogin = (userData) => {
    // Aquí lógica de inicio de sesión, validar los datos
    console.log('Intento de inicio de sesión:', userData);
    // redirigir a otra página después del inicio de sesión exitoso
    navigate('/cards');
  };


  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
      <Route path="/form" element={<Form login={handleLogin} />} /> 
      <Route path="/" element={<Cards onClose={onClose} characterDataArray={characterDataArray}/>}/>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>

  );
}

export default App;
