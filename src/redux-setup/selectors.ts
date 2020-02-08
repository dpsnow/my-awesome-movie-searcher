import { createSelector } from 'reselect';

const getGenres = (state: any) => {
    const moviess = Array.from(state.movies.values()).map((it: any) => it.genres);
    const genress = new Set(moviess.flat());
    return Array.from(genress.values());
};

export const selectGenres = createSelector(getGenres, list => list);
