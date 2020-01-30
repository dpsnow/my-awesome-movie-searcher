import { MOVIES_GET } from './action-types';

const initState: RootStoreT = { movies: [] };

const actionHandler = new Map<string, any>([
    [
        MOVIES_GET,
        (state: RootStoreT, action: { payload: MovieT[] }) => {
            return {
                ...state,
                movies: action.payload,
            };
        },
    ],
    ['DEFAULT', () => initState],
]);

export function rootReducer(state = initState, action: Action<any>) {
    const wtf = actionHandler.has(action.type) ? actionHandler.get(action.type) : actionHandler.get('DEFAULT');
    return wtf(state, action);
}
