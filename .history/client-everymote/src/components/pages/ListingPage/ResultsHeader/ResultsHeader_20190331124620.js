import React, { Component } from "react";
import { Link } from "react-router-dom";
import WorkspaceListing from "../Listing/WorkspaceListing";
import WorkspaceMap from "../../WorkspaceView/WorkspaceMap/WorkspaceMap";

export default class ResultsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "listing"
    };
  }

  toggleMap = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });
  };

  render() {
    return (
      <div>
        <div className="content-header">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">SUPER LOGO ! </h1>
                <div className="header-sections columns">
                  <div className="column is-one-quarter" />
                  <div className="column columns is-two-quarters">
                    <p className="column">Remote Jobs</p>
                    <p className="column">Find your tribe</p>
                    <p className="column">Cities</p>
                  </div>
                  <div className="column is-one-quarter" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="city-searchbar">
          CITY SEARCHBAR - contient le composant searchbar
        </div>

        <Link to="/workspaces" className="button is-info toggle-map">
          View on list
        </Link>

        <Link className="button is-primary">Primary</Link>

        {this.state.view === "listing" ? (
          <WorkspaceListing />
        ) : (
          <WorkspaceMap />
        )}
      </div>
    );
  }
}
