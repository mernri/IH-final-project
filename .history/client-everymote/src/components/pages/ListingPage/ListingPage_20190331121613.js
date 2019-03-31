import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import { Link } from "react-router-dom";
// import "./ListingPage.css";

import "bulma/css/bulma.css";

class ListingPage extends React.Component {
  render() {
    var style1 = {
      background: "violet"
    };
    var style2 = {
      background: "pink"
    };

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

        <div className="tomap-button">
          <Link to="/workspaces-map" className="button is-info toggle-map">
            Map view
          </Link>
        </div>

        <div className="listing">
          <WorkspaceListing />
        </div>
      </div>
    );
  }
}

export default ListingPage;
