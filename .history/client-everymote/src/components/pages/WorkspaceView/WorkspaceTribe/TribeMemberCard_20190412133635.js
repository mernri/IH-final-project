import React, { Component } from "react";
import axios from "axios";
import "./TribeMemberCard.css";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOneUser = userId => {
    axios.get(`http://localhost:5000/api/user/${userId}`).then(userData => {
      // console.log("hello, i'm the a user in the tribe", userData.data);
      this.setState(userData.data);
      return userData.data;
    });
  };

  // Check if the user logged in is the user to render. If yes : show "leave the tribe" button

  render() {
    console.log(this.props.user);
    return (
      <div>
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
