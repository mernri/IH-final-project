import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* FIRST SECTION : SEARCH */}
        <section className="hero is-info is-medium home-hero-background">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">Lorem ipsum</h1>
                <h2 className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Ex: Paris" />
                  </p>
                    <div className="button is-info" >Find</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECOND SECTION : INSPIRATION */}
        <Link to={"/workspaces"}>
          <p style={{color:"black"}}> Popular Workspaces </p>
        </Link>
        <Link to={"/workspaces"}>
          <p> Popular Cities </p>
        </Link>
        <Link to={"/workspaces"}>
          <p> Last Remote jobs</p>
        </Link>
  
        
      </div>
    );
  }
}
