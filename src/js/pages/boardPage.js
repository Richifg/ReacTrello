import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../components/Board';

const BoardPage = ({ match, color, exists }) => {
  const { id, name } = match.params;
  return (
    <div id="content" className={`container-fluid py-2 bg-light-${color}`}>
      { exists
        ? (
          <Board boardId={id} />
        )
        : (
          <div className="d-flex flex-column text-center">
            <h2 className="text-danger">Error</h2>
            <h3>{`The requested board "${name}" does not exist...`}</h3>
          </div>
        )
      }
    </div>
  );
};

BoardPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  color: PropTypes.string.isRequired,
  exists: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  color: state.ui.color,
  exists: !state.boards[ownProps.match.id],
});


export default connect(mapStateToProps)(BoardPage);
