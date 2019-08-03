import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardInput from './CardInput';

const EditSection = ({
  handleCancel,
  handleChange,
  handleSave,
  handleDelete,
  description,
}) => (
  <div className="container-fliud mb-3">
    <div className="row mx-0">
      <div className="col-12 p-0">
        <CardInput
          defaultValue={description}
          onChange={handleChange}
          onKeyPress={handleSave}
          onBlur={handleCancel}
          placeholder="Enter card description..."
        />
      </div>
    </div>
    <div className="row mx-0 justify-content-between">
      <div className="col-auto p-0">
        <button type="button" id="add-card-btn" className="btn btn-success mr-2" onClick={handleSave}>Save</button>
        <button type="button" id="delete-card-btn" className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
      <div className="col-auto px-0 pt-2">
        <button type="button" className="close" onClick={handleCancel}>
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </div>
  </div>
);

EditSection.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  description: state.cards[ownProps.cardId].description,
});

export default connect(mapStateToProps)(EditSection);
