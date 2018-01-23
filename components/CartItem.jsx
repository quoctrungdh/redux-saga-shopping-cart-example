import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

function CartItem({
  title, price, quantity, onRemove,
}) {
  return (
    <Product
      title={title}
      price={price}
      quantity={quantity}
      action={
        <button onClick={onRemove}>
          x
        </button>
      }
    />
  );
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
