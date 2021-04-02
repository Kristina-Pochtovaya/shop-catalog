import React from 'react';
import PopUpErrorLoading from '../../../common/popup/components/PopUpErrorLoadingComponent';
import getProducts from '../api/get/getProducts';
import processInStockOnChange from '../utils/processInStockOnChange';

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

  async componentDidMount() {
    await getProducts(this.updateData, this.setError);
  }

  async handleInStockProductsChange(e) {
    const { updateData } = this.props;
    processInStockOnChange(e, this.updateinStock, updateData, 'updateProductInStock');
  }

  setError=(value) => this.setState({ errorMessage: value });

  updateinStock = (e) => this.setState({ inStock: e.target.value });

  setpopupSmthWentWrongActive = (value) => { this.setState({ popupSmthWentWrongActive: value }); }

  updateData=(value, valueIsLoading) => {
    this.setState({ productsArray: value, isLoading: valueIsLoading });
  }

  render() {
    const {
      productsArray, errorMessage, isLoading, popupSmthWentWrongActive, inStock,
    } = this.state;

    if (!isLoading) { return <div className="-isLoading"> </div>; }
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
          className="productsInStockInput"
          value={inStock}
          onChange={async (e) => {
            this.handleInStockProductsChange(e);
          }}
        >
          <option value="да"> да </option>
          <option value="нет">нет</option>
        </select>
      </>
    );
  }
}

export default InputEditProductsInStock;
