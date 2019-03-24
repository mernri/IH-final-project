import React, { Component } from 'react';
import InspirationCard from "./InspirationCard.js"

export default class InspirationSection extends Component {
  render() {
    return (
      <div>
        <InspirationCard name="Paris"/> 
        <InspirationCard name="Bali"/> 
        <InspirationCard name="Berlin"/> 
        <InspirationCard name="Chiang Mai"/> 
        <InspirationCard name="Bangkok"/> 
        <InspirationCard name="Paris"/> 
        <InspirationCard name="Paris"/> 
        <InspirationCard name="Paris"/> 
        <InspirationCard name="Paris"/> 
        <InspirationCard name="Paris"/> 
      </div>
    )
  }
}
