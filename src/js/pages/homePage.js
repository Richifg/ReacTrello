import React from 'react';
import BoardDisplay from '../components/BoardDisplay';


const testNames = ['Whatever...', 'Just Testing', 'odd', 'some name', 'coolname', 'more boards', 'this is la last one'];

const HomePage = () => (
  <div className="row mx-lg-auto mx-0 board-display-container">
    {testNames.map(name => (
      <BoardDisplay name={name} />
    ))
    }
  </div>
);

export default HomePage;
