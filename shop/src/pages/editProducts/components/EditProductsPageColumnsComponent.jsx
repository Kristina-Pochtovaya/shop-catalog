import React from 'react';
import getProducts from '../api/get/getProducts';
import getCategories from '../../editCategory/api/get/getCategories';
import setImg from '../../../common/untils/setImg';
import InputEditProductsCategory from './InputEditProductsCategoryComponent';
import InputEditProductsInStock from './InputEditProductsInStockComponent';
import InputEditProductsName from './InputEditProductsNameComponent';
import InputEditProductsPrice from './InputEditCategoryPriceComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import EditProductsImage from './EditProductsImageComponent';
import postDeleteProduct from '../api/post/postDeleteProduct';
import postProducts from '../api/post/postProducts';

class EditProductsPageColumns extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      productsArray: [],
      isEditActive: false,
      isEditActiveId: '',
      isUpdated: false,
      isLoadingProducts: false,
      isLoadingCategories: false,
      ErrorMessageProducts: '',
      ErrorMessageCategories: '',
      popupSmthWentWrongActive: true,
      IsSaveButtonVisible: false,
      IsEditButtonVisible: true,
      productImage: '',
      productCategory: '',
      productName: '',
      productPrice: '',
      productInStock: 1,
      categoriesArray: [],
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    await getProducts(this.updateProducts, this.setError);
    await getCategories(this.updateDataCategories,
      this.setErrorCategories);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { isUpdated } = this.state;
    if (prevState.isUpdated !== isUpdated) {
      await getProducts(this.updateProducts, this.setError);
      await getCategories(this.updateDataCategories,
        this.setErrorCategories);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleButtonOnClick(e) {
    const {
      isEditActiveId, productImage, productCategory, categoriesArray, productName, isUpdated,
      productPrice, productInStock,
    } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;
    await postProducts(
      isEditActiveId, productImage, productCategory, categoriesArray, productName, productPrice,
      productInStock,
    );
    this.setState({
      isUpdated: !isUpdated,
    });
    isProductsUpdated ? setIsProductsUpdated(false) : setIsProductsUpdated(true);
  }

  setError = (errorMessage) => this.setState({ ErrorMessageProducts: errorMessage });

  setErrorCategories = (errorMessage) => this.setState({ ErrorMessageCategories: errorMessage });

  setpopupSmthWentWrongActive = (value) => this.setState({ popupSmthWentWrongActive: value });

  setEditActive = (value) => this.setState({ isEditActive: value });

  updateImage = (value) => this.setState({ productImage: value });

  updateProductCategory = (value, array) => {
    this.setState({
      productCategory: value, categoriesArray: array,
    });
  }

  updateProductName = (value) => this.setState({ productName: value });

  updateProductPrice = (value) => this.setState({ productPrice: value });

  updateProductInStock = (value) => this.setState({ productInStock: value });

  updateProducts = (value, valueIsLoading) => {
    if (this._isMounted) {
      this.setState({
        productsArray: value,
        isLoadingProducts: valueIsLoading,
      });
    }
  }

  updateDataCategories = (value, valueIsLoading) => {
    if (this._isMounted) {
      this.setState({
        categoriesArray: value.categories,
        isLoadingCategories: valueIsLoading,
      });
    }
  }

  updateAfterDelete = () => {
    const { isUpdated } = this.state;
    this.setState({ isUpdated: !isUpdated });
  }

  render() {
    const {
      isEditActive, isEditActiveId, ErrorMessageProducts, popupSmthWentWrongActive,
      productsArray, isLoadingProducts, IsSaveButtonVisible, IsEditButtonVisible,
      isLoadingCategories, ErrorMessageCategories, isUpdated, categoriesArray,
    } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;
    if (!isLoadingProducts || !isLoadingCategories) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessageProducts || ErrorMessageCategories) {
      return (
        <PopUp
          active={popupSmthWentWrongActive}
          setActive={this.setpopupSmthWentWrongActive}
        >
          <PopUpSomethingWentWrong
            text="Попробуйте еще раз"
            setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
          />
        </PopUp>
      );
    }
    return (
      <>
        {
          productsArray.products.map((product) => (
            <li key={product.id}>
              <div className="columns">
                <div className="columnImage">
                  {(isEditActive && product.id) !== isEditActiveId
                    ? (
                      <>
                        {product.image
                          ? (
                            <img
                              className="imageProducts"
                              src={product.image}
                              alt={product.imgAlt}
                              title={product.imgTitle}
                            />
                          ) : (
                            <img
                              src={setImg(product.description)}
                              alt={product.imgAlt}
                              title={product.imgTitle}
                            />
                          )}
                      </>
                    ) : (
                      <EditProductsImage
                        id={product.id}
                        description={product.description}
                        updateImage={this.updateImage}
                      />
                    )}
                </div>
                <div className="columnCategory">
                  {isEditActive && product.id === isEditActiveId
                    ? (
                      categoriesArray.map((category) => (
                        product.categoryId === category.id
                      && (
                      <InputEditProductsCategory
                        category={category.category}
                        categoryId={product.categoryId}
                        updateProductCategory={this.updateProductCategory}
                      />
                      )
                      ))
                    ) : categoriesArray.map((category) => (
                      product.categoryId === category.id && (
                      <p key={product.id}>
                        { category.category }
                      </p>
                      )
                    ))}
                </div>
                <div className="columnName">
                  {isEditActive && product.id === isEditActiveId
                    ? (
                      <InputEditProductsName
                        description={product.description}
                        updateProductName={this.updateProductName}
                      />
                    ) : <p>{product.description}</p>}
                </div>
                <div className="columnPrice">
                  {isEditActive && product.id === isEditActiveId
                    ? (
                      <InputEditProductsPrice
                        price={product.price}
                        updateProductPrice={this.updateProductPrice}
                      />
                    ) : <p>{product.price}</p>}
                </div>
                <div className="columnInStock">
                  {isEditActive && product.id === isEditActiveId
                    ? (
                      <InputEditProductsInStock
                        inStock={product.inStock}
                        updateProductInStock={this.updateProductInStock}
                      />
                    )
                    : <p className="inStockString">{Number(product.inStock) === 1 ? 'да' : 'нет'}</p>}
                </div>
                <div className="columnEdit">
                  {IsEditButtonVisible && isEditActive && product.id === isEditActiveId ? (
                    <button
                      type="button"
                      className="editProductsButton"
                      onClick={() => {
                        this.setState({
                          isEditActive: false,
                          isEditActiveId: product.id,
                          IsSaveButtonVisible: true,
                          IsEditButtonVisible: false,
                        });
                        this.handleButtonOnClick();
                      }}
                    >
                      Сохранить
                    </button>
                  ) : (
                    categoriesArray.map((category) => (
                      product.categoryId === category.id
                    && (
                    <button
                      key={product.id}
                      type="button"
                      className="editProductsButton"
                      onClick={() => {
                        this.setState({
                          isEditActive: true,
                          isEditActiveId: product.id,
                          productImage: product.image,
                          productCategory: category.category,
                          productName: product.description,
                          productPrice: product.price,
                          productInStock: product.inStock,
                          IsEditButtonVisible: true,
                          IsSaveButtonVisible: false,
                        });
                      }}
                    >
                      Изменить
                    </button>
                    )))
                  )}
                </div>
                <div className="columnDelete">
                  <button
                    type="button"
                    className="deleteProductsButton"
                    onClick={() => {
                      postDeleteProduct(product.id, setIsProductsUpdated,
                        isProductsUpdated, this.updateAfterDelete);
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </li>
          ))
      }
      </>
    );
  }
}

export default EditProductsPageColumns;
