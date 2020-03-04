import { MOVIES_URL, MOVIE_URL } from './constants';
import { createRequest, convertInputMovie } from './util';

const load = () =>
    createRequest(MOVIES_URL).then(res => {
        const movies = res.map(convertInputMovie);
        return new Map(movies);
    });

const addLike = (id: number) => createRequest(`${MOVIE_URL}${id}/like`, 'POST');

const removeLike = (id: number) => createRequest(`${MOVIE_URL}${id}/like`, 'DELETE');

export const apiMovies = {
    load,
    addLike,
    removeLike,
};
