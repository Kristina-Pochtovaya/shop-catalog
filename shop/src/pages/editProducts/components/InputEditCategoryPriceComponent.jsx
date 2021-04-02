import React from 'react';
import processInputOnChange from '../utils/processInputOnChange';

class InputEditCategoryPrice extends React.Component {
  constructor(props) {
    super(props);
    const { price } = this.props;
    this.state = {
      productsPrice: price,
    };
  }

  async handleProductsChange(e) {
    const { updateData } = this.props;
    processInputOnChange(e, this.updatePrice, updateData, 'updateProductPrice');
  }

  updatePrice = (e) => this.setState({ productsPrice: e.target.value });

  render() {
    const { productsPrice } = this.state;
    return (
      <>
        <input
          className="productsPriceInput"
          type="text"
          value={productsPrice}
          onChange={async (e) => {
            this.handleProductsChange(e);
          }}
        />
      </>
    );
  }
}

export default InputEditCategoryPrice;
