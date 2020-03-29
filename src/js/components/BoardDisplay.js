import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { modifyBoardAction, updateUiAction } from '../redux/actions';

const BoardDisplay = ({
  boardId,
  name,
  color,
  img,
  starred,
  updateUI,
  modifyBoard,
}) => (
  <div className="col-lg-auto col-md-4 col-6 my-2">
    <a
      role="button"
      className={`btn btn-block text-light board-display bg-${color} bg-${color}-hover ${img ? `bg-img-small-${img}` : ''}`}
      href={`#/board/${boardId}`}
      onClick={() => updateUI({ color, img })}
    >
      <div className="container h-100 px-0">
        <div className="row mx-0 h-75">
          <p className="board-display-title">{name}</p>
        </div>
        <div className="row mx-0 h-25">
          <button
            type="button"
            className={`btn p-0 ml-auto board-display-star ${starred ? 'star-yellow' : 'star-white'}`}
            onClick={(e) => {
              modifyBoard({ boardId, newValues: { starred: !starred } });
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon icon={['far', 'star']} />
          </button>
        </div>
      </div>
    </a>
  </div>
);

BoardDisplay.defaultProps = {
  img: null,
};

BoardDisplay.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string,
  starred: PropTypes.bool.isRequired,
  updateUI: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  color: state.boards[ownProps.boardId].color,
  img: state.boards[ownProps.boardId].img,
  name: state.boards[ownProps.boardId].name,
  starred: state.boards[ownProps.boardId].starred,
});

const mapDispatchToProps = dispatch => ({
  updateUI: payload => dispatch(updateUiAction(payload)),
  modifyBoard: payload => dispatch(modifyBoardAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDisplay);
