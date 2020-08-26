import { Action } from 'redux';

import { ActionWith } from 'lib/interfaces';

function getAction(type: string): Action;
function getAction<T>(type: string, payload: T): ActionWith<T>;
function getAction<T = any>(type: string, payload?: T): Action | ActionWith<T> {
    if (payload) {
        const result: ActionWith<any> = {
            type,
            payload,
        };
        return result;
    } else {
        return {
            type,
        } as Action;
    }
}

export const ReduxUtil = {
    getType: (prefix: string, id: string): string => {
        return `${prefix}/${id}`;
    },
    getAction,
};
