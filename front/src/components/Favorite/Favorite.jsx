import React from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav, filter, order } from "../../redux/actions";

//creo que esta pero falla {allCharacters.map((characterData) => ( en la linea 40, ni idea aura usaba connect. stefano no me pegues por favor


const Favorite = ({onClose}) => {
    const {myFavorites, allCharacters} = useSelector((state) => state.myFavorites);
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
                <select name='filter' onChange={handleFilter} defaultValue={"douuu"}>
                    <option value="douuu" disabled="disabled">Genero?</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unkown">Unkown</option>
                </select>

                <select name='order' onChange={handleOrder} defaultValue={"douuu"}>
                <option value="douuu" disabled="disabled">Orden?</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            </div>

            <div className="containerCards">
            {allCharacters.map((characterData) => (
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