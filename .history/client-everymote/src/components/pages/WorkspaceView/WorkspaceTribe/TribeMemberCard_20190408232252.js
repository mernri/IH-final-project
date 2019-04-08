import React, { Component } from "react";
import axios from "axios";

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
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
        </div>

        <strong>hello tribe card, I'm coucou {this.state.email}</strong>
      </div>
    );
  }
}
