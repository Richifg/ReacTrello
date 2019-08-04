import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = ['blue', 'orange', 'green', 'red', 'gray'];

const BoardColors = ({ onClick, selectedColor }) => (
  <div className="row ml-md-2 mt-md-0 ml-0 mt-2">
    {
      colors.map(color => (
        <div className="col-auto mr-2 p-0" key={color}>
          <label htmlFor={`option-${color}`}>
            <input
              checked={color === selectedColor}
              className="board-color-input"
              type="radio"
              id={`option-${color}`}
              value={color}
              name="board-color"
              onClick={onClick}
            />
            <span className={`board-color-option bg-${color} bg-${color}-hover`}>
              {color === selectedColor
               && <FontAwesomeIcon icon={['far', 'check-circle']} className="color-check-icon" />}
            </span>
          </label>
        </div>
      ))
    }
  </div>
);

BoardColors.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default BoardColors;
