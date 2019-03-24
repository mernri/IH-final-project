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
              numberOfSpaces="52"
            />
            <InspirationCard ville="Bali" numberOfSpaces="54" />
            <InspirationCard ville="Berlin" numberOfSpaces="128" />
            <InspirationCard ville="Chiang Mai" numberOfSpaces="34" />
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Cuba" numberOfSpaces="48" />
            <InspirationCard ville="CapVert
" numberOfSpaces="102" />
            <InspirationCard ville="Budapest" numberOfSpaces="45" />
            <InspirationCard ville="Buenos Aires" numberOfSpaces="34" />
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Barcelona" numberOfSpaces="35" />
            <InspirationCard ville="Lisbon" numberOfSpaces="48" />
            <InspirationCard ville="Faro" numberOfSpaces="25" />
            <InspirationCard ville="Prague" numberOfSpaces="32" />
          </div>
        </div>
      </div>
    );
  }
}
