import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from "./components/layout/NavBar/Nav.js"
import HomePage from "./components/pages/HomePage/HomePage.js"
import ListingPage from "./components/pages/ListingPage/ListingPage.js"

import "bulma/css/bulma.css";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/workspaces" component={ListingPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
