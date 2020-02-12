import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import { fetchMovies } from '../api';
import { FETCH_MOVIES } from './action-types';

function* appFetchSaga() {
    const data = yield call(fetchMovies);
    yield put({
        type: FETCH_MOVIES,
        payload: data,
    });
}

export function* rootSaga() {
    yield all([fork(appFetchSaga)]);
}
