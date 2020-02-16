import {
    MOUNT_MOVIES,
    CHANGE_FAV_MOVIE_STATUS,
    ADD_SEARCH,
    SET_FAV_MOVIE_SAGA,
    CHANGE_MOVES_USER,
} from './action-types';

// export const getAllMovies = (movies: Map<number, MovieT>) => ({ type: MOUNT_MOVIES, payload: movies });

export const toggleStatusFavorite = (id: number, currentStatus: Boolean) => ({
    type: SET_FAV_MOVIE_SAGA,
    payload: { id, currentStatus },
});

// export const changeMovieStatus = (id: number) => ({
//     type: CHANGE_FAV_MOVIE_STATUS,
//     payload: id,
// });

export const addSearch = (value: {}) => ({ type: ADD_SEARCH, payload: value });
