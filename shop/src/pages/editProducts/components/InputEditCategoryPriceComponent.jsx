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
    const { id } = this.state;
    e.preventDefault();

    this.setState({
      productsPrice: e.target.value,
    });
    postProductsPrice(id, e.target.value);
  }

  render() {
    const { productsPrice } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;
    return (
      <>
        <input
          className="productsPriceInput"
          type="text"
          value={productsPrice}
          onChange={async (e) => {
            this.handleProductsChange(e);
          }}
          onBlur={() => (isProductsUpdated
            ? setIsProductsUpdated(false)
            : setIsProductsUpdated(true))}
        />
      </>
    );
  }
}

export default InputEditCategoryPrice;
