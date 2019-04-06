import React, { Component } from "react";
import CityCard from "./CityCard.js";

export default class CitiesSection extends Component {
  render() {
    return (
      <div>
        <CityCard ville="Paris" numberOfSpaces="52" />
        <CityCard ville="Bali" numberOfSpaces="54" />
        <CityCard ville="Papeete" numberOfSpaces="128" />
        <CityCard ville="Chiang Mai" numberOfSpaces="34" />

        <CityCard ville="Miami" numberOfSpaces="48" />
        <CityCard ville="Marrakech" numberOfSpaces="12" />
        <CityCard ville="Santiago" numberOfSpaces="45" />
        <CityCard ville="Buenos Aires" numberOfSpaces="34" />

        <CityCard ville="Barcelona" numberOfSpaces="35" />
        <CityCard ville="Lisbon" numberOfSpaces="48" />
        <CityCard ville="Faro" numberOfSpaces="25" />
        <CityCard ville="Prague" numberOfSpaces="32" />
      </div>
    );
  }
}
