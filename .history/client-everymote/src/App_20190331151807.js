import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js";
import HomePage from "./components/pages/HomePage/HomePage.js";
import ListingPage from "./components/pages/ListingPage/ListingPage.js";
import WorkspaceView from "./components/pages/WorkspaceView/WorkspaceView.js";
import Signup from "./components/pages/AuthPages/SignupPage/Signup.js";
import Login from "./components/pages/AuthPages/LoginPage/Login.js";
import Onboarding from "./components/pages/AuthPages/SignupPage/Onboarding.js";
import MapSection from "./components/pages/ListingPage/Map/MapSection.js";
import addWorkspace from "./components/pages/AddWorkspacePage/addWorkspace.js";
import AuthService from "./components/pages/AuthPages/Authservices.js";

import "bulma/css/bulma.css";
import "./App.css";
import ResultsHeader from "./components/pages/ListingPage/ResultsHeader/ResultsHeader.js";

class App extends React.Component {
  state = {
    user: null
  };

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null) {
      this.service
        .loggedin()
        .then(response => this.setState({ user: response }))
        .catch(err => this.setState({ user: false }));
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )}
          />

          <Route
            exact
            path="/login"
            render={props => (
              <Login updateUser={this.updateUser} history={props.history} />
            )}
          />

          <Route
            exact
            path="/onboarding"
            render={props => (
              <Onboarding
                updateUser={this.updateUser}
                history={props.history}
              />
            )}
          />

          <Route exact path="/" component={ResultsHeader} />
          <Route exact path="/workspaces" component={ListingPage} />

          <Route exact path="/workspace/:id" component={WorkspaceView} />

          <Route exact path="/add-workspace" component={addWorkspace} />
        </Switch>
      </div>
    );
  }
}

export default App;
