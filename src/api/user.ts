import { USER_URL } from './constants';
import { createRequest } from './util';

export const load = () =>
    createRequest(USER_URL).then(res => {
        console.log('USER_URL', res);
        return res;
    });

export const apiUser = {
    load,
};
