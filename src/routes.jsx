import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Home } from './pages/Home/home'
import { Cart } from './pages/cart/cart'
import { NotFound } from './pages/notFound/notFound'
export const Routes = ()  => {
  return (
    <Router>
        <Switch>          
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}