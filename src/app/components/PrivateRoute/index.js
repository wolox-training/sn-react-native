import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ Component, path }) {
  return (
    <Route
      exact
      path={path}
      render={props => (sessionStorage.getItem('user') ? <Component {...props} /> : <Redirect to="/logIn" />)}
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};
