import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoardDisplay from '../components/BoardDisplay';
import { CreateButton, CreateModal } from '../components/BoardCreate';

const HomePage = ({ boards, colors }) => (
  <div id="content" className="container-fluid py-4">
    <div className="row mx-lg-auto mx-0 board-display-container">
      {boards.map((name, index) => (
        <BoardDisplay name={name} color={colors[index]} key={name} />
      ))
      }
      <CreateButton />
      <CreateModal />
    </div>
  </div>
);

HomePage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const boardNames = Object.keys(state.boards);
  const boardColors = boardNames.map(name => state.boards[name].color);
  return ({
    boards: boardNames,
    colors: boardColors,
  });
};

export default connect(mapStateToProps)(HomePage);
