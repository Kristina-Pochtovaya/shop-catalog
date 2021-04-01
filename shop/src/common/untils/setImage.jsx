function setImage(reader, updateData, updateImage, file) {
  if (file) {
    const result = reader;
    result.onloadend = async () => {
      updateData(reader.result);
      updateImage(reader.result);
    };
    result.readAsDataURL(file);
  }
}
export default setImage;
