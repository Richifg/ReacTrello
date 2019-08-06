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

import AppHeader from './AppHeader';

import imgCredits from '../img-credits';

const AppBody = ({ color, img }) => {
  const credit = imgCredits[img];
  return (
    <div id="app" className={`d-flex flex-column text-light ${img ? `bg-img-${img}` : ''}`}>
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/board/:id" component={BoardPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <footer id="footer" className={`container-fluid bg-${color}`}>
        <div className="row justify-content-end mr-3">
          <h6>
            { credit && (
              <span className="footer">
                Photo by
                <a
                  className="footer"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={credit.url}
                >
                  {` ${credit.author} `}
                </a>
                on Unsplash
              </span>
            )}
          </h6>
        </div>
      </footer>
    </div>
  );
};

AppBody.defaultProps = {
  img: null,
};

AppBody.propTypes = {
  color: PropTypes.string.isRequired,
  img: PropTypes.string,
};

const mapStateToProps = state => ({
  color: state.ui.color,
  img: state.ui.img,
});

export default connect(mapStateToProps)(AppBody);
