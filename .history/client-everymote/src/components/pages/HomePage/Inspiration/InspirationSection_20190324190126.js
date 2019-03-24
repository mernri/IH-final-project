import React, { Component } from "react";
import InspirationCard from "./InspirationCard.js";

export default class InspirationSection extends Component {
  render() {
    return (
      <div>
        <div className="tile-ancestor">
          <InspirationCard className="tile is-parent" ville="Paris" image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6" />
          <InspirationCard className="tile is-parent" ville="Bali" />
          <InspirationCard className="tile is-parent" ville="Berlin" />
          <InspirationCard className="tile is-parent" ville="Chiang Mai" />
          <InspirationCard className="tile is-parent" ville="Bangkok" />
          <InspirationCard className="tile is-parent" ville="Seoul" />
          <InspirationCard className="tile is-parent" ville="Budapest" />
          <InspirationCard className="tile is-parent" ville="Buenos Aires" />
          <InspirationCard className="tile is-parent" ville="Barcelona" />
          <InspirationCard className="tile is-parent" ville="Lisbon" />
        </div>
      </div>
    );
  }
}
