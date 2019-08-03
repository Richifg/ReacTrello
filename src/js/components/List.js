import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCardAction, modifyCardAction } from '../redux/actions';
import Card from './Card';
import CardInput from './CardInput';
import CardAddButton from './CardAddButton';
import CardEditSection from './CardEditSection';
import { getNewId } from '../utils';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: null,
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
    const { isAdding, editId } = this.state;
    // trying to avoid re-renders due to newCard changes when typing on input
    return nextProps !== this.props
    || nextState.isAdding !== isAdding
    || nextState.editId !== editId;
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
        const { createCard, listId } = this.props;
        const cardId = getNewId();
        createCard({ cardId, listId, description: cardText });
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
      this.setState({ isAdding: false, cardText: null, editId: null });
    }
  }

  handleChange(e) {
    this.setState({ cardText: e.target.value });
  }

  handleStartEdit(key, desc) {
    this.setState({ editId: key, cardText: desc });
  }

  handleSaveEdit(e) {
    if (!e.key || e.key === 'Enter') {
      const { cardText, editId } = this.state;
      if (cardText) {
        const { modifyCard } = this.props;
        modifyCard({ cardId: editId, newValues: { description: cardText } });
        this.setState({ cardText: null, editId: null });
      }
      e.preventDefault();
    }
  }

  render() {
    const { name, cards } = this.props;
    const { isAdding, editId } = this.state;
    return (
      <div className="card list mb-4 text-dark">
        <h6 className="card-title pl-3 mb-0 py-2">{name}</h6>
        <div className="card-body px-2 py-0">
          {cards.map((cardId) => {
            if (cardId === editId) {
              return (
                <CardEditSection
                  key={cardId}
                  cardId={cardId}
                  handleCancel={this.handleCancelCard}
                  handleChange={this.handleChange}
                  handleSave={this.handleSaveEdit}
                  handleDelete={this.handleCancelCard}
                />
              );
            }
            return (
              <Card cardId={cardId} key={cardId} onClick={this.handleStartEdit} />
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
  listId: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  createCard: PropTypes.func.isRequired,
  modifyCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.lists[ownProps.listId].name,
  cards: state.lists[ownProps.listId].cards,
});

const mapDispathToProps = dispatch => ({
  createCard: payload => dispatch(createCardAction(payload)),
  modifyCard: payload => dispatch(modifyCardAction(payload)),
});

export default connect(mapStateToProps, mapDispathToProps)(List);
