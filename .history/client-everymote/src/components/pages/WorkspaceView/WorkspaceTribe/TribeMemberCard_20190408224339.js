import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {

  

   getTheTribeUser = () => {
     axios.get(`/auth/user/${this.props.user}`)
     .then(user => {
       console.log(user)
     })
   }

    // get the id, displays the name, picture and occupation

  render() {
    this.getTheTribeUser()

    return (
      <div>
         <strong>hello tribe card, I'm {this.props.userId}</strong> 
      </div>
    );

  } 
}
