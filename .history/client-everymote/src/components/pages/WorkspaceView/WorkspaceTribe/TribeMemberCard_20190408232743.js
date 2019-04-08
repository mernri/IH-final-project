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
      <div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="card">
          <div class="header">
            <div class="avatar">
              <img src="https://image.ibb.co/fa2YRF/dounia.jpg" alt=""/>
            </div>
          </div>
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h3 class="username">Helen Miller</h3>
              <h5 class="position">Accountant</h5>
            </div>
            <div class="user-bio has-text-centered">
              <p>Helen Miller is an accountant at the Acme Inc comany. She works very hard.</p>
            </div>
            <div class="action has-text-centered">
              <a href="#" class="button is-small">View profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="https://cssninja.io" class="link-button">
    <img src="https://image.ibb.co/dR3ZRm/cssninja_icon_white.png">
  </a>
</div>
        

        <strong>hello tribe card, I'm coucou {this.state.email}</strong>
      </div>
    );
  }
}
