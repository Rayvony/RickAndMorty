import { ADD_FAV, REMOVE_FAV, ORDER, FILTER} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: [],

  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],

        };
      case REMOVE_FAV:
        return {
          ...state,
          myFavorites: state.myFavorites.filter(character => character.id !== action.payload),
          allCharacters: state.allCharacters.filter(character => character.id !== action.payload),
        };
      case FILTER:
        return{
          ...state,
          allCharacters: state.myFavorites.filter(character => character.gender == action.payload),
        }
      case ORDER:
        if(action.payload == "A"){
          return{
            ...state,
            allCharacters: state.allCharacters.sort((a, b ) => a.id - b.id),
          }  
        }else if(action.payload == "D"){
          return{
            ...state,
            allCharacters: state.allCharacters.sort((a, b ) => b.id - a.id),
          }
        }
      default:
        return {...state};
    }
  };
  
  export default reducer;
  
