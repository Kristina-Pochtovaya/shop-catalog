import React from 'react';
import AddCategoryProductImage from './AddCategoryProductImage';

const FormAddCategory = ({
  categoryName, updateImage, updateName, updateColor, handleButtonClick,
}) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={(e) => handleSubmit(e)} id="upload-container">
      <p className="errorNewName -disabled" id="errorNewName">Категория с таким именем уже существует</p>
      <p className="errorProhibitedsymbols -disabled" id="errorProhibitedsymbols">Только буквы и цифры допутсимы в названии</p>
      <p className="categoryNameString">Название</p>
      <input
        type="text"
        className="categoryNameInput"
        value={categoryName}
        onChange={(e) => updateName(e)}
      />
      <p className="categoryColorString">Цвет заголовка</p>
      <select
        className="imageColors"
        onChange={(e) => updateColor(e)}
      >
        <option value="1" defaultValue>Фиолетовый</option>
        <option value="2">Коричневый</option>
        <option value="3">Зеленый</option>
      </select>
      <AddCategoryProductImage updateImage={updateImage} />
      <button
        className="addNewCategoryButton"
        type="button"
        onClick={() => handleButtonClick()}
      >
        Добавить
      </button>
    </form>
  );
};

export default FormAddCategory;
