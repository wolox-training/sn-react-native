import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {BookDetail} from "../screens/BookDetail/index.js"
import HomeContainer from "../screens/Home/index.js"

export const ROUTES = {
  HOME: () => '/dashboard',
  BOOK_DETAIL: id => `/books/${id}`,
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to={ROUTES.HOME()}/>
        <Route exact path={ROUTES.HOME()} component={HomeContainer} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
