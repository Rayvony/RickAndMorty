import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from "../../redux/actions";

function Card({id, onClose, name, status, species, type, gender, origin, location, image, episode}) {
  
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);
  
  const myFavs = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav({id, name, status, species, gender, origin, location, image, episode}));
    }
    setIsFav(!isFav);
  }
  useEffect(()=>{
    myFavs.forEach(charFav => {
        charFav.id === id && setIsFav(true)
    })
  },[myFavs])



  return (
    <div>     
        <div className="Card">
          <img src={image} alt={name} />
          <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
          </Link>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
          <p>Location: {location.name}</p>
          <p>First appearance: episode {episode[0]}</p>
          <span className="material-symbols-outlined" onClick={() => onClose(id)}>
            cancel
          </span>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>       
    </div>
  );
}

export default Card;
