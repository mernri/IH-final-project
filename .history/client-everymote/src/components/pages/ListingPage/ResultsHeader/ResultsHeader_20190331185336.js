import React, { Component } from "react";
import SearchBar from "../../../layout/SearchBar/SearchBar.js";

export default class ResultsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workspaces: []
    }
  }

  getWorkspaces = workspaces => {
    this.setState({
      workspaces: workspaces
    });
  };


  render() {
    return (
      <div>
        <div className="content-header">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container" style={{ width: "70%"}}>
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
                <div className="city-searchbar">
                  <SearchBar cityInput={this.getCityInput} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
