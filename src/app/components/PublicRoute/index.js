import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component }) {
  return (
    <Route
      render={props => (!sessionStorage.getItem('user') ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
}

export default PublicRoute;

Pub
