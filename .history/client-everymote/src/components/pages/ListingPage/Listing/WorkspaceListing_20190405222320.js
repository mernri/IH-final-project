import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
        <div class="columns is-desktop">

                <div class="column is-4" >
           
          <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
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
                  <p className="column"> €{this.props.monthlyPrice} /mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
