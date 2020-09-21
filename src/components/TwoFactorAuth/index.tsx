import {Button} from '@openware/components';
import cr from 'classnames';
import {CustomInput} from '../';

import * as React from 'react';

export interface TwoFactorAuthProps {
    errorMessage?: string;
    isLoading?: boolean;
    show2faActions?: boolean;
    onSubmit: () => void;
    onDisable2FA: () => void;
    title: string;
    label: string;
    buttonLabel: string;
    message: string;
    otpCode: string;
    error: string;
    codeFocused: boolean;
    handleOtpCodeChange: (otp: string) => void;
    handleChangeFocusField: () => void;
    handleClose2fa: () => void;
    show2faActionsMsg: string;
    show2faActionsDisableLabel: string;
}

class TwoFactorAuthComponent extends React.Component<TwoFactorAuthProps> {
    public render() {
        const {
            errorMessage,
            isLoading,
            title,
            label,
            buttonLabel,
            message,
            error,
            otpCode,
            codeFocused,
            show2faActions,
            show2faActionsMsg,
            show2faActionsDisableLabel,
        } = this.props;

        const errors = errorMessage || error;
        const buttonWrapperClass = cr('cr-email-form__button-wrapper', {
            'cr-email-form__button-wrapper--empty': !errors,
        });
        const emailGroupClass = cr('cr-email-form__group', {
            'cr-email-form__group--focused': codeFocused,
        });
        return (
            <div className="pg-2fa___form">
                <form>
                    <div className={show2faActions ? 'cr-email-form withActions' : 'cr-email-form'}>
                        <div className="cr-email-form__options-group">
                            <div className="cr-email-form__option">
                                <div className="cr-email-form__option-inner">
                                    {title || '2FA verification'}
                                    <div className="cr-email-form__cros-icon" onClick={this.handleCancel}>
                                        <img alt="" src={require('../EmailForm/close.svg')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cr-email-form__form-content">
                            {show2faActions &&
                            <div className="actionsWrapper">
                                <div className="message">
                                    <img alt="warning" src={require('../../assets/images/warning.svg')}/>
                                    <p>{show2faActionsMsg}</p>
                                </div>
                                <hr/>
                                <div className="buttons">
                                    <button onClick={this.handleDisable2FA}
                                            type="button">{show2faActionsDisableLabel}</button>
                                </div>
                            </div>
                            }
                            <div className="cr-email-form__header">
                                {message}
                            </div>
                            <div className={emailGroupClass}>
                                <CustomInput
                                    type="number"
                                    label={label || '6-digit Google Authenticator Code'}
                                    placeholder={label || '6-digit Google Authenticator Code'}
                                    defaultLabel="6-digit Google Authenticator Code"
                                    handleChangeInput={this.props.handleOtpCodeChange}
                                    inputValue={otpCode}
                                    handleFocusInput={this.props.handleChangeFocusField}
                                    classNameLabel="cr-email-form__label"
                                    classNameInput="cr-email-form__input"
                                    onKeyPress={this.handleEnterPress}
                                    autoFocus={true}
                                />
                                {errorMessage && <div className="cr-email-form__error">{errorMessage}</div>}
                            </div>
                            <div className={buttonWrapperClass}>
                                <Button
                                    label={isLoading ? 'Loading...' : (buttonLabel ? buttonLabel : 'Sign in')}
                                    className={otpCode ? 'cr-email-form__button' : 'cr-email-form__button cr-email-form__button--disabled'}
                                    disabled={isLoading || !otpCode.match(/.{6}/g)}
                                    onClick={this.handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private handleCancel = () => {
        this.props.handleClose2fa();
    };

    private handleSubmit = () => {
        this.props.onSubmit();
    };


    private handleDisable2FA = () => {
        this.props.onDisable2FA();
    };

    private handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleSubmit();
        }
    };
}

export const TwoFactorAuth = TwoFactorAuthComponent;
