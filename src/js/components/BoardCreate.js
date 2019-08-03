import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createBoardAction } from '../redux/actions';
import BoardColors from './BoardColors';
import { getNewId } from '../utils';

const CreateButton = () => (
  <div className="col-lg-auto col-md-4 col-6 my-2 px-2">
    <button
      type="button"
      className="btn btn-block btn-outline-info board-display"
      data-toggle="modal"
      data-target="#create-board-modal"
      onClick={() => {}}
    >
      Create new board
    </button>
  </div>
);

class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: 'blue',
    };
    this.handleClickColor = this.handleClickColor.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickColor(e) {
    this.setState({ color: e.target.value });
  }

  handleClickCreate(e) {
    if (!e.key || e.key === 'Enter') {
      const { name, color } = this.state;
      if (name) {
        const { createBoard } = this.props;
        const boardId = getNewId();
        createBoard({ boardId, name, color });
        this.setState({ name: '' });
        document.getElementById('modal-close').click();
      }
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name, color } = this.state;
    return (
      <div id="create-board-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content board-create-modal-bg">
            <div className="modal-body">
              <div className="row">
                <div className="col-auto">
                  <div className={`card board-display-preview bg-${color}`}>
                    <input
                      id="new-board-title-input"
                      type="text"
                      className="form-control board-title-input"
                      placeholder="Enter board title"
                      onKeyPress={this.handleClickCreate}
                      onChange={this.handleChange}
                      value={name}
                    />
                  </div>
                </div>
                <div className="col-3">
                  <BoardColors onClick={this.handleClickColor} />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-start border-top-0">
              <button type="button" className="btn btn-success" onClick={this.handleClickCreate}>Create Board</button>
              <button type="button" className="btn btn-danger" id="modal-close" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateModal.propTypes = {
  createBoard: PropTypes.func.isRequired,
};

const mapDispathToProps = dispatch => (
  { createBoard: payload => dispatch(createBoardAction(payload)) }
);

const ConnectedModal = connect(null, mapDispathToProps)(CreateModal);

export { CreateButton, ConnectedModal as CreateModal };
