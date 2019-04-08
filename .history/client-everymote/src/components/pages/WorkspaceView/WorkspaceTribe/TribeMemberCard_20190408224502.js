import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {


  componentDidMount() {
    console.log("coucou", this.props.user)
  }
    // get the id, displays the name, picture and occupation

  render() {

    return (
      <div>
         <strong>hello tribe card, I'm coucou</strong> 
      </div>
    );

  } 
}
