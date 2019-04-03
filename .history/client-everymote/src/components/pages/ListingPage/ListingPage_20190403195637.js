import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import axios from "axios";

import "bulma/css/bulma.css";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      listOfWorkspaces: [],
      view: "listing"
    };
    this.getWorkspaces = this.getWorkspaces.bind(this);
  }

  componentDidMount() {
    this.getWorkspaces();
    console.log("city is ", this.state.city);
    console.log("workspaces are ", this.state.listOfWorkspaces);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { city } = this.state;
    this.setState({
      city: city
    });
    this.getWorkspaces();
  };

  toggleView = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });
  };

  getWorkspaces = () => {
    if (this.state.city !== "") {
      const city = this.state.city.toLowerCase;
      axios
        .get(`http://localhost:5000/api/workspaces/${city}`)
        .then(responseFromApi => {
          this.setState({
            city: city,
            listOfWorkspaces: responseFromApi.data
          });
        })
        .catch(error => console.log(error));
    } else {
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
    }
    console.log(this.state.city);
    console.log(this.state.listOfWorkspaces);
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
                      <a className="button is-info">Find my tribe</a>
                    </p>
                  </div>
                </form>
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
              <WorkspaceListing workspaces={this.state.listOfWorkspaces} />
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
