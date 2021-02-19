import light1 from '../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';
import light2 from '../../assets/catalog-items/electricalGoodsAndLights/light2.jpg';
import light3 from '../../assets/catalog-items/electricalGoodsAndLights/light3.jpg';

const catalogItems = [
  {
    type: 'ElectricalGoodsAndLights',
    id: 1,
    description: 'Светильник потолочный Box Silver',
    img: {
      className: 'imgItem',
      src: light1,
      alt: 'Светильник потолочный Box Silver',
      title: 'Светильник потолочный Box Silver',
    },
    price: 163,
    counter: 1,
    inStock: true,
  },
  {
    type: 'ElectricalGoodsAndLights',
    id: 2,
    description: 'Светильник потолочный Globo FORREST',
    img: {
      className: 'imgItem',
      src: light2,
      alt: 'Светильник потолочный Globo FORREST',
      title: 'Светильник потолочный Globo FORREST',
    },
    price: 101,
    counter: 1,
    inStock: false,
  },
  {
    type: 'ElectricalGoodsAndLights',
    id: 3,
    description: 'Лампа настольная SURPA SL-27',
    img: {
      className: 'imgItem',
      src: light3,
      alt: 'Лампа настольная SURPA SL-27',
      title: 'Лампа настольная SURPA SL-27',
    },
    price: 78,
    counter: 1,
    inStock: true,
  },
];

export default catalogItems;
