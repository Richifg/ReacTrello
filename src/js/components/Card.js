import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ description, onClick }) => (
  <div className="card mb-2 px-2 py-1 bg-light card-display container">
    <div className="row mx-0">
      <div className="col-11 px-0">
        {description}
      </div>
      <div className="col-1 px-0">
        <button
          type="button"
          className="btn bg-trans bg-trans-dark-hover p-1 card-edit-button"
          onClick={onClick}
        >
          <FontAwesomeIcon icon="pen" className="text-muted" />
        </button>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
