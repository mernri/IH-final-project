import React from "react";
import axios from "axios";
import "./CityCard.css";
import { Link } from "react-router-dom";


class CityCard extends React.Component {
  state = {
    temps: "?",
    temperature: "?"
  };

  componentDidMount() {
    this.updateWeather();
  }

  updateWeather = () => {
    const APIKEY = "8ff3f1fcb8cb5268185bf01b63825196";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.props.city
    }&appid=${APIKEY}`;
    axios.get(url).then(
      function(response) {
        const json = response.data;

        this.setState({
          temps: json.weather[0].icon,
          temperature: json.main.temp
        });
      }.bind(this)
    );

    /* dans une fonction callback en ES5, il faut toujours utilisée .bind(this) pour dire à la fonction de quel this en parle.
      Si on veut éviter d'avoir à .bind(this), on utilise une fonction de callback fléchée (ES6) et du coup on peut envlever le .bind(this)*/
  };

  render() {
    const imgurl = `https://openweathermap.org/img/w/${this.state.temps}.png`;
    return (
      <div className="card" style={{height:"100%"}}>
        {/* <div className="card is-shady" > */}
          <div className="card-image" style={{height:"80%"}}>
            <figure className="image is-5by3s">
              <img src={this.props.pictures[0]} alt="Placeholder" />
            </figure>
          </div>

          <div className="content">
            <div className="media">
              <div className="media-left" />
              <div className="media-content">
                <div className="columns">
                  <p className="subtitle column is-two-thirds">
                    <strong> {this.props.name} </strong>
                  </p>
                  <p className="column card-price"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
          
        {/* </div> */}
      </div>
    );
  }
}
export default CityCard;


      {/* <div className="card">
        <Link to={`/workspaces/${this.props.city}`}>
          <img className="cityPicture" src={this.props.picture} alt="" />
          <div className="is-overlay city-card">
            <h3>{this.props.city}</h3>
            <img src={imgurl} alt="" />
            <p>{Math.trunc(this.state.temperature - 273.15)}°C</p>
            <p>{this.props.numberOfSpaces} Tribes</p>
          </div>
        </Link>
      </div> */}