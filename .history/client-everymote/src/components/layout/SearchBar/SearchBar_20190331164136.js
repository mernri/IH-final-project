import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: ""
    };
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Ex: Paris, Berlin..." />
          </div>
        </div>
      </div>
    );
  }
}
