import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

function ProductItem({
  title, price, inventory, addToCart, id,
}) {
  const action = (
    <button
      onClick={() => addToCart(id)}
      disabled={inventory < 1}
    >
      {
        inventory
        ? 'Add to cart'
        : 'Sold out'
      }
    </button>
  );

  return (
    <li>
      <Product
        title={title}
        price={price}
        action={action}
      />
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
