const API_KEY = '20dac387';

export function getMovies(titulo) {
    return function (dispatch) {

        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
            .then(response => response.json())
            .then(json => {                
                dispatch({
                    type: "GET_MOVIES",
                    payload: json
                });
            });
    };
}

export function getMovieDetail(idMovie) {
    return function (dispatch) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${idMovie}`;
             
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_MOVIE_DETAILS",
                    payload: json
                });
                // console.log(`movieDetail: `,json );
                
            });
    };
}


export function addMovieFavorite(payload) {
    return (dispatch) => {
        return dispatch({
            type: "ADD_MOVIE_FAVORITE",
            payload: payload
        });
    }
}


export function removeMovieFavorite(payload) {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_MOVIE_FAVORITE",
            payload: payload
        });
    }
}

