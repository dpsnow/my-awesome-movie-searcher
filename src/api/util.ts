import { TOKEN } from './constants';

const snakeToCamel = (str: string) => (str.includes('_') ? str.replace(/([-_]\w)/g, g => g[1].toUpperCase()) : str);

export function convertInputMovie(entranceMovie: entranceMovieT): [number, {}] {
    const newMovie: {} = Object.entries(entranceMovie).reduce(
        (acc, [key, val]) => ({ ...acc, [snakeToCamel(key)]: val }),
        {}
    );
    return [entranceMovie.id, newMovie];
}

export const createRequest = (url: string, method = 'GET', data = undefined) => {
    return fetch(url, {
        method,
        body: data ? JSON.stringify(data) : null,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${TOKEN}`,
        },
    }).then(response => response.json());
};
