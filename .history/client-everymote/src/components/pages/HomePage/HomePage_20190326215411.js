import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import InspirationSection from "./Inspiration/InspirationSection";
import MapSection from "../ListingPage/Map/MapSection.js";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* FIRST SECTION : SEARCH */}
        <section class="hero is-info is-medium home-hero-background">
          <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-6 is-offset-3">
                <h1 class="title">Lorem ipsum</h1>
                <h2 class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Ex: Paris" />
                  </p>
                  <p class="control">
                    <a class="button is-info">Find</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECOND SECTION : INSPIRATION */}
        <Link to={"/workspaces"}>
          <p> go to listing</p>
        </Link>

        <InspirationSection />
        <div className="home-map">
          <MapSection />
        </div>
      </div>
    );
  }
}
