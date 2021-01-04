import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SignInButton from '../components/SignInButton';

const LoginPage = () => {
  // icon animation shows on render, wait for user to focus on page before rendering
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    window.addEventListener('focus', () => setShowIcon(true));
    return window.addEventListener('focus', () => setShowIcon(true));
  }, []);


  return (
    <div id="app" className="d-flex flex-column justify-content-center align-items-center">
      {showIcon && (
        <>
          <div className="sign-in-icon-wrapper1">
            <div className="sign-in-icon-wrapper2">
              <div className="sign-in-icon-wrapper3">
                <FontAwesomeIcon className="sign-in-icon" icon="feather-alt" />
              </div>
            </div>
          </div>
          <h1 className="sign-in-title">ReacTrello</h1>
        </>
      )}
      <SignInButton text="Enter" />
    </div>
  );
};

export default LoginPage;
