import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { getCartProducts } from '../reducers';

function Cart({
  products,
}) {
  const hasProducts = products.length > 0;
  const nodes = !hasProducts
    ? <p>Please add some products</p>
    : products.map(product =>
      (<Product
        key={product.id}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
      />));

  return (
    <div>
      {nodes}
    </div>
  );
}

export default connect(
  state => ({
    products: getCartProducts(state),
  }),
  null,
)(Cart);
