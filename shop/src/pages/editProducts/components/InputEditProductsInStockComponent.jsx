import React from 'react';
import PopUpErrorLoading from '../../../common/components/popup/components/PopUpErrorLoadingComponent';
import getProducts from '../api/get/getProducts';
import handleInStockProductsChange from '../utils/handleInStockProductsChange';

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
    const { updateData } = this.props;

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
            handleInStockProductsChange(e, this.updateinStock, updateData, 'updateProductInStock');
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
