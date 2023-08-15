import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'; // Importa connect
import { addFav, removeFav } from "../../redux/actions";; // Importa tus acciones

function Card(props) {
  const [isCardOpen, setIsCardOpen] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const handleCancelClick = () => {
    props.onClose(props.id); // ID cuando se cierra la tarjeta
    setIsCardOpen(false);
  };

  const handleFavorite = () => {
    if (isFav) {
      props.removeFavorite(props.id); // Usa la función removeFav que recibiste por props
    } else {
      props.addFavorite(props); // Usa la función addFav que recibiste por props
    }
    setIsFav(!isFav); // Cambia el estado isFav
  };

  return (
    <div>
      {isCardOpen && (
        <div className="Card">
          <img src={props.image} alt={props.name} />
          <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          </Link>
          <p>ID: {props.id}</p>
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
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
          )}
    </div>
  );
}

// Función para mapear dispatch a props
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFav(character)),
    removeFavorite: (id) => dispatch(removeFav(id)),
  };
};

// Conecta el componente con Redux
export default connect(null, mapDispatchToProps)(Card);
