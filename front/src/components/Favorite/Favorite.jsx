import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav, filter, order } from "../../redux/actions";

const Favorite = ({ onClose }) => {
    const myFavs = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handleFilter = (evento) => {
        dispatch(filter(evento.target.value))
    }

    const handleOrder = (evento) => {
        dispatch(order(evento.target.value))
    }

    return (
        <div>
            <div>
                <select name='filter' onChange={handleFilter} defaultValue={"Todos"}>
                    <option value="Todos" >Genero?</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unkown">Unkown</option>
                </select>

                <select name='order' onChange={handleOrder} defaultValue={"A"}>
                <option value="douuu" disabled="disabled">Orden?</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>

            <div className="containerCards">
            {myFavs.map((characterData) => (
                <Card
                id={characterData.id}
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
        </div>
      );
    
}

export default Favorite;