import React from 'react';
import postCategoryName from '../api/post/postCategoryName';

class InputEditCategoryName extends React.Component {
  constructor(props) {
    super(props);
    const { category, id } = this.props;
    this.state = {
      id,
      categoryName: category,
    };
  }

  async handleImageChange(e) {
    const { id } = this.state;
    e.preventDefault();

    this.setState({
      categoryName: e.target.value,
    });
    postCategoryName(id, e.target.value);
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
