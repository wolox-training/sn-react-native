import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ Component, path }) {
  return (
    <Route
      exact
      path={path}
      render={props =>
        !sessionStorage.getItem('user') ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}

export default PublicRoute;

PublicRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};
