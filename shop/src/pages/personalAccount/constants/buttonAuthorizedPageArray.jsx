import React from 'react';
import OrderHistoryIcon from '../../../common/components/icons/components/orderHistoryIcon';
import CurrentOrderIcon from '../../../common/components/icons/components/currentOrderIcon';
import PersonalAccountIcon from '../../../common/components/icons/components/PersonalAccountSymbol';

const buttonAuthorizedPageArray = [{
  className: 'historyOrdersColumn',
  text: 'История заказов',
  type: 'column',
},
{
  className: 'basketColumn',
  text: 'Текущие товары',
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
  className: 'historyOrdersRow',
  classNameString: 'historyOrdersString',
  text: 'История заказов',
  type: 'row',
  svg: <OrderHistoryIcon />,
},
{
  className: 'basketRow',
  classNameString: 'basketString',
  text: 'Текущие товары',
  type: 'row',
  svg: <CurrentOrderIcon />,
},
{
  className: 'personalDataRow',
  classNameString: 'personalAccountString',
  text: 'Личные данные',
  type: 'row',
  svg: <PersonalAccountIcon className="personalAccountIcon" />,
},
];

export default buttonAuthorizedPageArray;
