import cx from 'classnames';
import * as React from 'react';
import {InjectedIntlProps, injectIntl} from 'react-intl';
import {connect, MapDispatchToPropsFunction, MapStateToProps} from 'react-redux';
import {RouterProps} from 'react-router';
import {withRouter} from 'react-router-dom';
import {SignInComponent, TwoFactorAuth} from '../../components';
import {API, RequestOptions} from '../../api';
import {EMAIL_REGEX, ERROR_EMPTY_PASSWORD, ERROR_INVALID_EMAIL, setDocumentTitle} from '../../helpers';
import {
    RootState,
    selectAlertState, selectShow2faActions,
    selectSignInRequire2FA,
    selectSignUpRequireVerification,
    selectUserFetching,
    selectUserLoggedIn,
    signIn,
    signInError,
    signInRequire2FA,
    show2FAActions,
    signUpRequireVerification,
    alertPush,
} from '../../modules';


interface ReduxProps {
    isLoggedIn: boolean;
    loading?: boolean;
    require2FA?: boolean;
    show2faActions?: boolean;
    requireEmailVerification?: boolean;
}

interface DispatchProps {
    signIn: typeof signIn;
    signInError: typeof signInError;
    signInRequire2FA: typeof signInRequire2FA;
    signInShow2FActions: typeof show2FAActions;
    signUpRequireVerification: typeof signUpRequireVerification;
    alertSuccess: typeof alertPush;
}

interface SignInState {
    email: string;
    emailError: string;
    emailFocused: boolean;
    password: string;
    passwordError: string;
    passwordFocused: boolean;
    otpCode: string;
    error2fa: string;
    codeFocused: boolean;
}

type Props = ReduxProps & DispatchProps & RouterProps & InjectedIntlProps;

class SignIn extends React.Component<Props, SignInState> {
    public state = {
        email: '',
        emailError: '',
        emailFocused: false,
        password: '',
        passwordError: '',
        passwordFocused: false,
        otpCode: '',
        error2fa: '',
        codeFocused: false,
    };

    public componentDidMount() {
        setDocumentTitle('Sign In');
        this.props.signInError({code: undefined, message: undefined});
        this.props.signUpRequireVerification({requireVerification: false});
    }

    public componentWillReceiveProps(props: Props) {
        if (props.isLoggedIn) {
            this.props.history.push('/wallets');
        }
        if (props.requireEmailVerification) {
            props.history.push('/email-verification', {email: this.state.email});
        }
    }

    public render() {
        const {loading, require2FA} = this.props;
        const className = cx('pg-sign-in-screen__container', {loading});
        return (
            <div className="pg-sign-in-screen">
                <div className={className}>{require2FA ? this.render2FA() : this.renderSignInForm()}</div>
            </div>
        );
    }

    private renderSignInForm = () => {
        const {loading} = this.props;
        const {email, emailError, emailFocused, password, passwordError, passwordFocused} = this.state;

        return (
            <SignInComponent
                email={email}
                emailError={emailError}
                emailFocused={emailFocused}
                emailPlaceholder={this.props.intl.formatMessage({id: 'page.header.signIn.email'})}
                password={password}
                passwordError={passwordError}
                passwordFocused={passwordFocused}
                passwordPlaceholder={this.props.intl.formatMessage({id: 'page.header.signIn.password'})}
                labelSignIn={this.props.intl.formatMessage({id: 'page.header.signIn'})}
                labelSignUp={this.props.intl.formatMessage({id: 'page.header.signUp'})}
                emailLabel={this.props.intl.formatMessage({id: 'page.header.signIn.email'})}
                passwordLabel={this.props.intl.formatMessage({id: 'page.header.signIn.password'})}
                receiveConfirmationLabel={this.props.intl.formatMessage({id: 'page.header.signIn.receiveConfirmation'})}
                forgotPasswordLabel={this.props.intl.formatMessage({id: 'page.header.signIn.forgotPassword'})}
                isLoading={loading}
                onForgotPassword={this.forgotPassword}
                onSignUp={this.handleSignUp}
                onSignIn={this.handleSignIn}
                handleChangeFocusField={this.handleFieldFocus}
                isFormValid={this.validateForm}
                refreshError={this.refreshError}
                changeEmail={this.handleChangeEmailValue}
                changePassword={this.handleChangePasswordValue}
            />
        );
    };

    private render2FA = () => {
        const {loading, show2faActions} = this.props;
        const {otpCode, error2fa, codeFocused} = this.state;
        return (
            <TwoFactorAuth
                isLoading={loading}
                show2faActions={show2faActions}
                show2faActionsMsg={this.props.intl.formatMessage({id: '2fa.action.msg'})}
                show2faActionsDisableLabel={this.props.intl.formatMessage({id: '2fa.action.btn.disable'})}
                onSubmit={this.handle2FASignIn}
                onDisable2FA={this.handleDisable2FA}
                title={this.props.intl.formatMessage({id: 'page.password2fa'})}
                label={this.props.intl.formatMessage({id: 'page.body.wallets.tabs.withdraw.content.code2fa'})}
                buttonLabel={this.props.intl.formatMessage({id: 'page.header.signIn'})}
                message={this.props.intl.formatMessage({id: 'page.password2fa.message'})}
                codeFocused={codeFocused}
                otpCode={otpCode}
                error={error2fa}
                handleOtpCodeChange={this.handleChangeOtpCode}
                handleChangeFocusField={this.handle2faFocus}
                handleClose2fa={this.handleClose}
            />
        );
    };

    private refreshError = () => {
        this.setState({
            emailError: '',
            passwordError: '',
        });
    };

    private handleChangeOtpCode = (value: string) => {
        this.setState({
            error2fa: '',
            otpCode: value,
        });
    };

    private handleSignIn = () => {
        const {email, password} = this.state;
        this.props.signIn({
            email,
            password,
        });
    };


    private handleDisable2FA = () => {
        const sessionsConfig: RequestOptions = {
            apiVersion: 'barong',
        };
        API.post(sessionsConfig)('/identity/otp/disable', {
            email: this.state.email,
            password: this.state.password,
        }).then(response => {
            this.props.alertSuccess({
                type: 'success',
                message: [response.message],
            });
            this.handleClose();
        }).catch(error => {
            this.props.alertSuccess({
                type: 'error',
                message: [error.message],
            });
        });
    };

    private handle2FASignIn = () => {
        const {email, password, otpCode} = this.state;
        if (!otpCode) {
            this.setState({
                error2fa: 'Please enter 2fa code',
            });
        } else {
            this.props.signIn({
                email,
                password,
                otp_code: otpCode,
            });
        }
    };

    private handleSignUp = () => {
        this.props.history.push('/signup');
    };

    private forgotPassword = () => {
        this.props.history.push('/forgot_password');
    };

    private handleFieldFocus = (field: string) => {
        switch (field) {
            case 'email':
                this.setState(prev => ({
                    emailFocused: !prev.emailFocused,
                }));
                break;
            case 'password':
                this.setState(prev => ({
                    passwordFocused: !prev.passwordFocused,
                }));
                break;
            default:
                break;
        }
    };

    private handle2faFocus = () => {
        this.setState(prev => ({
            codeFocused: !prev.codeFocused,
        }));
    };

    private validateForm = () => {
        const {email, password} = this.state;
        const isEmailValid = email.match(EMAIL_REGEX);

        if (!isEmailValid) {
            this.setState({
                emailError: this.props.intl.formatMessage({id: ERROR_INVALID_EMAIL}),
                passwordError: '',
            });
            return;
        }
        if (!password) {
            this.setState({
                emailError: '',
                passwordError: this.props.intl.formatMessage({id: ERROR_EMPTY_PASSWORD}),
            });
            return;
        }
    };

    private handleChangeEmailValue = (value: string) => {
        this.setState({
            email: value,
        });
    };

    private handleChangePasswordValue = (value: string) => {
        this.setState({
            password: value,
        });
    };

    private handleClose = () => {
        this.props.signInRequire2FA({require2fa: false});
        this.props.signInShow2FActions({show2faActions: false});
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    alert: selectAlertState(state),
    isLoggedIn: selectUserLoggedIn(state),
    loading: selectUserFetching(state),
    require2FA: selectSignInRequire2FA(state),
    show2faActions: selectShow2faActions(state),
    requireEmailVerification: selectSignUpRequireVerification(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    signIn: data => dispatch(signIn(data)),
    signInError: error => dispatch(signInError(error)),
    signInRequire2FA: payload => dispatch(signInRequire2FA(payload)),
    signInShow2FActions: payload => dispatch(show2FAActions(payload)),
    signUpRequireVerification: data => dispatch(signUpRequireVerification(data)),
    alertSuccess: payload => dispatch(alertPush(payload)),
});

// tslint:disable no-any
const SignInScreen = injectIntl(
    withRouter(connect(
        mapStateToProps,
        mapDispatchProps,
    )(SignIn) as any),
);
// tslint:enable no-any

export {
    SignInScreen,
};
