const express = require("express");
const mongoose = require("mongoose");
const tribeRoutes = express.Router();

const Tribe = require("../models/Tribe");
const User = require("../models/User");
const Workspace = require("../models/Workspace");

// POST route => to create a new tribe.
tribeRoutes.post("/tribe/add", (req, res, next) => {
  const workspace = req.body.workspace;

  // Check if the workspace exist
  if (!workspace) {
    res.status(401).json({
      message: "No workspace, no tribe !"
    });
    return;
  }
  Tribe.create({
    workspace: workspace._id,
    users: [],
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to retrieve a specific tribe
router.get("/tribe/:id", (req, res, next) => {
  Task.findById(req.params.taskId)
    .then(theTask => {
      res.json(theTask);
    })
    .catch(err => {
      res.json(err);
    });
});





module.exports = tribeRoutes;
