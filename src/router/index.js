import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import LoginPage from "../components/Login"
import HomePage from "../components/Home"
import NotFound from "../components/NotFound"
import Dashboard from "../components/Dashboard"
import PrivateRoute from "../containers/PrivateRoute"

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact > <HomePage /> </Route>
        <Route path="/login"> <LoginPage /> </Route>
        <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
    </Router>
  );
}