import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {

  
  componentWillMount() {
    this.getTheTribeUser();
    // console.log(this.props.userId)
  }

   getTheTribeUser = async (userId) => {
    await this.props.user
     axios.get(`/auth/user/${userId}`)
     .then(user => {
       console.log(user)
     })
   }

    // get the id, displays the name, picture and occupation

  render() {

    return (
      <div>
         <strong>hello tribe card, I'm {this.props.userId}</strong> 
      </div>
    );

  } 
}
