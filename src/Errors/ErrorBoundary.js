import React, { Component } from 'react';

const style ={
    error: {
        height: 200,
        margin: 0,
    }
}
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      console.log(error);
      console.log(info);
    }

    render() {
      if (this.state.hasError) {
        return <h1 style={style.error}>I'm having trouble getting the needed information, please try again later.</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;