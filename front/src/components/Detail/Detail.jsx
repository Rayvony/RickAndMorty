import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-rayvony`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert("No existe un personaje que tenga ese ID");
                }
            })
            .catch(error => {
                console.error("Error fetching character data:", error);
            });

        return () => {
            setCharacter({});
        }
    }, [id]);

    return (
        <div>
            {character.name && (
                <div className="Detail">
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                    <p>First appearance: episode {character.episode[0]}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;