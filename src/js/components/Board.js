import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  addRecentAction,
  createListAction,
  deleteListAction,
  deleteBoardAction,
  modifyBoardAction,
  removeRecentAction,
} from '../redux/actions';

import List from './List';
import ListAddButton from './ListAddButton';
import { getNewId } from '../utils';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      listName: null,
    };
    this.handleAddList = this.handleAddList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveList = this.handleSaveList.bind(this);
    this.handleCancelList = this.handleCancelList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleDeleteBoard = this.handleDeleteBoard.bind(this);
    this.handleStarred = this.handleStarred.bind(this);
  }

  componentDidMount() {
    const { addRecent, boardId } = this.props;
    addRecent({ boardId });
  }

  handleAddList() {
    this.setState({ isAdding: true });
  }

  handleChange(e) {
    this.setState({ listName: e.target.value });
  }

  handleSaveList(e) {
    if (!e.key || e.key === 'Enter') {
      const { listName } = this.state;
      if (listName) {
        document.getElementById('list-input').value = null;
        const { createList, boardId } = this.props;
        const listId = getNewId();
        createList({ boardId, listId, name: listName });
        this.setState({ listName: null });
        // stop the enter key from adding a new line
        e.preventDefault();
      }
    }
  }

  handleCancelList(e) {
    if (e.relatedTarget && e.relatedTarget.id === 'add-list-btn') {
      document.getElementById('list-input').focus();
    } else {
      this.setState({ isAdding: false, listName: null });
    }
  }

  handleDeleteList(listId, cards) {
    const { deleteList, boardId } = this.props;
    deleteList({ listId, boardId, cardIds: cards });
  }

  handleDeleteBoard() {
    const {
      deleteBoard,
      boardId,
      cards: cardIds,
      lists: listIds,
    } = this.props;
    deleteBoard({ boardId, cardIds, listIds });
  }

  handleStarred() {
    const {
      starred,
      boardId,
      modifyBoard,
      removeRecent,
    } = this.props;
    if (!starred) removeRecent({ boardId });
    modifyBoard({ boardId, newValues: { starred: !starred } });
  }

  render() {
    const { lists, name, starred } = this.props;
    const { isAdding } = this.state;
    return (
      <div className="d-flex flex-column">
        <div className="row mx-0 mb-3 align-items-center">
          <div className="col-auto">
            <h3 className="board-header-title">{name}</h3>
          </div>
          <div className="col-auto">
            <button
              type="button"
              onClick={this.handleStarred}
              className={`btn bg-trans-dark-hover board-header-icon ${starred ? 'board-header-star' : ''}`}
            >
              <FontAwesomeIcon icon={['far', 'star']} />
            </button>
          </div>
          <div className="col-autol ml-auto">
            <a
              className="btn bg-trans-dark-hover board-header-icon"
              href="#/"
              onClick={this.handleDeleteBoard}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
        <div className="row">
          {
            lists.map(listId => (
              <div className="col-auto" key={listId}>
                <List listId={listId} handleDeleteList={this.handleDeleteList} />
              </div>
            ))
          }
          <div className="col-auto" key="add">
            <ListAddButton
              isAdding={isAdding}
              count={lists.length}
              handleAdd={this.handleAddList}
              handleCancel={this.handleCancelList}
              handleSave={this.handleSaveList}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
  lists: PropTypes.arrayOf(PropTypes.string).isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  createList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  addRecent: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired,
  removeRecent: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { name, lists, starred } = state.boards[ownProps.boardId];
  const cards = lists.reduce((prev, id) => [...prev, ...state.lists[id].cards], []);
  return ({
    name, lists, starred, cards,
  });
};

const mapDispatchToProps = dispatch => (
  {
    createList: payload => dispatch(createListAction(payload)),
    deleteList: payload => dispatch(deleteListAction(payload)),
    addRecent: payload => dispatch(addRecentAction(payload)),
    deleteBoard: payload => dispatch(deleteBoardAction(payload)),
    modifyBoard: payload => dispatch(modifyBoardAction(payload)),
    removeRecent: payload => dispatch(removeRecentAction(payload)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
