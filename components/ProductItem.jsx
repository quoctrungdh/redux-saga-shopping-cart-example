import React from 'react';

function ProductItem({ title, price, inventory }) {
  return (
    <li>
      <h4>{title}</h4>
      <span>${price}</span><span>({inventory})</span> - &nbsp;
      <button>Add to cart</button>
    </li>
  );
}

export default ProductItem;
