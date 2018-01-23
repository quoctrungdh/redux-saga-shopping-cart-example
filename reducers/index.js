import { combineReducers } from 'redux';

import { default as products, getProduct } from './products';
import { default as cart, getAddedIds, getQuantity } from './cart';

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(id => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id),
  }));
}

export function getTotal(state) {
  return getAddedIds(state.cart)
    .reduce((total, id) =>
      total + (getProduct(state.products, id).price * getQuantity(state.cart, id)), 0).toFixed(2);
}

export default combineReducers({
  products,
  cart,
});
