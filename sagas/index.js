import { call, put, all, fork } from 'redux-saga/effects';

import api from '../services';
import * as actions from '../actions';

export function* getAllProducts() {
  const products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}

export default function* root() {
  yield all([
    fork(getAllProducts),
  ]);
}
