import React from 'react';
import PropTypes from 'prop-types';

const style = {
  upgrade: {
    color: 'red',
    fontWeight: 800,
  },
  normal: {
    fontWeight: 400,
  },
};

const Upgrade = props => {
  return (
    <span style={props.isUpgrade ? style.upgrade : style.normal}>
      {props.description}
    </span>
  );
};

Upgrade.propTypes = {
  isUpgrade: PropTypes.bool,
  description: PropTypes.string,
};

export default Upgrade;
