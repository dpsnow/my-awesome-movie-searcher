import { FETCH_MOVIES, SET_FAV_MOVIE } from './action-types';
import { fetchMovies, changeFavoriteMovie } from './handlers';

const initState: RootStoreT = { movies: new Map() };

const actionHandler = new Map<string, any>([
    [FETCH_MOVIES, fetchMovies],
    [SET_FAV_MOVIE, changeFavoriteMovie],
    ['DEFAULT', () => initState],
]);

export function rootReducer(state = initState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
