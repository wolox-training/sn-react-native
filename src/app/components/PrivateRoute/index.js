import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated }) {
  return <Route render={props => (sessionStorage.getItem('user') ? <Component /> : <Redirect to="/logIn" />)} />;
}

export default PrivateRoute;
