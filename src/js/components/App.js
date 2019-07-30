import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import store from '../redux/store';
import HomePage from '../pages/homePage';
import BoardPage from '../pages/boardPage';
import NoMatchPage from '../pages/noMatchPage';

export default () => (
  <Provider store={store}>
    <div id="app" className="d-flex flex-column">
      <div id="header" className="container-fluid bg-dark text-center text-light">
        <h2>Trello Clone</h2>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/board/:name" component={BoardPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <footer id="footer" className="container-fluid bg-dark text-light">
        <div className="row justify-content-end">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  </Provider>
);
