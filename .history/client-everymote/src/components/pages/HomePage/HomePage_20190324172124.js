import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hero title</h1>
              <h2 className="subtitle">Hero subtitle</h2>
            </div>
          </div>
        </section>

        <Link to={"/workspaces"}>
          <p> go to listing</p>
        </Link>
      </div>
    );
  }
}
