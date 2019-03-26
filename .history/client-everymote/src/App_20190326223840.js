import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js";
import HomePage from "./components/pages/HomePage/HomePage.js";
import ListingPage from "./components/pages/ListingPage/ListingPage.js";
import WorkspaceView from "./components/pages/WorkspaceView/WorkspaceView.js";
import Signup from "./components/pages/AuthPages/SignupPage/Signup.js";
import Onboarding from "./components/pages/AuthPages/SignupPage/Onboarding.js";



import "bulma/css/bulma.css";
import "./App.css";
import MapSection from "./components/pages/ListingPage/Map/MapSection.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/workspaces" component={ListingPage} />
          <Route exact path="/workspace/:id" component={WorkspaceView} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/onboarding" component={Onboarding} />
          <Route exact path="/workspaces-map" component={MapSection} />

        </Switch>
      </div>
    );
  }
}

export default App;
