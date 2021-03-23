import checkOnlyNumbers from './checkOnlyNumbers';

const valuePrice = '123 РУБ.';
const valuePriceWithLetters = '123dszaf РУБ.';
const valuePriceNull = '123dszaf РУБ.';
const valuePriceOnlyString = 'dszaf РУБ.';
const valuePriceOnlyString2 = 'sgfsg';

describe('should return only numbers', () => {
  it('should return only numbers', () => {
    expect((checkOnlyNumbers(valuePrice))).toBe('123');
  });

  it('should return false if price has letters too or null', () => {
    expect((checkOnlyNumbers(valuePriceWithLetters))).toBe(false);
    expect((checkOnlyNumbers(valuePriceNull))).toBe(false);
    expect((checkOnlyNumbers(valuePriceOnlyString))).toBe(false);
    expect((checkOnlyNumbers(valuePriceOnlyString2))).toBe(false);
  });
});
