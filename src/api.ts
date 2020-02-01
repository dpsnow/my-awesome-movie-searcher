import { MOVIES_URL } from './constants';

const snakeToCamel = (str: string) => (str.includes('_') ? str.replace(/([-_]\w)/g, g => g[1].toUpperCase()) : str);

function convertInputMovie(movie: entranceMovieT): [number, {}] {
    const newMovie: any = {};
    Object.entries(movie).map(([key, val]) => (newMovie[snakeToCamel(key)] = val));
    return [movie.id, newMovie];
}

export const allMovies = (): Promise<any> =>
    fetch(MOVIES_URL)
        .then(res => res.json())
        .then(movies => {
            const convertMovie = new Map();
            movies.forEach((movie: any) => {
                const [id, value] = convertInputMovie(movie);
                convertMovie.set(id, value);
            });
            return convertMovie;
        });
