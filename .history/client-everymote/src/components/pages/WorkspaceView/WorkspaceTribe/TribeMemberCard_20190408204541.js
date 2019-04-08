import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {

 

   getTheTribeUser = async (userId) => {
    await this.props.user
    await axios.get(`/auth/user/${userId}`)
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
