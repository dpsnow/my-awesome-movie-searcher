import { MOVIES_URL } from './constants';
import { convertInputMovie } from './util';

export const fetchMovies = (): Promise<Map<number, MovieT>> =>
    fetch(MOVIES_URL)
        .then(res => res.json())
        .then(res => {
            const movies = res.map(convertInputMovie);
            return new Map(movies);
        });
