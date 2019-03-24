import React, { Component } from "react";
import InspirationCard from "./InspirationCard.js";

export default class InspirationSection extends Component {
  render() {
    return (
      <div>
        <InspirationCard ville="Paris" />
        <InspirationCard ville="Bali" />
        <InspirationCard ville="Berlin" />
        <InspirationCard ville="Chiang Mai" />
        <InspirationCard ville="Bangkok" />
        <InspirationCard ville="Seoul" />
        <InspirationCard ville="Budapest" />
        <InspirationCard ville="Buenos Aires" />
        <InspirationCard ville="Barcelona" />
        <InspirationCard ville="Lisbon" />
      </div>
    );
  }
}
