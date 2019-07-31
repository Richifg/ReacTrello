import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Icon imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faPlus,
  faStar,
  faClock,
  faPen,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

// Page imports
import HomePage from '../pages/homePage';
import BoardPage from '../pages/boardPage';
import NoMatchPage from '../pages/noMatchPage';

import AppHeader from './AppHeader';

library.add(
  faHome,
  faPlus,
  faStar,
  faClock,
  faPen,
  faClipboardList,
);

const AppBody = ({ color }) => (
  <div id="app" className="d-flex flex-column text-light">
    <AppHeader />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/board/:name" component={BoardPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
    <footer id="footer" className={`container-fluid bg-${color}`}>
      <div className="row justify-content-end">
        <h4>Footer</h4>
      </div>
    </footer>
  </div>
);

AppBody.propTypes = {
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  { color: state.color }
);

export default connect(mapStateToProps)(AppBody);
