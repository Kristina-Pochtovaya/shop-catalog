import setInitialValue from './setInitialValue';

describe('test the functionality of setInitialValue', () => {
  let name;
  const clientName = 'name';
  const clientPhone = 'phone';
  const clientAddress = 'address';

  beforeEach(() => {
    name = '';
  });

  it('should return result as name, if argument name is clientName', () => {
    name = 'clientName';
    const result = setInitialValue(name, clientName, clientPhone, clientAddress);
    expect(result).toBe('name');
  });

  it('should return result as phone, if argument name is phone', () => {
    name = 'phone';
    const result = setInitialValue(name, clientName, clientPhone, clientAddress);
    expect(result).toBe('phone');
  });

  it('should return result as address, if argument name is clientAddress', () => {
    name = 'clientAddress';
    const result = setInitialValue(name, clientName, clientPhone, clientAddress);
    expect(result).toBe('address');
  });

  it('should return result as "", if argument name is not propcessed inside the fucntion', () => {
    name = 'test';
    const result = setInitialValue(name, clientName, clientPhone, clientAddress);
    expect(result).toBe('');
  });
});
