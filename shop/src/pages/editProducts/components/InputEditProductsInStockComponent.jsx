import React from 'react';
import PopUp from '../../../common/popup/components/PopUpComponent';
import PopUpSomethingWentWrong from '../../../common/popup/components/PopUpSomethingWentWrongComponent';
import getProducts from '../api/get/getProducts';

class InputEditProductsInStock extends React.Component {
  constructor(props) {
    super(props);
    const { inStock } = this.props;
    this.state = {
      inStock: Number(inStock) === 1 ? 'да' : 'нет',
      productsArray: [],
      errorMessage: '',
      isLoading: false,
      popupSmthWentWrongActive: true,
    };
  }

  componentDidMount() {
    this.interval = setTimeout(async () => {
      await getProducts(this.updateData, this.setError);
    }, 10);
  }

  async handleInStockProductsChange(e) {
    const { updateProductInStock } = this.props;
    e.preventDefault();

    this.setState({
      inStock: e.target.value,
    });
    updateProductInStock(e.target.value === 'да' ? 1 : 0);
  }

  setError=(value) => { this.setState({ errorMessage: value }); }

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateData=(value, valueIsLoading) => {
    this.setState({ productsArray: value, isLoading: valueIsLoading });
  }

  render() {
    const {
      productsArray, errorMessage,
      isLoading, popupSmthWentWrongActive, inStock,
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
          value={inStock}
          onChange={async (e) => {
            this.handleInStockProductsChange(e);
          }}
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
