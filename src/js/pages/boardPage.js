import React from 'react';
import PropTypes from 'prop-types';

import Board from '../components/Board';

const BoardPage = ({ name }) => (
  <div id="content" className="container-fluid bg-info py-4">
    <div className="d-flex flex-column">
      <h3 className="text-secondary">{name}</h3>
      <Board name={name} />
    </div>
  </div>
);

BoardPage.defaultProps = {
  name: 'No board name was provided',
};

BoardPage.propTypes = {
  name: PropTypes.string,
};


export default BoardPage;
