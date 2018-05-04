import React from 'react';
import {BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import BookDetail from '../screens/BookDetail';
import HomeContainer from '../screens/Home';
import LogIn from '../screens/LogIn';

export const ROUTES = {
  HOME: () => '/dashboard',
  BOOK_DETAIL: id => `/books/${id}`,
  LOG_IN: () => '/logIn',
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to={ROUTES.HOME()}/>
        <PrivateRoute path={ROUTES.HOME()} Component={HomeContainer} />
        <PrivateRoute path={ROUTES.BOOK_DETAIL()} Component={BookDetail} />
        <PublicRoute path={ROUTES.LOG_IN()} Component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
