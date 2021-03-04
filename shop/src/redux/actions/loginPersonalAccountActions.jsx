export const loginPersonalAccountActions = {
  ENTER: 'enter',
  LOGIN: 'login / change password',
};

export const ENTER = {
  type: loginPersonalAccountActions.ENTER,
  loginIsVisible: true,
  personAccountIsVisible: false,
};

export const LOGIN = {
  type: loginPersonalAccountActions.LOGIN,
  loginFormIsVisible: true,
  loginFormLoginPageIsVisible: true,
  loginFormForgetPasswordIsVisible: false,
};
