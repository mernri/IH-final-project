import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="profile-card">
          <div>
            <img
              src={this.props.user.picture}
              alt="Avatar"
              className="avatar profile-photo"
            />
          </div>
          <div className="profile-info">
            <h2>{this.props.user.fullname || this.props.user.fullName}</h2>
            <p>{this.props.user.occupation}</p>
          </div>
        </div>
        <div className="profile-content">
          coucou je suis le contenu de la classe profile-content
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
