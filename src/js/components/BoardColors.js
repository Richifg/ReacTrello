import React from 'react';
import PropTypes from 'prop-types';

const colors = ['blue', 'orange', 'green', 'red', 'gray'];

const BoardColors = ({ onClick }) => (
  <div className="container-fluid p-0">
    <div className="row">
      {
        colors.map(color => (
          <div className="col-auto px-0 mx-1">
            <label htmlFor={`option-${color}`}>
              <input
                className="board-color-input"
                type="radio"
                id={`option-${color}`}
                value={color}
                name="board-color"
                onClick={onClick}
              />
              <span className={`board-color-option bg-${color}`} />
            </label>
          </div>
        ))
      }
    </div>
  </div>
);

BoardColors.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BoardColors;
