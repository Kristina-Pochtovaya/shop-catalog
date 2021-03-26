import setErrorNotNullFirstName from './setErrorNotNullFirstName';
import setErrorNotNullLastName from './setErrorNotNullLastName';
import setErrorNotNullEmail from './setErrorNotNullEmail';
import setErrorNotNullPassword from './setErrorNotNullPassword';
import setErrorNotNullPasswordNewRepeat from './setErrorNotNullPasswordNewRepeat';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';

function setErrorNotNullGroupsPersonalInformation(firstName, lastName, email, passwordNew,
  passwordNewRepeat, errorLength) {
  if (!firstName) {
    setErrorNotNullFirstName();
  }
  if (!lastName) {
    setErrorNotNullLastName();
  }
  if (!email) {
    setErrorNotNullEmail();
  }
  if (!passwordNew) {
    setErrorNotNullPassword();
  }
  if (passwordNew !== passwordNewRepeat) {
    setErrorNotNullPasswordNewRepeat();
  }
  if (passwordNew.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
}

export default setErrorNotNullGroupsPersonalInformation;
