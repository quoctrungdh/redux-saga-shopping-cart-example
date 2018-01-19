import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVisibleProducts } from '../reducers';
import { addToCart as addToCartAction } from '../actions';
import ProductItem from './ProductItem';

function ProductsList(props) {
  const { products, addToCart } = props;
  return (
    <ul>
      {
        products.map(product => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          inventory={product.inventory}
          addToCart={addToCart}
        />))
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state),
  };
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addToCart: addToCartAction })(ProductsList);
