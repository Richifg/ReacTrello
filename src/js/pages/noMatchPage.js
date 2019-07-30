import React from 'react';

const NoMatchPage = () => (
  <div id="content" className="container-fluid bg-info py-5">
    <div className="row justify-content-center text-center">
      <div className="d-flex flex-column">
        <h1 className="text-danger">404</h1>
        <h3 className="text-body">Oops! Page not found</h3>
      </div>
    </div>
  </div>
);

export default NoMatchPage;
