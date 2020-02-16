import { all, fork, put, call } from 'redux-saga/effects';
import { FETCH_MOVIES, FETCH_USER } from './action-types';
import { apiMovies, apiUser } from '../api';

function* loadMovies() {
    const data = yield call(apiMovies.load);
    yield put({
        type: FETCH_MOVIES,
        payload: data,
    });
}

function* loadUserInfo() {
    const data = yield call(apiUser.load);
    console.log('loadUserInfo', data);
    yield put({
        type: FETCH_USER,
        payload: data,
    });
}

export function* rootSaga() {
    yield all([fork(loadMovies), fork(loadUserInfo)]);
}
