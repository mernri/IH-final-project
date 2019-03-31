import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import SearchBar from "../../layout/SearchBar/SearchBar.js";
import axios from "axios";

import "bulma/css/bulma.css";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "listing", 
    };
  }

  componentDidMount() {
    this.getAllWorkspaces();
  }


  getAllWorkspaces = () => {
    axios
      .get(`http://localhost:5000/api/workspaces`)
      .then(responseFromApi => {
        this.setState({
          listOfWorkspaces: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleView = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });
      console.log(this.state.listOfWorkspaces)

  };

  getCityWorkspaces = workspaces => {
    this.setState({
      listOfWorkspaces: workspaces
    });
  };

  render() {
    return (
      <div>
        <div className="content-header">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container" style={{ width: "70%" }}>
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
                  <SearchBar updateWorkspaces={this.getCityWorkspaces} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="workspaces-view"
          style={{ marginLeft: "5%", marginRight: "5%" }}
        >
          {this.state.view === "listing" ? (
            <div>
              <div
                className="button is-success"
                onClick={() => {
                  this.toggleView();
                }}
              >
                See on Map
              </div>
              <WorkspaceListing workspaces={this.state.listOfWorkspaces}/>
            </div>
          ) : (
            <div>
              <div
                className="button is-success"
                onClick={() => {
                  this.toggleView();
                }}
              >
                See as a List
              </div>
              <MapSection />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ListingPage;
