import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { aux } from "../src/redux/actions";
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Cards from "./components/Cards/Cards";
import Detail from './components/Detail/Detail';
import Favorite from './components/Favorite/Favorite';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
  const [searchedCharacterIds, setSearchedCharacterIds] = useState([]);
  const [characterDataArray, setCharacterDataArray] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aux());
  }, []);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
  
        if(data.name && !characterDataArray.some(char => char.id === parseInt(id))){
          setCharacterDataArray(prevChars => [...prevChars, data])
        };
      
    } catch (error) {
       alert("No hay personajes con ese ID")  
    }

  }
  
  const onClose = (characterId) => {
    setSearchedCharacterIds((prevIds) => prevIds.filter(id => id !== characterId));
    setCharacterDataArray((prevIds) => prevIds.filter(character => character.id !== characterId));
  };

  const handleLogin = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(access);
      access && navigate('/home');

      
    } catch (error) {
      console.log(error.message)
    }
 }


  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
      <Route path="/" element={<Form login={handleLogin} />} /> 
      <Route path="/home" element={<Cards onClose={onClose} characterDataArray={characterDataArray}/>}/>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>

  );
}

export default App;
