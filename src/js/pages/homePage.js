import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoardDisplay from '../components/BoardDisplay';
import BoardsSection from '../components/BoardsSection';
import { CreateButton, CreateModal } from '../components/BoardCreate';

const HomePage = ({ boards, recent }) => (
  <div id="content" className="container-fluid py-4">
    <BoardsSection title="Starred Boards" icon={['far', 'star']} key="starred" />
    <BoardsSection title="Recently Viewed" icon={['far', 'clock']} key="recent">
      {recent.map(name => <BoardDisplay name={name} key={name} />)}
    </BoardsSection>
    <BoardsSection title="Personal Boards" icon={['far', 'user']} key="personal">
      {boards.map(name => <BoardDisplay name={name} key={name} />)}
      <CreateButton />
    </BoardsSection>
    <CreateModal />
  </div>
);

HomePage.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string).isRequired,
  recent: PropTypes.arrayOf(PropTypes.string).isRequired,

};

const mapStateToProps = state => ({
  boards: Object.keys(state.boards),
  recent: state.recent,
});

export default connect(mapStateToProps)(HomePage);
