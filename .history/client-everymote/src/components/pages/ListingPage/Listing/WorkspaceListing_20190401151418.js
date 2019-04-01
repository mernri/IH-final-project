import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
      <div>
        <body>
          <div class="outer-wrap">
            <div class="content">
              <main class="main-area">
                <section class="cards">
                  <article class="card">
                    <img
                      class="thumbnail"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/222641/the-sea.jpg"
                    />
                    <div class="card-content">
                      <h2>Headline goes here</h2>
                      <p>
                        Here's to alcohol, the cause of — and solution to — all
                        life's problems. How is education supposed to make me
                        feel smarter?
                      </p>{" "}
                      <p>
                        Besides, every time I learn something new, it pushes
                        some old stuff out of my brain. Remember when I took
                        that home winemaking course, and I forgot how to drive?
                      </p>
                    </div>
                  </article>
                </section>
              </main>
            </div>
          </div>
        </body>

        {/* 
        <div>
          {this.props.workspaces.map(workspace => {
            return (

              <section className="section">
                <div className="cards-container">
                  <div className="card" key={workspace._id}>
                    <Link to={`/workspace/${workspace._id}`}>
                      <ListingCard {...workspace} />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
 */}
      </div>
    );
  }
}

export default WorkspaceListing;
