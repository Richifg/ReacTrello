import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateColorAction } from '../redux/actions';

const BoardDisplay = ({ name, color, updateColor }) => (
  <div className="col-lg-auto col-md-4 col-6">
    <a
      href={`#/board/${name}`}
      role="button"
      className={`btn btn-block text-light mb-4 board-display bg-${color} bg-${color}-hover`}
      onClick={() => updateColor(color)}
    >
      <p className="board-display-title">{name}</p>
    </a>
  </div>
);


BoardDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  { updateColor: payload => dispatch(updateColorAction(payload)) }
);

export default connect(null, mapDispatchToProps)(BoardDisplay);
