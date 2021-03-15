/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import postProductsInStock from '../api/post/postProductsInStock';
import getProducts from '../api/get/getProducts';

class InputEditProductsInStock extends React.Component {
  constructor(props) {
    super(props);
    const { inStock, id } = this.props;
    this.state = {
      id,
      inStock: Number(inStock) === 1 ? 'да' : 'нет',
      productsArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
    };
    this.setError = this.setError.bind(this);
    this.updateData = this.updateData.bind(this);
    this.setpopupSmthWentWrongActive = this.setpopupSmthWentWrongActive.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getProducts(this.updateData, this.setError);
    }, 10);
  }

  async handleInStockProductsChange(e) {
    e.preventDefault();

    this.setState({
      inStock: e.target.value,
    });
    postProductsInStock(this.state.id, e.target.value);
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

  updateData(value, valueIsLoading) {
    this.setState({
      productsArray: value,
      isLoading: valueIsLoading,
    });
  }

  render() {
    const {
      productsArray, errorMessage,
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
          className="productsInStockInput"
          value={this.state.inStock}
          onChange={async (e) => {
            this.handleInStockProductsChange(e);
          }}
          onBlur={() => (this.props.isProductsUpdated
            ? this.props.setIsProductsUpdated(false)
            : this.props.setIsProductsUpdated(true))}
        >
          <option
            value="да"
          >
            да
          </option>
          <option value="нет">нет</option>
        </select>

      </>
    );
  }
}

export default InputEditProductsInStock;
