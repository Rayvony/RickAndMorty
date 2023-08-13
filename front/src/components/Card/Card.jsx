import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const [isCardOpen, setIsCardOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    props.onClose(props.id); // ID cuando se cierra la tarjeta
    setIsCardOpen(false);
  };

  const handleCardClick = () => {
    // Cuando se hace clic en una tarjeta, redirigir al detalle del personaje con el ID en la URL
    navigate(`/detail/${props.id}`);
  };

  return (
    <div>
      {isCardOpen && (
        <div className="Card" onClick={handleCardClick}>
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
          <p>Type: {props.type}</p>
          <p>Gender: {props.gender}</p>
          <p>Origin: {props.origin.name}</p>
          <p>Location: {props.location.name}</p>
          <p>First appearance: episode {props.episode[0]}</p>
          <span className="material-symbols-outlined" onClick={handleCancelClick}>
            cancel
          </span>
        </div>
      )}
    </div>
  );
}
