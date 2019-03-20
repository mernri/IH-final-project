import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        Hello I am the Home page
        <Link to={"/workspaces"}>
          <p> go to listing</p>
        </Link>
      </div>
    );
  }
}
