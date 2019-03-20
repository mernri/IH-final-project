import React from "react";

class ListingPage extends React.Component {
  render() {
    var style1 = {
        background: 'violet',
      };
      var style2 = {
        background: 'pink',
      };

    return (
      <div>
        <div className="columns">
          <div className="column is-three-fifths" style={style1}> hello I'm a listing</div>
          <div className="column is-two-fifths" style={style2}> Hello I'm a map</div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
