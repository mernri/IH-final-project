import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <section class="hero is-info is-medium">

          <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-6 is-offset-3">
                <h1 class="title">Lorem ipsum</h1>
                <h2 class="subtitle">
                  $this is the best software platform for running an internet
                  business. We handle billions of dollars every year for
                  forward-thinking businesses around the world.
                </h2>
                <div class="box">
                  <div class="field is-grouped">
                    <p class="control is-expanded">
                      <input
                        class="input"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </p>
                    <p class="control">
                      <a class="button is-info">Notify Me</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Link to={"/workspaces"}>
          <p> go to listing</p>
        </Link>
      </div>
    );
  }
}
