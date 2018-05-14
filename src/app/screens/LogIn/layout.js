import React from 'react';
import PropTypes from 'prop-types';

import wbooks from '../../../assets/ASSETS/wbooks_logo.svg';

import { logIn, userNotValid, passwordNotvalid, email, password } from './strings';

function LogInLayout({ validateLogIn, apiError, passwordError, emailError }) {
  return (
    <div className="log-in-container">
      <img className="log-in-logo" src={wbooks} alt="wbooks_logo" />
      <div className="log-in-inputs">
        <input className="log-in-texts" id="user" type="text" placeholder={email} />
        {emailError && (
          <h2 id="user-validation" className="log-in-alerts">
            {userNotValid}
          </h2>
        )}
      </div>
      <div className="log-in-inputs">
        <input className="log-in-texts" id="password" type="password" placeholder={password} />
        {passwordError && (
          <h2 id="password-validation" className="log-in-alerts">
            {passwordNotvalid}
          </h2>
        )}
      </div>
      <button onClick={validateLogIn} className="log-in-button">
        {logIn}
      </button>
      {apiError && (
        <h2 id="api-validation" className="log-in-alerts">
          {apiError}
        </h2>
      )}
    </div>
  );
}

LogInLayout.propTypes = {
  validateLogIn: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired
};

export default LogInLayout;
