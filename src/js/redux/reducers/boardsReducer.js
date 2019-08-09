import { updateObj, deleteFromObj } from '../../utils';

import {
  CREATE_BOARD,
  MODIFY_BOARD,
  DELETE_BOARD,
  CREATE_LIST,
  DELETE_LIST,
} from '../actions';

const initState = {
  b1: {
    name: 'Cool Board with background',
    color: 'img',
    img: 'night',
    lists: ['l4', 'l5'],
    accessed: null,
    starred: false,
  },
  b2: {
    name: 'Test Board',
    color: 'blue',
    img: null,
    lists: ['l1', 'l2', 'l3'],
    accessed: null,
    starred: false,
  },
  b3: {
    name: 'test board 2',
    color: 'orange',
    img: null,
    lists: [],
    accessed: null,
    starred: false,
  },
  b4: {
    name: 'test board 3',
    color: 'green',
    img: null,
    lists: [],
    accessed: null,
    starred: false,
  },
  b5: {
    name: 'test board 4',
    color: 'img',
    img: 'sea',
    lists: [],
    accessed: null,
    starred: false,
  },
};

function createBoard(state, action) {
  const {
    boardId, name, color, img,
  } = action.payload;
  const newBoard = {
    name, color, img, starred: false, lists: [], accessed: null,
  };
  return updateObj(state, { [boardId]: newBoard });
}

function modifyBoard(state, action) {
  const { boardId, newValues } = action.payload;
  const updatedBoard = updateObj(state[boardId], newValues);
  return updateObj(state, { [boardId]: updatedBoard });
}

function createList(state, action) {
  const { boardId, listId } = action.payload;
  const newLists = [...state[boardId].lists.slice(), listId];
  const updatedBoard = updateObj(state[boardId], { lists: newLists });
  return updateObj(state, { [boardId]: updatedBoard });
}

function deleteList(state, action) {
  const { boardId, listId } = action.payload;
  const newLists = state[boardId].lists.slice().filter(id => id !== listId);
  const updatedBoard = updateObj(state[boardId], { lists: newLists });
  return updateObj(state, { [boardId]: updatedBoard });
}

const boardsReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_BOARD: return createBoard(state, action);
    case MODIFY_BOARD: return modifyBoard(state, action);
    case DELETE_BOARD: return deleteFromObj(state, action.payload.boardId);
    case CREATE_LIST: return createList(state, action);
    case DELETE_LIST: return deleteList(state, action);
    default: return state;
  }
};

export default boardsReducer;
