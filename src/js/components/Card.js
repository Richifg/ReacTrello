import React from 'react';
import PropTypes from 'prop-types';

const CardDisplay = ({ description }) => (
  <div className="card card-display mb-1 px-2 py-1 bg-light">
    <p>{description}</p>
  </div>
);

CardDisplay.propTypes = {
  description: PropTypes.string.isRequired,
};

const CardInput = props => (
  <textarea
    placeholder="Enter a description for this card..."
    className="form-control growing-text-area"
    autoFocus
    {...props}
  />
);

CardInput.defaultProps = {
  onChange() {},
  onKeyPress() {},
  onBlur() {},
};

CardInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
};


export { CardDisplay, CardInput };
