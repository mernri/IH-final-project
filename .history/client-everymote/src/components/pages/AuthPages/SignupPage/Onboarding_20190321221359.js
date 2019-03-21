import React, { Component } from "react";
import AuthService from "../Authservices.js";


export default class Onboarding extends Component {

  service = new AuthService();

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    this.service.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  } 

  render() {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Who are you</h3>
              <p className="subtitle has-text-grey">fill the form</p>

              <form onSubmit={this.handleFormSubmit}>
              {/* Fullname FIELD */}
              <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                  <input
                    name="fullname"
                    className="input"
                    type="text"
                    placeholder="type your name"
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
                    placeholder="type your name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="control">
                <button className="button is-link">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
