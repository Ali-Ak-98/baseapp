// import persianJs from 'persianjs';
import * as React from 'react';
import {Button} from 'react-bootstrap';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import Select from 'react-select';
import {compose} from 'redux';
import {IntlProps} from '../../index';
import {Card, getawayFetch, RootState, selectUserInfo, User} from '../../modules';
import {CustomInput} from '../CustomInput';


export interface DepositOnlineRiyalProps {
    bankData: Card[];
    mobile?: boolean;
}

interface ReduxProps {
    user: User;
}

interface DispatchProps {
    getawayFetch: typeof getawayFetch;
}

type Props = DepositOnlineRiyalProps & IntlProps & ReduxProps & DispatchProps;
/**
 * Component to display bank account details which can be used for a
 * deposit
 */
const DepositOnline: React.FC<Props> = (props: Props) => {
    const {mobile} = props;
    const [amount, setAmount] = React.useState('');
    // const [persianAmount, setPersianAmount] = React.useState('');
    const [bankAccount, setBankAccount] = React.useState(null);

    const translate = (e: string) => {
        return props.intl.formatMessage({id: e});
    };

    const options = [] as any;
    props.bankData.filter(item => item.verify).map((num, key) => {
        options.push({value: key, label: num.card_num});
    });
    if (options.length === 0) {
        options.push({label: translate('page.body.deposit.offline.select.noCard'), isDisabled: true});
    }

    const customStyle = {
        control: styles => ({...styles, minHeight: 'auto', height: '29px'}),
        dropdownIndicator: styles => ({...styles, padding: '0 8px'}),
        valueContainer: styles => ({...styles, height: '29px'}),
        input: styles => ({...styles, padding: '0', margin: '0'}),
        option: styles => ({...styles, color: 'black', padding: '4px 8px'}),
        menu: styles => ({...styles, margin: '4px 0'}),
    };

    const history = useHistory();

    const handleAddCard = () => {
        history.push(`/profile`);
    };
    const handleReturnToWallet = () => {
        history.push(`/wallets`);
    };
    const handleChangeAmount = e => {
        setAmount(e.replace(/,/g, ''));
    };

    const handleChangeCard = e => {
        setBankAccount(e.label);
    };

    const handleSubmitTransaction = () => {
        const {user} = props;
        props.getawayFetch({
            amount: amount,
            cid: bankAccount,
            phone: user.phone[user.phone.length - 1].number,
        });
    };

    return (
            <div className="card">
                <div className="card-header text-center text-md-right">
                    <strong className="h4">{translate('page.body.deposit.online.header')}</strong>
                </div>
                <div className="d-flex flex-column text-right p-4 rtl">
                    <span>{translate('page.body.deposit.online.text.read')}</span>
                    <span>{translate('page.body.deposit.online.text.responsibility')}</span>
                    <span>{translate('page.body.deposit.online.text.useGateway')}</span>
                    <span>{translate('page.body.deposit.online.text.payAttention')}</span>
                    <span>- {translate('page.body.deposit.online.text.shaparak')}</span>
                    <span>- {translate('page.body.deposit.online.text.trueAmount')}</span>
                    <span>- {translate('page.body.deposit.online.text.MinTransactionAmount')}</span>
                    <span>- {translate('page.body.deposit.online.text.useCard')}</span>
                </div>
                <form className="card-body">
                    <div>
                        <div className="form-group row rtl">
                            <div className="col-8">
                                <Select
                                    styles={customStyle}
                                    options={options}
                                    placeholder={translate('page.body.deposit.online.select.chooseCard')}
                                    onChange={handleChangeCard}
                                />
                            </div>
                            <div className="col-4">
                                <Button className="btn btn-block btn-info text-white" onClick={handleAddCard}>
                                    {translate('page.body.deposit.online.button.addCard')}
                                </Button>
                            </div>
                        </div>
                        <div className="form-group">
                            <CustomInput
                                type="number"
                                inputValue={amount}
                                placeholder={translate('page.body.deposit.input.placeHolder')}
                                classNameInput="form-control"
                                handleChangeInput={handleChangeAmount}
                                defaultLabel=""
                                label="تومان"
                            />
                            {/*<input className="form-control" id="name" type="string"*/}
                            {/*       placeholder={translate('page.body.deposit.input.placeHolder')}*/}
                            {/*       onChange={handleChangeAmount} autoComplete="off"/>*/}
                            {/*{persianAmount !== '' ?*/}
                            {/*    <div className="pt-2 depositOnline__persianAmount">*/}
                            {/*        <span>{persianAmount.toString()}</span>&nbsp;*/}
                            {/*        <span> {translate('page.body.deposit.online.riyal')}</span>*/}
                            {/*    </div>*/}
                            {/*    : <></>}*/}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <Button className="btn btn-block btn-success py-2 mb-2"
                                    disabled={bankAccount === null || amount === ''}
                                    type="button" onClick={handleSubmitTransaction}>
                                {translate('page.body.deposit.online.button.transform')}
                            </Button>
                        </div>
                        <div className={mobile ? 'd-none' : 'col-sm-6'}>
                            <Button className="btn btn-block py-2" variant="danger"
                                    onClick={handleReturnToWallet}>
                                {translate('page.body.deposit.button.return')}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
    );
};


const mapStateToProps = (state: RootState): ReduxProps => ({
    user: selectUserInfo(state),
});

const mapDispatchToProps = dispatch => ({
    getawayFetch: payload => dispatch(getawayFetch(payload)),
});

export const DepositOnlineRiyal = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(DepositOnline) as any; // tslint:disable-line
