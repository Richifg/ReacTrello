import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';

import List from './List';
import CardDropPreview from './CardDropPreview';
import { removeCardAction, addCardAction } from '../redux/actions';

// this component exists just so I can use latest react-dnd (which uses hooks)
// inside List component which is stateful...
// TODO: LEARN HOOKS FOR NEXT REACT PROJECT!!

const ListWrapper = ({
  removeCard,
  addCard,
  listId,
  ...restProps
}) => {
  const [{ isOver, draggedItem }, drop] = useDrop({
    accept: 'CARD',
    drop(droppedItem) {
      removeCard({ listId: droppedItem.originId, cardId: droppedItem.id });
      addCard({ listId, cardId: droppedItem.id });
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      draggedItem: monitor.getItem(),
    }),
  });
  return (
    <div ref={drop}>
      <List
        listId={listId}
        {...restProps}
      >
        {isOver && <CardDropPreview cardId={draggedItem.id} />}
      </List>
    </div>
  );
};

ListWrapper.propTypes = {
  listId: PropTypes.string.isRequired,
  removeCard: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeCard: payload => dispatch(removeCardAction(payload)),
  addCard: payload => dispatch(addCardAction(payload)),
});

export default connect(null, mapDispatchToProps)(ListWrapper);
