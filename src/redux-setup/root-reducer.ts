<<<<<<< HEAD
<<<<<<< HEAD
import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH } from './action-types';
import { mountMovies, changeFavoriteMovie, addSearchValues } from './handlers';
=======
import { FETCH_MOVIES, SET_FAV_MOVIE, ADD_SEARCH, FETCH_USER } from './action-types';
import { fetchMovies, changeFavoriteMovie, addSearchValues, fetchUser } from './handlers';
>>>>>>> added request for user information
=======
import {
    MOUNT_MOVIES,
    CHANGE_FAV_MOVIE_STATUS,
    ADD_SEARCH,
    MOUNT_USER_DATA,
    SET_FAV_MOVIE_SAGA,
    CHANGE_MOVES_USER,
} from './action-types';
import { mountMovies, changeFavoriteMovie, addSearchValues, mountUserData, changeUsersMovies } from './handlers';
>>>>>>> WIP: added action to change favorite movies

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
<<<<<<< HEAD
    [FETCH_MOVIES, mountMovies],
    [SET_FAV_MOVIE, changeFavoriteMovie],
    [ADD_SEARCH, addSearchValues],
<<<<<<< HEAD
=======
    [MOUNT_MOVIES, mountMovies],
    [CHANGE_FAV_MOVIE_STATUS, changeFavoriteMovie],
    [CHANGE_MOVES_USER, changeUsersMovies],
    [ADD_SEARCH, addSearchValues],
    [MOUNT_USER_DATA, mountUserData],
>>>>>>> WIP: added action to change favorite movies
    [
        'DEFAULT',
        (state: RootStoreT) => {
            console.log('reducer DEFAULT');
            return { ...state };
            // return initState;
        },
    ],
<<<<<<< HEAD
=======
    [FETCH_USER, fetchUser],
    ['DEFAULT', () => initState],
>>>>>>> added request for user information
=======
>>>>>>> WIP: added action to change favorite movies
]);

export function rootReducer(state = initState, action: Action<any>) {
    console.log('rootReducer: action', action.type);
    const reducer = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return reducer(state, action);
}
