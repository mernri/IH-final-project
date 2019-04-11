import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>coucou je suis la page de profil {this.props.user.fullname}</div>
    );
  }
}
