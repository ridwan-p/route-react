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


export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact > <HomePage /> </Route>
        <Route path="/login"> <LoginPage /> </Route>
        <Route path="*"> <NotFound /> </Route>
      </Switch>
    </Router>
  );
}