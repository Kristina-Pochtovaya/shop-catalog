import React from 'react';

class InputEditCategoryPrice extends React.Component {
  constructor(props) {
    super(props);
    const { price } = this.props;
    this.state = {
      productsPrice: price,
    };
  }

  async handleProductsChange(e) {
    const { updateProductPrice } = this.props;
    e.preventDefault();

    this.setState({
      productsPrice: e.target.value,
    });
    updateProductPrice(e.target.value);
  }

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
