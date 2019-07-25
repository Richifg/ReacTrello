import React from 'react';
import PropTypes from 'prop-types';
import { CardDisplay, CardInput } from './Card';


class List extends React.Component {
  constructor(props) {
    super(props);
    const { cards } = this.props;
    this.state = {
      adding: false,
      cards,
      newCard: null,
    };
    this.handleInputCard = this.handleInputCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelCard = this.handleCancelCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInputCard(e) {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      this.setState({ adding: true });
    }
  }

  handleSaveCard(e) {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      this.setState((prev) => {
        const cards = prev.cards.slice();
        document.getElementById('card-input').value = null;
        if (prev.newCard) cards.push(prev.newCard);
        return ({ cards, newCard: null });
      });
      e.preventDefault();
    }
  }

  handleCancelCard(e) {
    if (e.relatedTarget && e.relatedTarget.id === 'add-card') {
      document.getElementById('card-input').focus();
      document.getElementById('add-card').click();
    } else {
      this.setState({ adding: false, newCard: null });
    }
  }

  handleChange(e) {
    this.setState({ newCard: e.target.value });
  }

  render() {
    const { title } = this.props;
    const { adding, cards } = this.state;
    return (
      <div className="card mb-4">
        <h6 className="card-title mb-0 ml-3 mt-1">{title}</h6>
        <div className="card-body p-2">
          {cards.map(desc => <CardDisplay key={desc} description={desc} />)}
          {adding
            ? (
              <CardInput
                id="card-input"
                onChange={this.handleChange}
                onKeyPress={this.handleSaveCard}
                onBlur={this.handleCancelCard}
              />
            )
            : null
          }
        </div>
        { adding
          ? (
            <div className="p-2">
              <button id="add-card" type="button" className="btn btn-success" onClick={this.handleSaveCard}>Add Card</button>
              <button type="button" className="close" aria-label="close" onClick={this.handleCancelCard}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )
          : (
            <div className="card-footer p-2" role="button" tabIndex={0} onKeyPress={this.handleInputCard} onClick={this.handleInputCard}>
              <p className="card-text text-secondary">
                {cards.length
                  ? '+ Add another card'
                  : '+ Add a card'
                }
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

List.defaultProps = {
  cards: [],
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.string),
};

export default List;
