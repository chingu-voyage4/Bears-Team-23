import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

//Added below for redux store
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'
import {Router, Route, IndexRoute,browserHistory} from 'react-router';

import Main from './Components/main' //wrapper to pass authentication info downstream

//import combined reducer to pass to store here
import reducers from './reducers/index'

//use logger for debugging only
const middleware = applyMiddleware(thunk,logger)
//const middleware = applyMiddleware(thunk)
const store = createStore(reducers,middleware)

//decalre all routes of application below
const Routes = (
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={App}/>

    </Route>
  </Router>
</Provider>
)

//end redux

ReactDOM.render(Routes, document.getElementById("root"));
registerServiceWorker();
