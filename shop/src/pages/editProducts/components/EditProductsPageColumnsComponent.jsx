import React from 'react';
import getProducts from '../api/get/getProducts';
import getCategories from '../../editCategory/api/get/getCategories';
import PopUpErrorLoading from '../../../common/popup/components/PopUpErrorLoadingComponent';
import IsEditActiveColumnsComponent from './IsEditActiveColumnsComponent';
import IsEditNotActiveColumnsComponent from './IsEditNotActiveColumnsComponent';
import processHandleButtonOnEdit from '../utils/processHandleButtonOnEdit';
import ButtonEditProducts from '../../../common/button/components/ButtonEditProductsComponent';
import ButtonDeleteCategoryProducts from '../../../common/button/components/ButtonDeleteCategoryProductsComponent';

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
    await getProducts(this.updateProducts, this.setError);
    await getCategories(this.updateDataCategories);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { isUpdated } = this.state;
    if (prevState.isUpdated !== isUpdated) {
      await getProducts(this.updateProducts, this.setError);
      await getCategories(this.updateDataCategories);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

   handleButtonOnClick = async (product, category = false) => {
     const { isProductsUpdated, setIsProductsUpdated } = this.props;
     if (!category) {
       processHandleButtonOnEdit(this.state, product, this.updateData, isProductsUpdated,
         setIsProductsUpdated);
     } else {
       this.updateData(false, this.state, product, category);
     }
   }

  updateData = (save, state, product, category) => {
    this.setState({
      isUpdated: save ? !state.isUpdated : state.isUpdated,
      isEditActive: !save,
      isEditActiveId: product.id,
      IsSaveButtonVisible: !!save,
      IsEditButtonVisible: !save,
      productImage: product.image,
      productCategory: save ? state.productCategory : category.category,
      productName: save ? state.productName : product.description,
      productPrice: save ? state.productPrice : product.price,
      productInStock: save ? state.productInStock : product.inStock,
    });
  }

  setError = (errorMessage) => this.setState({ ErrorMessageProducts: errorMessage });

  setpopupSmthWentWrongActive = (value) => this.setState({ popupSmthWentWrongActive: value });

  setEditActive = (value) => this.setState({ isEditActive: value });

  updateImage = (value) => this.setState({ productImage: value });

  updateProductCategory = (value, array) => {
    this.setState({ productCategory: value, categoriesArray: array });
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
                    updateImage={this.updateImage}
                    updateProductCategory={this.updateProductCategory}
                    updateProductName={this.updateProductName}
                    updateProductPrice={this.updateProductPrice}
                    updateProductInStock={this.updateProductInStock}
                  />
                ) : (
                  <IsEditNotActiveColumnsComponent
                    product={product}
                    categoriesArray={categoriesArray}
                  />
                )}
              { categoriesArray.map((category) => (
                product.categoryId === category.id && (
                <ButtonEditProducts
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
