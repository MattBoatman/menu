import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  message: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: 0,
    right: 0,
    padding: 24,
    border: '1px solid #000000',
    margin: 24,
  },
};

class Notication extends Component {
  render() {
    return <div style={style.message}>{this.props.message}</div>;
  }
}

Notication.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notication;
