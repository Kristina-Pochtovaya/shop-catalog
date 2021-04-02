import React from 'react';
import processInputOnChange from '../utils/processInputOnChange';

class InputEditProductsName extends React.Component {
  constructor(props) {
    super(props);
    const { description } = this.props;
    this.state = {
      productsName: description,
    };
  }

  async handleNameChange(e) {
    const { updateData } = this.props;
    processInputOnChange(e, this.updateProductsName, updateData, 'updateProductName');
  }

  updateProductsName = (e) => this.setState({ productsName: e.target.value });

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
