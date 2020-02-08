import { createSelector } from 'reselect';

const getGenres = (state: RootStoreT): Set<string> => {
    const movies = Array.from(state.movies.values()).map((it: any) => it.genres);
    const genres = new Set(movies.flat());
    return genres;
};

export const selectGenres = createSelector(getGenres, list => list);
