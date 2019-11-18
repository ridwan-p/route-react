import React from 'react'
import {useSelector} from 'react-redux'
import {
  Route,
  Redirect
} from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function ({ children, ...rest }) {
  const auth = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}