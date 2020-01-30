import { MOVIES_GET } from './action-types';

export const getAllMovies = (movies: MovieT[]) => ({ type: MOVIES_GET, payload: movies });
