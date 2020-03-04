import { USER_URL } from './constants';
import { createRequest } from './util';

export const load = () => createRequest(USER_URL);

export const apiUser = {
    load,
};
