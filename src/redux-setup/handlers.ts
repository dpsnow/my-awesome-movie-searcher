export const mountMovies = (state: RootStoreT, action: { payload: MoviesT }) => {
    return {
        ...state,
        movies: action.payload,
    };
};

export const changeFavoriteMovie = (state: RootStoreT, action: { payload: number }) => {
    const movies = new Map(state.movies);
    const targetMovie = movies.get(action.payload);

    // переделать, криво меняется пропс
    if (targetMovie) {
        targetMovie.isFavorite = !targetMovie.isFavorite;
        movies.set(action.payload, targetMovie);
    }

    return { ...state, movies };
};

export const changeUsersMovies = (state: RootStoreT, action: { payload: number }) => {
    const idMovie: any = action.payload;
    const user = state.user;
    const indexMovie = user.likes && user.likes.indexOf(idMovie);

    if (indexMovie !== -1) {
        user.likes.splice(indexMovie, 1);
    } else {
        user.likes.push(idMovie);
    }

    return { ...state, user };
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

export const mountUserData = (state: RootStoreT, action: { payload: {} }) => {
    return {
        ...state,
        user: action.payload,
    };
};
