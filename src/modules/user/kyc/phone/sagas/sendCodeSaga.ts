// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../../api';
import { alertPush } from '../../../../public/alert';
import { sendCodeData, sendCodeError, SendCodeFetch } from '../actions';

const sessionsConfig: RequestOptions = {
    apiVersion: 'barong',
};

export function* sendCodeSaga(action: SendCodeFetch) {
    try {
        yield call(API.post(sessionsConfig), '/resource/phones', action.payload);
        yield put(sendCodeData());
        yield put(alertPush({message: ['success.phone.verification.send'], type: 'success'}));
    } catch (error) {
        if (error.code === 400 && error.message[0] === 'resource.phone.number_exist') {
            try {
                yield call(API.post(sessionsConfig), '/resource/phones/send_code', action.payload);
                yield put(sendCodeData());
                yield put(alertPush({message: ['success.phone.verification.send'], type: 'success'}));
            } catch (err) {
                yield put(sendCodeError(error));
                yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
            }
        } else {
            yield put(sendCodeError(error));
            yield put(alertPush({message: error.message, code: error.code, type: 'error'}));
        }

    }
}
