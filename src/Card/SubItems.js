import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';

const style = {
  subItemWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3px 0',
    marginTop: 10,
  },
  upgrade: {
    color: 'red',
    fontWeight: 800,
  },
};
const subItemsShape = {
  description: PropTypes.string,
  price: PropTypes.string,
};
const SubItems = props => {
  return (
    <div style={style.subItemWrapper}>
      <span style={props.isUpgrade ? style.upgrade : {}}>
        {props.description}
      </span>
      <Price price={props.price} />
    </div>
  );
};

SubItems.propTypes = {
  description: PropTypes.string,
  price: PropTypes.string,
  isUpgrade: PropTypes.bool,
};

export default SubItems;
