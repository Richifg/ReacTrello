import React from 'react';
import PropTypes from 'prop-types';

const SignInButton = ({ text }) => (
  <a
    href="#/home"
    className="sign-in-button text-center p-3"
  >
    {text}
  </a>
);

SignInButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SignInButton;
