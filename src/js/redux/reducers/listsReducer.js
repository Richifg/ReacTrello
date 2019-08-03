import { updateObj, deleteFromObj } from '../../utils';

import {
  CREATE_LIST,
  MODIFY_LIST,
  DELETE_LIST,
  CREATE_CARD,
  DELETE_CARD,
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

const listsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_LIST: return createList(state, action);
    case MODIFY_LIST: return modifyList(state, action);
    case DELETE_LIST: return deleteFromObj(state, action.payload.listId);
    case CREATE_CARD: return createCard(state, action);
    case DELETE_CARD: return deleteCard(state, action);
    default: return state;
  }
};

export default listsReducer;
