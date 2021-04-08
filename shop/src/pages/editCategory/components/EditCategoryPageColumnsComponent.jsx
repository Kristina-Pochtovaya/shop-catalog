import React from 'react';
import getCategories from '../api/get/getCategories';
import NameColumnEditCategory from './NameColumnEditCategoryComponent';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';
import ImageColumnEditCategory from './ImageColumnEditCategoryComponent';
import postCategory from '../api/post/postCategory';
import ButtonEditCategory from '../../../common/components/button/components/ButtonEditCategoryComponent';
import ButtonDeleteCategoryProducts from '../../../common/components/button/components/ButtonDeleteCategoryProductsComponent';

class EditCategoryPageColumns extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      categoriesArray: [],
      isEditActive: false,
      isEditActiveId: '',
      isLoading: false,
      ErrorMessage: '',
      popupSmthWentWrongActive: true,
      IsEditButtonVisible: true,
      isUpdated: false,
      categoryImage: '',
      categoryName: '',
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    await getCategories(this.updateData);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isUpdated } = this.state;
    if (prevState.isUpdated !== isUpdated) {
      this._isMounted = true;
      getCategories(this.updateData);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

   handleButtonOnSave = async (category) => {
     const {
       isEditActiveId, isUpdated, categoryImage, categoryName,
     } = this.state;
     await postCategory(isEditActiveId, categoryName, categoryImage);
     this.setState({
       isUpdated: !isUpdated,
       isEditActive: false,
       isEditActiveId: category.id,
       IsEditButtonVisible: false,
     });
   }

   handleButtonOnEdit = (category) => {
     this.setState({
       isEditActive: true,
       isEditActiveId: category.id,
       IsEditButtonVisible: true,
       categoryImage: category.image,
       categoryName: category.category,
     });
   };

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateData = (value, valueisLoading) => {
    if (this._isMounted) {
      this.setState({ categoriesArray: value, isLoading: valueisLoading });
    }
  }

  updateIsUpdate = (isUpdated) => this.setState({ isUpdated: !isUpdated });

  updateCategoryImage = (value) => this.setState({ categoryImage: value })

  updateCategoryName = (value) => this.setState({ categoryName: value })

  updateAfterDelete = () => {
    const { isUpdated } = this.state;
    this.setState({ isUpdated: !isUpdated });
  }

  render() {
    const { isUpdated } = this.state;
    const {
      categoriesArray, isEditActive, isEditActiveId, isLoading,
      ErrorMessage, popupSmthWentWrongActive, IsEditButtonVisible,
    } = this.state;

    if (!isLoading) {
      return <div className="-isLoading"> </div>;
    }
    if (ErrorMessage) {
      return (
        <PopUpErrorLoading
          popupSmthWentWrongActive={popupSmthWentWrongActive}
          setpopupSmthWentWrongActive={this.setpopupSmthWentWrongActive}
        />
      );
    }
    return (
      <>
        {categoriesArray.categories.map((category) => (
          <li key={category.id}>
            <div className="columns">
              <ImageColumnEditCategory
                isEditActive={isEditActive}
                id={category.id}
                image={category.image}
                imgAlt={category.imgAlt}
                isEditActiveId={isEditActiveId}
                updateCategoryImage={this.updateCategoryImage}
                isUpdated={isUpdated}
                updateData={this.updateData}
              />
              <NameColumnEditCategory
                isEditActive={isEditActive}
                category={category}
                isEditActiveId={isEditActiveId}
                updateCategoryName={this.updateCategoryName}
              />
              <div className="columnEdit">
                <ButtonEditCategory
                  className="editCategoryButton"
                  category={category}
                  handleButtonOnDelete=""
                  handleButtonOnSave={this.handleButtonOnSave}
                  handleButtonOnEdit={this.handleButtonOnEdit}
                  updateIsUpdate={this.updateIsUpdate}
                  isUpdated={isUpdated}
                  IsEditButtonVisible={IsEditButtonVisible}
                  isEditActive={isEditActive}
                  isEditActiveId={isEditActiveId}
                />
              </div>
              <div className="columnDelete">
                <ButtonDeleteCategoryProducts
                  item={category}
                  category
                  updateAfterDelete={this.updateAfterDelete}
                />
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default EditCategoryPageColumns;
