<<<<<<< HEAD
import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH } from './action-types';
import { mountMovies, changeFavoriteMovie, addSearchValues } from './handlers';
=======
import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH, FETCH_USER } from './action-types';
import { fetchMovies, changeFavoriteMovie, addSearchValues, fetchUser } from './handlers';
>>>>>>> added request for user information

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
    [FETCH_MOVIES, mountMovies],
    [SET_FAV_MOVIE, changeFavoriteMovie],
    [ADD_SEARCH, addSearchValues],
<<<<<<< HEAD
    [
        'DEFAULT',
        (state: RootStoreT) => {
            console.log('reducer DEFAULT');
            return { ...state };
            // return initState;
        },
    ],
=======
    [FETCH_USER, fetchUser],
    ['DEFAULT', () => initState],
>>>>>>> added request for user information
]);

export function rootReducer(state = initState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
