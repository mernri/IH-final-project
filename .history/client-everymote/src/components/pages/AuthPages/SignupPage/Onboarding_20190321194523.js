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
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="type your name"
                  />
                </div>
              </div>

              {/* Occupation FIELD */}
              <div className="field">
                <label className="label">Occupation</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Type your 'job'"
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
