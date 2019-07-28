import React from 'react';
import PropTypes from 'prop-types';

const ListInput = props => (
  <input
    id="list-input"
    type="text"
    className="form-control"
    placeholder="Enter list title..."
    autoFocus
    {...props}
  />
);

ListInput.defaultProps = {
  onChange() {},
  onKeyPress() {},
  onBlur() {},
};

ListInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
};

export default ListInput;
