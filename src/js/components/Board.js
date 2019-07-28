import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addListAction } from '../redux/actions';
import List from './List';
import ListAddButton from './ListAddButton';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newList: null,
    };
    this.handleAddList = this.handleAddList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveList = this.handleSaveList.bind(this);
    this.handleCancelList = this.handleCancelList.bind(this);
  }

  handleAddList() {
    this.setState({ isAdding: true });
  }

  handleChange(e) {
    this.setState({ newList: e.target.value });
  }

  handleSaveList(e) {
    if (!e.key || e.key === 'Enter') {
      const { newList } = this.state;
      if (newList) {
        document.getElementById('list-input').value = null;
        const { addList, name: board } = this.props;
        addList({ board, newList });
        this.setState({ newList: null });
        // stop the enter key from adding a new line
        e.preventDefault();
      }
    }
  }

  handleCancelList(e) {
    if (e.relatedTarget && e.relatedTarget.id === 'add-list-btn') {
      document.getElementById('list-input').focus();
    } else {
      this.setState({ isAdding: false, newList: null });
    }
  }

  render() {
    const { lists, name } = this.props;
    const { isAdding } = this.state;
    const listNames = Object.keys(lists);
    return (
      <div className="d-flex flex-column">
        <h3>{name}</h3>
        <div className="row">
          {
            listNames.map(listName => (
              <div className="col-auto" key={listName}>
                <List board={name} name={listName} cards={lists[listName]} />
              </div>
            ))
          }
          <div className="col-auto" key="add">
            <ListAddButton
              isAdding={isAdding}
              count={listNames.length}
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

Board.defaultProps = {
  lists: {},
  addList() {},
};

Board.propTypes = {
  name: PropTypes.string.isRequired,
  lists: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  addList: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => (
  { lists: state.boards[ownProps.name] }
);

const mapDispatchToProps = dispatch => (
  { addList: payload => dispatch(addListAction(payload)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
