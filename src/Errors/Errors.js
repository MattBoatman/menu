import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import Notification from '../Notification/Notification';

class Errors extends Component {
  state = {
    show: true,
  };
  componentWillReceiveProps(props) {
    if (props.error) {
      setTimeout(() => {
        this.setState({ show: true });
      });
      setTimeout(() => {
        this.setState({ show: false });
      }, 3000);
    }
  }

  render() {
    if (this.props.error) {
      return (
        this.state.show && (
          <Notification message="We hit a snag, please try again!" />
        )
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  const found = find(state, 'error');
  if (found) {
    return {
      error: found.error,
    };
  }
  return { error: false };
};

export default connect(mapStateToProps)(Errors);
