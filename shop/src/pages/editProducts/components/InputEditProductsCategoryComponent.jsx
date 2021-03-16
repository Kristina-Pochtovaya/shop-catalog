import React from 'react';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import postProductsCategory from '../api/post/postProductsCategory';
import getCategories from '../../editCategory/api/get/getCategories';

class InputEditProductsCategory extends React.Component {
  constructor(props) {
    super(props);
    const { category, id } = this.props;
    this.state = {
      id,
      categoryName: category,
      categoriesArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
    };
    this.setError = this.setError.bind(this);
    this.updateDataCategories = this.updateDataCategories.bind(this);
    this.setpopupSmthWentWrongActive = this.setpopupSmthWentWrongActive.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getCategories(this.updateDataCategories, this.setError);
    }, 10);
  }

  async handleCategoryProductsChange(e) {
    const { id, categoriesArray } = this.state;
    e.preventDefault();

    this.setState({
      categoryName: e.target.value,
    });

    postProductsCategory(id, e.target.value,
      categoriesArray.categories);
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

  render() {
    const {
      categoriesArray, errorMessage,
      isLoading, popupSmthWentWrongActive, categoryName,
    } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;

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
        <select
          className="productsCategory"
          value={categoryName}
          onChange={async (e) => {
            this.handleCategoryProductsChange(e);
            (isProductsUpdated
              ? setIsProductsUpdated(false)
              : setIsProductsUpdated(true));
          }}
          onBlur={() => (isProductsUpdated
            ? setIsProductsUpdated(false)
            : setIsProductsUpdated(true))}
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

      </>
    );
  }
}

export default InputEditProductsCategory;
