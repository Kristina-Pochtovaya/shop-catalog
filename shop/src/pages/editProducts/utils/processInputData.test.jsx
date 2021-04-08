import processInputData from './processInputData';

describe('should exucute the function correctly and return new processed state object that will be corrensponds expectations', () => {
  it('imgAlt and imgTitle should be transliterated and state.categoryName should be equal to Электротовары и свет', () => {
    const state = {
      productName: 'Тест',
      categoryName: 'Электротовары и свет',
      productPrice: '101 РУБ.',
      productInStock: 'да',
      image: 'image',
      categoriesArray: {
        categories: [
          { category: 'Электротовары и свет', id: '1' },
          { category: 'Сад', id: '3' },
        ],
      },
    };
    const result = processInputData(state);
    expect(result.data.description).toBe('Тест');
    expect(result.data.imgAlt).toBe('Test');
    expect(result.data.imgTitle).toBe('Test');
    expect(result.data.category).toBe('Электротовары и свет');
  });

  it('categoryId is taken from categories array by category and it is a number, price shows just numer and if inStock is да it return true', () => {
    const state = {
      productName: 'Test',
      categoryName: 'Сад',
      productPrice: '101 РУБ.',
      productInStock: 'да',
      image: 'image',
      categoriesArray: {
        categories: [
          { category: 'Электротовары и свет', id: '1' },
          { category: 'Сад', id: '3' },
        ],
      },
    };
    const result = processInputData(state);
    expect(result.data.categoryId).toBe(3);
    expect(result.data.price).toBe('101');
    expect(result.data.inStock).toBe(true);
  });

  it('always render counter as 1, render image and if inStock нет да it return false', () => {
    const state = {
      productName: 'Test',
      categoryName: 'Сад',
      productPrice: '101 РУБ.',
      productInStock: 'нет',
      image: 'image',
      categoriesArray: {
        categories: [
          { category: 'Электротовары и свет', id: '1' },
          { category: 'Сад', id: '3' },
        ],
      },
    };
    const result = processInputData(state);
    expect(result.data.image).toBe('image');
    expect(result.data.counter).toBe(1);
    expect(result.data.inStock).toBe(false);
  });
});
