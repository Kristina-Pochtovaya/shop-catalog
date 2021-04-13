import setErrorNotNullGroupsPopUpBasket from './setErrorNotNullGroupsPopUpBasket';
import setErrorNotNullName from './setErrorNotNullName';
import setErrorNotNullPhone from './setErrorNotNullPhone';
import setErrorNotNullAddress from './setErrorNotNullAddress';

jest.mock('./setErrorNotNullName');
jest.mock('./setErrorNotNullPhone');
jest.mock('./setErrorNotNullAddress');

describe('test the functionality of setErrorNotNullGroupsPopUpBasket', () => {
  let clientName;
  let clientPhone;
  let clientAddress;

  beforeEach(() => {
    clientName = 'clientName';
    clientPhone = '+375291119933';
    clientAddress = 'clientAddress';
  });

  it('should not execute setErrorNotNullName, setErrorNotNullPhone and setErrorNotNullAddress if clinetName and clientAddress are not null, and if clientPhone.length is more than 13 and does not contains _', () => {
    setErrorNotNullGroupsPopUpBasket(clientName, clientPhone, clientAddress);
    expect(setErrorNotNullName).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(0);
  });

  it('should execute setErrorNotNullName and setErrorNotNullPhone and setErrorNotNullAddress if clinetName is null, and if clientPhone.length less than 13', () => {
    clientName = '';
    clientPhone = '+37529111993';
    expect(setErrorNotNullName).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(0);
    setErrorNotNullGroupsPopUpBasket(clientName, clientPhone, clientAddress);
    expect(setErrorNotNullName).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(0);
  });

  it('should execute setErrorNotNullAddress and setErrorNotNullPhone and setErrorNotNullAddress if clientAddress is null, and if clientPhone contains _', () => {
    clientAddress = '';
    clientPhone = '+37529111993_';
    expect(setErrorNotNullName).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(0);
    setErrorNotNullGroupsPopUpBasket(clientName, clientPhone, clientAddress);
    expect(setErrorNotNullName).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(1);
  });

  it('should execute setErrorNotNullAddress and setErrorNotNullPhone and setErrorNotNullAddress if clinetName and clientAddress are null, and if clientPhone.length is less than 13 and contains _', () => {
    clientName = '';
    clientAddress = '';
    clientPhone = '+37529193_';
    expect(setErrorNotNullName).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(0);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(0);
    setErrorNotNullGroupsPopUpBasket(clientName, clientPhone, clientAddress);
    expect(setErrorNotNullName).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullPhone).toHaveBeenCalledTimes(1);
    expect(setErrorNotNullAddress).toHaveBeenCalledTimes(1);
  });
});
