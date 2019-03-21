import React, { Component } from "react";

export default class Onboarding extends Component {
  render() {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">My profile</h3>
              <p className="subtitle has-text-grey">fill the form</p>

              {/* Username FIELD */}
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

              {/* Occupation FIELD */}
              <div className="field">
                  <label className="label">City</label>
                  <div className="control">
                    <input
                      name="city"
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
                    className="input"
                    type="text"
                    placeholder="Type your current city"
                  />
                </div>
              </div>

              <div className="control">
                <button className="button is-link">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
