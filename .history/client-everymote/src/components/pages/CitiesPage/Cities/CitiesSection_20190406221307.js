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

        <h1>Asia</h1>
        <CityCard
          ville="Bali"
          numberOfSpaces="54"
          picture="https://nomadcapitalist.com/wp-content/uploads/2017/11/Bali3.jpg"
        />

        <CityCard
          ville="Chiang Mai"
          numberOfSpaces="34"
          picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2I-IA9e6vY_Gk-B_pK-wo_wo3BoqfFhrW80tHaH-ySZQaKH0R"
        />

        <h1>Latin America</h1>

        <CityCard
          ville="Buenos Aires"
          numberOfSpaces="34"
          picture="https://cdn.images.express.co.uk/img/dynamic/136/590x/Buenos-Aires-1004326.jpg?r=1534433547310"
        />

        <CityCard
          ville="Santiago"
          numberOfSpaces="45"
          picture="https://www.onetravel.com/going-places/wp-content/uploads/2017/04/santiago-chile-810x486.jpg"
        />

        <h1>North America</h1>
        <CityCard
          ville="Miami"
          numberOfSpaces="48"
          picture="https://grist.files.wordpress.com/2017/08/miami.jpg?w=1024&h=576&crop=1"
        />

        <h1>Africa</h1>
        <CityCard
          ville="Marrakech"
          numberOfSpaces="12"
          picture="https://lavishhotelsandresorts.com/wp-content/uploads/2018/01/Marrakech-Souks.jpg"
        />
        <h1>Oceania</h1>

        <CityCard
          ville="Papeete"
          numberOfSpaces="128"
          picture="http://www.almarseaviaggi.it/wp-content/uploads/2016/11/Le-Meridien-Bora-Bora-010-1280x640.jpg"
        />

        <h1>Antartica</h1>
      </div>
    );
  }
}
