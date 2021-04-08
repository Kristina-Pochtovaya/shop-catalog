import setPhotoImage from './setPhotoImage';
import personalAccount from '../assets/personal-account/personal-account.jpg';
import noImage from '../assets/personal-account/noImage.png';
import setImg from './setImg';

jest.mock('./setImg');

describe('should set dynamic src', () => {
  jest.mock('./setImg', () => ({
    setImg: jest.fn().mockImplementation(() => true),
  }));

  it('should retrun imagePreviewUrl if name is photoPersonalAccount', () => {
    expect((setPhotoImage('photoPersonalAccount', 'imagePreviewUrl'))).toBe('imagePreviewUrl');
  });

  it('should return image if name is photoPersonalAccountEmpty', () => {
    expect((setPhotoImage('photoPersonalAccountEmpty', 'imagePreviewUrl'))).toBe(personalAccount);
  });

  it('should return imagePreviewUrl if name is imageCategory', () => {
    expect((setPhotoImage('imageCategory', 'imagePreviewUrl'))).toBe('imagePreviewUrl');
  });

  it('should return image if name is errorImage or imagePreviewUrl is empty', () => {
    expect((setPhotoImage('errorImage', 'imagePreviewUrl'))).toBe(noImage);
    expect((setPhotoImage('errorImage', ''))).toBe(noImage);
  });

  it('setImg should be executed if name is setImage', () => {
    expect(setImg).toHaveBeenCalledTimes(0);
    setImg.mockReturnValueOnce(true);
    setPhotoImage('setImage', '');
    expect(setImg).toHaveBeenCalledTimes(1);
  });

  it('setImg should be executed if name is imageProductsEmpty', () => {
    expect(setImg).toHaveBeenCalledTimes(0);
    setImg.mockReturnValueOnce(true);
    setPhotoImage('imageProductsEmpty', 'imagePreviewUrl', 'description');
    expect(setImg).toHaveBeenCalledTimes(1);
  });

  it('should return imagePreviewUrl if name is imageProducts', () => {
    expect((setPhotoImage('imageProducts', 'imagePreviewUrl'))).toBe('imagePreviewUrl');
  });
});
