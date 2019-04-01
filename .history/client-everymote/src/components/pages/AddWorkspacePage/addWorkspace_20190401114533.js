import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class addWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      zipcode: "",
      city: "",
      description: "",
      phone: "",
      pictures: [],
      monthlyPrice: "",
      redirectToListing: false,
      latitude: 0,
      longitude: 0
    };
  }

  getLatitude = fullAddress => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${fullAddress}`;
    axios.get(url).then(function(response) {
      const latitude = response.data.results[0].locations[0].latLng.lat;
      return latitude;
    });
  };

  getLongitude = fullAddress => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${fullAddress}`;
    axios.get(url).then(function(response) {
      const longitude = response.data.results[0].locations[0].latLng.lng;
      return longitude;
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getLatLng = () => {
    const latitude = this.getLatitude(this.state.address + " " + this.state.city);
    const longitude = this.getLongitude(this.state.address + " " + this.state.city);

    this.setState({
      latitude: latitude,
      longitude: longitude
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const {
      name,
      address,
      zipcode,
      city,
      description,
      phone,
      pictures,
      monthlyPrice
    } = this.state;

    this.getLatLng()

    console.log(this.state);
    // PERMET DE CREER UN NOUVEAU workspace AVEC LES INFOS DU FORMULAIRE
    axios
      .post(
        "http://localhost:5000/api/workspaces/add",
        {
          name,
          address,
          zipcode,
          city,
          description,
          phone,
          pictures,
          monthlyPrice,

          latitude,
          longitude
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          name: "",
          address: "",
          zipcode: "",
          city: "",
          description: "",
          phone: "",
          pictures: [],
          monthlyPrice: "",

          redirectToOnboarding: true,
          latitude: 0,
          longitude: 0
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.redirectToOnboarding) {
      return <Redirect to="/workspaces" />;
    }
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Add a workspace</h3>
              <p className="subtitle has-text-grey">DO IT! </p>

              <form onSubmit={this.handleFormSubmit}>
                {/* Name  */}
                <div className="field">
                  <label className="label">Workspace name</label>
                  <div className="control">
                    <input
                      name="name"
                      className="input"
                      type="text"
                      placeholder="type the name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Description  */}
                <div className="field">
                  <label className="label">Workspace description</label>
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
                {/* Address  */}
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      name="address"
                      className="input"
                      type="text"
                      placeholder="type the address"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Zipcode  */}
                <div className="field">
                  <label className="label">Zipcode</label>
                  <div className="control">
                    <input
                      name="zipcode"
                      className="input"
                      type="number"
                      placeholder="type the zipcode"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* city  */}
                <div className="field">
                  <label className="label">City</label>
                  <div className="control">
                    <input
                      name="city"
                      className="input"
                      type="text"
                      placeholder="type the city"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* phone number  */}
                <div className="field">
                  <label className="label">Phone number</label>
                  <div className="control">
                    <input
                      name="phone"
                      className="input"
                      type="text"
                      placeholder="type the phone"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Monthly price (optional) */}
                <div className="field">
                  <label className="label">Monthly Price</label>
                  <div className="control">
                    <input
                      name="monthlyPrice"
                      className="input"
                      type="number"
                      placeholder="type the Monthly Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Daily price (optional) */}
                <div className="field">
                  <label className="label">Daily Price</label>
                  <div className="control">
                    <input
                      name="dailyPrice"
                      className="input"
                      type="number"
                      placeholder="type the Daily Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Annual price (optional) */}
                <div className="field">
                  <label className="label">Annual Price</label>
                  <div className="control">
                    <input
                      name="annualPrice"
                      className="input"
                      type="number"
                      placeholder="type the Annual Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* Add pictures */}
                MISSING PICTURES UPLOAD
                <div className="control has-text-centered">
                  <button className="button is-link ">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
