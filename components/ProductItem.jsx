import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({
  title, price, inventory, addToCart, id,
}) {
  return (
    <li>
      <h4>{title}</h4>
      <span>${price}</span><span>({inventory})</span> - &nbsp;
      <button onClick={() => addToCart(id)}>
        Add to cart
      </button>
    </li>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
