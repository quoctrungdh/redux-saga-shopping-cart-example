import React from 'react';
import PropTypes from 'prop-types';

function Product({
  title, price, quantity, action,
}) {
  return (
    <div>
      <strong>{title}</strong>
      <span> - {price}</span>
      {
        quantity &&
        <span>({quantity})</span>
      }
      <span>{action}</span>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  action: PropTypes.node
};

export default Product;
