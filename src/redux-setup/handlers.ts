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

export const addSearchValues = (state: RootStoreT, action: { payload: { genre: string; text: string } }) => {
    const allSearch = new Set(state.search.last || []);

    allSearch.add(action.payload.text);

    if (allSearch.size >= 6) {
        const vals: any = Array.from(allSearch.values());
        allSearch.delete(vals[0]);
    }

    return {
        ...state,
        search: {
            values: { genre: action.payload.genre, text: action.payload.text },
            last: Array.from(allSearch.values()),
        },
    };
};
