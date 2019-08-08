import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SignInButton from '../components/SignInButton';

const LoginPage = () => (
  <div id="app" className="d-flex flex-column justify-content-center align-items-center">
    <FontAwesomeIcon className="sign-in-icon" icon="feather-alt" />
    <h1 className="sign-in-title">ReacTrello</h1>
    <h2 className="sign-in-sign">Sing In</h2>
    <SignInButton text="With credentials" />
    <span className="sign-in-or">Or</span>
    <SignInButton text="Continue Anonymously" />
  </div>
);

export default LoginPage;
