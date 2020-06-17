import { combineReducers } from 'redux';
// tslint:disable-next-line no-submodule-imports
import { all, call } from 'redux-saga/effects';
import { OrderIEOState, PublicIEOState, rootIEOOrderSaga, rootPublicIEOSaga } from '../plugins/ieo/modules';
import { publicReducer, userReducer } from './app';
import { AlertState, rootHandleAlertSaga } from './public/alert';
import { ColorThemeState } from './public/colorTheme';
import { CurrenciesState, rootCurrenciesSaga } from './public/currencies';
import { GridLayoutState } from './public/gridLayout';
import { LanguageState } from './public/i18n';
import { KlineState, rootKlineFetchSaga } from './public/kline';
import { MarketsState, rootMarketsSaga } from './public/markets';
import { DepthState, OrderBookState, rootOrderBookSaga } from './public/orderBook';
import { RangerState } from './public/ranger/reducer';
import { RecentTradesState, rootRecentTradesSaga } from './public/recentTrades';
import { ApiKeysState } from './user/apiKeys';
import { rootApiKeysSaga } from './user/apiKeys/sagas';
import { AuthState, rootAuthSaga } from './user/auth';
import { BeneficiariesState, rootBeneficiariesSaga } from './user/beneficiaries';
import { GeetestCaptchaState, rootGeetestCaptchaSaga } from './user/captcha';
import { EmailVerificationState, rootEmailVerificationSaga } from './user/emailVerification';
import { GuardState, rootGuardSaga } from './user/guard';
import { HistoryState, rootHistorySaga } from './user/history';
import { DocumentsState, rootSendDocumentsSaga } from './user/kyc/documents';
import { IdentityState, rootSendIdentitySaga } from './user/kyc/identity';
import { LabelState, rootLabelSaga } from './user/kyc/label';
import { PhoneState, rootSendCodeSaga } from './user/kyc/phone';
import { NewHistoryState, rootNewHistorySaga } from './user/newHistory';
import { OpenOrdersState, rootOpenOrdersSaga } from './user/openOrders';
import { OrdersState, rootOrdersSaga } from './user/orders';
import { OrdersHistoryState, rootOrdersHistorySaga } from './user/ordersHistory';
import { PasswordState, rootPasswordSaga } from './user/password';
import { ProfileState, rootProfileSaga } from './user/profile';
import { rootUserActivitySaga, UserActivityState } from './user/userActivity';
import { rootWalletsSaga, WalletsState } from './user/wallets';
import { rootWithdrawLimitSaga, WithdrawLimitState } from './user/withdrawLimit';

import { CreaditCardState, rootCreditCardSaga } from '../custom/modules/buyWithCreditCard';
import { ReferralCommissionState, rootReferralCommissionSaga } from '../custom/modules/referralCommission';
import { ReferralOverallState, rootReferralTicketsSaga } from '../custom/modules/referralTickets';

// import { FeesState, rootFeesSaga } from '../custom/modules/fees';

import {
    customUserReducer,
    DataStorageState,
    KycAuthState,
    rootDataStorageSaga,
    rootKycAuthSaga,
} from '../custom/modules';

export * from '../custom/modules';
export * from './public/markets';
export * from './public/orderBook';
export * from './public/colorTheme';
export * from './public/currencies';
export * from './public/i18n';
export * from './public/kline';
export * from './public/alert';
export * from './user/apiKeys';
export * from './user/auth';
export * from './user/beneficiaries';
export * from './user/captcha';
export * from './user/wallets';
export * from './user/profile';
export * from './user/openOrders';
export * from './user/orders';
export * from './user/ordersHistory';
export * from './user/password';
export * from './user/userActivity';
export * from './user/history';
export * from './user/newHistory';
export * from './user/kyc';
export * from './user/emailVerification';
export * from './user/withdrawLimit';
export * from './user/guard';
export * from '../custom/modules/referralTickets';
export * from '../custom/modules/referralCommission';
export * from '../custom/modules/fees';
export * from '../custom/modules/buyWithCreditCard';

export interface RootState {
    public: {
        colorTheme: ColorThemeState;
        currencies: CurrenciesState;
        recentTrades: RecentTradesState;
        markets: MarketsState;
        orderBook: OrderBookState;
        depth: DepthState;
        ranger: RangerState;
        i18n: LanguageState;
        alerts: AlertState;
        kline: KlineState;
        rgl: GridLayoutState;
        ieo: PublicIEOState,
    };
    user: {
        auth: AuthState;
        beneficiaries: BeneficiariesState;
        orders: OrdersState;
        password: PasswordState;
        profile: ProfileState;
        label: LabelState;
        wallets: WalletsState;
        documents: DocumentsState;
        identity: IdentityState;
        phone: PhoneState;
        history: HistoryState;
        newHistory: NewHistoryState;
        apiKeys: ApiKeysState;
        userActivity: UserActivityState;
        ordersHistory: OrdersHistoryState;
        openOrders: OpenOrdersState;
        sendEmailVerification: EmailVerificationState;
        captchaKeys: GeetestCaptchaState;
        withdrawLimit: WithdrawLimitState;
        guard: GuardState;
        referralTickets: ReferralOverallState;
        referralCommission: ReferralCommissionState;
        buyWithCreditCard: CreaditCardState;
        ieo: OrderIEOState,
    };
    customUser: {
        dataStorage: DataStorageState;
        kycAuth: KycAuthState;
    };
}

export const rootReducer = combineReducers({
    public: publicReducer,
    user: userReducer,
    customUser: customUserReducer,
});

export function* rootSaga() {
    yield all([
        call(rootAuthSaga),
        call(rootBeneficiariesSaga),
        call(rootCurrenciesSaga),
        call(rootMarketsSaga),
        call(rootOrdersSaga),
        call(rootProfileSaga),
        call(rootWalletsSaga),
        call(rootPasswordSaga),
        call(rootSendCodeSaga),
        call(rootSendIdentitySaga),
        call(rootSendDocumentsSaga),
        call(rootRecentTradesSaga),
        call(rootOrderBookSaga),
        call(rootHandleAlertSaga),
        call(rootHistorySaga),
        call(rootNewHistorySaga),
        call(rootUserActivitySaga),
        call(rootApiKeysSaga),
        call(rootLabelSaga),
        call(rootOrdersHistorySaga),
        call(rootOpenOrdersSaga),
        call(rootEmailVerificationSaga),
        call(rootKlineFetchSaga),
        call(rootWithdrawLimitSaga),
        call(rootGuardSaga),
        call(rootReferralTicketsSaga),
        call(rootReferralCommissionSaga),
        call(rootCreditCardSaga),
        // call(rootFeesSaga),
        call(rootDataStorageSaga),
        call(rootKycAuthSaga),
        call(rootIEOOrderSaga),
        call(rootPublicIEOSaga),
        call(rootGeetestCaptchaSaga),
    ]);
}
