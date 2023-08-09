import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const Cards = () => {
  const [characterDataArray, setCharacterDataArray] = useState([]);

  useEffect(() => {
    const apiKey = 'henrym-rayvony'; // Reemplaza con tu API key
    const apiUrl = 'https://rym2-production.up.railway.app/api/character/';

    const fetchAllCharacterData = async () => {
      try {
        const response = await fetch(apiUrl + `?key=${apiKey}`);
        const data = await response.json();
        
        // Obtener los IDs de personajes de los datos
        const characterIds = data.results.map(character => character.id);

        // Realizar solicitudes de manera paralela
        const fetchPromises = characterIds.map(async (characterId) => {
          const response = await fetch(`${apiUrl}${characterId}?key=${apiKey}`);
          const characterData = await response.json();
          return characterData;
        });

        const charactersData = await Promise.all(fetchPromises);
        setCharacterDataArray(charactersData);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchAllCharacterData();
  }, []);

  return (
    <div className="containerCards">
      {characterDataArray.map((characterData, index) => (
        <Card
          key={index}
          name={characterData.name}
          status={characterData.status}
          species={characterData.species}
          type={characterData.type}
          gender={characterData.gender}
          origin={characterData.origin}
          location={characterData.location}
          image={characterData.image}
          episode={characterData.episode}
        />
      ))}
    </div>
  );
};

export default Cards;