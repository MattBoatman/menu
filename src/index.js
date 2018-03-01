import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainWrapper from './MainWrapper/MainWrapper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainWrapper />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
