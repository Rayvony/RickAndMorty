import React from 'react';

export default function Card(props){
  return (
    <div className="Card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Type: {props.type}</p>
      <p>Gender: {props.gender}</p>
      <p>Origin: {props.origin.name}</p>
      <p>Location: {props.location.name}</p>
      <p>First appearance: episode {props.episode[0]}</p>
    </div>
  );
}
