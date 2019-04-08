import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {

  
  componentDidMount() {
    this.getTheTribeUser();
    console.log("hello, can you see me?", this.props.user)
  }

   getTheTribeUser = () => {
     axios.get(`/auth/user/${this.props.userId}`)
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
