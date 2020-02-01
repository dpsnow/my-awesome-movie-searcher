import { FETCH_MOVIES, SET_FAV_MOVIE } from './action-types';

export const getAllMovies = (movies: Map<number, MovieT>) => ({ type: FETCH_MOVIES, payload: movies });

export const changeStatusFavorite = (id: number) => ({ type: SET_FAV_MOVIE, payload: id });
