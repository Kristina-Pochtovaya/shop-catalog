import adminCatalog from '../../../assets/personal-account/admin-catalog.jpg';
import adminProducts from '../../../assets/personal-account/admin-products.png';

const buttonAdminPageArray = [{
  className: 'categoryColumn',
  text: 'Категории',
  type: 'column',
},
{
  className: 'catalogOfGoodsColumn',
  text: 'Каталог товаров',
  type: 'column',
},
{
  className: 'personalDataColumn',
  text: 'Личные данные',
  type: 'column',
},
{
  className: 'exitButton',
  text: 'Выйти',
  type: 'column',
},
{
  className: 'categoryRow',
  classNameString: 'categoryString',
  text: 'Категории',
  type: 'row',
  src: adminCatalog,
  image: 'adminCatalog',
},
{
  className: 'catalogOfGoodsRow',
  classNameString: 'productsString',
  text: 'Каталог товаров',
  type: 'row',
  src: adminProducts,
  image: 'adminCatalog',
},
{
  className: 'personalDataRow',
  classNameString: 'personalAccountString',
  text: 'Личные данные',
  type: 'row',
},
];

export default buttonAdminPageArray;
