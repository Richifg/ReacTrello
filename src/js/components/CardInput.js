import React from 'react';
import PropTypes from 'prop-types';

const CardInput = props => (
  <textarea
    placeholder="Enter a description for this card..."
    className="form-control"
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

export default CardInput;
