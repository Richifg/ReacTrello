import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// actives redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers());
