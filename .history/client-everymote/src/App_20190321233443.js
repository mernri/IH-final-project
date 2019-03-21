import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js";
import HomePage from "./components/pages/HomePage/HomePage.js";
import ListingPage from "./components/pages/ListingPage/ListingPage.js";
import WorkspaceView from "./components/pages/WorkspaceView/WorkspaceView.js";
import Signup from "./components/pages/AuthPages/SignupPage/Signup.js";
import Onboarding from "./components/pages/AuthPages/SignupPage/Onboarding.js";
import AuthService from "../Authservices.js";

import "bulma/css/bulma.css";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      user: null
    }
  } 

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null ) {
      this.service.loggedin()
        .then(response => this.setState({user: response}))
        .catch(err => this.setState({user: false}))
      ;
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  }

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
        </Switch>
      </div>
    );
  }
}

export default App;
