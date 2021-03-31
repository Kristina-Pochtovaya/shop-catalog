import checkOnSymbols from './checkOnSymbols';

test('should return results only if input value is just letters, digits or mix of letters and digits, but no special sy,bols like $, %, @ etc.', () => {
  expect((checkOnSymbols('test'))).toBe('test');
  expect((checkOnSymbols('test123'))).toBe('test123');
  expect((checkOnSymbols('123'))).toBe('123');
  expect((checkOnSymbols('123@'))).toBe('Prohibited symbols');
  expect((checkOnSymbols(' '))).toBe('Prohibited symbols');
});
