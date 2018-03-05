import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import Notification from '../Notification/Notification';

class Loader extends Component {
  render() {
    if (this.props.isFetching) {
      return <Notification message="Currently fetching some data" />;
    }
    return null;
  }
}

const mapStateToProps = state => {
  const found = find(state, 'isFetching');
  if (found) {
    return {
      isFetching: found.isFetching,
    };
  }
  return { isFetching: false };
};

export default connect(mapStateToProps)(Loader);
