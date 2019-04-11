import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        coucou je suis la page de profil {this.props.user.fullname}

        <article>
          <img
            src={this.props.user.picture}
            alt="Avatar"
            className="avatar profile-photo"
          />
          <div className="profile-info">
            <h2>{this.props.user.fullname || this.props.user.fullName}</h2>
            <p>{this.props.user.occupation}</p>
          </div>
        </article>

      </div>
    );
  }
}
