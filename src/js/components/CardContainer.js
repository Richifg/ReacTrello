import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';

import CardDropPreview from './CardDropPreview';
import { removeCardAction, addCardAction, moveCardAction } from '../redux/actions';

const CardContainer = ({
  extra,
  index,
  removeCard,
  addCard,
  moveCard,
  listId,
  children,
}) => {
  const [{ isOver, draggedItem }, drop] = useDrop({
    accept: 'CARD',
    drop(droppedItem) {
      if (droppedItem.originId !== listId) {
        addCard({ index, listId, cardId: droppedItem.id });
        removeCard({ index, listId: droppedItem.originId, cardId: droppedItem.id });
      }
      moveCard({ index, listId, cardId: droppedItem.id });
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      draggedItem: monitor.getItem(),
    }),
  });
  return (
    <div
      ref={drop}
      className={`card-container${extra ? '-extra' : ''} pb-2`}
    >
      {isOver && <CardDropPreview cardId={draggedItem.id} />}
      {children}
    </div>
  );
};

CardContainer.defaultProps = {
  children: null,
  extra: false,
};

CardContainer.propTypes = {
  index: PropTypes.number.isRequired,
  listId: PropTypes.string.isRequired,
  extra: PropTypes.bool,
  removeCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const mapDispatchToProps = dispatch => ({
  removeCard: payload => dispatch(removeCardAction(payload)),
  addCard: payload => dispatch(addCardAction(payload)),
  moveCard: payload => dispatch(moveCardAction(payload)),
});

export default connect(null, mapDispatchToProps)(CardContainer);
