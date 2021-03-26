const buttonLoginArray = [{
  className: 'entranceButton',
  handleButtonClick: true,
  onLogin: false,
  onEnterEmail: false,
  text: 'Войти',
  link: false,
  clientLogin: false,
},
{
  className: 'forgotPasswordButton',
  handleButtonClick: false,
  onLogin: true,
  onEnterEmail: true,
  text: 'Забыли пароль?',
  link: false,
  clientLogin: true,
},
{
  className: 'registrationButton',
  handleButtonClick: false,
  onLogin: true,
  onEnterEmail: false,
  text: 'Регистрация',
  link: true,
  clientLogin: false,
}];

export default buttonLoginArray;
