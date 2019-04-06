import React, { Component } from "react";
import CityCard from "./CityCard.js";
import "./CitiesSection.css"

export default class CitiesSection extends Component {
  render() {
    return (
      <div class="cities-container">
        <CityCard ville="Paris" numberOfSpaces="52" picture="https://static.latribune.fr/509696/la-tour-eiffel-illuminee-de-nuit-le-14-juillet-2013-a-paris.jpg"/>
        <CityCard ville="Bali" numberOfSpaces="54" picture="https://nomadcapitalist.com/wp-content/uploads/2017/11/Bali3.jpg"/>
        <CityCard ville="Papeete" numberOfSpaces="128" picture="http://www.almarseaviaggi.it/wp-content/uploads/2016/11/Le-Meridien-Bora-Bora-010-1280x640.jpg"/>
        <CityCard ville="Chiang Mai" numberOfSpaces="34" picture="https://static.latribune.fr/509696/la-tour-eiffel-illuminee-de-nuit-le-14-juillet-2013-a-paris.jpg"/>

        <CityCard ville="Miami" numberOfSpaces="48" picture="https://static.latribune.fr/509696/la-tour-eiffel-illuminee-de-nuit-le-14-juillet-2013-a-paris.jpg"/>
        <CityCard ville="Marrakech" numberOfSpaces="12" picture="https://static.latribune.fr/509696/la-tour-eiffel-illuminee-de-nuit-le-14-juillet-2013-a-paris.jpg"/>
        {/* <CityCard ville="Santiago" numberOfSpaces="45" />
        <CityCard ville="Buenos Aires" numberOfSpaces="34" />

        <CityCard ville="Barcelona" numberOfSpaces="35" />
        <CityCard ville="Lisbon" numberOfSpaces="48" />
        <CityCard ville="Faro" numberOfSpaces="25" />
        <CityCard ville="Prague" numberOfSpaces="32" /> */}
      </div>
    );
  }
}
