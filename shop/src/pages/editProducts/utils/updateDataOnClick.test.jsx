import updateDataOnClick from './updateDataOnClick';

describe('should update data correctly depends on save value(true or false)', () => {
  const state = {
    isUpdated: false,
    productCategory: 'stateProductCategory',
    productName: 'stateProductName',
    productPrice: 'stateProductPrice',
    productInStock: 'stateProductInStock',
  };
  const product = {
    id: 'productId',
    image: 'productImage',
    description: 'productDescription',
    price: 'productPrice',
    inStock: 'productInStock',
  };
  const category = {
    category: 'categoryCategory',
  };

  it('should update data correctly  save value is false', () => {
    const save = false;
    const setState = jest.fn(() => {
      const obj = {};
      const isUpdated = save ? !state.isUpdated : state.isUpdated;
      const isEditActive = !save;
      const isEditActiveId = product.id;
      const IsSaveButtonVisible = !!save;
      const IsEditButtonVisible = !save;
      const productImage = product.image;
      const productCategory = save ? state.productCategory : category.category;
      const productName = save ? state.productName : product.description;
      const productPrice = save ? state.productPrice : product.price;
      const productInStock = save ? state.productInStock : product.inStock;
      obj.isUpdated = isUpdated;
      obj.isEditActive = isEditActive;
      obj.isEditActiveId = isEditActiveId;
      obj.IsSaveButtonVisible = IsSaveButtonVisible;
      obj.IsEditButtonVisible = IsEditButtonVisible;
      obj.productImage = productImage;
      obj.productCategory = productCategory;
      obj.productName = productName;
      obj.productPrice = productPrice;
      obj.productInStock = productInStock;
      return obj;
    });
    const result = updateDataOnClick(setState, save, state, product, category);
    const resultObj = {
      isUpdated: false,
      isEditActive: true,
      isEditActiveId: 'productId',
      IsSaveButtonVisible: false,
      IsEditButtonVisible: true,
      productImage: 'productImage',
      productCategory: 'categoryCategory',
      productName: 'productDescription',
      productPrice: 'productPrice',
      productInStock: 'productInStock',
    };
    expect(result).toEqual(resultObj);
  });

  it('should update data correctly  save value is true', () => {
    const save = true;
    const setState = jest.fn(() => {
      const obj = {};
      const isUpdated = save ? !state.isUpdated : state.isUpdated;
      const isEditActive = !save;
      const isEditActiveId = product.id;
      const IsSaveButtonVisible = !!save;
      const IsEditButtonVisible = !save;
      const productImage = product.image;
      const productCategory = save ? state.productCategory : category.category;
      const productName = save ? state.productName : product.description;
      const productPrice = save ? state.productPrice : product.price;
      const productInStock = save ? state.productInStock : product.inStock;
      obj.isUpdated = isUpdated;
      obj.isEditActive = isEditActive;
      obj.isEditActiveId = isEditActiveId;
      obj.IsSaveButtonVisible = IsSaveButtonVisible;
      obj.IsEditButtonVisible = IsEditButtonVisible;
      obj.productImage = productImage;
      obj.productCategory = productCategory;
      obj.productName = productName;
      obj.productPrice = productPrice;
      obj.productInStock = productInStock;
      return obj;
    });
    const result = updateDataOnClick(setState, save, state, product, category);
    const resultObj = {
      isUpdated: true,
      isEditActive: false,
      isEditActiveId: 'productId',
      IsSaveButtonVisible: true,
      IsEditButtonVisible: false,
      productImage: 'productImage',
      productCategory: 'stateProductCategory',
      productName: 'stateProductName',
      productPrice: 'stateProductPrice',
      productInStock: 'stateProductInStock',
    };
    expect(result).toEqual(resultObj);
  });
});
