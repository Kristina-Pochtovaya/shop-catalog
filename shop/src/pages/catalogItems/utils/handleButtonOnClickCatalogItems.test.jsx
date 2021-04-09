import handleButtonOnClick from './handleButtonOnClickCatalogItems';

describe('test the functionality of handleButtonClick', () => {
  const product = {
    id: 1,
    description: 'description',
    price: 'price',
    category: 'category',
    counter: 'counter',
  };
  const img = 'image';
  const mySetPopupBasketctive = jest.fn();
  const myOnAdd = jest.fn();

  it('should execute the mySetPopupBasketctive and myOnAdd functions', async () => {
    expect(mySetPopupBasketctive).toHaveBeenCalledTimes(0);
    expect(myOnAdd).toHaveBeenCalledTimes(0);
    handleButtonOnClick(product, img, mySetPopupBasketctive, myOnAdd);
    expect(mySetPopupBasketctive).toHaveBeenCalledTimes(1);
    expect(myOnAdd).toHaveBeenCalledTimes(1);
  });
});
