import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import Upgrade from './Upgrade';

const style = {
  subItemWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '3px 0',
    marginTop: 10,
  },
};

const SubItems = props => {
  return (
    <div style={style.subItemWrapper}>
      <Upgrade description={props.description} isUpgrade={props.isUpgrade} />
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
