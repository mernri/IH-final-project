const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace");

// POST route => to create a new tribe
tribeRoutes.post("/tribe/add", (req, res, next) => {
  // If user logged in, he can join a workspace
  Tribe.create({
    workspace: req.workspace._id,
    users: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = tribeRoutes;
