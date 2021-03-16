import React from 'react';
import postProductsName from '../api/post/postProductsName';

class InputEditProductsName extends React.Component {
  constructor(props) {
    super(props);
    const { description, id } = this.props;
    this.state = {
      id,
      productsName: description,
    };
  }

  async handleNameChange(e) {
    const { id } = this.state;
    e.preventDefault();

    this.setState({
      productsName: e.target.value,
    });
    postProductsName(id, e.target.value);
  }

  render() {
    const { productsName } = this.state;
    const { isProductsUpdated, setIsProductsUpdated } = this.props;
    return (
      <>
        <textarea
          className="productsNameInput"
          type="text"
          value={productsName}
          onChange={async (e) => {
            this.handleNameChange(e);
          }}
          onBlur={() => (isProductsUpdated
            ? setIsProductsUpdated(false)
            : setIsProductsUpdated(true))}
        />
      </>
    );
  }
}

export default InputEditProductsName;
