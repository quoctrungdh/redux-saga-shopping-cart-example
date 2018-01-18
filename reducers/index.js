import { combineReducers } from 'redux';

import { RECEIVE_PRODUCTS } from '../actions';

function byId(state = {}, action) {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return {
				...state,
				...action.products.reduce((accu, product) => ({
					...accu,
					[product.id]: product
				}), {})
			}
		default:
			return state;
	}
}

export default combineReducers({
	byId
})
