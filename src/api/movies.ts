import { MOVIES_URL, MOVIE_URL } from './constants';
import { createRequest, convertInputMovie } from './util';

const load = () =>
    createRequest(MOVIES_URL).then(res => {
        const movies = res.map(convertInputMovie);
        return new Map(movies);
    });

const addLike = (id: number) =>
    createRequest(`${MOVIE_URL}${id}/like`, 'POST').then((res: { type: string }) => {
        // console.log(res);

        if (res.type === 'success') {
            return res;
        } else {
            throw Error('err');
        }
    });

const removeLike = (id: number) =>
    createRequest(`${MOVIE_URL}${id}/like`, 'DELETE').then((res: { type: string }) => {
        // console.log(res);

        if (res.type === 'success') {
            return res;
        } else {
            throw Error('err');
        }
    });

export const apiMovies = {
    load,
    addLike,
    removeLike,
};
