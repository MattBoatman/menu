import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const Toolbar = props => {
  return (
    <div className="toolbarWrapper">
      <span className="title">{props.title}</span>
    </div>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Toolbar;
