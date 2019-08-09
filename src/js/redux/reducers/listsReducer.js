import { updateObj, deleteFromObj } from '../../utils';

import {
  CREATE_LIST,
  MODIFY_LIST,
  DELETE_LIST,
  CREATE_CARD,
  DELETE_CARD,
  ADD_CARD,
  REMOVE_CARD,
  MOVE_CARD,
  DELETE_BOARD,
} from '../actions';

const initState = {
  l1: {
    name: 'List 1',
    cards: ['c1', 'c2'],
  },
  l2: {
    name: 'List 2',
    cards: ['c3'],
  },
  l3: {
    name: 'List 3',
    cards: [],
  },
  l4: {
    name: 'Stargarzing checklist',
    cards: ['c4', 'c5', 'c6'],
  },
  l5: {
    name: 'Already packed',
    cards: ['c7'],
  },
};

function createList(state, action) {
  const { listId, name } = action.payload;
  const newList = { name, cards: [] };
  return updateObj(state, { [listId]: newList });
}

function modifyList(state, action) {
  const { listId, newValues } = action.payload;
  const updatedList = updateObj(state[listId], newValues);
  return updateObj(state, { [listId]: updatedList });
}

function createCard(state, action) {
  const { listId, cardId } = action.payload;
  const newCards = [...state[listId].cards.slice(), cardId];
  const updatedList = updateObj(state[listId], { cards: newCards });
  return updateObj(state, { [listId]: updatedList });
}

function deleteCard(state, action) {
  const { listId, cardId } = action.payload;
  const newCards = state[listId].cards.slice().filter(id => id !== cardId);
  const updatedList = updateObj(state[listId], { cards: newCards });
  return updateObj(state, { [listId]: updatedList });
}

function addCardAtIndex(state, action) {
  const { index, listId, cardId } = action.payload;
  const newCards = state[listId].cards.slice();
  newCards.splice(index, 0, cardId);
  const updatedList = updateObj(state[listId], { cards: newCards });
  return updateObj(state, { [listId]: updatedList });
}

function moveCard(state, action) {
  const { index, listId, cardId } = action.payload;
  const initialIndex = state[listId].cards.indexOf(cardId);
  const finalIndex = index > initialIndex ? index - 1 : index;
  const newCards = state[listId].cards.filter(id => id !== cardId);
  newCards.splice(finalIndex, 0, cardId);
  const updatedList = updateObj(state[listId], { cards: newCards });
  return updateObj(state, { [listId]: updatedList });
}


const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_LIST: return createList(state, action);
    case MODIFY_LIST: return modifyList(state, action);
    case DELETE_LIST: return deleteFromObj(state, action.payload.listId);
    case ADD_CARD: return addCardAtIndex(state, action);
    case CREATE_CARD: return createCard(state, action);
    case REMOVE_CARD:
    case DELETE_CARD: return deleteCard(state, action);
    case MOVE_CARD: return moveCard(state, action);
    case DELETE_BOARD: return deleteFromObj(state, action.payload.listIds);
    default: return state;
  }
};

export default listsReducer;
