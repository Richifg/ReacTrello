import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Page imports
import HomePage from '../pages/homePage';
import BoardPage from '../pages/boardPage';
import NoMatchPage from '../pages/noMatchPage';

const AppBody = ({ color }) => (
  <div id="app" className="d-flex flex-column text-light">
    <div id="header" className={`container-fluid bg-${color} text-center`}>
      <h1>Trello Clone</h1>
    </div>
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
