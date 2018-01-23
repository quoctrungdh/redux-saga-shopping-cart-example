import { combineReducers } from 'redux';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  checkoutStatus: {

  },
  quantityById: {},
};

function quantityById(state = initialState.quantityById, action) {
  const { type, productId } = action;
  let qty = null;
  let copy = null;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    case REMOVE_FROM_CART:
      qty = (state[productId] || 0) - 1;
      copy = { ...state };

      if (qty > 0) {
        copy[productId] = qty;
      } else {
        delete copy[productId];
      }

      return copy;
    default:
      return state;
  }
}

export default combineReducers({
  quantityById,
});

export function getAddedIds(state) {
  return Object.keys(state.quantityById);
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0;
}
