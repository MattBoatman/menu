import React from 'react';
import PropTypes from 'prop-types';

const style = {
  price: { color: '#1B5E20', fontWeight: 600 },
  enlargePrice: { fontSize: '1.2em', color: '#1B5E20', fontWeight: 600 },
};
const Price = props => {
  return (
    <span style={props.enlargePrice ? style.enlargePrice : style.price}>
      {props.price}
    </span>
  );
};

Price.propTypes = {
  price: PropTypes.string,
  enlargePrice: PropTypes.bool,
};

export default Price;
