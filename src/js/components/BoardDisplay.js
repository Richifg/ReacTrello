import React from 'react';
import PropTypes from 'prop-types';

const BoardDisplay = ({ name, onClick }) => (
  <div className="col-lg-auto col-md-4 col-6">
    <button
      type="button"
      className="btn btn-block btn-info mb-4 board-display"
      onClick={onClick}
    >
      {name}
    </button>
  </div>
);

BoardDisplay.defaultProps = {
  onClick() {},
};

BoardDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BoardDisplay;
