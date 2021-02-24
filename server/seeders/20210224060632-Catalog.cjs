const catalogList = [
  {
    type: "Электротовары и свет",
    link: "/electrical-goods-and-lights",
    className: "titleElectricalGoodsAndLights",
    imgAlt: "Электротовары и свет",
    imgTitle: "Электротовары и свет",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Сад",
    link: "/garden",
    className: "titleGarden",
    imgAlt: "Сад",
    imgTitle: "Сад",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Бытовая техника",
    link: "/household-appliancies",
    className: "titleHouseholAppliancies",
    imgAlt: "Бытовая техника",
    imgTitle: "Бытовая техника",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Кухня",
    link: "/kitchen",
    className: "titleKitchen",
    imgAlt: "Кухня",
    imgTitle: "Кухня",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Декор",
    link: "/decor",
    className: "titleDecor",
    imgAlt: "Декор",
    imgTitle: "Декор",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Краски",
    link: "/colors",
    className: "titleColors",
    imgAlt: "Краски",
    imgTitle: "Краски",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Товары для дома",
    link: "/household-goods",
    className: "titleHouseholdGoods",
    imgAlt: "Товары для дома",
    imgTitle: "Товары для дома",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Отделочные материалы",
    link: "/decoration-materials",
    className: "titleDecorationMaterials",
    imgAlt: "Отделочные материалы",
    imgTitle: "Отделочные материалы",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: "Сантехника",
    link: "/sanitary-engineering",
    className: "titleSanitaryEngineering",
    imgAlt: "Сантехника",
    imgTitle: "Сантехника",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Catalog', catalogList, {});
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Catalog', null, {});
  }
};