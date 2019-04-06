import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import axios from "axios";

import "bulma/css/bulma.css";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: "",
      city: "",
      listOfWorkspaces: [],
      view: "listing"
    };
    this.getWorkspaces = this.getWorkspaces.bind(this);
  }

  componentWillMount() {
    console.log(this.props.match.params.city)
    this.getWorkspaces();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { city } = this.state;
    this.setState(
      {
        citySearched: city.toLowerCase()
      },
      () => {
        this.getWorkspaces();
      }
    );
    console.log("citySearched = ", this.state.citySearched);
  };


  toggleView = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });
  };

  getWorkspaces = () => {
    if (this.props.match.params.city) {
      const city = this.props.match.params.city;
      axios
        .get(`http://localhost:5000/api/workspaces/${city}`)
        .then(responseFromApi => {
          this.setState({
            listOfWorkspaces: responseFromApi.data
          });
          this.props.history.push(`/workspaces/${city}`)
        })
        .catch(error => console.log(error));

    }
    else if (this.state.citySearched !== "") {
      const city = this.state.citySearched;
      axios
        .get(`http://localhost:5000/api/workspaces/${city}`)
        .then(responseFromApi => {
          this.setState({
            listOfWorkspaces: responseFromApi.data
          });
          this.props.history.push(`/workspaces/${city}`)
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
  };

  render() {
    return (
      <div>
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

        <div className="workspaces-view">
          {this.state.view === "listing" ? (
            <div>
              <div
                className="button"
                onClick={() => {
                  this.toggleView();
                }}
              >
                See on Map
              </div>
              <div className="container">
                <WorkspaceListing workspaces={this.state.listOfWorkspaces} />
              </div>
            </div>
          ) : (
            <div>
              <div
                className="button"
                onClick={() => {
                  this.toggleView();
                }}
              >
                See as a List
              </div>
              <MapSection
                city={this.state.citySearched}
                workspaces={this.state.listOfWorkspaces}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ListingPage;
