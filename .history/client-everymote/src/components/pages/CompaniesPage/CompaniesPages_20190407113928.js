import React, { Component } from "react";
import CitiesSection from "./Cities/CitiesSection";

export default class CompaniesPage extends Component {
  render() {
    return (
      <div>
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
