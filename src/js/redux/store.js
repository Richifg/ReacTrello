import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// actives redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// read and save functions for local storage

const saveState = (state) => {
  const data = {
    boards: state.boards, cards: state.cards, lists: state.lists,
  };
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem('state', serializedData);
  } catch (e) {
    throw e;
  }
};

const readState = () => {
  try {
    const serializedData = localStorage.getItem('state');
    if (serializedData) {
      const data = JSON.parse(serializedData);
      return { ...data, ui: { color: 'blue', img: null } };
    } return undefined;
  } catch (e) {
    return undefined;
  }
};


const store = createStore(rootReducer, readState(), composeEnhancers());

store.subscribe(() => {
  const state = store.getState();
  console.log('saving state');
  saveState(state);
});

export default store;
