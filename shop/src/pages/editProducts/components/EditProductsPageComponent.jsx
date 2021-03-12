/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import getCategories from '../../editCategory/api/get/getCategories';
import getProducts from '../api/get/getProducts';
import setImg from '../../../common/untils/setImg';
import InputEditCategoryName from './InputEditCategoryNameComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import EditCategoryImage from './EditCategoryImageComponent';
import postDeleteCategory from '../api/post/postDeleteCategory';

class EditProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArray: [],
      isEditActive: false,
      isEditActiveId: '',
      isLoadingProducts: false,
      ErrorMessageProducts: '',
      popupSmthWentWrongActive: true,
    };
    this.updateProducts = this.updateProducts.bind(this);
    this.setErrorProducts = this.setErrorProducts.bind(this);
    this.setpopupSmthWentWrongActive = this.setpopupSmthWentWrongActive.bind(this);
    this.setEditActive = this.setEditActive.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getProducts(this.updateProducts, this.setErrorProducts);
    }, 10);
  }

  /*   componentDidUpdate(prevProps, prevState) {
    if (prevState.isEditActiveId !== this.state.isEditActiveId) {
      this.interval = setTimeout(async () => {
        await getCategories(this.updateData, this.setError);
      }, 100);
    }
  } */

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  setErrorProducts(errorMessage) {
    this.setState({
      ErrorMessageProducts: errorMessage,
    });
  }

  setpopupSmthWentWrongActive(value) {
    this.setState({
      popupSmthWentWrongActive: value,
    });
  }

  setEditActive(value) {
    this.setState({
      isEditActive: value,
    });
  }

  updateProducts(value, valueIsLoading) {
    this.setState({
      productsArray: value,
      isLoadingProducts: valueIsLoading,
    });
  }

  render() {
    const {
      isEditActive, isEditActiveId,
      ErrorMessageProducts, popupSmthWentWrongActive,
      productsArray, isLoadingProducts,
    } = this.state;

    if (!isLoadingProducts) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessageProducts) {
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
        <div className="editProducts-box">
          <h1 className="personalAccount"> Товары </h1>
          <div className="editProducts-table">
            {/*             <Link to="/add-category">
              <button
                type="button"
                className="addCategoryButton"
              >
                Добавить товар
              </button>
            </Link> */}
            <ul className="listOrder-wrap">
              <div className="title">
                <p className="titleImage">Изображение</p>
                <p className="titleName">Категория</p>
                <p className="titleName">Название</p>
                <p className="titlePrice">Цена</p>
                <p className="titleEdit"> </p>
                <p className="titleDelete"> </p>
              </div>
              {productsArray.products.map((product) => (
                <li key={product.id}>
                  <div className="columns">
                    <div className="columnImage">
                      {(isEditActive && product.id) !== isEditActiveId
                        ? (
                          <>
                            {product.image
                              ? (
                                <img
                                  className="imageCategory"
                                  src={product.image}
                                  alt={product.imgAlt}
                                  title={product.imgTitle}
                                />
                              )
                              : (
                                <img
                                  src={setImg(product.description)}
                                  alt={product.imgAlt}
                                  title={product.imgTitle}
                                />
                              )}
                          </>
                        )
                        : (
                          <EditCategoryImage
                            id={product.id}
                          />
                        )}
                    </div>

                    <div className="columnCategory">
                      {isEditActive && product.id === isEditActiveId
                        ? (
                          /* <InputEditCategoryName
                            id={product.id}
                            category={product.category}
                            setEditActive={this.setEditActive}
                          /> */ <div> </div>
                        )
                        : <p>{product.category}</p>}
                    </div>

                    <div className="columnName">
                      {isEditActive && product.id === isEditActiveId
                        ? (
                      /*  <InputEditCategoryName
                            id={product.id}
                            category={product.category}
                            setEditActive={this.setEditActive}
                          /> */ <div> </div>
                        )
                        : <p>{product.description}</p>}
                    </div>

                    <div className="columnPrice">
                      {isEditActive && product.id === isEditActiveId
                        ? (
                      /*    <InputEditCategoryName
                            id={product.id}
                            category={product.category}
                            setEditActive={this.setEditActive}
                          /> */ <div> </div>
                        )
                        : <p>{product.price}</p>}
                    </div>

                    <div className="columnEdit">
                      <button
                        type="button"
                        className="editCategoryButton"
                        onClick={() => {
                          this.setState({
                            isEditActive: true,
                            isEditActiveId: product.id,
                          });
                        }}
                      >
                        Редактировать
                      </button>
                    </div>

                    <div className="columnDelete">
                      <button
                        type="button"
                        className="deleteCategoryButton"
                        onClick={() => {
                          this.setState({
                            isEditActive: true,
                            isEditActiveId: product.id,
                          });
                          postDeleteCategory(product.id);
                        }}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default EditProductsPage;
