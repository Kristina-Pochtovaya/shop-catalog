/* eslint-disable react/destructuring-assignment */
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
    e.preventDefault();

    this.setState({
      productsName: e.target.value,
    });
    postProductsName(this.state.id, e.target.value);
  }

  render() {
    const { productsName } = this.state;
    return (
      <>
        <textarea
          className="productsNameInput"
          type="text"
          value={productsName}
          onChange={async (e) => {
            this.handleNameChange(e);
          }}
          onBlur={() => (this.props.isProductsUpdated
            ? this.props.setIsProductsUpdated(false)
            : this.props.setIsProductsUpdated(true))}
        />
      </>
    );
  }
}

export default InputEditProductsName;
