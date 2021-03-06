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
              </div>
            </div>
          </section>
        </div>

        <CitiesSection />
      </div>
    );
  }
}
