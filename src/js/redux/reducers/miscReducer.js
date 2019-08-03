import {
  ADD_RECENT,
  REMOVE_RECENT,
  DELETE_BOARD,
} from '../actions';

import { updateObj } from '../../utils';

const initState = {
  recent: [],
};


function addRecent(state, action) {
  const { boardId } = action.payload;
  const recent = state.recent.includes(boardId)
    ? [boardId, ...state.recent.slice().filter(id => id !== boardId)]
    : [boardId, ...state.recent.slice()];
  if (recent.length > 4) recent.pop();
  return updateObj(state, { recent });
}

function removeRecent(state, action) {
  const { boardId } = action.payload;
  const recent = state.recent.slice().filter(id => id !== boardId);
  return updateObj(state, { recent });
}

const miscReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_RECENT: return addRecent(state, action);
    case REMOVE_RECENT: return removeRecent(state, action);
    case DELETE_BOARD: return removeRecent(state, action);
    default: return state;
  }
};

export default miscReducer;
