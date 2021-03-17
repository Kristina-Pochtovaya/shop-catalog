import React from 'react';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import getCategories from '../../editCategory/api/get/getCategories';

class InputEditProductsCategory extends React.Component {
  constructor(props) {
    super(props);
    const { category } = this.props;
    this.state = {
      categoryName: category,
      categoriesArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
    };
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getCategories(this.updateDataCategories, this.setError);
    }, 10);
  }

  async handleCategoryProductsChange(e) {
    const { categoriesArray } = this.state;
    const { updateProductCategory } = this.props;
    e.preventDefault();

    this.setState({
      categoryName: e.target.value,
    });
    updateProductCategory(e.target.value, categoriesArray.categories);
  }

  setError = (value) => { this.setState({ errorMessage: value }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateDataCategories = (value, valueIsLoading) => {
    this.setState({ categoriesArray: value, isLoading: valueIsLoading });
  }

  render() {
    const {
      categoriesArray, errorMessage,
      isLoading, popupSmthWentWrongActive, categoryName,
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
          value={categoryName}
          onChange={async (e) => {
            this.handleCategoryProductsChange(e);
          }}
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
