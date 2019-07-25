import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCardAction } from '../redux/actions';
import { CardDisplay, CardInput } from './Card';


const mapDispathToProps = dispatch => (
  { addCard: payload => dispatch(addCardAction(payload)) }
);

const mapStateToProps = (state, ownProps) => {
  const { name, board } = ownProps;
  return (
    { cards: state.boards[board][name] }
  );
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      newCard: null,
    };
    this.handleInputCard = this.handleInputCard.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleCancelCard = this.handleCancelCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { adding } = this.state;
    return nextProps !== this.props || nextState.adding !== adding;
  }

  handleInputCard(e) {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      this.setState({ adding: true });
    }
  }

  handleSaveCard(e) {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      const { newCard } = this.state;
      if (newCard) {
        document.getElementById('card-input').value = null;
        const { addCard, name: list, board } = this.props;
        addCard({ board, list, newCard });
        this.setState({ newCard: null });
      }
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
    const { name, cards } = this.props;
    const { adding } = this.state;
    return (
      <div className="card list mb-4">
        <h6 className="card-title mb-0 ml-3 mt-1">{name}</h6>
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
            <div className="card-footer list-footer text-secondary p-2" role="button" tabIndex={0} onKeyPress={this.handleInputCard} onClick={this.handleInputCard}>
              {cards.length
                ? '+ Add another card'
                : '+ Add a card'
              }
            </div>
          )
        }
      </div>
    );
  }
}

List.defaultProps = {
  addCard() {},
  cards: [],
};

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string),
  addCard: PropTypes.func,
  name: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(List);
