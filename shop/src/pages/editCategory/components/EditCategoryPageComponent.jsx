import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import getCategories from '../api/get/getCategories';
import setImg from '../../../common/untils/setImg';
import InputEditCategoryName from './InputEditCategoryNameComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import EditCategoryImage from './EditCategoryImageComponent';
import postDeleteCategory from '../api/post/postDeleteCategory';

class EditCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesArray: [],
      isEditActive: false,
      isEditActiveId: '',
      isLoading: false,
      ErrorMessage: '',
      popupSmthWentWrongActive: true,
    };
    this.updateData = this.updateData.bind(this);
    this.setError = this.setError.bind(this);
    this.setpopupSmthWentWrongActive = this.setpopupSmthWentWrongActive.bind(this);
    this.setEditActive = this.setEditActive.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getCategories(this.updateData, this.setError);
    }, 10);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isEditActiveId } = this.state;
    if (prevState.isEditActiveId !== isEditActiveId) {
      this.interval = setTimeout(async () => {
        await getCategories(this.updateData, this.setError);
      }, 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  setError(errorMessage) {
    this.setState({
      ErrorMessage: errorMessage,
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

  updateData(value, valueisLoading) {
    this.setState({
      categoriesArray: value,
      isLoading: valueisLoading,
    });
  }

  render() {
    const {
      categoriesArray, isEditActive, isEditActiveId, isLoading,
      ErrorMessage, popupSmthWentWrongActive,
    } = this.state;

    if (!isLoading) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessage) {
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
        <div className="editCatalog-box">
          <h1 className="personalAccount"> Категории </h1>
          <div className="editCategory-table">
            <Link to="/add-category">
              <button
                type="button"
                className="addCategoryButton"
              >
                Добавить категорию
              </button>
            </Link>
            <ul className="listOrder-wrap">
              <div className="title">
                <p className="titleImage">Изображение</p>
                <p className="titleName">Название</p>
                <p className="titleEdit"> </p>
                <p className="titleDelete"> </p>
              </div>
              {categoriesArray.categories.map((category) => (
                <li key={category.id}>
                  <div className="columns">
                    <div className="columnImage">
                      {(isEditActive && category.id) !== isEditActiveId
                        ? (
                          <>
                            {category.image
                              ? (
                                <img
                                  className="imageCategory"
                                  src={category.image}
                                  alt={category.imgAlt}
                                  title={category.imgTitle}
                                />
                              )
                              : (
                                <img
                                  src={setImg(category.category)}
                                  alt={category.imgAlt}
                                  title={category.imgTitle}
                                />
                              )}
                          </>
                        )
                        : (
                          <EditCategoryImage
                            id={category.id}
                            category={category.category}
                          />
                        )}
                    </div>

                    <div className="columnName">
                      {isEditActive && category.id === isEditActiveId
                        ? (
                          <InputEditCategoryName
                            id={category.id}
                            category={category.category}
                            setEditActive={this.setEditActive}
                          />
                        )
                        : <p>{category.category}</p>}
                    </div>

                    <div className="columnEdit">
                      <button
                        type="button"
                        className="editCategoryButton"
                        onClick={() => {
                          this.setState({
                            isEditActive: true,
                            isEditActiveId: category.id,
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
                            isEditActiveId: category.id,
                          });
                          postDeleteCategory(category.id);
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

export default EditCategoryPage;
