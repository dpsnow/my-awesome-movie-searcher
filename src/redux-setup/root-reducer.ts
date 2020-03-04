import { MOUNT_MOVIES, CHANGE_FAV_MOVIE_STATUS, ADD_SEARCH, MOUNT_USER_DATA, CHANGE_MOVES_USER } from './action-types';
import { mountMovies, changeFavoriteMovie, addSearchValues, mountUserData, changeUsersMovies } from './handlers';

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
    [MOUNT_MOVIES, mountMovies],
    [CHANGE_FAV_MOVIE_STATUS, changeFavoriteMovie],
    [CHANGE_MOVES_USER, changeUsersMovies],
    [ADD_SEARCH, addSearchValues],
    [MOUNT_USER_DATA, mountUserData],
    [
        'DEFAULT',
        (state: RootStoreT) => {
            console.warn('reducer DEFAULT');
            return { ...state };
        },
    ],
]);

export function rootReducer(state = initState, action: Action<any>) {
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
