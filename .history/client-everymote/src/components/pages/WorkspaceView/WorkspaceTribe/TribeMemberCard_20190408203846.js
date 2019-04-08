import React, { Component } from "react";
import AuthService from "../../AuthPages/Authservices.js";

export default class TribeMemberCard extends Component {

  
  service = new AuthService();

   getTheTribeUser = (userId) => {
     this.service.find(userId)
     .then(user => {
       console.log(user)
     })
   }

    // get the id, displays the name, picture and occupation

  render() {
    console.log("tribe member card", this.props.users)

    return (
      <div>
         <strong>hello tribe card, I'm {this.props.userId}</strong> 
      </div>
    );

  } 
}
