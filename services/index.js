import _products from './products'

const TIME_OUT = 100;

export const api = {
	getProducts() {
		return new Promise(resolve => {
			setTimeout(() => resolve(_products), TIME_OUT);
		})
	}
}