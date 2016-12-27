import React from 'react';
import {render} from 'react-dom';

//import components

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, from './store';

//Router configure
const router = (
  <Provider store = { store }>
    <Router>
      <Route path="/" {App}>
        
      </Route>
    </Router>
  </Provider>
)

//render DOM
render(router, document.getElementById('roots'))
