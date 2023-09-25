import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, AUX } from "./actionTypes"

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint, character);
        
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      } catch (error) {
        console.log(error.message)
        throw new Error("No Hay favoritos");
      }

    };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(endpoint);

        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      } catch (error) {
        console.log(error.message)
        throw new Error("No Hay favoritos");
      }


    };
};

export const filter = (gender) => {
  return {
      type: FILTER,
      payload:gender
  }
}

export const order = (payload) => ({
  type:ORDER,
  payload
})

export const aux = () => async (dispatch) => {
  const endpoint = 'http://localhost:3001/rickandmorty/aux';
  try {
    const response = await axios.get(endpoint);
    const data = response.data;

    dispatch({
      type: AUX,
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching aux data:', error);
  }
};

  