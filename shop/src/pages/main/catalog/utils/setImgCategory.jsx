import electricalGoodsAndLights from '../../../../assets/catalog/electrical-goods-and-lights.jpg';
import garden from '../../../../assets/catalog/garden.jpg';
import householdAppliancies from '../../../../assets/catalog/household-appliancies.jpg';
import kitchen from '../../../../assets/catalog/kitchen.jpg';
import decor from '../../../../assets/catalog/decor.jpg';
import colors from '../../../../assets/catalog/colors.jpg';
import householdGoods from '../../../../assets/catalog/household-goods.jpg';
import decorationMaterials from '../../../../assets/catalog/decoration-materials.jpg';
import sanitaryEngineering from '../../../../assets/catalog/sanitary-engineering.jpg';

function setImgCategory(category) {
  let result = '';

  if (category === 'Электротовары и свет') result = electricalGoodsAndLights;
  if (category === 'Сад') result = garden;
  if (category === 'Бытовая техника') result = householdAppliancies;
  if (category === 'Кухня') result = kitchen;
  if (category === 'Декор') result = decor;
  if (category === 'Краски') result = colors;
  if (category === 'Товары для дома') result = householdGoods;
  if (category === 'Отделочные материалы') result = decorationMaterials;
  if (category === 'Сантехника') result = sanitaryEngineering;

  return result;
}

export default setImgCategory;
