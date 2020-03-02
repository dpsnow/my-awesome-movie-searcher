import { ADD_SEARCH, SET_FAV_MOVIE_SAGA } from './action-types';

export const toggleStatusFavorite = (id: number, currentStatus: Boolean) => ({
    type: SET_FAV_MOVIE_SAGA,
    payload: { id, currentStatus },
});

export const addSearch = (value: {}) => ({ type: ADD_SEARCH, payload: value });
