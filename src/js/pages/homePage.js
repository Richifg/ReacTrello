import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoardDisplay from '../components/BoardDisplay';
import BoardsSection from '../components/BoardsSection';
import { CreateButton, CreateModal } from '../components/BoardCreate';

const HomePage = ({ boards, recent, starred }) => (
  <div id="content" className="container-fluid py-4">
    <BoardsSection title="Starred Boards" icon={['far', 'star']} key="starred">
      {starred.map(boardId => <BoardDisplay key={boardId} boardId={boardId} />)}
    </BoardsSection>

    <BoardsSection title="Recently Viewed" icon={['far', 'clock']} key="recent">
      {recent.map(boardId => <BoardDisplay key={boardId} boardId={boardId} />)}
    </BoardsSection>

    <BoardsSection title="Personal Boards" icon={['far', 'user']} key="personal">
      {boards.map(boardId => <BoardDisplay key={boardId} boardId={boardId} />)}
      <CreateButton key="create-button" />
    </BoardsSection>

    <CreateModal />
  </div>
);

HomePage.defaultProps = {
  starred: [],
};

HomePage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string).isRequired,
  recent: PropTypes.arrayOf(PropTypes.string).isRequired,
  starred: PropTypes.arrayOf(PropTypes.string),

};

// #DEBUG
const mapStateToProps = state => ({
  boards: Object.keys(state.boards),
  recent: state.misc.recent,
});


export default connect(mapStateToProps)(HomePage);
