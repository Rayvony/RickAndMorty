const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios");
const { response } = require("express");

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)
        const { status, name, species, origin, image, gender, episode, location } = data;
        const firstAppearance = episode[0].split("/").at(-1);

            if(data.name){
                const character = {
                    status, 
                    id:data.id,
                    name,
                    species, 
                    origin, 
                    image, 
                    gender,
                    episode:firstAppearance,
                    location,
                    
                }
                console.log(data.id)
                return res.status(200).json(character);
            }
    
            return res.status(404).send('Not found');
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }

}

module.exports = {
    getCharById
};