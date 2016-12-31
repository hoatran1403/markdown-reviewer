import React from 'react';
import {render} from 'react-dom';


//import css
import bootstrap from './../../node_modules/bootstrap/dist/css/bootstrap.css';

//import react router dependencies
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main'

//Router configure
// const router = (
//   <Provider>
//     <Router>
//       <Route path="/" >
//         <IndexRoute component = {Main}></IndexRoute>
//
//       </Route>
//     </Router>
//   </Provider>
// )

//render DOM
render(<Main />, document.getElementById('root'))
