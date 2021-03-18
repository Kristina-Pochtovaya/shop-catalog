import express from 'express';
import category from './category/categoryRoute.js';
import editCategory from './category/editCategoryRoute.js';
import addCategory from './category/addCategoryRoute.js';
import deleteCategory from './category/deleteCategoryRoute.js';

const commonCategory = express.Router();

commonCategory.get('/category', category);

commonCategory.all('/category-edit', editCategory);

commonCategory.post('/add-category', addCategory);

commonCategory.post('/delete-category', deleteCategory);

export default commonCategory;
