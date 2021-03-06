import React, { Component } from "react";
import axios from "axios";
import "./TribeMemberCard.css";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    this.props.user && this.props.loggeinUser
  }
 

  render() {

    return (
      <div>
        {this.props.user._id !== this.props.loggeinUser._id && (
          <div className="user-card">
            <article>
              <div className="useravatar">
                {this.props.userInTribe && (
                  <img
                    src="https://material.io/tools/icons/static/icons/baseline-close-24px.svg"
                    alt=""
                    className="close"
                    onClick={this.props.removeUser}
                  />
                )}
                <img
                  src={this.props.user.picture}
                  alt="Avatar"
                  className="avatar profile-photo"
                />
              </div>
              <div className="userprofile-info">
                <h2>{this.props.user.fullname || this.props.user.fullName}</h2>
                <p>{this.props.user.occupation}</p>
              </div>
            </article>
          </div>
        )}
      </div>
    );
  }
}
