import React from 'react';
import BasketTableHeader from './BasketTableHeaderComponent';
import ConnectedBusketTableColumns from '../containers/ConnectedBasketColumnsComponent';
import BackSymbol from '../../../common/components/icons/components/BackSymbol';

const BasketTable = ({
  items, OnDeleteAll,
}) => (
  <ul className="listOrder-wrap">
    <BasketTableHeader />
    <ConnectedBusketTableColumns />
    <div
      className="deleteAll"
    >
      <span
        className="deleteAllSpan"
        onClick={() => {
          OnDeleteAll(items);
        }}
        onKeyPress={OnDeleteAll}
        role="button"
        tabIndex="0"
      >
        <span className="deleteAllString">Удалить все товары</span>
        <BackSymbol className="deleteAllSymbol" />
      </span>
    </div>
    <div className="result">
      <h2 className="resultSum">
        Итого:
        {' '}
        {items.catalogItemsReducer.reduce((sum, current) => sum
              + (current.price * current.counter), 0)}
        {' '}
        руб
      </h2>
    </div>
  </ul>
);

export default BasketTable;
