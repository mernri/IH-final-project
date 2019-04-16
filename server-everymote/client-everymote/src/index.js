import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { register as registerServiceWorker } from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop/ScrollToTop.js";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
