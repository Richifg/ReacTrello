import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDrag } from 'react-dnd';

const Card = ({
  listId,
  cardId,
  description,
  onClick,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'CARD',
      id: cardId,
      originId: listId,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`card card-display bg-light container px-2 py-1 ${isDragging ? 'dragging' : ''}`}
    >
      <div className="row mx-0">
        <div className="col-11 px-0">
          {description}
        </div>
        <div className="col-1 px-0">
          <button
            type="button"
            className="btn bg-trans bg-trans-dark-hover p-1 card-edit-button"
            onClick={() => onClick(cardId, description)}
          >
            <FontAwesomeIcon icon="pen" className="text-muted" />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  listId: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const card = state.cards[ownProps.cardId];
  const description = card ? card.description : '';
  return ({ description });
};

export default connect(mapStateToProps)(Card);
