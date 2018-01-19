import { combineReducers } from 'redux';

import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../actions';

function products(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
}

function byId(state = {}, action) {
  const { type, productId } = action;
  switch (type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((accu, product) => ({
          ...accu,
          [product.id]: product,
        }), {}),
      };
    default:
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
}

function getProduct(state, id) {
  return state.byId[id];
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id));
}

export default combineReducers({
  byId,
  visibleIds,
});
