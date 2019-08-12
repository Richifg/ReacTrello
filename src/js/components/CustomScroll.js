import React from 'react';
import PropTypes from 'prop-types';

const ScrollX = ({ children }) => (
  <div className="scroll-x">
    {children}
  </div>
);


ScrollX.defaultProps = {
  children: null,
};

ScrollX.propTypes = {
  children: PropTypes.node,
};


const ScrollY = ({ children }) => (
  <div className="scroll-y">
    {children}
  </div>
);


ScrollY.defaultProps = {
  children: null,
};

ScrollY.propTypes = {
  children: PropTypes.node,
};

export { ScrollX, ScrollY };
