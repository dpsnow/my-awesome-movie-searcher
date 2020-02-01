export const fetchMovies = (state: RootStoreT, action: { payload: MoviesT }) => {
    return {
        ...state,
        movies: action.payload,
    };
};

export const changeFavoriteMovie = (state: RootStoreT, action: { payload: number }) => {
    const movies = new Map(state.movies);
    const targetMovie = movies.get(action.payload);
    if (targetMovie) {
        targetMovie.isFav = !targetMovie.isFav;
        movies.set(action.payload, targetMovie);
    }
    return { ...state, movies };
};
