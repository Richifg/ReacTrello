import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Html5Backend from 'react-dnd-html5-backend';
import store from '../redux/store';
import App from './App';


export default () => (
  <Provider store={store}>
    <DndProvider backend={Html5Backend}>
      <App />
    </DndProvider>
  </Provider>
);
