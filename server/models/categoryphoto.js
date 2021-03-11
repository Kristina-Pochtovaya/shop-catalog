'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CategoryPhoto.init({
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CategoryPhoto',
  });
  return CategoryPhoto;
};