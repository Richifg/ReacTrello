import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecentAction, createListAction, deleteListAction } from '../redux/actions';
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

  render() {
    const { lists, name } = this.props;
    if (lists) {
      const { isAdding } = this.state;
      return (
        <div className="d-flex flex-column">
          <h3>{name}</h3>
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
    return (
      <div className="d-flex flex-column text-center">
        <h2 className="text-danger">Error</h2>
        <h3>{`The requested board "${name}" does not exist...`}</h3>
      </div>
    );
  }
}

Board.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(PropTypes.string).isRequired,
  createList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  addRecent: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.boards[ownProps.boardId].name,
  lists: state.boards[ownProps.boardId].lists,
});

const mapDispatchToProps = dispatch => (
  {
    createList: payload => dispatch(createListAction(payload)),
    deleteList: payload => dispatch(deleteListAction(payload)),
    addRecent: payload => dispatch(addRecentAction(payload)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
