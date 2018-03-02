import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 700,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#ffffff',
  },
};
const ToolbarButton = props => {
  return (
    <button onClick={props.onClick} style={styles.title}>
      {props.text}
    </button>
  );
};

ToolbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToolbarButton;
