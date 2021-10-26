import React from 'react';
import {
    formatDate,
    getStaticUrl,
    getUrlBase,
    isCryptocurrency,
    isEmptyObject,
    isMobile,
    isMultiplierContract,
    LocalStore,
    platform_name,
    routes,
    State,
} from '@deriv/shared';
import { StaticUrl } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';
import { BinaryLink } from 'App/Components/Routes';
import { WS } from 'Services';

// TODO: Update links to app_2 links when components are done.
/* eslint-disable react/jsx-no-target-blank */
export const clientNotifications = (ui = {}, client = {}) => {
    const notifications = {
        dp2p: {
            key: 'dp2p',
            header: localize('Payment problems?'),
            message: localize('There’s an app for that'),
            primary_btn: {
                text: localize('Learn more'),
                onClick: () => {
                    window.open(getStaticUrl('/p2p'), '_blank');
                },
            },
            img_src: getUrlBase('/public/images/common/dp2p_banner.png'),
            img_alt: 'DP2P',
            type: 'news',
        },
        is_virtual: {
            key: 'is_virtual',
            header: localize('You are on your demo account'),
            message: localize('Please switch to your real account or create one to access the cashier.'),
            type: 'warning',
        },
        no_residence: {
            key: 'no_residence',
            header: localize('You have not selected your country of residence'),
            message: localize('Please set your country of residence in your account settings to access the cashier.'),
            action: {
                route: routes.personal_details,
                text: localize('Go to my account settings'),
            },
            type: 'warning',
        },
        currency: {
            key: 'currency',
            header: localize('You have not selected your account currency'),
            message: localize('Please set your account currency to enable deposits and withdrawals.'),
            action: {
                onClick: () => {
                    ui.openRealAccountSignup('set_currency');
                },
                text: localize('Set my account currency'),
            },
            type: 'danger',
        },
        self_exclusion: excluded_until => {
            return {
                key: 'self_exclusion',
                header: localize('You have self-excluded from trading'),
                message: (
                    <Localize
                        i18n_default_text='You have chosen to exclude yourself from trading on our website until {{exclusion_end}}. If you are unable to place a trade or deposit after your self-exclusion period, please contact us via live chat.'
                        values={{
                            exclusion_end: formatDate(excluded_until, 'DD MMM, YYYY'),
                            interpolation: { escapeValue: false },
                        }}
                    />
                ),
                action: {
                    onClick: () => {
                        window.LC_API.open_chat_window();
                    },
                    text: localize('Go to live chat'),
                },
                type: 'danger',
            };
        },
        cashier_locked: {
            key: 'cashier_locked',
            header: localize('Your cashier is currently locked'),
            message: localize('Please contact us via live chat to unlock it.'),
            action: {
                onClick: () => {
                    window.LC_API.open_chat_window();
                },
                text: localize('Go to live chat'),
            },
            type: 'warning',
        },
        system_maintenance: (withdrawal_locked, deposit_locked) => {
            let message, header;
            if (isCryptocurrency(client.currency)) {
                if (withdrawal_locked) {
                    header = localize('Unable to process withdrawals in the moment');
                    message = localize(
                        'Withdrawals are temporarily unavailable due to system maintenance. You can make withdrawals when the maintenance is complete.'
                    );
                } else if (deposit_locked) {
                    header = localize('Unable to process deposit in the moment');
                    message = localize(
                        'Deposits are temporarily unavailable due to system maintenance. You can make deposits when the maintenance is complete.'
                    );
                } else {
                    header = localize('Scheduled cashier system maintenance');
                    message = localize(
                        'Our cryptocurrency cashier is temporarily down due to system maintenance. You can make cryptocurrency deposits and withdrawals in a few minutes when the maintenance is complete.'
                    );
                }
            } else {
                header = localize('Scheduled cashier system maintenance');
                message = localize(
                    'Our cashier is temporarily down due to system maintenance. You can access the cashier in a few minutes when the maintenance is complete.'
                );
            }
            return {
                key: 'system_maintenance',
                header,
                message,
                type: 'warning',
            };
        },
        authenticate: {
            key: 'authenticate',
            header: localize('Your account has not been verified'),
            message: localize(
                'Please submit your proof of identity and proof of address to verify your account in your account settings to access the cashier.'
            ),
            action: {
                route: routes.proof_of_identity,
                text: localize('Go to my account settings'),
            },
            type: 'warning',
        },
        withdrawal_locked_review: {
            key: 'withdrawal_locked_review',
            header: localize('Your account has not been verified'),
            message: localize(
                'Please submit your proof of identity and proof of address to verify your account in your account settings to access the cashier.'
            ),
            action: {
                route: routes.proof_of_identity,
                text: localize('Go to my account settings'),
            },
            type: 'warning',
        },
        no_withdrawal_or_trading: {
            key: 'no_withdrawal_or_trading',
            header: localize('You are only allowed to make deposits'),
            message: localize('Please contact us via live chat to enable withdrawals.'),
            action: {
                onClick: () => {
                    window.LC_API.open_chat_window();
                },
                text: localize('Go to live chat'),
            },
            type: 'warning',
        },
        withdrawal_locked: {
            key: 'withdrawal_locked',
            header: localize('You are only allowed to make deposits'),
            message: localize('Please contact us via live chat to enable withdrawals.'),
            action: {
                onClick: () => {
                    window.LC_API.open_chat_window();
                },
                text: localize('Go to live chat'),
            },
            type: 'warning',
        },
        mt5_withdrawal_locked: {
            key: 'mt5_withdrawal_locked',
            header: localize('MT5 withdrawal disabled'),
            message: localize(
                'MT5 withdrawals have been disabled on your account. Please check your email for more details.'
            ),
            type: 'warning',
        },
        ask_financial_risk_approval: {
            key: 'ask_financial_risk_approval',
            header: localize('Complete your Appropriateness Test'),
            message: localize('Please click the following link to complete your Appropriateness Test.'),
            action: {
                route: routes.financial_assessment,
                text: localize('Click here'),
            },
            type: 'warning',
        },
        document_needs_action: {
            key: 'document_needs_action',
            header: localize('Authentication failed'),
            message: (
                <Localize
                    i18n_default_text='<0>Your Proof of Identity or Proof of Address</0> did not meet our requirements. Please check your email for further instructions.'
                    components={[<BinaryLink key={0} className='link' to={routes.proof_of_identity} />]}
                />
            ),
            type: 'warning',
        },
        unwelcome: {
            key: 'unwelcome',
            header: localize('Deposits are locked'),
            message: localize('Please contact us via live chat to enable deposits.'),
            action: {
                onClick: () => {
                    window.LC_API.open_chat_window();
                },
                text: localize('Go to live chat'),
            },
            type: 'danger',
        },
        max_turnover_limit_not_set: {
            key: 'max_turnover_limit_not_set',
            header: localize('You’ve not set your 30-day turnover limit'),
            message: localize(
                'Your access to the cashier has been temporarily disabled as you have not set your 30-day turnover limit. Please go to Self-exclusion and set the limit.'
            ),
            action: {
                route: routes.self_exclusion,
                text: localize('Go to Self-exclusion'),
            },
            type: 'danger',
        },
        risk: {
            key: 'risk',
            header: localize('Your cashier is locked'),
            message: localize('Please complete the financial assessment in your account settings to unlock it.'),
            action: {
                route: routes.financial_assessment,
                text: localize('Go to my account settings'),
            },
            type: 'warning',
        },
        tax: {
            key: 'tax',
            header: localize('You have not provided your tax identification number'),
            message: localize(
                'This information is necessary for legal and regulatory requirements. Please go to your account settings, and fill in your latest tax identification number.'
            ),
            action: {
                route: routes.personal_details,
                text: localize('Go to my account settings'),
            },
            type: 'danger',
        },
        tnc: {
            action: {
                onClick: async () => {
                    await WS.tncApproval();
                    WS.getSettings();
                },
                text: localize('I accept'),
            },
            key: 'tnc',
            header: localize('Terms & conditions updated'),
            message: (
                <Localize
                    i18n_default_text='Please accept our <0>updated Terms and Conditions</0> to proceed.'
                    components={[<StaticUrl key={0} className='link' href='terms-and-conditions' />]}
                />
            ),
            type: 'warning',
        },
        required_fields: (withdrawal_locked, deposit_locked) => {
            let message;
            if (withdrawal_locked) {
                message = localize(
                    'Please go to your account settings and complete your personal details to enable withdrawals.'
                );
            } else if (deposit_locked) {
                message = localize(
                    'Please go to your account settings and complete your personal details to enable deposits.'
                );
            } else {
                message = localize(
                    'Please go to your account settings and complete your personal details to enable deposits and withdrawals.'
                );
            }
            return {
                key: 'required_fields',
                header: localize('Your personal details are incomplete'),
                message,
                type: 'danger',
                action: {
                    route: routes.personal_details,
                    text: localize('Go to my account settings'),
                },
            };
        },
        you_are_offline: {
            key: 'you_are_offline',
            header: localize('You are offline'),
            message: <Localize i18n_default_text='Check your connection.' />,
            type: 'danger',
        },
        password_changed: {
            key: 'password_changed',
            header: localize('Password updated.'),
            message: <Localize i18n_default_text='Please log in with your updated password.' />,
            type: 'info',
        },
        reset_virtual_balance: {
            key: 'reset_virtual_balance',
            header: localize('Reset your balance'),
            message: client.message,
            type: 'info',
            is_persistent: true,
            should_show_again: true,
            platform: [platform_name.DTrader],
            is_disposable: true,
            action: {
                text: localize('Reset balance'),
                onClick: async () => {
                    await client.resetVirtualBalance();
                },
            },
        },
        needs_poi: {
            action: {
                route: routes.proof_of_identity,
                text: localize('Verify identity'),
            },
            key: 'needs_poi',
            header: localize('Please verify your proof of identity'),
            message: localize('To continue trading with us, please confirm who you are.'),
            type: 'danger',
        },
        needs_poa: {
            action: {
                route: routes.proof_of_address,
                text: localize('Verify address'),
            },
            key: 'needs_poa',
            header: localize('Please verify your proof of address'),
            message: localize('To continue trading with us, please confirm where you live.'),
            type: 'danger',
        },
        needs_poi_virtual: {
            action: {
                onClick: async () => {
                    const { switchAccount, first_switchable_real_loginid } = client;

                    await switchAccount(first_switchable_real_loginid);
                },
                text: localize('Verify identity'),
            },
            key: 'needs_poi_virtual',
            header: localize('Please Verify your identity'),
            message: localize(
                'We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your identity.'
            ),
            type: 'danger',
        },
        needs_poa_virtual: {
            action: {
                route: routes.proof_of_address,
                text: localize('Verify address'),
            },
            key: 'needs_poa_virtual',
            header: localize('Please Verify your address'),
            message: localize(
                'We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your address.'
            ),
            type: 'danger',
        },
        documents_expired: {
            key: 'poi_expired',
            header: localize('You submitted expired identification documents'),
            message: localize('Please submit valid identity documents to unlock the cashier.'),
            action: {
                route: routes.proof_of_identity,
                text: localize('Submit identity documents'),
            },
            type: 'danger',
        },
        new_version_available: {
            action: {
                onClick: () => window.location.reload(),
                text: localize('Refresh now'),
            },
            key: 'new_version_available',
            header: localize('A new version of Deriv is available'),
            message: localize('This page will automatically refresh in 5 minutes to load the latest version.'),
            type: 'warning',
            should_hide_close_btn: true,
            timeout: 300000,
            timeoutMessage: remaining => localize('Auto update in {{ remaining }} seconds', { remaining }),
        },
        install_pwa: {
            key: 'install_pwa',
            action: {
                onClick: () => ui.installWithDeferredPrompt(),
                text: localize('Install'),
            },
            header: localize('Install the DTrader web app'),
            message: localize('Launch DTrader in seconds the next time you want to trade.'),
            type: 'announce',
            should_hide_close_btn: false,
        },
        ask_uk_funds_protection: {
            key: 'ask_uk_funds_protection',
            header: localize('Your cashier is locked'),
            message: localize('See how we protect your funds to unlock the cashier.'),
            action: {
                route: routes.cashier_deposit,
                text: localize('Find out more'),
            },
            type: 'warning',
        },
        deriv_go: {
            key: 'deriv_go',
            message: (
                <Localize
                    i18n_default_text='Get a faster mobile trading experience with the <0>Deriv GO</0> app!'
                    components={[<StaticUrl key={0} className='link dark' href='/landing/deriv-go' />]}
                />
            ),
            cta_btn: {
                text: localize('Learn more'),
                onClick: () => {
                    window.open(getStaticUrl('/landing/deriv-go'), '_blank');
                },
            },
            img_src: getUrlBase('/public/images/common/derivgo_banner.png'),
            img_alt: 'deriv_go',
            type: 'promotions',
        },
    };
    return notifications;
};

const hasMissingRequiredField = (account_settings, client, isAccountOfType) => {
    if (!account_settings || isEmptyObject(account_settings)) return false;

    const { is_svg, landing_company_shortcode } = client;

    // TODO: [deriv-eu] refactor into its own function once more exceptions are added.
    let required_fields;
    if (is_svg) {
        required_fields = getSVGRequiredFields();
    } else {
        required_fields = getRequiredFields();
    }

    return required_fields.some(field => !account_settings[field]);

    function getSVGRequiredFields() {
        const necessary_withdrawal_fields =
            State.getResponse('landing_company.financial_company.requirements.withdrawal') || [];
        const necessary_signup_fields = State.getResponse('landing_company.financial_company.requirements.signup');

        const necessary_signup_fields_mapped = necessary_signup_fields
            ? necessary_signup_fields.map(field => (field === 'residence' ? 'country' : field))
            : [];

        return [...necessary_withdrawal_fields, ...necessary_signup_fields_mapped];
    }

    function getRequiredFields() {
        if (!isAccountOfType('financial')) return [];

        const { residence } = client;
        const required_settings_fields = [
            'account_opening_reason',
            'address_line_1',
            'address_city',
            'phone',
            'tax_identification_number',
            'tax_residence',
        ];

        const address_postcode_is_required = residence === 'gb' || landing_company_shortcode === 'iom';
        if (address_postcode_is_required) required_settings_fields.push('address_postcode');

        return [...required_settings_fields];
    }
};

const getStatusValidations = status_arr => {
    return status_arr.reduce((validations, stats) => {
        validations[stats] = true;
        return validations;
    }, {});
};

const getCashierValidations = cashier_arr => {
    return cashier_arr.reduce((validations, code) => {
        validations[code] = true;
        return validations;
    }, {});
};

const addVerificationNotifications = (identity, document, addNotificationMessage) => {
    if (identity.status === 'expired') addNotificationMessage(clientNotifications().poi_expired);

    if (document.status === 'expired') addNotificationMessage(clientNotifications().poa_expired);
};

const checkAccountStatus = (
    account_status,
    client,
    addNotificationMessage,
    loginid,
    getRiskAssessment,
    isAccountOfType,
    ui_store,
    is_10k_withdrawal_limit_reached
) => {
    if (isEmptyObject(account_status)) return {};
    if (loginid !== LocalStore.get('active_loginid')) return {};

    const {
        authentication: { document, identity, needs_verification },
        status,
        cashier_validation,
    } = account_status;

    const {
        cashier_locked,
        withdrawal_locked,
        deposit_locked,
        mt5_withdrawal_locked,
        document_needs_action,
    } = getStatusValidations(status);

    const {
        system_maintenance,
        is_virtual,
        no_residence,
        documents_expired,
        unwelcome_status,
        no_withdrawal_or_trading_status,
        withdrawal_locked_status,
        cashier_locked_status,
        FinancialAssessmentRequired,
        SelfExclusion,
        ASK_CURRENCY,
        ASK_AUTHENTICATE,
        ASK_FINANCIAL_RISK_APPROVAL,
        ASK_TIN_INFORMATION,
        ASK_SELF_EXCLUSION_MAX_TURNOVER_SET,
        ASK_FIX_DETAILS,
        ASK_UK_FUNDS_PROTECTION,
    } = cashier_validation ? getCashierValidations(cashier_validation) : {};

    addVerificationNotifications(identity, document, addNotificationMessage);
    const has_risk_assessment = getRiskAssessment(account_status);
    const needs_poa = is_10k_withdrawal_limit_reached && needs_verification.includes('document');
    const needs_poi = is_10k_withdrawal_limit_reached && identity?.status !== 'verified';

    if (needs_poa) addNotificationMessage(clientNotifications().needs_poa);
    if (needs_poi) addNotificationMessage(clientNotifications().needs_poi);
    if (system_maintenance) {
        addNotificationMessage(clientNotifications({}, client).system_maintenance(withdrawal_locked, deposit_locked));
    } else if (cashier_locked) {
        if (is_virtual) {
            addNotificationMessage(clientNotifications().is_virtual);
        } else if (no_residence) {
            addNotificationMessage(clientNotifications().no_residence);
        } else if (documents_expired) {
            addNotificationMessage(clientNotifications().documents_expired);
        } else if (cashier_locked_status) {
            addNotificationMessage(clientNotifications().cashier_locked);
        } else if (ASK_CURRENCY) {
            addNotificationMessage(clientNotifications(ui_store).currency);
        } else if (ASK_AUTHENTICATE) {
            addNotificationMessage(clientNotifications().authenticate);
        } else if (isAccountOfType('financial') && ASK_FINANCIAL_RISK_APPROVAL) {
            addNotificationMessage(clientNotifications().ask_financial_risk_approval);
        } else if (FinancialAssessmentRequired) {
            addNotificationMessage(clientNotifications().risk);
        } else if (isAccountOfType('financial') && ASK_TIN_INFORMATION) {
            addNotificationMessage(clientNotifications().tax);
        } else if (ASK_UK_FUNDS_PROTECTION) {
            addNotificationMessage(clientNotifications().ask_uk_funds_protection);
        } else if (ASK_SELF_EXCLUSION_MAX_TURNOVER_SET) {
            addNotificationMessage(clientNotifications().max_turnover_limit_not_set);
        } else if (ASK_FIX_DETAILS) {
            addNotificationMessage(clientNotifications().required_fields(withdrawal_locked, deposit_locked));
        } else {
            addNotificationMessage(clientNotifications().cashier_locked);
        }
    } else {
        if (withdrawal_locked && ASK_AUTHENTICATE) {
            addNotificationMessage(clientNotifications().withdrawal_locked_review);
        } else if (withdrawal_locked && no_withdrawal_or_trading_status) {
            addNotificationMessage(clientNotifications().no_withdrawal_or_trading);
        } else if (withdrawal_locked && withdrawal_locked_status) {
            addNotificationMessage(clientNotifications().withdrawal_locked);
        } else if (withdrawal_locked && ASK_FIX_DETAILS) {
            addNotificationMessage(clientNotifications().required_fields(withdrawal_locked, deposit_locked));
        }
        if (deposit_locked && SelfExclusion) {
            addNotificationMessage(clientNotifications().self_exclusion(client.excluded_until));
        } else if (deposit_locked && unwelcome_status) {
            addNotificationMessage(clientNotifications().unwelcome);
        }
    }
    if (mt5_withdrawal_locked) addNotificationMessage(clientNotifications().mt5_withdrawal_locked);
    if (document_needs_action) addNotificationMessage(clientNotifications().document_needs_action);

    return {
        has_risk_assessment,
    };
};

export const excluded_notifications = isMobile()
    ? ['contract_sold']
    : [
          'you_are_offline',
          'password_changed',
          'switch_to_tick_chart',
          'contract_sold',
          'maintenance',
          'bot_switch_account',
          'new_version_available',
      ];

export const handleClientNotifications = (client, client_store, ui_store, cashier_store, common_store) => {
    const {
        account_settings,
        account_status,
        getRiskAssessment,
        is_eu,
        is_logged_in,
        is_tnc_needed,
        isAccountOfType,
        loginid,
    } = client_store;
    const { addNotificationMessage, removeNotificationMessageByKey } = ui_store;
    const { is_10k_withdrawal_limit_reached, is_p2p_visible } = cashier_store;
    const { current_language, selected_contract_type } = common_store;
    let has_missing_required_field, has_risk_assessment;

    if (loginid !== LocalStore.get('active_loginid')) return {};

    if (client && !client.is_virtual) {
        ({ has_risk_assessment } = checkAccountStatus(
            account_status,
            client,
            addNotificationMessage,
            loginid,
            getRiskAssessment,
            isAccountOfType,
            ui_store,
            is_10k_withdrawal_limit_reached
        ));

        if (is_p2p_visible) {
            addNotificationMessage(clientNotifications().dp2p);
        } else {
            removeNotificationMessageByKey({ key: clientNotifications().dp2p.key });
        }

        if (is_tnc_needed) addNotificationMessage(clientNotifications(ui_store).tnc);

        has_missing_required_field = hasMissingRequiredField(account_settings, client, isAccountOfType);
        if (has_missing_required_field) {
            addNotificationMessage(clientNotifications(ui_store).required_fields);
        }
    }

    if (!is_eu && isMultiplierContract(selected_contract_type) && current_language === 'EN' && is_logged_in) {
        addNotificationMessage(clientNotifications().deriv_go);
    } else {
        removeNotificationMessageByKey({ key: clientNotifications().deriv_go.key });
    }

    return {
        has_missing_required_field,
        has_risk_assessment,
    };
};
