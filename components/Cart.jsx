import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { getCartProducts, getTotal } from '../reducers';
import { removeFromCart as removeFromCartAction } from '../actions';

function Cart({
  products, removeFromCart, total,
}) {
  const hasProducts = products.length > 0;
  const nodes = !hasProducts
    ? <p>Please add some products</p>
    : products.map(product =>
      (<CartItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        onRemove={() => removeFromCart(product.id)}
      />));

  return (
    <div>
      {nodes}
      <p>Total: &#36;{total}</p>
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
  }),
  {
    removeFromCart: removeFromCartAction,
  },
)(Cart);
