import React from 'react';
import PropTypes from 'prop-types';

const style = {
  price: { color: '#1B5E20', fontWeight: 600 },
};
const Price = props => {
  return <span style={style.price}>{props.price}</span>;
};

Price.propTypes = {
  price: PropTypes.string,
};

export default Price;
