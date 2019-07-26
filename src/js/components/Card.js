import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ description }) => (
  <div className="card card-display mb-1 px-2 py-1 bg-light">
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Card;
