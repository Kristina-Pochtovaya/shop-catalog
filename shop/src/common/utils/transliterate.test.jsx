import transliterate from './transliterate';

const russionWord = 'Привет';
const wordOnLatin = 'Privet';

describe('should transliterate Cyrillic alphabet on Roman alphabet', () => {
  it('should transliterate the word', () => {
    expect((transliterate(russionWord))).toBe('Privet');
  });

  it('should Not transliterate the word', () => {
    expect((transliterate(wordOnLatin))).toBe('Privet');
  });
});
