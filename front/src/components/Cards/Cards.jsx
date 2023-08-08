import React from "react";
import Card from '../Card/Card';

const Cards = () => {
    const characterUrls = [
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/1?key=henrym-rayvony',
        'https://rym2-production.up.railway.app/api/character/2?key=henrym-rayvony'
      ]
      
    return(
    <div className="containerCards"> 
      {characterUrls.map((url, index) => (
        <Card key={index} characterUrl={url} />
      ))}
    </div>
  );
}

export default Cards;