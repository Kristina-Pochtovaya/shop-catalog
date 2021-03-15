import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../main/header/components/HeaderComponent';
import Footer from '../../main/footer/components/FooterComponent';
import AddCategoryImage from './AddCategoryImageComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import postNewCategory from '../api/post/postNewCategory';
import getCategories from '../../editCategory/api/get/getCategories';

class AddCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      image: '',
      titleColor: '1',
      categoriesArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
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
      const result = await postNewCategory(productName, image, titleColor);
      if (result === true) {
        history.push('/edit-category');
      } if (result === false) {
        errorImage.setAttribute('class', 'errorNewImage');
      }
    }

    const {
      productName, image, titleColor,
      categoriesArray, errorMessage, isLoading, popupSmthWentWrongActive,
    } = this.state;
    const { history } = this.props;

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

            <p className="categoryColorString">Категория</p>
            <select
              className="productsCategories"
              onChange={(event) => this.setState({ titleColor: event.target.value })}
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

            <p className="productNameString">Цена</p>
            <input
              type="text"
              className="productNameInput"
              value={productName}
              onChange={(e) => this.setState({ productName: e.target.value })}
            />

            <p className="categoryColorString">В наличии</p>
            <select
              className="imageColors"
              onChange={(event) => this.setState({ titleColor: event.target.value })}
            >
              <option value defaultValue>да</option>
              <option value={false}>нет</option>
            </select>
            <AddCategoryImage updateImage={this.updateImage} />
            <button
              className="addNewCategoryButton"
              type="button"
              onClick={() => handleButtonClick()}
            >
              Добавить
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(AddCategoryPage);
