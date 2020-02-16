import { MOVIES_URL } from './constants';
import { createRequest, convertInputMovie } from './util';

export const load = () =>
    createRequest(MOVIES_URL).then(res => {
        const movies = res.map(convertInputMovie);
        return new Map(movies);
    });

export const apiMovies = {
    load,
};
