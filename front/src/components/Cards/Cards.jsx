import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const Cards = ({ characterIds, onClose }) => {
  const [characterDataArray, setCharacterDataArray] = useState([]);

  useEffect(() => {
    const apiKey = 'henrym-rayvony';
    const apiUrl = 'https://rym2-production.up.railway.app/api/character/';
  
    const fetchCharacterDataArray = async () => {
      try {
        const charactersData = await Promise.all(
          characterIds.map(async (characterId) => {
            const response = await fetch(`${apiUrl}${characterId}?key=${apiKey}`);
            const characterData = await response.json();
            return characterData;
          })
        );
        setCharacterDataArray(charactersData);
      } catch (error) {
        console.error('Error fetching characters data:', error);
      }
    };
  
    fetchCharacterDataArray();
  }, [characterIds]);
  
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
          onClose={() => onClose(characterData.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
