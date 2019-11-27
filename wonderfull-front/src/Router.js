import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "";
import Signup from "";
import Feed from "";
import Recommendation from "";
import NextTrip from "";
import Favorites from "";
import Profile from "";
// Import above whatever component you may need //

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
    <Route path="/feed">
      <Feed />
    </Route>
    <Route path="/recommendation">
      <Recommendation />
    </Route>
    <Route path="/next-trip">
      <NextTrip />
    </Route>
    <Route path="/favorites">
      <Favorites />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
  </Switch>
);

export default Router;
