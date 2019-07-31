import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateColorAction, addRecentAction } from '../redux/actions';

const BoardDisplay = ({
  name,
  color,
  updateColor,
  addRecent,
}) => (
  <div className="col-lg-auto col-md-4 col-6">
    <a
      href={`#/board/${name}`}
      role="button"
      className={`btn btn-block text-light mb-4 board-display bg-${color} bg-${color}-hover`}
      onClick={() => {
        updateColor({ color });
        addRecent({ name });
      }}
    >
      <p className="board-display-title">{name}</p>
    </a>
  </div>
);


BoardDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
  addRecent: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  color: state.boards[ownProps.name].color,
});

const mapDispatchToProps = dispatch => (
  {
    updateColor: payload => dispatch(updateColorAction(payload)),
    addRecent: payload => dispatch(addRecentAction(payload)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplay);
