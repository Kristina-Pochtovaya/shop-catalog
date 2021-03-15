/* eslint-disable react/destructuring-assignment */
import React from 'react';
import postProductsPrice from '../api/post/postProductsPrice';

class InputEditCategoryPrice extends React.Component {
  constructor(props) {
    super(props);
    const { price, id } = this.props;
    this.state = {
      id,
      productsPrice: price,
    };
  }

  async handleProductsChange(e) {
    e.preventDefault();

    this.setState({
      productsPrice: e.target.value,
    });
    postProductsPrice(this.state.id, e.target.value);
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
          onBlur={() => (this.props.isProductsUpdated
            ? this.props.setIsProductsUpdated(false)
            : this.props.setIsProductsUpdated(true))}
        />
      </>
    );
  }
}

export default InputEditCategoryPrice;
