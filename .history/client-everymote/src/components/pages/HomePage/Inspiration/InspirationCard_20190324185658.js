import React from "react";
import axios from "axios";

class InspirationCard extends React.Component {
  state = {
    temps: "?"
  };

  componentDidMount() {
    this.updateWeather();
  }

  updateWeather = () => {
    const APIKEY = "8ff3f1fcb8cb5268185bf01b63825196";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.props.ville
    }&appid=${APIKEY}`;
    axios.get(url).then(
      function(response) {
        const json = response.data;

        console.log("mon json vaut", json);
        this.setState({
          temps: json.weather[0].icon
        });
      }.bind(this)
    );

    /* dans une fonction callback en ES5, il faut toujours utilisée .bind(this) pour dire à la fonction de quel this en parle.
      Si on veut éviter d'avoir à .bind(this), on utilise une fonction de callback fléchée (ES6) et du coup on peut envlever le .bind(this)*/
  };

  render() {
    const imgurl = `https://openweathermap.org/img/w/${this.state.temps}.png`;

    return (
      <div className="column is-8">
        <div class="tile is-8">
          <p> {this.props.ville} </p>
        </div>
      </div>
    );
  }
}
export default InspirationCard;
