import { combineReducers } from 'redux';
import boardsReducer from './boardsReducer';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';
import miscReducer from './miscReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  misc: miscReducer,
  ui: uiReducer,
});

export default rootReducer;
