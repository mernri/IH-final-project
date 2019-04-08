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
    this.getOneUser(this.props.user);
  }

  getOneUser = userId => {
    axios.get(`http://localhost:5000/api/user/${userId}`).then(userData => {
      console.log("hello, i'm the only user in the tribe", userData.data);
      this.setState(userData.data);
      return userData.data;
    });
  };

  render() {
    return (
      <div>
        <article>
          <div className="profile-photo" />
          <div className="profile-info">
            <h1>Nick Lewis</h1>
            <p>
              Creative technologist{" "}
              <a href="http://fiascodesign.co.uk/" target="_blank">
                @FiascoDesign
              </a>
              . Maker of web things. Joint owner{" "}
              <a href="http://mountainandco.uk/" target="_blank">
                @mountainandco
              </a>
              .
            </p>
          </div>
        </article>

        <strong>hello tribe card, I'm coucou {this.state.email}</strong>
      </div>
    );
  }
}
