import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers';

//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css';

const defaultState = {
  text: {
    parsedText : "testing testing"
  }

}

const store = createStore(reducer);

//render DOM
render(
  <Provider store= {store}>
    <App />
  </Provider> , document.getElementById('root'));
