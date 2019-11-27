import React from "react";
import { Switch, Route } from "react-router-dom";

// Import here whatever component you may need //

const Router = () => (
  <Switch>
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/recommendation">
      <Recommendation />
    </Route>
  </Switch>
);

export default Router;
