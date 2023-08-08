import React, { useState, useEffect } from 'react';

const Card = ({ characterUrl }) => {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetch(characterUrl)
      .then(response => response.json())
      .then(data => setCharacterData(data))
      .catch(error => console.error('Error fetching character data:', error));
  }, [characterUrl]);

  if (!characterData) {
    return <div>Loading...</div>;
  }

  const { name, status, species, type, gender, origin, location, image, episode } = characterData;

  return (
    <div className="Card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
      <p>First appearance: episode {episode[0]}</p>
    </div>
  );
};

export default Card;