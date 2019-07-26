import React from 'react';
import { Provider } from 'react-redux';
import Board from './Board';
import store from '../redux/store';

export default () => (
  <Provider store={store}>
    <div id="app" className="d-flex flex-column bg-dark">
      <div id="header" className="container text-center text-light">
        <h2>Trello Clone</h2>
      </div>
      <div id="content" className="container-fluid bg-primary">
        <Board name="temporal" />
      </div>
      <footer id="footer" className="container text-light">
        <div className="row justify-content-end">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  </Provider>
);
