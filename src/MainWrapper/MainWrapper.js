import React, { Component } from 'react';
import './MainWrapper.css';
import Toolbar from '../Toolbar/Toolbar';

class MainWrapper extends Component {
  render() {
    return (
      <div>
        <Toolbar title="Boatman's Menu" />
      </div>
    );
  }
}

export default MainWrapper;
