import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import App from './components/App';
import text from './reducers/text';

//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css';

const defaultState = {
  parsedText : "testing testing"
}

const store = createStore(text);

//render DOM
render(
  <Provider store= {store}>
    <App />
  </Provider> , document.getElementById('root'));
