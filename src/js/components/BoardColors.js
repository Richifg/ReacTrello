import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colorsAndImgs = [
  ['blue', null],
  ['orange', null],
  ['green', null],
  ['red', null],
  ['gray', null],
  ['img', 'sea'],
  ['img', 'night'],
  ['img', 'beach'],
  ['img', 'wood'],
];


const BoardColors = ({ onClick, selectedColor, selectedImg }) => (
  <div className="row ml-md-2 mt-md-0 ml-0 mt-2">
    {
      colorsAndImgs.map(([color, img]) => (
        <div className="col-auto mr-2 p-0" key={img || color}>
          <label htmlFor={`option-${img || color}`}>
            <input
              className="board-color-input"
              type="radio"
              id={`option-${img || color}`}
              value={`${color}-${img}`}
              name="board-color"
              onClick={onClick}
            />
            <span className={`board-color-option bg-${color} bg-${color}-hover ${img ? `bg-img-${img}` : ''}`}>
              {color === selectedColor && img === selectedImg
               && <FontAwesomeIcon icon={['far', 'check-circle']} className="color-check-icon" />}
            </span>
          </label>
        </div>
      ))
    }
  </div>
);

BoardColors.defaultProps = {
  selectedImg: null,
};

BoardColors.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedImg: PropTypes.string,
};

export default BoardColors;
