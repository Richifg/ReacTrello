import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import store from '../redux/store';
import HomePage from '../pages/homePage';
import BoardPage from '../pages/boardPage';
import NoMatchPage from '../pages/noMatchPage';

export default () => (
  <Provider store={store}>
    <div id="app" className="d-flex flex-column bg-dark">
      <div id="header" className="container text-center text-light">
        <h2>Trello Clone</h2>
      </div>
      <div id="content" className="container-fluid bg-primary py-4">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/board" component={BoardPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      </div>
      <footer id="footer" className="container text-light">
        <div className="row justify-content-end">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  </Provider>
);
