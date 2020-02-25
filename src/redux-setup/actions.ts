import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH } from './action-types';

export const getAllMovies = (movies: Map<number, MovieT>) => ({ type: FETCH_MOVIES, payload: movies });

export const changeStatusFavorite = (id: number) => ({ type: SET_FAV_MOVIE, payload: id });

export const addSearch = (value: {}) => ({ type: ADD_SEARCH, payload: value });
