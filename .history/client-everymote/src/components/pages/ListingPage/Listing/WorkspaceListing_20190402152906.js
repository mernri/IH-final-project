import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.workspaces.map(workspace => {
            return (
              <section className="section">


              {/* <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-one-third">
              <article class="notification media has-background-white">
                <figure class="media-left">
                  <span class="icon">
                    <i class="has-text-warning fa fa-columns fa-lg"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Columns</h1>
                    <p class="is-size-5 subtitle">
                      The power of <strong>Flexbox</strong> in a simple interface
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-one-third">
              <article class="notification has-background-white media">
                <figure class="media-left">
                  <span class="icon has-text-info">
                    <i class="fa fa-lg fa-wpforms"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Form</h1>
                    <p class="is-size-5 subtitle">
                      The indispensable <strong>form controls</strong>, designed for maximum clarity
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-one-third">
              <article class="notification has-background-white media">
                <figure class="media-left">
                  <span class="icon has-text-danger">
                    <i class="fa fa-lg fa-cubes"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Components</h1>
                    <p class="is-size-5 subtitle">
                      Advanced multi-part components with lots of possibilities
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-one-third">
              <article class="notification has-background-white media">
                <figure class="media-left">
                  <span class="icon has-text-grey">
                    <i class="fa fa-lg fa-cogs"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Modifiers</h1>
                    <p class="is-size-5 subtitle">
                      An <strong>easy-to-read</strong> naming system designed for humans
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-one-third">
              <article class="notification has-background-white media">
                <figure class="media-left">
                  <span class="icon has-text-primary">
                    <i class="fa fa-lg fa-superpowers"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Layout</h1>
                    <p class="is-size-5 subtitle">
                      Design the <strong>structure</strong> of your webpage with these CSS classes
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="column is-one-third">
              <article class="notification has-background-white media">
                <figure class="media-left">
                  <span class="icon has-text-danger">
                    <i class="fa fa-lg fa-cube"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="title is-size-4">Elements</h1>
                    <p class="is-size-5 subtitle">
                      Essential interface elements that only require a <strong>single CSS class</strong>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section> */}







                <div className="cards-container">
                  <div key={workspace._id}>
                    <Link to={`/workspace/${workspace._id}`}>
                      <ListingCard {...workspace} />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
