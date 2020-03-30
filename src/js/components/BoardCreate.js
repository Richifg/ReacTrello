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
      img: null,
    };
    this.handleClickColor = this.handleClickColor.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickColor(e) {
    const [color, img = null] = e.target.value.split('-');
    this.setState({ color, img });
  }

  handleClickCreate(e) {
    if (!e.key || e.key === 'Enter') {
      const { name, color, img } = this.state;
      const { createBoard } = this.props;
      const boardId = getNewId();
      createBoard({
        boardId, name, color, img,
      });
      this.setState({ name: '' });
      document.getElementById('modal-close').click();
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name, color, img } = this.state;
    return (
      <div id="create-board-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content board-create-modal-bg">
            <div className="modal-body p-2">
              <div className="row mx-0">
                <div className="col-12 col-md-9 p-0">
                  <div className={`card board-display-preview bg-${color} ${img ? `bg-img-small-${img}` : ''}`}>
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
                <div className="col-12 col-md-3 p-0">
                  <BoardColors
                    onClick={this.handleClickColor}
                    selectedColor={color}
                    selectedImg={img}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer px-2 pb-2 pt-0 justify-content-start border-top-0">
              <button
                type="button"
                className="btn btn-success"
                disabled={!name}
                onClick={this.handleClickCreate}
              >
                Create Board
              </button>
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
