import React from 'react';

class InputEditCategoryName extends React.Component {
  constructor(props) {
    super(props);
    const { category } = this.props;
    this.state = {
      categoryName: category,
    };
  }

   handleNameChange = async (e) => {
     const { updateCategoryName } = this.props;
     this.setState({ categoryName: e.target.value });
     updateCategoryName(e.target.value);
   }

   render() {
     const { categoryName } = this.state;
     return (
       <>
         <input
           className="categoryName"
           type="text"
           value={categoryName}
           onChange={async (e) => {
             this.handleNameChange(e);
           }}
         />
       </>
     );
   }
}

export default InputEditCategoryName;
