import React from 'react';
import PropTypes from 'prop-types';

const BoardDisplay = ({ name, color, onClick }) => (
  <div className="col-lg-auto col-md-4 col-6">
    <a
      href={`#/board/${name}`}
      role="button"
      className={`btn btn-block btn-primary mb-4 board-display bg-${color}`}
      onClick={onClick}
    >
      <p className="board-display-title">{name}</p>
    </a>
  </div>
);

BoardDisplay.defaultProps = {
  onClick() {},
};

BoardDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BoardDisplay;
