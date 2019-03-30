import React, { Component } from "react";
import Geocode from "react-geocode";

export default class WorkspaceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  componentDidMount() {
    this.addressToGeoCoordinates(
      this.state.address,
      this.state.zipcode,
      this.state.city
    );
    console.log(this.addressToGeoCoordinates(this.props.address));
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
          temps: json.weather[0].icon,
          temperature: json.main.temp
        });
      }.bind(this)
    );

  addressToGeoCoordinates = () => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";

    Geocode.fromAddress("Eiffel Tower").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          latitude: lat,
          longitude: lng
        });
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <div>
        {/* latitude : {this.state.latitude}
        longitude : {this.state.longitude} */}
      </div>
    );
  }
}
