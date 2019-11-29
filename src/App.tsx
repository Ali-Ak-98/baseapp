import { History } from 'history';
import * as React from 'react';
// import CookieConsent from 'react-cookie-consent';
import { IntlProvider } from 'react-intl';
import { connect, MapStateToProps } from 'react-redux';
import { Router } from 'react-router';
import { Alerts, ErrorWrapper, Footer, Sidebar } from './containers';
import { Header } from './custom/containers';
import { RootState } from './modules';
import { Layout } from './routes';

import { googleTranslateElementInit, initLanguageChangeEvent } from './helpers/googleTranslate';

interface Locale {
    lang: string;
    messages: object;
}

interface AppProps {
    history: History;
}

interface ReduxProps {
    locale: Locale;
}

type Props = AppProps & ReduxProps;

class AppLayout extends React.Component<Props, {}, {}> {

    public googleTranslateUnsubscribe?: () => void;

    public componentWillReceiveProps(nextProps: Props) {
        const prevLang = this.props.locale.lang;
        const nextLang = nextProps.locale.lang;

        if (prevLang !== nextLang) {
            setTimeout(() => {
                googleTranslateElementInit(nextLang);
            }, 0);
        }
    }

    public componentDidMount() {
        /**
         * At the time `componentDidMount` is called, the google translate
         * object may not be initialized yet because scripts haven't loaded yet.
         * We can't use the default callback 'cause we can't just pass
         * `componentDidMount` of whatever function as a callback.
         *
         * So in the google translate callback we fire an event
         * `google-translate-loaded` (see public/index.html) and
         * also set a global flag `googleTranslateLoaded`, so we can track
         * the state of google scripts in our components.
         */
        if ('googleTranslateLoaded' in window) {
            this.initGoogleTranslate();
            this.initLangChange();
        } else {
            window.addEventListener('google-translate-loaded', () => {
                this.initGoogleTranslate();
                this.initLangChange();
            });
        }
    }

    public initLangChange = () => {
        const unsubscribe = initLanguageChangeEvent();
        this.googleTranslateUnsubscribe = unsubscribe;
    };

    public initGoogleTranslate = () => {
        const { locale } = this.props;
        googleTranslateElementInit(locale.lang);
    };

    public componentWillUnmount() {
        this.googleTranslateUnsubscribe && this.googleTranslateUnsubscribe();
    }

    public render() {
        const {
            locale,
            history,
        } = this.props;
        const { lang, messages } = locale;

        return (
            <IntlProvider locale={lang} messages={messages} key={lang}>
                <Router history={history}>
                    <ErrorWrapper>
                        <Header/>
                        <Sidebar/>
                        <Alerts/>
                        <Layout/>
                        <Footer/>
                    </ErrorWrapper>
                </Router>
            </IntlProvider>
        );
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        locale: state.public.i18n,
    });

// tslint:disable-next-line:no-any
const App = connect(mapStateToProps, null)(AppLayout) as any;

export {
    AppProps,
    App,
};
