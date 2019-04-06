// routes/workspacesRoutes.js
const express = require("express");
const cityRoutes = express.Router();

const City = require("../models/City");

// POST route => to add a new city
cityRoutes.post("/cities/add", (req, res, next) => {
  City.create({
    cityName: req.body.cityName,
    continent: req.body.continent,
    picture: req.body.picture
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = cityRoutes;
