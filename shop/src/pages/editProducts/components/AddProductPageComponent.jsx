import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import AddCategoryImage from '../../editCategory/components/AddCategoryImageComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import postNewProduct from '../api/post/postNewProduct';
import getCategories from '../../editCategory/api/get/getCategories';
import checkOnlyNumbers from '../../../common/untils/checkOnlyNumbers';

class AddCategoryPage extends React.Component {
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
    this.updateImage = this.updateImage.bind(this);
    this.setError = this.setError.bind(this);
    this.updateDataCategories = this.updateDataCategories.bind(this);
    this.setpopupSmthWentWrongActive = this.setpopupSmthWentWrongActive.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getCategories(this.updateDataCategories, this.setError);
    }, 10);
  }

  setError(value) {
    this.setState({
      errorMessage: value,
    });
  }

  setpopupSmthWentWrongActive(value) {
    this.setState({
      popupSmthWentWrongActive: value,
    });
  }

  updateDataCategories(value, valueIsLoading) {
    this.setState({
      categoriesArray: value,
      isLoading: valueIsLoading,
    });
  }

  updateImage(value) {
    this.setState({ image: value });
  }

  render() {
    async function handleButtonClick() {
      const errorImage = document.getElementById('errorNewImage');
      const result = await postNewProduct(
        productName, image, categoryName, productPrice, productInStock, categoriesArray,
      );
      if (result === true) {
        history.push('/main-page');
      } if (result === false) {
        errorImage.setAttribute('class', 'errorNewImage');
      }

      isProductsUpdated
        ? setIsProductsUpdated(false)
        : setIsProductsUpdated(true);
    }

    function setErrorButtonClick() {
      const errorPrice = document.getElementById('errorPrice');
      errorPrice.setAttribute('class', 'errorPrice');
    }

    const {
      productName, image, categoryName, productPrice, productInStock,
      categoriesArray, errorMessage, isLoading, popupSmthWentWrongActive,
      isPriceCorrect,
    } = this.state;
    const { history, isProductsUpdated, setIsProductsUpdated } = this.props;

    if (!isLoading) {
      return <div className="-isLoading"> </div>;
    }
    if (errorMessage) {
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
        <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
        <div className="addProduct-box">
          <h2 className="">Добавить товар</h2>
          <div className="addProduct-container">

            <p className="productCategoriesString">Категория</p>
            <select
              className="productsCategories"
              value={categoryName}
              onChange={(event) => this.setState({ categoryName: event.target.value })}
            >
              {categoriesArray.categories.map((category) => (
                <option
                  key={category.id}
                  value={category.category}
                >
                  {category.category}
                </option>
              ))}
            </select>
            <p className="productNameString">Название</p>
            <input
              type="text"
              className="productNameInput"
              value={productName}
              onChange={(e) => this.setState({ productName: e.target.value })}
            />
            <p className="productPriceString">Цена</p>
            <p id="errorPrice" className="errorPrice -disabled">Цена должна содержать только цифры</p>
            <input
              type="text"
              className="productPriceInput"
              value={productPrice}
              onChange={(e) => {
                this.setState({
                  productPrice: e.target.value,

                });
              }}
              onBlur={(e) => {
                this.setState({
                  productPrice: `${e.target.value} РУБ.`,
                  isPriceCorrect: checkOnlyNumbers(productPrice),
                });
              }}
            />
            <p className="productInStockString">В наличии</p>
            <select
              className="imageColors"
              onChange={(event) => this.setState({ productInStock: event.target.value })}
            >
              <option value defaultValue>да</option>
              <option value={false}>нет</option>
            </select>
            <AddCategoryImage updateImage={this.updateImage} />
            { isPriceCorrect
              ? (
                <button
                  className="addNewCategoryButton"
                  type="button"
                  onClick={() => {
                    handleButtonClick();
                  }}
                >
                  Добавить
                </button>
              ) : (
                <button
                  className="addNewCategoryButton"
                  type="button"
                  onClick={() => {
                    setErrorButtonClick();
                  }}
                >
                  Добавить
                </button>
              )}

          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(AddCategoryPage);
