import React from 'react';
import PropTypes from 'prop-types';

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
        <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
      </div>
      <div className="col-auto p-0">
        <button type="button" className="btn btn-info" onClick={handleCancel}>Cancel</button>
      </div>
      <div className="col-auto p-0">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
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

export default EditSection;
