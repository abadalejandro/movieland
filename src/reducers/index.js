const initialState = {
  movies: [],
  moviesLoaded: [],
  movieDetail: {}
};


function rootReducer(state = initialState, action) {

  if (action.type === "GET_MOVIES") {
    const result = {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  
    return result;
  }
 
  if (action.type === "GET_MOVIE_DETAILS") {

    const result = {
      ...state,
      movieDetail: action.payload
    };

    return result;
  }

  if (action.type === "ADD_MOVIE_FAVORITE") {
    const result = {
      ...state,
      movies: state.movies.concat(action.payload)
    }
    return result;
  }

  if (action.type === "REMOVE_MOVIE_FAVORITE") {
    return {
      ...state,
      movies: state.movies.filter(movie => movie.id !== action.payload.id)
    };
  }

  return state;

}

export default rootReducer;