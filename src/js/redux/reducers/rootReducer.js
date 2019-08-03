import { combineReducers } from 'redux';
import boardsReducer from './boardsReducer';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
  ui: uiReducer,
});

export default rootReducer;
