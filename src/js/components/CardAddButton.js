import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardAddButton = ({
  isAdding,
  count,
  handleAdd,
  handleSave,
  handleCancel,
}) => {
  if (isAdding) {
    return (
      <div className="p-2 d-flex align-content-center justify-content-between">
        <button id="add-card-btn" type="button" className="btn btn-success list-font-size" onClick={handleSave}>Add Card</button>
        <button type="button" className="close" aria-label="close" onClick={handleCancel}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    );
  }
  return (
    <div
      className="p-2 list-footer text-secondary border-top-0"
      role="button"
      tabIndex={0}
      onKeyPress={handleAdd}
      onClick={handleAdd}
    >
      <FontAwesomeIcon icon="plus" className="small" />
      {count ? ' Add another card' : ' Add a card'}
    </div>
  );
};

CardAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default CardAddButton;
