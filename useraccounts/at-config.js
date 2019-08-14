AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
    },
});

// LOGIN ROUTE: handled by useraccounts:iron-routing
AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/auth/login',
    data() {

        AccountsTemplates.setState('signIn');
        return { pageTitle: 'Log In' };

    },
    redirect: Router.routes.pageHome.path(),
});

// SIGNUP ROUTE: handled by useraccounts:iron-routing
AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/auth/signup',
    data() {

        AccountsTemplates.setState('signUp');
        return { pageTitle: 'Sign Up' };

    },
    redirect: Router.routes.pageHome.path(),
});

// FORGOT PASSWORD ROUTE: handled by useraccounts:iron-routing
AccountsTemplates.configureRoute('forgotPwd', {

    name: 'forgotPwd',
    path: '/auth/forgot-password',
    data() {

        // console.log('Here?');
        AccountsTemplates.setState('forgotPwd');

        return { page: { pageTitle: 'Retrieve Password' } };

    },
});

// RESET PASSWORD ROUTE: handled by useraccounts:iron-routing
AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPwd',
    path: '/auth/reset-password',
    data() {

        AccountsTemplates.setState('resetPwd');

        return { page: { pageTitle: 'Reset Password' } };

    },
});

// ADD DISPLAY NAME / FIRST NAME FIELD
AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        required: true,
    },
]);