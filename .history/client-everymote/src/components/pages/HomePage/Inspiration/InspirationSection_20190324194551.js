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
            <InspirationCard ville="Bali"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="54" />
            <InspirationCard ville="Berlin"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="128"/>
            <InspirationCard ville="Chiang Mai"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="34" />
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Bangkok "               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="48"/>
            <InspirationCard ville="Seoul"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="102"/>
            <InspirationCard ville="Budapest"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="45"/>
            <InspirationCard ville="Buenos Aires"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="34"/>
          </div>
        </div>
        
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <InspirationCard ville="Barcelona"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="35"/>
            <InspirationCard ville="Lisbon"                image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
numberOfSpaces="46"/>
            <InspirationCard ville="Faro"                image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
numberOfSpaces="25"/>
            <InspirationCard ville="Prague"               image="https://cdn.sidlee.com/-/media/sidlee/cities/paris/sidlee-cities-pre-par-01_798x895.jpg?mw=1420&hash=0DA87CBA5A6626B67D73CB08579BDFD6E46CB2E6"
 numberOfSpaces="32"/>

          </div>
        </div>
      </div>
    );
  }
}
