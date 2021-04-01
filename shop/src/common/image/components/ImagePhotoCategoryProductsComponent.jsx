import React from 'react';
import setPhotoImage from '../../untils/setPhotoImage';
import getCategories from '../../../pages/editCategory/api/get/getCategories';

class ImagePhotoCategoryProducts extends React.Component {
  async componentDidMount() {
    const { updateData } = this.props;
    this._isMounted = true;
    await getCategories(updateData);
  }

  componentDidUpdate(prevProps, prevState) {
    const { updateData, isUpdated } = this.props;

    if (prevProps.isUpdated !== isUpdated) {
      this._isMounted = true;
      getCategories(updateData);
    }
  }

  render() {
    const { className, imagePreviewUrl } = this.props;
    return (
      <img
        src={setPhotoImage(className, imagePreviewUrl)}
        className={className}
        title={className}
        alt={className}
      />
    );
  }
}

export default ImagePhotoCategoryProducts;
