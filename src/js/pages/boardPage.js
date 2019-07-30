import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../components/Board';

const BoardPage = ({ match, color }) => {
  const { name } = match.params;
  return (
    <div id="content" className={`container-fluid py-4 bg-light-${color}`}>
      <div className="d-flex flex-column">
        <Board name={name} />
      </div>
    </div>
  );
};

BoardPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  { color: state.color }
);


export default connect(mapStateToProps)(BoardPage);
