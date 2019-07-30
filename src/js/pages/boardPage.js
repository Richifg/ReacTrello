import React from 'react';
import PropTypes from 'prop-types';

import Board from '../components/Board';

const BoardPage = ({ match }) => {
  const { name } = match.params;
  return (
    <div id="content" className="container-fluid bg-info py-4">
      <div className="d-flex flex-column">
        <h3 className="text-secondary">{name}</h3>
        <Board name={name} />
      </div>
    </div>
  );
};

BoardPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BoardPage;
