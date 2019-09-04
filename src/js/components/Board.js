import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  createListAction,
  deleteListAction,
  deleteBoardAction,
  modifyBoardAction,
  updateUiAction,
} from '../redux/actions';

import List from './List';
import ListAddButton from './ListAddButton';
import { ScrollX } from './CustomScroll';
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
    const { boardId, modifyBoard } = this.props;
    modifyBoard({ boardId, newValues: { accessed: new Date() } });
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
      updateUI,
      boardId,
      cards: cardIds,
      lists: listIds,
    } = this.props;
    updateUI();
    deleteBoard({ boardId, cardIds, listIds });
  }

  handleStarred() {
    const {
      starred,
      boardId,
      modifyBoard,
    } = this.props;
    modifyBoard({ boardId, newValues: { starred: !starred } });
  }

  render() {
    const { lists, name, starred } = this.props;
    const { isAdding } = this.state;
    return (
      <div className="d-flex flex-column w-100 h-100 position-absolute pb-4 px-2">
        <div className="row mx-0 mb-3 align-items-center">
          <div className="col-auto">
            <h3 className="board-header-title">{name}</h3>
          </div>
          <div className="col-auto px-0">
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
              href="#/home"
              onClick={this.handleDeleteBoard}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
        <ScrollX>
          <div className="d-flex flex-row h-100">
            {
              lists.map(listId => (
                <div className="col-auto ml-0 mr-2 px-0" key={listId}>
                  <List listId={listId} onDeleteList={this.handleDeleteList} />
                </div>
              ))
            }
            <div className="col-auto ml-0 mr-2 px-0" key="add">
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
        </ScrollX>
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
  deleteBoard: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired,
  updateUI: PropTypes.func.isRequired,
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
    deleteBoard: payload => dispatch(deleteBoardAction(payload)),
    modifyBoard: payload => dispatch(modifyBoardAction(payload)),
    updateUI: () => dispatch(updateUiAction({ color: 'blue', img: null })),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
