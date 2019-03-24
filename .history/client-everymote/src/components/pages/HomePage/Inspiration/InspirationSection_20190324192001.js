import React, { Component } from "react";
import InspirationCard from "./InspirationCard.js";

export default class InspirationSection extends Component {
  render() {
    return (
      <div>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard
              ville="Paris"
              image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
            />
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
        </div>
      </div>
    );
  }
}
