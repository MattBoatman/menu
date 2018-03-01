import React, { Component } from 'react';
import './MainWrapper.css';
import Toolbar from '../Toolbar/Toolbar';
import CategoryWrapper from './CategoryWrapper/CategoryWrapper';

class MainWrapper extends Component {
  render() {
    return (
      <div>
        <Toolbar title="Boatman's Menu" />
        <div className="main-wrapper">
          <CategoryWrapper />
        </div>
      </div>
    );
  }
}

export default MainWrapper;
