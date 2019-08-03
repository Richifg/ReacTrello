import { ADD_RECENT } from '../actions';
import { updateObj } from '../../utils';

const initState = {
  recent: [],
};


function addRecent(state, action) {
  const { boardId } = action.payload;
  const recent = state.recent.includes(boardId)
    ? [boardId, ...state.recent.slice().filter(k => k !== boardId)]
    : [boardId, ...state.recent.slice()];
  if (recent.length > 4) recent.pop();
  return updateObj(state, { recent });
}


const miscReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_RECENT: return addRecent(state, action);
    default: return state;
  }
};

export default miscReducer;
