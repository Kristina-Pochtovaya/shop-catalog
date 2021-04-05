import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import FormAddProduct from './FormAddProductComponent';
import PopUpErrorLoading from '../../../common/popup/components/PopUpErrorLoadingComponent';
import getCategories from '../../editCategory/api/get/getCategories';
import checkOnlyNumbers from '../../../common/untils/checkOnlyNumbers';

class AddProductPage extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      image: '',
      categoryName: 'Электротовары и свет',
      productPrice: '',
      productInStock: 'да',
      categoriesArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
      isPriceCorrect: false,
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    await getCategories(this.updateDataCategories, this.setError);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setError = (value) => { this.setState({ errorMessage: value }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateDataCategories = (value, valueIsLoading) => {
    if (this._isMounted) {
      this.setState({
        categoriesArray: value,
        isLoading: valueIsLoading,
      });
    }
  }

  updateData = (name, e) => {
    if (name === 'categoryName') this.setState({ categoryName: e.target.value });
    if (name === 'productName') this.setState({ productName: e.target.value });
    if (name === 'productPrice') this.setState({ productPrice: e.target.value });
    if (name === 'productInStock') this.setState({ productInStock: e.target.value });
    if (name === 'onBlur') {
      this.setState({
        isPriceCorrect: checkOnlyNumbers(e.target.value),
        productPrice: `${e.target.value} РУБ.`,
      });
    }
  }

  updateImage = (value) => { this.setState({ image: value }); }

  render() {
    const {
      errorMessage, isLoading, popupSmthWentWrongActive, image, productName,
      categoryName, productPrice, productInStock, categoriesArray, isPriceCorrect,
    } = this.state;
    const {
      history, isProductsUpdated, setIsProductsUpdated, pages,
    } = this.props;

    if (!isLoading) {
      return <div className="-isLoading"> </div>;
    }
    if (errorMessage) {
      return (
        <PopUpErrorLoading
          popupSmthWentWrongActive={popupSmthWentWrongActive}
          setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
        />
      );
    }
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
        {pages.loginPersonalAccountReducer.personAccountIsVisible ? (
          <div className="addProduct-box">
            <h2 className="">Добавить товар</h2>
            <div className="addProduct-container">
              <FormAddProduct
                updateData={this.updateData}
                updateImage={this.updateImage}
                state={this.state}
                history={history}
                isProductsUpdated={isProductsUpdated}
                setIsProductsUpdated={setIsProductsUpdated}
              />
            </div>
          </div>
        ) : null}
        <Footer />
      </>
    );
  }
}

export default AddProductPage;
