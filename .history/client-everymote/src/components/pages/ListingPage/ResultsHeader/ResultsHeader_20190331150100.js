import React, { Component } from "react";

export default class ResultsHeader extends Component {
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
                <div className="city-searchbar">
                  {/* Description  */}
                  <div className="field">
                    <label className="label"></label>
                    <div className="control">
                      <input
                        name="description"
                        className="input"
                        type="text-area"
                        placeholder="type the desription"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
