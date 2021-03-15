/* eslint-disable react/destructuring-assignment */
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
    e.preventDefault();

    this.setState({
      categoryName: e.target.value,
    });

    postProductsCategory(this.state.id, e.target.value,
      this.state.categoriesArray.categories);
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
      isLoading, popupSmthWentWrongActive,
    } = this.state;

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
          value={this.state.categoryName}
          onChange={async (e) => {
            this.handleCategoryProductsChange(e);
            (this.props.isProductsUpdated
              ? this.props.setIsProductsUpdated(false)
              : this.props.setIsProductsUpdated(true));
          }}
          onBlur={() => (this.props.isProductsUpdated
            ? this.props.setIsProductsUpdated(false)
            : this.props.setIsProductsUpdated(true))}
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
