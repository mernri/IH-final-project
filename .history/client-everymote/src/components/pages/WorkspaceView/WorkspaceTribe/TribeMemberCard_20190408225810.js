import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {


  
    // get the id, displays the name, picture and occupation

  render() {
    console.log("coucou", this.props.user)

    return (
      <div>
         <strong>hello tribe card, I'm coucou {this.props.user.email}</strong> 
      </div>
    );

  } 
}
