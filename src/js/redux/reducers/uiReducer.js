import { updateObj } from '../../utils';
import { UPDATE_COLOR, UPDATE_UI } from '../actions';

const initState = {
  color: 'blue',
  img: null,
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COLOR: return updateObj(state, { color: action.payload.color });
    case UPDATE_UI: return updateObj(state, {
      color: action.payload.color,
      img: action.payload.img,
    });
    default: return state;
  }
};

export default uiReducer;
