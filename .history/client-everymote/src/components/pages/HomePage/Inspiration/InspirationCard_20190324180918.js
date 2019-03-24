import React from "react";

class InspirationCard extends React.Component {
  state = {
    temps: "??"
  };

  updateWeather = () => {
    const APIKEY = "839d3f2bd84d3ee103355dbb89292f22";
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
      <div>
        <p>
          A <strong>{this.props.ville}</strong> actuellement, il fait :{" "}
          <img src={imgurl} />
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.updateWeather();
  }
}
export default InspirationCard;
