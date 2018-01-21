import React from 'react';

import ProductsList from './ProductsList';
import Cart from './Cart';

export default function App() {
  return (
    <div>
      <h3>Products list:</h3>
      <ProductsList />
      <h3>Cart</h3>
      <Cart />
    </div>
  );
}
