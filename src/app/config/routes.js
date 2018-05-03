import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
        <Redirect exact from='/' to={ROUTES.LOG_IN()}/>
        <Route exact path={ROUTES.HOME()} component={HomeContainer} />
        <Route path={ROUTES.BOOK_DETAIL()} component={BookDetail} />
        <Route ṕath={ROUTES.LOG_IN()} component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
