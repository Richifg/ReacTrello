import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addListAction } from '../redux/actions';
import List from './List';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
    };
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
              <div className="col-auto">
                <List board={name} name={listName} cards={lists[listName]} />
              </div>
            ))
          }
          <div className="col-auto">
            <div className="card list">
              { isAdding ? 'ADDING!' : 'NOT ADDING'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Board.defaultProps = {
  lists: {},
};

Board.propTypes = {
  name: PropTypes.string.isRequired,
  lists: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
};

const mapStateToProps = (state, ownProps) => (
  { lists: state.boards[ownProps.name] }
);

const mapDispatchToProps = dispatch => (
  { addList: payload => dispatch(addListAction(payload)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
