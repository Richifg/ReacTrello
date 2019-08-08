import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Html5Backend from 'react-dnd-html5-backend';

import store from '../redux/store';

// Page imports
import HomePage from '../pages/homePage';
import BoardPage from '../pages/boardPage';
import LoginPage from '../pages/loginPage';
import NoMatchPage from '../pages/noMatchPage';


export default () => (
  <Provider store={store}>
    <DndProvider backend={Html5Backend}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/board/:id" component={BoardPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </DndProvider>
  </Provider>
);
