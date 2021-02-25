const productsList = [
  {
    categoryId: 1,
    category: "Электротовары и свет",
    description: "Светильник потолочный Box Silver",
    imgAlt: "Светильник потолочный Box Silver",
    imgTitle: "Светильник потолочный Box Silver",
    price: 163,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 1,
    category: "Электротовары и свет",
    description: "Светильник потолочный Globo FORREST",
    imgAlt: "Светильник потолочный Globo FORREST",
    imgTitle: "Светильник потолочный Globo FORREST",
    price: 101,
    counter: 1,
    inStock: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 1,
    category: "Электротовары и свет",
    description: "Лампа настольная SURPA SL-27",
    imgAlt: "Лампа настольная SURPA SL-27",
    imgTitle: "Лампа настольная SURPA SL-27",
    price: 78,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 2,
    category: "Сад",
    description: "Качели садовые Olsa Элит",
    imgAlt: "Качели садовые Olsa Элит",
    imgTitle: "Качели садовые Olsa Элит",
    price: 390,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 3,
    category: "Бытовая техника",
    description: "Кофемашина MAUNFELD MF-720S PRO",
    imgAlt: "Кофемашина MAUNFELD MF-720S PRO",
    imgTitle: "Кофемашина MAUNFELD MF-720S PRO",
    price: 370,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 3,
    category: "Бытовая техника",
    description: "Печь микроволновая MAUNFELD MBMO.20.2PGB",
    imgAlt: "Печь микроволновая MAUNFELD MBMO.20.2PGB",
    imgTitle: "Печь микроволновая MAUNFELD MBMO.20.2PGB",
    price: 490,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 4,
    category: "Кухня",
    description: "Духовой шкаф Electrolux OPEB2320C",
    imgAlt: "Духовой шкаф Electrolux OPEB2320C",
    imgTitle: "Духовой шкаф Electrolux OPEB2320C",
    price: 490,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 4,
    category: "Кухня",
    description: "Духовой шкаф  Electrolux OEF5H70X",
    imgAlt: "Духовой шкаф  Electrolux OEF5H70X",
    imgTitle: "Духовой шкаф  Electrolux OEF5H70X",
    price: 1180,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 5,
    category: "Декор",
    description: "Часы настенные Troyka 91900929 (230)",
    imgAlt: "Часы настенные Troyka 91900929 (230)",
    imgTitle: "Часы настенные Troyka 91900929 (230)",
    price: 33,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 5,
    category: "Декор",
    description: "Репродукция в раме Styler Осень-1 (OB-02591) 500x500",
    imgAlt: "Репродукция в раме Styler Осень-1 (OB-02591) 500x500",
    imgTitle: "Репродукция в раме Styler Осень-1 (OB-02591) 500x500",
    price: 42,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 5,
    category: "Декор",
    description: "Подушка декоративная Nivasan Дино",
    imgAlt: "Подушка декоративная Nivasan Дино",
    imgTitle: "Подушка декоративная Nivasan Дино",
    price: 28,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 6,
    category: "Краски",
    description: "Краска стойкая интерьерная Alpina",
    imgAlt: "Краска стойкая интерьерная Alpina",
    imgTitle: "Краска стойкая интерьерная Alpina",
    price: 163,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 7,
    category: "Товары для дома",
    description: "Комлект постельного белья евро Mona Liza Chalet",
    imgAlt: "Комлект постельного белья евро Mona Liza Chalet",
    imgTitle: "Комлект постельного белья евро Mona Liza Chalet",
    price: 25,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 8,
    category: "Отделочные материалы",
    description: "Ковер Cancun 115(120)х170",
    imgAlt: "Ковер Cancun 115(120)х170",
    imgTitle: "Ковер Cancun 115(120)х170",
    price: 267,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 8,
    category: "Отделочные материалы",
    description: "Плитка керамическая Камни",
    imgAlt: "Плитка керамическая Камни",
    imgTitle: "Плитка керамическая Камни",
    price: 17,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 9,
    category: "Сантехника",
    description: "Душевой уголок Triton Риф 90*90 А",
    imgAlt: "Душевой уголок Triton Риф 90*90 А",
    imgTitle: "Душевой уголок Triton Риф 90*90 А",
    price: 403,
    counter: 1,
    inStock: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 9,
    category: "Сантехника",
    description: "Зеркало подвесное Mixline Блюз",
    imgAlt: "Зеркало подвесное Mixline Блюз",
    imgTitle: "Зеркало подвесное Mixline Блюз",
    price: 104,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    categoryId: 9,
    category: "Сантехника",
    description: "Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)",
    imgAlt: "Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)",
    imgTitle: "Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)",
    price: 598,
    counter: 1,
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', productsList, {});
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
