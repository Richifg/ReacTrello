import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SignInButton from '../components/SignInButton';

const LoginPage = () => (
  <div id="app" className="d-flex flex-column justify-content-center align-items-center">
    <div className="sign-in-icon-wrapper1">
      <div className="sign-in-icon-wrapper2">
        <div className="sign-in-icon-wrapper3">
          <FontAwesomeIcon className="sign-in-icon" icon="feather-alt" />
        </div>
      </div>
    </div>
    <h1 className="sign-in-title">ReacTrello</h1>
    <SignInButton text="Continue Anonymously" />
  </div>
);

export default LoginPage;
