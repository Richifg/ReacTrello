import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ description }) => (
  <div className="card card-display mb-2 px-2 py-1 bg-light shadow-b">
    <p className="mb-0">{description}</p>
  </div>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Card;
