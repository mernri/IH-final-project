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
            <InspirationCard ville="Bali" numberOfSpaces="54" />
            <InspirationCard ville="Berlin" numberOfSpaces="128"/>
            <InspirationCard ville="Chiang Mai" numberOfSpaces="128" />
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Bangkok" />
            <InspirationCard ville="Seoul" />
            <InspirationCard ville="Budapest" />
            <InspirationCard ville="Buenos Aires" />
          </div>
        </div>
        
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Barcelona" />
            <InspirationCard ville="Lisbon" />
            <InspirationCard ville="Faro" />
            <InspirationCard ville="Prague" />

          </div>
        </div>
      </div>
    );
  }
}
