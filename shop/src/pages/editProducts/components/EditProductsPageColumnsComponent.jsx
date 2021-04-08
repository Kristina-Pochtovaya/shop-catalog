import React from 'react';
import getProducts from '../api/get/getProducts';
import getCategories from '../../editCategory/api/get/getCategories';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';
import IsEditActiveColumnsComponent from './IsEditActiveColumnsComponent';
import IsEditNotActiveColumnsComponent from './IsEditNotActiveColumnsComponent';
import processHandleButtonOnEdit from '../utils/processHandleButtonOnEdit';
import ButtonEditProducts from '../../../common/components/button/components/ButtonEditProductsComponent';
import ButtonDeleteCategoryProducts from '../../../common/components/button/components/ButtonDeleteCategoryProductsComponent';
import updateDataOnClick from '../utils/updateDataOnClick';

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
    await getProducts(this.updateCategoriesProducts, this.setError);
    await getCategories(this.updateCategoriesProducts);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { isUpdated } = this.state;
    if (prevState.isUpdated !== isUpdated) {
      await getProducts(this.updateCategoriesProducts, this.setError);
      await getCategories(this.updateCategoriesProducts);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

 setState = this.setState.bind(this)

   handleButtonOnClick = async (product, category = false) => {
     const { isProductsUpdated, setIsProductsUpdated } = this.props;
     if (!category) {
       processHandleButtonOnEdit(this.setState, this.state, product, updateDataOnClick,
         isProductsUpdated, setIsProductsUpdated);
     } else {
       updateDataOnClick(this.setState, false, this.state, product, category);
     }
   }

  updateData=(value, name, array = '') => {
    if (name === 'setError') this.setState({ ErrorMessageProducts: value });
    if (name === 'updateImage') this.setState({ productImage: value });
    if (name === 'updateProductName') this.setState({ productName: value });
    if (name === 'updateProductPrice') this.setState({ productPrice: value });
    if (name === 'updateProductInStock') this.setState({ productInStock: value });
    if (name === 'updateProductCategory') this.setState({ productCategory: value, categoriesArray: array });
  }

  setpopupSmthWentWrongActive = (value) => this.setState({ popupSmthWentWrongActive: value });

  updateAfterDelete = () => {
    const { isUpdated } = this.state;
    this.setState({ isUpdated: !isUpdated });
  }

  updateCategoriesProducts=(value, valueIsLoading, name) => {
    if (this._isMounted) {
      if (name === 'updateProducts') this.setState({ productsArray: value, isLoadingProducts: valueIsLoading });
      if (name === 'updateCategories') this.setState({ categoriesArray: value.categories, isLoadingCategories: valueIsLoading });
    }
  }

  render() {
    const {
      isEditActive, isEditActiveId, ErrorMessageProducts, popupSmthWentWrongActive, productsArray,
      isLoadingProducts, IsEditButtonVisible, isLoadingCategories, categoriesArray,
    } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;
    if (!isLoadingProducts || !isLoadingCategories) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessageProducts) {
      return (
        <PopUpErrorLoading
          popupSmthWentWrongActive={popupSmthWentWrongActive}
          setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
        />
      );
    }
    return (
      <>
        {productsArray.products.map((product) => (
          <li key={product.id}>
            <div className="columns">
              {isEditActive && product.id === isEditActiveId
                ? (
                  <IsEditActiveColumnsComponent
                    product={product}
                    categoriesArray={categoriesArray}
                    updateData={this.updateData}
                  />
                ) : (
                  <IsEditNotActiveColumnsComponent
                    product={product}
                    categoriesArray={categoriesArray}
                  />
                )}
              {categoriesArray.map((category) => (
                product.categoryId === category.id && (
                <ButtonEditProducts
                  key={product.id}
                  category={category}
                  product={product}
                  handleButtonOnClick={this.handleButtonOnClick}
                  IsEditButtonVisible={IsEditButtonVisible}
                  isEditActive={isEditActive}
                  isEditActiveId={isEditActiveId}
                />
                )))}
              <div className="columnDelete">
                <ButtonDeleteCategoryProducts
                  item={product}
                  category={false}
                  updateAfterDelete={this.updateAfterDelete}
                  setIsProductsUpdated={setIsProductsUpdated}
                  isProductsUpdated={isProductsUpdated}
                />
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default EditProductsPageColumns;
