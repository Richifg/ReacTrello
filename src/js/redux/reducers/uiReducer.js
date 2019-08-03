import { updateObj } from '../../utils';
import { UPDATE_COLOR } from '../actions';

const initState = {
  color: 'blue',
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COLOR: return updateObj(state, { color: action.payload.color });
    default: return state;
  }
};

export default uiReducer;
