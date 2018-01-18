import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getVisibleProducts } from '../reducers';
import ProductItem from './ProductItem';


class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(productId) {
    console.log(productId, this.props);
  }

  render() {
    console.log(this.props.products)
    return (
      <ul>
        {
          this.props.products.map(product => (<ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            inventory={product.inventory}
            addToCart={this.addToCart}
          />))
        }
      </ul>
    );
  }
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
};

export default connect(mapStateToProps)(ProductsList);
