import React from 'react';

class InputEditProductsName extends React.Component {
  constructor(props) {
    super(props);
    const { description } = this.props;
    this.state = {
      productsName: description,
    };
  }

  async handleNameChange(e) {
    const { updateProductName } = this.props;
    e.preventDefault();

    this.setState({
      productsName: e.target.value,
    });
    updateProductName(e.target.value);
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
        />
      </>
    );
  }
}

export default InputEditProductsName;
