import React, { Component } from "react";
import axios from "axios";


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

  addressToGeoCoordinates = (address) => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${address}`
    axios.get(url).then(
      function(response) {
        const json = response.data.results.locations;
        console.log("mon json vaut", json);
        // this.setState({
        //   mati: json.weather[0].icon,
        //   temperature: json.main.temp
        // });
      }.bind(this)
    )
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
