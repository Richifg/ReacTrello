import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

import { readState, debouncedSaveState as saveState } from './localStorage';

// actives redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, readState(), composeEnhancers());
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export default store;
