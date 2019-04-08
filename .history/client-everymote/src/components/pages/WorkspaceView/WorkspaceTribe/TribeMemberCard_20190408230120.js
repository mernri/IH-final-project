import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation

  componentWillReceiveProps() {
    {this.props.user && console.log("cool")}
  }
  
  render() {

    return (
      <div>
        <strong>hello tribe card, I'm coucou</strong>
      </div>
    );
  }
}
