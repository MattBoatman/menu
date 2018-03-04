import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

const style = {
  error: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: 0,
    right: 0,
    padding: 24,
    border: '1px solid #000000',
    margin:  24,
  },
};
class Errors extends Component {
  state = {
    show: true,
  };
componentWillReceiveProps(props) {
    if(props.error){
        setTimeout(() => {
            this.setState({show: true})
        })
        setTimeout(() => {
            this.setState({show: false})
        }, 3000)
    }
}

  render() {
    if (this.props.error) {
      return (this.state.show && <div id="error" style={style.error}>Something went wrong.</div>);
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
