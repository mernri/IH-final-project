import React, { Component } from "react";
import AuthService from "../Authservices.js";
import { Redirect } from "react-router-dom";

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      fullname: "",
      city: "",
      occupation: "",
      redirectToListing: false
    };
  }

  service = new AuthService();

  handleUpload = event => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);

    this.service.upload(formData).then(response => {
      this.props.updateUser(response);
      this.setState({ picture: response });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this.state.fullname", this.state.fullname);
    console.log("this.state.city", this.state.city);
    console.log("this.state.occupation", this.state.occupation);

    this.service
      .edit(this.state.fullname, this.state.city, this.state.occupation)
      .then(response => {
        console.log("response we send to update user", response);
        this.props.updateUser(response);
        this.props.history.push("/");
      });
  };

  render() {
    if (this.state.redirectToListing) {
      return <Redirect to="/workspaces" />;
    }

    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Who are you</h3>
              <p className="subtitle has-text-grey">fill the form</p>

              <form onSubmit={this.handleFormSubmit}>
                {/* Profile Picture upload */}
                <label>
                  <img
                    className="avatar"
                    src={
                      this.state.picture ||
                      "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
                    }
                    alt="profile"
                  />
                  <input
                    type="file"
                    name="picture"
                    onChange={this.handleUpload}
                  />
                </label>

                {/* Fullname FIELD */}
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control">
                    <input
                      name="fullname"
                      className="input"
                      type="text"
                      placeholder="type your name"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* City FIELD */}
                <div className="field">
                  <label className="label">City</label>
                  <div className="control">
                    <input
                      name="city"
                      className="input"
                      type="text"
                      placeholder="type your city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* Occupation FIELD */}
                <div className="field">
                  <label className="label">Occupation</label>
                  <div className="control">
                    <input
                      name="occupation"
                      className="input"
                      type="text"
                      placeholder="type your occupation"
                      value={this.state.occupation}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="control">
                  <button className="button is-link">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
