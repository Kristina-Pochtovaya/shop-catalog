import React from 'react';
import ConnectedHeader from '../../main/header/container/HeaderContainer';
import Footer from '../../main/footer/components/FooterComponent';
import processResultAddNewCategory from '../utils/processResultAddNewCategory';
import FormAddCategory from './FormAddCategoryComponent';

class AddCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      image: '',
      titleColor: '1',
      isAdminVisible: true,
    };
  }

  updateImage = (value) => { this.setState({ image: value }); }

  updateName = (e) => { this.setState({ categoryName: e.target.value }); }

  updateColor = (e) => { this.setState({ titleColor: e.target.value }); }

  handleButtonClick = () => {
    const { categoryName, image, titleColor } = this.state;
    const { history, isProductsUpdated, setIsProductsUpdated } = this.props;
    processResultAddNewCategory(categoryName, image, titleColor, history, isProductsUpdated,
      setIsProductsUpdated);
  }

  render() {
    const { categoryName, isAdminVisible } = this.state;
    window.addEventListener('load', () => this.setState({ isAdminVisible: false }));
    return (
      <>
        <ConnectedHeader linkItem={<button type="button" className="buttonBack">Назад</button>} link="/personal" disabled={false} />
        { isAdminVisible ? (
          <div className="addCategory-box">
            <h2 className="">Добавить категорию</h2>
            <div className="addCategory-container">
              <FormAddCategory
                categoryName={categoryName}
                updateImage={this.updateImage}
                updateName={this.updateName}
                updateColor={this.updateColor}
                handleButtonClick={this.handleButtonClick}
              />
            </div>
          </div>
        ) : null}
        <Footer />
      </>
    );
  }
}

export default AddCategoryPage;
