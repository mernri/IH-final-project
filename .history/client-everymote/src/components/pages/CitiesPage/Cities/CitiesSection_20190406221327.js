import React, { Component } from "react";
import CityCard from "./CityCard.js";
import "./CitiesSection.css";

export default class CitiesSection extends Component {
  render() {
    return (
      <div>
        {/* THE WORKSPACE NAV (workspace, tribe, events) */}
        <section className="section continent-section">
          <div className="cities-container">
            <h1>Europe</h1>
            <CityCard
              ville="Paris"
              numberOfSpaces="52"
              picture="https://static.latribune.fr/509696/la-tour-eiffel-illuminee-de-nuit-le-14-juillet-2013-a-paris.jpg"
            />
            <CityCard
              ville="Faro"
              numberOfSpaces="25"
              picture="https://cdn.tuifly.be/img/static/im1000/08400/08407/08407A.JPG"
            />
            <CityCard
              ville="Barcelona"
              numberOfSpaces="35"
              picture="https://www.vehicle-rent.com/vrmedia/images/Barcelona_ShVYbG5.max-2000x1000.jpg"
            />
            <CityCard
              ville="Prague"
              numberOfSpaces="32"
              picture="https://farm1.staticflickr.com/749/32405905844_0a0254b3bf_b.jpg"
            />
            <CityCard
              ville="Lisbon"
              numberOfSpaces="48"
              picture="https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/lisbonintwodays-816x538.jpg"
            />
          </div>
        </section>
      </div>
    );
  }
}
