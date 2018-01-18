import { combineReducers } from 'redux';

import { RECEIVE_PRODUCTS } from '../actions';

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((accu, product) => ({
          ...accu,
          [product.id]: product,
        }), {}),
      };
    default:
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
