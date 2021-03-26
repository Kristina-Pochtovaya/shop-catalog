const buttonForPasswordArray = [{
  className: 'entranceButton',
  handleButtonClick: true,
  onEnter: false,
  onLogin: false,
  text: 'Отправить',
  link: false,
},
{
  className: 'forgotPasswordButton',
  handleButtonClick: false,
  onEnter: true,
  onLogin: true,
  text: 'Войти',
  link: false,
},
{
  className: 'registrationButton',
  handleButtonClick: false,
  onEnter: false,
  onLogin: true,
  text: 'Регистрация',
  link: true,
}];

export default buttonForPasswordArray;
