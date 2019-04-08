import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation
  constructor(props) {
    super(props);
    this.state= {}
  }

  componentWillMount() {
    this.getOneUser().then((response) => console.log("hey", response))
  }
  
  getOneUser = userId => {
    axios.get(`http://localhost:5000/api/user/${userId}`).then(userData => {
      console.log("hello, i'm the only user in the tribe", userData.data);
      this.setState(userData.data)
      return userData.data;
    });
  };

  
  render() {

    return (
      <div>
        <strong>hello tribe card, I'm coucou </strong>
      </div>
    );
  }
}
