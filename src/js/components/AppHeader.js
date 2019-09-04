import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateUiAction } from '../redux/actions';

const AppHeader = ({ color, updatedUI }) => (
  <div id="header" className={`container-fluid bg-${color} p-1`}>
    <div className="row mx-0 align-items-center">
      <div className="col-4 px-0">
        <a
          className="btn header bg-trans bg-trans-hover p-1"
          href="#/home"
          onClick={() => updatedUI()}
        >
          <FontAwesomeIcon className="text-light header-icon" icon="home" />
        </a>
      </div>
      <div className="col-4">
        <div className="row justify-content-center">
          <a
            className="btn header text-trans text-trans-hover d-flex p-0"
            href="#/home"
            onClick={() => updatedUI()}
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            <FontAwesomeIcon icon="feather-alt" />
            <h1 className="header ml-1 my-0">ReacTrello</h1>
          </a>
        </div>
      </div>
    </div>
  </div>
);

AppHeader.propTypes = {
  color: PropTypes.string.isRequired,
  updatedUI: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { color: state.ui.color }
);

const mapDispatchToProps = dispatch => (
  { updatedUI: () => dispatch(updateUiAction({ color: 'blue', img: null })) }
);

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
