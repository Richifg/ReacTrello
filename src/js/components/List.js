import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCardAction, modifyCardAction } from '../redux/actions';
import Card from './Card';
import CardInput from './CardInput';
import CardAddButton from './CardAddButton';
import CardEditSection from './CardEditSection';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editIndex: null,
      isAdding: false,
      cardText: null,
    };
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelCard = this.handleCancelCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isAdding, editIndex } = this.state;
    // trying to avoid re-renders due to newCard changes when typing on input
    return nextProps !== this.props
    || nextState.isAdding !== isAdding
    || nextState.editIndex !== editIndex;
  }

  handleAddCard(e) {
    if (!e.key || e.key === 'Enter') {
      this.setState({ isAdding: true });
    }
  }

  handleSaveCard(e) {
    if (!e.key || e.key === 'Enter') {
      const { cardText } = this.state;
      if (cardText) {
        document.getElementById('card-input').value = null;
        const { addCard, name: list, board } = this.props;
        addCard({ board, list, card: cardText });
        this.setState({ cardText: null });
      }
      // avoid entering a newline with enter press
      e.preventDefault();
    }
  }

  handleCancelCard(e) {
    if (e.relatedTarget && e.relatedTarget.id === 'add-card-btn') {
      document.getElementById('card-input').focus();
    } else {
      this.setState({ isAdding: false, cardText: null, editIndex: null });
    }
  }

  handleChange(e) {
    this.setState({ cardText: e.target.value });
  }

  handleStartEdit(index, desc) {
    this.setState({ editIndex: index, cardText: desc });
  }

  handleSaveEdit(e) {
    if (!e.key || e.key === 'Enter') {
      const { cardText, editIndex } = this.state;
      if (cardText) {
        const { modifyCard, name: list, board } = this.props;
        modifyCard({
          board, list, card: cardText, index: editIndex,
        });
        this.setState({ cardText: null, editIndex: null });
      }
      e.preventDefault();
    }
  }

  render() {
    const { name, cards } = this.props;
    const { isAdding, editIndex } = this.state;
    return (
      <div className="card list mb-4 text-dark">
        <h6 className="card-title pl-3 mb-0 py-2">{name}</h6>
        <div className="card-body px-2 py-0">
          {cards.map((desc, index) => {
            if (editIndex === index) {
              return (
                <CardEditSection
                  handleCancel={this.handleCancelCard}
                  handleChange={this.handleChange}
                  handleSave={this.handleSaveEdit}
                  handleDelete={this.handleCancelCard}
                  description={desc}
                />
              );
            }
            return (
              <Card key={desc} description={desc} onClick={() => this.handleStartEdit(index, desc)} />
            );
          })}
          { isAdding && (
            <CardInput
              id="card-input"
              onChange={this.handleChange}
              onKeyPress={this.handleSaveCard}
              onBlur={this.handleCancelCard}
            />
          )}
        </div>
        <CardAddButton
          isAdding={isAdding}
          count={cards.length}
          handleAdd={this.handleAddCard}
          handleSave={this.handleSaveCard}
          handleCancel={this.handleCancelCard}
        />
      </div>
    );
  }
}

List.propTypes = {
  addCard: PropTypes.func.isRequired,
  modifyCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
};

const mapDispathToProps = dispatch => (
  {
    addCard: payload => dispatch(addCardAction(payload)),
    modifyCard: payload => dispatch(modifyCardAction(payload)),
  }
);

export default connect(null, mapDispathToProps)(List);
