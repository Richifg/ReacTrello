import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Board from '../components/Board';
import DragLayer from '../components/DragLayer';

const BoardPage = ({
  match, color, img, exists,
}) => {
  const { id } = match.params;
  return (
    <div id="app" className={`d-flex flex-column text-light ${img ? `bg-img-${img}` : ''}`}>
      <AppHeader />
      <div id="content" className={`container-fluid py-2 px-0 bg-light-${color}`}>
        { exists
          ? <Board boardId={id} />
          : (
            <div className="d-flex flex-column text-center">
              <h2 className="text-danger">Error</h2>
              <h3>The requested board does not exist...</h3>
            </div>
          )
        }
      </div>
      <AppFooter />
      <DragLayer />
    </div>
  );
};

BoardPage.defaultProps = {
  img: null,
};

BoardPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string,
  exists: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  color: state.ui.color,
  img: state.ui.img,
  exists: !!state.boards[ownProps.match.params.id],
});


export default connect(mapStateToProps)(BoardPage);
