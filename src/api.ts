import { MOVIES_URL } from './constants';

export const allMovies = (): Promise<any> => fetch(MOVIES_URL).then(res => res.json());
