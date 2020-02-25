import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import {
    MOUNT_MOVIES,
    MOUNT_USER_DATA,
    CHANGE_FAV_MOVIE_STATUS,
    SET_FAV_MOVIE_SAGA,
    CHANGE_MOVES_USER,
} from './action-types';
import { apiMovies, apiUser } from '../api';

function* loadMovies() {
    const data = yield call(apiMovies.load);
    yield put({
        type: MOUNT_MOVIES,
        payload: data,
    });
}

function* loadUserInfo() {
    const data = yield call(apiUser.load);
    yield put({
        type: MOUNT_USER_DATA,
        payload: data,
    });
}

function* changeMoviesLikes(action: any) {
    const { id, currentStatus } = action.payload;

    console.log('SAGA-changeMoviesLikes', action);
    const response = yield call(currentStatus ? apiMovies.removeLike : apiMovies.addLike, id);

    if (response.type === 'success') {
        // TODO: добавлять их в список у юзера, (плюс переделать у самой карточки проверку избранного)
        yield put({
            type: CHANGE_MOVES_USER,
            payload: id,
        });
        yield put({
            type: CHANGE_FAV_MOVIE_STATUS,
            payload: id,
        });
    } else {
        console.log('Ошибка в запросе');
    }
}

export function* rootSaga() {
    yield all([fork(loadUserInfo), fork(loadMovies)]);
    yield takeEvery(SET_FAV_MOVIE_SAGA, changeMoviesLikes);
}
