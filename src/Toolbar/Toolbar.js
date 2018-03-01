import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const Toolbar = props => {
  return (
      <span className="title">{props.title}</span>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Toolbar;
