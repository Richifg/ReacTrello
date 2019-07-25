import React from 'react';
import List from './List';

export default () => (
  <div id="app" className="d-flex flex-column bg-dark">
    <div id="header" className="container text-center text-light">
      <h2>Trello Clone</h2>
    </div>
    <div id="content" className="container-fluid bg-primary">
      <div className="d-flex flex-column">
        <h3>Board Name</h3>
        <div id="board" className="row">
          <div className="col-auto">
            <List title="Monday" cards={['Tarea 1', 'Tarea 2']} />
          </div>
          <div className="col-auto">
            <List title="Tuesday" cards={['Muchas cosas que hacer!']} />
          </div>
          <div className="col-auto">
            <List title="I dont have any cards" />
          </div>
          <div className="col-auto">
            <List title="another one" />
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
);
