import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js";

import HomePage from "./components/pages/HomePage/HomePage.js";
import ListingPage from "./components/pages/ListingPage/ListingPage.js";
import WorkspaceView from "./components/pages/WorkspaceView/WorkspaceView.js";
import Signup from "./components/pages/AuthPages/SignupPage/Signup.js";
import Login from "./components/pages/AuthPages/LoginPage/Login.js";
import Onboarding from "./components/pages/AuthPages/SignupPage/Onboarding.js";
import addWorkspace from "./components/pages/AddWorkspacePage/addWorkspace.js";
import AuthService from "./components/pages/AuthPages/Authservices.js";
import CitiesPage from "./components/pages/CitiesPage/CitiesPage.js";

import "bulma/css/bulma.css";
import "./App.scss";
import CompaniesPage from "./components/pages/CompaniesPage/CompaniesPages.js";

class App extends React.Component {
  state = {
    user: null
  };

  service = new AuthService();

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    if (this.state.user === null) {
      this.service
        .loggedin()
        .then(response => this.setState({ user: response }))
        .catch(err => this.setState({ user: false }));
    } else this.updateUser(this.state.user);
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}>
          <Nav user={this.state.user} updateUser={this.updateUser} />

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
              path="/profile"
              render={props => (
                <Onboarding
                  user={this.state.user}
                  updateUser={this.updateUser}
                  history={props.history}
                />
              )}
            />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/workspaces" component={ListingPage} />
            <Route exact path="/cities" component={CitiesPage} />
            <Route exact path="/workspaces/:city" component={ListingPage} />
            <Route exact path="/companies" component={CompaniesPage} />

            <Route
              exact
              path="/workspace/:id"
              render={props => (
                <WorkspaceView
                  workspaceid={props.match.params.id}
                  user={this.state.user}
                />
              )}
            />

            <Route exact path="/add-workspace" component={addWorkspace} />
          </Switch>
        </div>
      )} />
    );
  }
}

export default App;
