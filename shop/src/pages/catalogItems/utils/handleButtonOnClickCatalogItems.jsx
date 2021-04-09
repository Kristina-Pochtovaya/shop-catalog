const handleButtonOnClick = (product, img, setPopupBasketctive, onAdd) => {
  setPopupBasketctive(true);
  onAdd({
    img,
    description: product.description,
    id: product.id,
    price: product.price,
    counter: product.counter,
    category: product.category,
  });
};

export default handleButtonOnClick;
