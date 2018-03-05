import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import MainWrapper from './Wrappers/MainWrapper';
import './index.css';
import Errors from './Errors/Errors';
import Loader from './Loader/Loader';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Errors />
      {/* <Loader /> */}
      <MainWrapper />
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
