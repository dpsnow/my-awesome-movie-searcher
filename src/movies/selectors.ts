import { createSelector } from 'reselect';

const getFavMovies = (state: RootStoreT) => Array.from(state.movies.values()).filter((it: any) => it.isFav);

const getDesiredMovies = (state: RootStoreT): MoviesT => {
    if (state.search === undefined) return state.movies;

    const { genre, text } = state.search.values;

    if (genre || text) {
        const movies: any = Array.from(state.movies.values())
            .filter((movie: any) => (genre === 'all' ? true : movie.genres.includes(genre)))
            .filter((movie: any) => (text === '' ? true : movie.title.includes(text)))
            .reduce((acc: any[], movie: MovieT) => acc.concat([[movie.id, movie]]), []);
        return new Map(movies);
    }

    return state.movies;
};

export const selectFavMovies = createSelector(getFavMovies, list => list);
export const selectDesiredMovies = createSelector(getDesiredMovies, list => list);
