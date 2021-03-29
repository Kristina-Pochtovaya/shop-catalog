import React from 'react';
import getCategories from '../api/get/getCategories';
import setImg from '../../../common/untils/setImg';
import InputEditCategoryName from './InputEditCategoryNameComponent';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import EditCategoryImage from './EditCategoryImageComponent';
import postDeleteCategory from '../api/post/postDeleteCategory';
import postCategory from '../api/post/postCategory';
import ImagePhoto from '../../../common/image/components/ImagePhotoComponent';

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
    await getCategories(this.updateData, this.setError);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { isUpdated } = this.state;
    if (prevState.isUpdated !== isUpdated) {
      await getCategories(this.updateData, this.setError);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleButtonOnClick(e) {
    const {
      isEditActiveId, isUpdated, categoryImage, categoryName,
    } = this.state;
    await postCategory(
      isEditActiveId, categoryName, categoryImage,
    );
    this.setState({
      isUpdated: !isUpdated,
    });
  }

  setError = (errorMessage) => { this.setState({ ErrorMessage: errorMessage }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  setEditActive = (value) => { this.setState({ isEditActive: value }); }

  updateData = (value, valueisLoading) => {
    if (this._isMounted) {
      this.setState({ categoriesArray: value, isLoading: valueisLoading });
    }
  }

  updateCategoryImage = (value) => this.setState({ categoryImage: value })

  updateCategoryName = (value) => this.setState({ categoryName: value })

  updateAfterDelete = () => {
    const { isUpdated } = this.state;
    this.setState({ isUpdated: !isUpdated });
  }

  render() {
    const {
      categoriesArray, isEditActive, isEditActiveId, isLoading,
      ErrorMessage, popupSmthWentWrongActive, IsEditButtonVisible,
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
        {categoriesArray.categories.map((category) => (
          <li key={category.id}>
            <div className="columns">
              <div className="columnImage">
                {(isEditActive && category.id) !== isEditActiveId
                  ? (
                    <>
                      {category.image
                        ? <ImagePhoto className="imageCategory" imagePreviewUrl={category.image} />
                        : <ImagePhoto className="setImage" imagePreviewUrl={category.imgAlt} />}
                    </>
                  ) : (
                    <EditCategoryImage
                      id={category.id}
                      updateCategoryImage={this.updateCategoryImage}
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
                      updateCategoryName={this.updateCategoryName}
                    />
                  )
                  : <p>{category.category}</p>}
              </div>
              <div className="columnEdit">
                {IsEditButtonVisible && isEditActive && category.id === isEditActiveId ? (
                  <button
                    type="button"
                    className="editCategoryButton"
                    onClick={() => {
                      this.setState({
                        isEditActive: false,
                        isEditActiveId: category.id,
                        IsEditButtonVisible: false,
                      });
                      this.handleButtonOnClick();
                    }}
                  >
                    Сохранить
                  </button>
                ) : (
                  <button
                    type="button"
                    className="editCategoryButton"
                    onClick={() => {
                      this.setState({
                        isEditActive: true,
                        isEditActiveId: category.id,
                        IsEditButtonVisible: true,
                        categoryImage: category.image,
                        categoryName: category.category,
                      });
                    }}
                  >
                    Изменить
                  </button>
                )}
              </div>
              <div className="columnDelete">
                <button
                  type="button"
                  className="deleteCategoryButton"
                  onClick={() => { postDeleteCategory(category.id, this.updateAfterDelete); }}
                >
                  Удалить
                </button>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default EditCategoryPageColumns;
