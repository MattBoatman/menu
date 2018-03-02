import React from 'react';
import PropTypes from 'prop-types';

const style = {
  upgrade: {
    color: 'red',
    fontWeight: 800,
  },
};

const Upgrade = props => {
  return (
    <span style={props.isUpgrade ? style.upgrade : {}}>
      {props.description}
    </span>
  );
};

Upgrade.propTypes = {
  isUpgrade: PropTypes.bool,
  description: PropTypes.string,
};

export default Upgrade;
