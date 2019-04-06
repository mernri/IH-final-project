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
        <CityCard ville="Chiang Mai" numberOfSpaces="34" picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2I-IA9e6vY_Gk-B_pK-wo_wo3BoqfFhrW80tHaH-ySZQaKH0R"/>

        <CityCard ville="Miami" numberOfSpaces="48" picture="https://grist.files.wordpress.com/2017/08/miami.jpg?w=1024&h=576&crop=1"/>
        <CityCard ville="Marrakech" numberOfSpaces="12" picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"/>
        <CityCard ville="Santiago" numberOfSpaces="45" picture="https://www.onetravel.com/going-places/wp-content/uploads/2017/04/santiago-chile-810x486.jpg"/>
        <CityCard ville="Buenos Aires" numberOfSpaces="34" picture="https://cdn.images.express.co.uk/img/dynamic/136/590x/Buenos-Aires-1004326.jpg?r=1534433547310"/>

        <CityCard ville="Barcelona" numberOfSpaces="35" picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg" />
        <CityCard ville="Lisbon" numberOfSpaces="48" picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"/>
        <CityCard ville="Faro" numberOfSpaces="25" picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"/>
        <CityCard ville="Prague" numberOfSpaces="32" picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"/>
      </div>
    );
  }
}
