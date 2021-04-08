import React from 'react';
import OrdersHistoryHeaderTable from './OrdersHistoryHeaderTableComponent';
import OrdersHistoryColumnsTable from './OrdersHistoryColumnsTableComponent';

const OrdersHistoryTable = ({ ordersArray }) => (
  <div className="ordersHistory-box">
    <h2 className="orders"> История заказов</h2>
    <ul className="listOrder-wrap">
      <OrdersHistoryHeaderTable />
      <OrdersHistoryColumnsTable ordersArray={ordersArray} />
    </ul>
  </div>
);

export default OrdersHistoryTable;
