import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAuthorizationToken } from '../../utils/sessionStorage';
import { ROUTES } from '../../config/routes';

function PublicRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={props =>
        !getAuthorizationToken() ? <Component {...props} /> : <Redirect to={ROUTES.HOME()} />
      }
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default PublicRoute;
