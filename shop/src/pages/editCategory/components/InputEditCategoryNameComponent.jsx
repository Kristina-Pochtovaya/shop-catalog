import React from 'react';

class InputEditCategoryName extends React.Component {
  constructor(props) {
    super(props);
    const { category } = this.props;
    this.state = {
      categoryName: category,
    };
  }

  async handleImageChange(e) {
    const { updateCategoryName } = this.props;
    e.preventDefault();

    this.setState({
      categoryName: e.target.value,
    });
    updateCategoryName(e.target.value);
  }

  render() {
    const { categoryName } = this.state;
    return (
      <>
        <input
          type="text"
          value={categoryName}
          onChange={async (e) => {
            this.handleImageChange(e);
          }}
        />
      </>
    );
  }
}

export default InputEditCategoryName;
