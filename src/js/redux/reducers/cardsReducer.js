import { updateObj, deleteFromObj } from '../../utils';

import {
  CREATE_CARD,
  MODIFY_CARD,
  DELETE_CARD,
  DELETE_LIST,
} from '../actions';

const initState = {
  c1: {
    description: 'Card 1',
    checked: false,
  },
  c2: {
    description: 'Cara 2',
    checked: false,
  },
  c3: {
    description: 'Lorem Ipsum long descriptium',
    checked: false,
  },
};

function createCard(state, action) {
  const { cardId, description } = action.payload;
  const newCard = { description, checked: false };
  return updateObj(state, { [cardId]: newCard });
}

function modifyCard(state, action) {
  const { cardId, newValues } = action.payload;
  const updatedCard = updateObj(state[cardId], newValues);
  return updateObj(state, { [cardId]: updatedCard });
}

function deleteList(state, action) {
  const { cardIds } = action.payload;
  const newState = Object.keys(state).filter(id => !cardIds.includes(id))
    .reduce((obj, id) => updateObj(obj, { [id]: state[id] }), {});
  return newState;
}

const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_CARD: return createCard(state, action);
    case MODIFY_CARD: return modifyCard(state, action);
    case DELETE_CARD: return deleteFromObj(state, action.payload.cardId);
    case DELETE_LIST: return deleteList(state, action);
    default: return state;
  }
};

export default cardsReducer;
