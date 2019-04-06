// routes/workspacesRoutes.js
const express = require("express");
const mongoose = require("mongoose");
const cityRoutes = express.Router();

const City = require("../models/City");

// POST route => to add a new workspace
cityRoutes.post("/cities/add", (req, res, next) => {
    // If user logged in, he can add a workspace
    City.create({
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      description: req.body.description,
      city: req.body.city,
      phone: req.body.phone,
      pictures: req.body.pictures,
      monthlyPrice: req.body.monthlyPrice,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = cityRoutes;
