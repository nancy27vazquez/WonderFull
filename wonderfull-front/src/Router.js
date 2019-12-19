import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import Home from "../src/components/feed/Feed";
import Recommendation from "../src/components/recommend/RecommendFormStepper";
import NextTrip from "../src/components/nextTrip/Global";
import Favorites from "../src/components/favorites/Favorites";
import Profile from "../src/components/user/Profile";
// Import above whatever component you may need //

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route path="/discover">
      <Home />
    </Route>
    <Route path="/recommend">
      <Recommendation />
    </Route>
    <Route path="/next_trip">
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
