import React, { Component } from "react";
import CityCard from "./CityCard.js";

import "./CitiesSection.css";

export default class CitiesSection extends Component {
  render() {
    return (
      <div className="cities-container">
        {/* <h1>Europe</h1> */}
        <CityCard
          city="Paris"
          numberOfSpaces="52"
          picture="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
        />

        <CityCard
          city="Faro"
          numberOfSpaces="25"
          picture="https://cdn.tuifly.be/img/static/im1000/08400/08407/08407A.JPG"
        />

        <CityCard
          city="Berlin"
          numberOfSpaces="58"
          picture="https://www.st-christophers.co.uk/__data/assets/image/0006/522969/Insta-Berlin-lead.jpg"
        />

        <CityCard
          city="Barcelona"
          numberOfSpaces="35"
          picture="https://img.yellohvillage.fr/var/plain_site/storage/images/site_marchand/choisissez_votre_camping/par_ville/barcelone/1945310-1-fre-FR/barcelone.jpg"
        />
        <CityCard
          city="Prague"
          numberOfSpaces="32"
          picture="https://farm1.staticflickr.com/749/32405905844_0a0254b3bf_b.jpg"
        />
        <CityCard
          city="Lisbon"
          numberOfSpaces="48"
          picture="https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/lisbonintwodays-816x538.jpg"
        />

        {/* <h1>Asia</h1> */}
        <CityCard
          city="Bali"
          numberOfSpaces="54"
          picture="https://nomadcapitalist.com/wp-content/uploads/2017/11/Bali3.jpg"
        />

        <CityCard
          city="Chiang Mai"
          numberOfSpaces="34"
          picture="https://atom.mu/wp-content/uploads/2018/08/Chiang-Mai-Thailand.png"
        />

        {/* <h1>Latin America</h1> */}

        <CityCard
          city="Buenos Aires"
          numberOfSpaces="34"
          picture="https://cdn.images.express.co.uk/img/dynamic/136/590x/Buenos-Aires-1004326.jpg?r=1534433547310"
        />

        <CityCard
          city="Santiago"
          numberOfSpaces="45"
          picture="https://www.onetravel.com/going-places/wp-content/uploads/2017/04/santiago-chile-810x486.jpg"
        />

        {/* <h1>North America</h1> */}
        <CityCard
          city="Miami"
          numberOfSpaces="48"
          picture="https://grist.files.wordpress.com/2017/08/miami.jpg?w=1024&h=576&crop=1"
        />

        {/* <h1>Africa</h1> */}
        <CityCard
          city="Marrakech"
          numberOfSpaces="12"
          picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"
        />
        {/* <h1>Oceania</h1> */}

        <CityCard
          city="Papeete"
          numberOfSpaces="128"
          picture="https://www.opodo.fr/blog/wp-content/uploads/sites/16/2012/10/bora-bora-gengish-skan.jpg"
        />

        {/* <h1>Antartica</h1> */}
      </div>
    );
  }
}
