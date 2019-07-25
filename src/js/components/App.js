import React from 'react';
import { Provider } from 'react-redux';
import List from './List';
import store from '../redux/store';

export default () => (
  <Provider store={store}>
    <div id="app" className="d-flex flex-column bg-dark">
      <div id="header" className="container text-center text-light">
        <h2>Trello Clone</h2>
      </div>
      <div id="content" className="container-fluid bg-primary">
        <div className="d-flex flex-column">
          <h3>Board Name</h3>
          <div id="board" className="row">
            <div className="col-auto">
              <List board="temporal" name="Monday" />
            </div>
            <div className="col-auto">
              <List board="temporal" name="Tuesday" cards={['Muchas cosas que hacer!']} />
            </div>
            <div className="col-auto">
              <List board="temporal" name="I have no cards :(" />
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="container text-light">
        <div className="row justify-content-end">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  </Provider>
);
