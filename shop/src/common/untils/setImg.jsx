import electricalGoodsAndLights from '../../assets/catalog/electrical-goods-and-lights.jpg';
import garden from '../../assets/catalog/garden.jpg';
import householdAppliancies from '../../assets/catalog/household-appliancies.jpg';
import kitchen from '../../assets/catalog/kitchen.jpg';
import decor from '../../assets/catalog/decor.jpg';
import colors from '../../assets/catalog/colors.jpg';
import householdGoods from '../../assets/catalog/household-goods.jpg';
import decorationMaterials from '../../assets/catalog/decoration-materials.jpg';
import sanitaryEngineering from '../../assets/catalog/sanitary-engineering.jpg';
import light1 from '../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';
import light2 from '../../assets/catalog-items/electricalGoodsAndLights/light2.jpg';
import light3 from '../../assets/catalog-items/electricalGoodsAndLights/light3.jpg';
import garden1 from '../../assets/catalog-items/garden/garden1.jpg';
import householdAppliancies1 from '../../assets/catalog-items/householdAppliancies/householdAppliancies1.jpg';
import householdAppliancies2 from '../../assets/catalog-items/householdAppliancies/householdAppliancies2.jpg';
import kitchen1 from '../../assets/catalog-items/kitchen/kitchen1.jpg';
import kitchen2 from '../../assets/catalog-items/kitchen/kitchen2.jpg';
import decor1 from '../../assets/catalog-items/decor/decor1.jpg';
import decor2 from '../../assets/catalog-items/decor/decor2.jpg';
import decor3 from '../../assets/catalog-items/decor/decor3.jpg';
import colors1 from '../../assets/catalog-items/colors/colors1.jpg';
import householdGoods1 from '../../assets/catalog-items/householdGoods/householdGoods1.jpg';
import decorationMaterials1 from '../../assets/catalog-items/decorationMaterials/decorationMaterials1.jpg';
import decorationMaterials2 from '../../assets/catalog-items/decorationMaterials/decorationMaterials2.jpg';
import sanitaryEngineering1 from '../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering1.jpg';
import sanitaryEngineering2 from '../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering2.jpg';
import sanitaryEngineering3 from '../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering3.jpg';

function setImg(name) {
  let result = '';

  if (name === 'Электротовары и свет') result = electricalGoodsAndLights;
  if (name === 'Сад') result = garden;
  if (name === 'Бытовая техника') result = householdAppliancies;
  if (name === 'Кухня') result = kitchen;
  if (name === 'Декор') result = decor;
  if (name === 'Краски') result = colors;
  if (name === 'Товары для дома') result = householdGoods;
  if (name === 'Отделочные материалы') result = decorationMaterials;
  if (name === 'Сантехника') result = sanitaryEngineering;

  if (name === 'Светильник потолочный Box Silver') result = light1;
  if (name === 'Светильник потолочный Globo FORREST') result = light2;
  if (name === 'Лампа настольная SURPA SL-27') result = light3;

  if (name === 'Качели садовые Olsa Элит') result = garden1;

  if (name === 'Кофемашина MAUNFELD MF-720S PRO') result = householdAppliancies1;
  if (name === 'Печь микроволновая MAUNFELD MBMO.20.2PGB') result = householdAppliancies2;

  if (name === 'Духовой шкаф Electrolux OPEB2320C') result = kitchen1;
  if (name === 'Духовой шкаф  Electrolux OEF5H70X') result = kitchen2;

  if (name === 'Часы настенные Troyka 91900929 (230)') result = decor1;
  if (name === 'Репродукция в раме Styler Осень-1 (OB-02591) 500x500') result = decor2;
  if (name === 'Подушка декоративная Nivasan Дино') result = decor3;

  if (name === 'Краска стойкая интерьерная Alpina') result = colors1;

  if (name === 'Комлект постельного белья евро Mona Liza Chalet') result = householdGoods1;

  if (name === 'Ковер Cancun 115(120)х170') result = decorationMaterials1;
  if (name === 'Плитка керамическая Камни') result = decorationMaterials2;

  if (name === 'Душевой уголок Triton Риф 90*90 А') result = sanitaryEngineering1;
  if (name === 'Зеркало подвесное Mixline Блюз') result = sanitaryEngineering2;
  if (name === 'Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)') result = sanitaryEngineering3;

  return result;
}

export default setImg;
