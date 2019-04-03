import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js";
import { Link } from "react-router-dom";


// import HomePage from "./components/pages/HomePage/HomePage.js";
import ListingPage from "./components/pages/ListingPage/ListingPage.js";
import WorkspaceView from "./components/pages/WorkspaceView/WorkspaceView.js";
import Signup from "./components/pages/AuthPages/SignupPage/Signup.js";
import Login from "./components/pages/AuthPages/LoginPage/Login.js";
import Onboarding from "./components/pages/AuthPages/SignupPage/Onboarding.js";
import addWorkspace from "./components/pages/AddWorkspacePage/addWorkspace.js";
import AuthService from "./components/pages/AuthPages/Authservices.js";

import "bulma/css/bulma.css";
import "./App.css";

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
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  render() {
    return (
      <div className="App">
        <Nav user={this.state.user} />

        <Switch>


        <Route exact path="/" render={() => (
              <div>
                {this.state.user && this.state.user._id ? (
                  <Nav user={this.state.user} updateUser={this.updateUser} />
                ) : (
                      <div className="cta">
                        <Link className="btn" to="/signup">Sign up</Link>
                        <Link className="btn" to="/login">Log in</Link>
                      </div>
                  )} />
                )}
              </div>
            )} />



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

          <Route exact path="/workspaces" component={ListingPage} />

          <Route exact path="/workspace/:id" component={WorkspaceView} />

          <Route exact path="/add-workspace" component={addWorkspace} />
        </Switch>
      </div>
    );
  }
}

export default App;
