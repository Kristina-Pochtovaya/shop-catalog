import formatPhoneNumber from './formatPhoneNumber';

test('should return results only if input value includes number or + ', () => {
  expect((formatPhoneNumber('+1'))).toBe('+1');

  expect((formatPhoneNumber('+'))).toBe('+');

  expect((formatPhoneNumber('123'))).toBe('123');

  expect((formatPhoneNumber('+1daf'))).not.toBe('+1daf');
});
