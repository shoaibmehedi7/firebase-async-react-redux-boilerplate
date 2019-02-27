import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers/index"
import Home from "./components/home"

//route and redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
