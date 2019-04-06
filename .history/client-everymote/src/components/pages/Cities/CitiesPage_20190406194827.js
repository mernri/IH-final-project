import React, { Component } from "react";
import { Link } from "react-router-dom";
import CitiesSection from "./Cities/CitiesSection.js";

export default class CitiesPage extends Component {
  render() {
    return (
      <div>
        {/* FIRST SECTION : SEARCH */}
        <div className="content-header">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container" style={{ width: "70%" }}>
                <h1 className="title">SUPER LOGO ! </h1>

                <form onSubmit={this.handleFormSubmit}>
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input
                        name="city"
                        className="input"
                        type="text"
                        placeholder="Ex: Paris, Berlin..."
                        onChange={this.handleChange}
                      />
                    </p>
                    <p className="control">
                      <input
                        type="submit"
                        className="button is-info"
                        value="Find my tribe"
                      />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* SECOND SECTION : INSPIRATION */}
        <Link to={"/workspaces"}>
          <p> go to listing</p>
        </Link>

        <CitiesSection />
      </div>
    );
  }
}
