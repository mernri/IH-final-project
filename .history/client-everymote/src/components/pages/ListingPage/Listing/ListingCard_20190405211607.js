import React from "react";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="https://images.unsplash.com/photo-1533658925625-2f94d23fc425?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=894c97adfd68510170db9ae89704c92e&auto=format&fit=crop&w=800&q=60" />
        <h3>Card title</h3>
        <p>Card description</p>
      </div>
    );
  }
}

export default ListingCard;
