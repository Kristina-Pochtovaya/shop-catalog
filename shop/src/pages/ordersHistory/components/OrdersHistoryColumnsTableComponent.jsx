import React from 'react';
import noImage from '../../../common/assets/personal-account/noImage.png';

const OrdersHistoryColumnsTable = ({ ordersArray }) => (
  <>
    { ordersArray.map((order) => (
      <li key={order.id}>
        <div className="columns">
          <div className="columnGood">
            <img
              className="orderImage"
              src={order.image === null ? noImage : order.image}
              alt="orderImage"
              title="orderImage"
            />
            <h4 className="columnGoodNameTitle">
              {order.description}
            </h4>
          </div>
          <div className="columnQuantity">
            {order.counter}
          </div>
          <p className="columnAmount">
            {order.sum}
            {' '}
            руб.
          </p>
        </div>
      </li>
    ))}
  </>
);

export default OrdersHistoryColumnsTable;
