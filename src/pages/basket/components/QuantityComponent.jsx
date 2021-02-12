import React from 'react';
import { connect } from 'react-redux';

const Quantity = ({ counter }) => (
  <span>
    {counter}
  </span>
);

const ConnectedQuantity = connect(
  (state) => ({
    counter: state,
  }),
)(Quantity);

export default ConnectedQuantity;
