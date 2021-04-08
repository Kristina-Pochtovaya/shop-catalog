import React from 'react';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';
import getCategories from '../../editCategory/api/get/getCategories';
import handleCategoryProductsChange from '../utils/handleCategoryProductsChange';

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

  async componentDidMount() {
    await getCategories(this.updateDataCategories);
  }

  updateCategoryName = (e) => this.setState({ categoryName: e.target.value });

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

    updateDataCategories = (value, valueIsLoading) => {
      this.setState({ categoriesArray: value, isLoading: valueIsLoading });
    }

    render() {
      const {
        categoriesArray, errorMessage, isLoading, popupSmthWentWrongActive, categoryName,
      } = this.state;
      const { updateData } = this.props;

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
          <select
            className="productsCategory"
            value={categoryName}
            onChange={async (e) => {
              handleCategoryProductsChange(e, this.updateCategoryName, updateData, categoriesArray);
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
