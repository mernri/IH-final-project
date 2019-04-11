import React, { Component } from "react";
import AuthService from "../Authservices.js";
import Profile from "./Profile.js";
import { Redirect } from "react-router-dom";

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      fullname: "",
      city: "",
      occupation: "",
      // redirectToListing: false,
      isProfileComplete: false, 
      user: {}
    };
  }

  componentWillMount() {
    this.isProfileComplete();
  }

  service = new AuthService();

  handleUpload = event => {
    let formData = new FormData();
    formData.append("photo", event.target.files[0]);

    this.service.upload(formData).then(response => {
      this.props.updateUser(response);
      this.setState({ picture: response.picture });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.service
      .edit(this.state.fullname, this.state.city, this.state.occupation)
      .then(response => {
        console.log("response we send to update user", response);
        this.props.updateUser(response);
        this.isProfileComplete();
        // this.props.history.push("/");
      });
  };

  isProfileComplete = () => {
    this.service.loggedin().then(user => {
      this.setState({
        user: user,
        isProfileComplete: true
      });
      return user.fullname && user.city;
    });
  };

  render() {
    // if (this.state.redirectToListing) {
    //   return <Redirect to="/workspaces" />;
    // }

    return (
      <div>
        {!this.state.isProfileComplete ? (
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Who are you</h3>
                <p className="subtitle has-text-grey">fill the form</p>

                <form onSubmit={this.handleFormSubmit}>
                  {/* Profile Picture upload */}

                  {!this.state.picture ? (
                    <label>
                      <img
                        className="avatar"
                        src={
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
                  ) : (
                    <img
                      className="avatar"
                      src={this.state.picture}
                      alt="profile"
                    />
                  )}

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
        ) : (
          <Profile user={this.state.user}/>
        )}
      </div>
    );
  }
}
