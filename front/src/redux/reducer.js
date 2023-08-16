const initialState = {
    myFavorites: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload.id],
        };
      case "REMOVE_FAV":
        return {
          ...state,
          myFavorites: state.myFavorites.filter(id => id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
