import React from 'react';
import Card from '../Card/Card';

const Cards = ({onClose, characterDataArray}) => {

  return (
    <div className="containerCards">
      {characterDataArray.map((characterData) => (
          <Card
            key={characterData.id}
            name={characterData.name}
            status={characterData.status}
            species={characterData.species}
            type={characterData.type}
            gender={characterData.gender}
            origin={characterData.origin}
            location={characterData.location}
            image={characterData.image}
            episode={characterData.episode}
            onClose= {onClose}
          />
      ))}
    </div>
  );
};

export default Cards;