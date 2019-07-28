import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCardAction } from '../redux/actions';
import Card from './Card';
import CardInput from './CardInput';
import CardAddButton from './CardAddButton';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      newCard: null,
    };
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelCard = this.handleCancelCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isAdding } = this.state;
    return nextProps !== this.props || nextState.isAdding !== isAdding;
  }

  handleAddCard(e) {
    console.log(e.key);
    if (!e.key || e.key === 'Enter') {
      this.setState({ isAdding: true });
    }
  }

  handleSaveCard(e) {
    if (!e.key || e.key === 'Enter') {
      const { newCard } = this.state;
      if (newCard) {
        document.getElementById('card-input').value = null;
        const { addCard, name: list, board } = this.props;
        addCard({ board, list, newCard });
        this.setState({ newCard: null });
      }
      // avoid entering a newline with enter press
      e.preventDefault();
    }
  }

  handleCancelCard(e) {
    if (e.relatedTarget && e.relatedTarget.id === 'add-card-btn') {
      document.getElementById('card-input').focus();
    } else {
      this.setState({ isAdding: false, newCard: null });
    }
  }

  handleChange(e) {
    this.setState({ newCard: e.target.value });
  }

  render() {
    const { name, cards } = this.props;
    const { isAdding } = this.state;
    return (
      <div className="card list mb-4">
        <h6 className="card-title mb-0 ml-3 mt-1">{name}</h6>
        <div className="card-body p-2">
          {cards.map(desc => <Card key={desc} description={desc} />)}
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

List.defaultProps = {
  addCard() {},
};

List.propTypes = {
  addCard: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
};

const mapDispathToProps = dispatch => (
  { addCard: payload => dispatch(addCardAction(payload)) }
);

export default connect(null, mapDispathToProps)(List);
