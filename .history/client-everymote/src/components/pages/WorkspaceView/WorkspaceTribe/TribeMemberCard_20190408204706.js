import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {

  
  componentWillMount() {
    this.getTheTribeUser();
    // console.log(this.props.userId)
  }

   getTheTribeUser = () => {
     axios.get(`/auth/user/${this.props.userId}`)
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
