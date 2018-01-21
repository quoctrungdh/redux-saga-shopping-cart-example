import { combineReducers } from 'redux';

import { ADD_TO_CART } from '../actions';

const initialState = {
  checkoutStatus: {

  },
  quantityById: {},
};

function quantityById(state = initialState.quantityById, action) {
  const { type, productId } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
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
