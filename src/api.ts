import { MOVIES_URL } from './constants';

export const getAllmovies = fetch(MOVIES_URL).then(res => res.json());
