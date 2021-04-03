import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Home from "./pages/Home";
import Search from "./pages/Search";

import NotFound from "./pages/NotFound";

const AuthenticateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signIn", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />

      <Route exact path="/" component={Home} />

      <AuthenticateRoute path="/search" component={Search} />

      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
