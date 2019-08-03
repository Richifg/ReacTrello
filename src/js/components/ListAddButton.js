import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListInput from './ListInput';

const ListAddButton = ({
  isAdding,
  count,
  handleAdd,
  handleChange,
  handleSave,
  handleCancel,
  color,
}) => {
  if (isAdding) {
    return (
      <div className="card list">
        <div className="d-flex flex-column p-2">
          <ListInput
            onChange={handleChange}
            onKeyPress={handleSave}
            onBlur={handleCancel}
          />
          <div className="row mt-2">
            <div className="col">
              <button id="add-list-btn" type="button" className="btn btn-success" onClick={handleSave}>
                Add List
              </button>
            </div>
            <div className="col pt-2">
              <button type="button" className="close" onClick={handleCancel}>
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      type="button"
      className={`btn bg-${color} bg-${color}-hover  text-left text-light list-add`}
      onClick={handleAdd}
    >
      {count ? '+ Add another list' : '+ Add a list'}
    </button>
  );
};

ListAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  { color: state.ui.color }
);

export default connect(mapStateToProps)(ListAddButton);
