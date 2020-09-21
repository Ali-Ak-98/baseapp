import {CommonError} from '../../types';
import {AuthAction} from './actions';
import {
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGOUT_FETCH,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_IN_REQUIRE_2FA,
    AUTH_SIGN_IN_SHOW_2FA_ACTIONS,
    AUTH_SIGN_UP_ERROR,
    AUTH_SIGN_UP_REQUIRE_VERIFICATION,
    AUTH_VERIFICATION_FETCH,
    AUTH_VERIFICATION_SUCCESS,
} from './constants';

export interface AuthState {
    require2FA?: boolean;
    show2FAActions?: boolean;
    requireVerification?: boolean;
    emailVerified?: boolean;
    logoutError?: CommonError;
    authError?: CommonError;
    signUpError?: CommonError;
}

export const initialStateAuth: AuthState = {
    require2FA: false,
    show2FAActions: false,
    requireVerification: false,
    emailVerified: false,
};

export const authReducer = (state = initialStateAuth, action: AuthAction) => {
    switch (action.type) {
        case AUTH_SIGN_IN_REQUIRE_2FA:
            return {
                ...state,
                require2FA: action.payload.require2fa,
            };
        case AUTH_SIGN_IN_SHOW_2FA_ACTIONS:
            return {
                ...state,
                show2FAActions: action.payload.show2faActions,
            };
        case AUTH_SIGN_UP_REQUIRE_VERIFICATION:
            return {
                ...state,
                requireVerification: action.payload.requireVerification,
            };
        case AUTH_VERIFICATION_FETCH:
            return { ...state, emailVerified: false };
        case AUTH_VERIFICATION_SUCCESS:
            return { ...state, emailVerified: true };
        case AUTH_SIGN_IN_ERROR:
            return { ...state, authError: action.payload };
        case AUTH_SIGN_UP_ERROR:
            return { ...state, signUpError: action.payload };
        case AUTH_LOGOUT_FETCH:
            return { ...state };
        case AUTH_LOGOUT_FAILURE:
            return { ...state, logoutError: action.payload };
        default:
            return state;
    }
};
