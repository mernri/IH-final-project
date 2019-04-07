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

  // PROBLEME : asynchrone => dégager le .then et le remplacer par un async await (code plus clair)

  addressToGeoCoordinates = async fullAddress => {
    const APIKEY = "lIlwmyAyKX9cCMCpWgsLXGS5ZWvrNG0X";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${fullAddress}`;
    let response = {};
    let latitude;
    let longitude;

    try {
      response = await axios.get(url);
      latitude = await response.data.results[0].locations[0].latLng.lat;
      longitude = await response.data.results[0].locations[0].latLng.lng;
      console.log("latitude ", latitude);

      await this.setState({
        latitude: latitude,
        longitude: longitude
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    console.log("étape 1");

    await this.addressToGeoCoordinates(
      this.state.address + " " + this.state.city
    );

    const name = this.state.name;
    const address = this.state.address;
    const zipcode = this.state.zipcode;
    const city = this.state.city.toLowerCase();
    const description = this.state.description;
    const phone = this.state.phone;
    const pictures = this.state.pictures;
    const monthlyPrice = this.state.monthlyPrice;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    console.log("hello", this.state.longitude);

    console.log("étape 2");
    // convert address to geocordinates and change the state.lat and state.lng before posting to axios
    await axios
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
    console.log("étape 3");

    // PERMET DE CREER UN NOUVEAU workspace AVEC LES INFOS DU FORMULAIRE
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
                      type="text"
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
                {/* Add pictures */}
                <div class="field">
                  <div class="file is-info has-name">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload" />
                        </span>
                        <span class="file-label">Info file…</span>
                      </span>
                      <span class="file-name">
                        Screen Shot 2017-07-29 at 15.54.25.png
                      </span>
                    </label>
                  </div>
                </div>
                
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
