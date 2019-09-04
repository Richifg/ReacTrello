import React from 'react';
import PropTypes from 'prop-types';

const CardInput = props => (
  <textarea
    placeholder="Enter a description for this card..."
    className="form-control mb-2 list-font-size"
    autoFocus
    {...props}
  />
);

CardInput.defaultProps = {
  onChange() {},
  onKeyPress() {},
  onBlur() {},
  defaultValue: '',
};

CardInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default CardInput;
