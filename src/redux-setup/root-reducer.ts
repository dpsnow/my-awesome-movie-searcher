import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH, FETCH_USER } from './action-types';
import { fetchMovies, changeFavoriteMovie, addSearchValues, fetchUser } from './handlers';

const initState: RootStoreT = {
    movies: new Map(),
    search: {
        values: {
            genre: '',
            text: '',
        },
    },
    user: {},
};

const actionHandler = new Map<string, any>([
    [FETCH_MOVIES, fetchMovies],
    [SET_FAV_MOVIE, changeFavoriteMovie],
    [ADD_SEARCH, addSearchValues],
    [FETCH_USER, fetchUser],
    ['DEFAULT', () => initState],
]);

export function rootReducer(state = initState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
