const inputRegistrationArray = [{
  type: 'text',
  name: 'firstName',
  className: 'firtNameInput',
  classNameSymbol: 'errorSymbolFirtName',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'firstNameString -required',
  nameOfString: 'Имя:',
},
{
  type: 'text',
  name: 'lastName',
  className: 'lastNameInput',
  classNameSymbol: 'errorSymbolLastName',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'lastNameString -required',
  nameOfString: 'Фамилия:',
},
{
  type: 'email',
  name: 'email',
  className: 'emailRegistrationInput',
  classNameSymbol: 'errorSymbolRegistrationEmail',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: true,
  classNameOfString: 'emailString -required',
  nameOfString: 'Email:',
},
{
  type: 'tel',
  name: 'phone',
  className: 'phoneRegistrationInput',
  classNameSymbol: 'errorSymbolRegistrationPhone',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: true,
  maxLength: true,
  placeholder: true,
  onFocus: true,
  onEnterEmail: false,
  classNameOfString: 'phoneString -required',
  nameOfString: 'Телефон:',
},
{
  type: 'text',
  name: 'address',
  className: 'addressRegistrationInput',
  classNameSymbol: 'errorSymbolRegistrationAddress',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'addressString -required',
  nameOfString: 'Адрес:',
},
{
  type: 'password',
  name: 'passwordNew',
  className: 'passwordNewInputRegistration',
  classNameSymbol: 'errorSymbolPasswordNewRegistration',
  removeErrorNotNull: true,
  removeErrorLength: true,
  classerrorLength: true,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'passwordNewString -required',
  nameOfString: 'Пароль:',
},
{
  type: 'password',
  name: 'passwordNewRepeat',
  className: 'passwordNewRepeatInputRegistration',
  classNameSymbol: 'errorSymbolPasswordNewRepeatRegistration',
  removeErrorNotNull: true,
  removeErrorLength: false,
  classerrorLength: false,
  minLength: false,
  maxLength: false,
  placeholder: false,
  onFocus: false,
  onEnterEmail: false,
  classNameOfString: 'passwordNewRepeatString -required',
  nameOfString: 'Повторите пароль:',
}];

export default inputRegistrationArray;